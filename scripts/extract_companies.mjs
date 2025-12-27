import fs from 'fs'
import path from 'path'

const root = process.cwd()
const unzipDir = path.join(root, 'scripts/tmp/docx')
const relsPath = path.join(unzipDir, 'word/_rels/document.xml.rels')
const docPath = path.join(unzipDir, 'word/document.xml')

function loadRels(p) {
  const xml = fs.readFileSync(p, 'utf8')
  const rels = {}
  const relRe = /<Relationship[^>]*Id="([^"]+)"[^>]*Type="[^"]*\/image"[^>]*Target="([^"]+)"/g
  let m
  while ((m = relRe.exec(xml))) {
    rels[m[1]] = m[2]
  }
  return rels
}

function stripXmlEntities(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function extract(docXml, rels) {
  const items = []
  // split on drawings to keep order; include the drawing marker in result
  const parts = docXml.split(/(<w:drawing>[\s\S]*?<a:blip[^>]*r:embed="([^"]+)"[\s\S]*?<\/w:drawing>)/)
  for (let i = 0; i < parts.length; i++) {
    const block = parts[i]
    const embedMatch = /<w:drawing>[\s\S]*?<a:blip[^>]*r:embed="([^"]+)"[\s\S]*?<\/w:drawing>/.exec(block)
    if (embedMatch) {
      const rId = embedMatch[1]
      const next = parts[i + 1] || ''
      // Find descr from docPr or cNvPr around this drawing
      const descrMatch = /<wp:docPr[^>]*descr="([^"]+)"/.exec(block) || /<pic:cNvPr[^>]*descr="([^"]+)"/.exec(block)
      const descr = descrMatch ? stripXmlEntities(descrMatch[1]) : ''
      // Capture following text until next drawing
      let textBlock = next
      // The split kept just the drawing and the next chunk; we need to accumulate all following chunks until the next drawing marker
      // Accumulate until we encounter another drawing in subsequent parts
      let j = i + 1
      let following = ''
      while (j + 1 < parts.length && !parts[j + 1].startsWith('<w:drawing')) {
        following += parts[j + 1]
        j += 2
      }
      textBlock = (next || '') + following
      // Extract all <w:t> text nodes
      const texts = []
      const tRe = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g
      let tm
      while ((tm = tRe.exec(textBlock))) {
        texts.push(stripXmlEntities(tm[1]))
      }
      const textJoined = texts.join('').replace(/\s+/g, ' ').trim()
      // First non-empty <w:t> as title
      const title = (texts.find(t => t && t.trim()) || '').trim()
      const target = rels[rId] || ''
      items.push({ rId, target, descr, title, text: textJoined })
    }
  }
  return items
}

function slugify(input, fallback) {
  if (!input) return fallback
  // transliterate basic ASCII; drop non-latin; fallback if too short
  const s = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
  return s || fallback
}

function main() {
  const rels = loadRels(relsPath)
  const docXml = fs.readFileSync(docPath, 'utf8')
  const items = extract(docXml, rels)
  const outDir = path.join(root, 'public/company-logos')
  const pages = []
  items.forEach((it, idx) => {
    const mediaSrc = path.join(unzipDir, 'word', it.target)
    const ext = path.extname(it.target) || '.png'
    const baseName = slugify(it.title, `company-${idx + 1}`)
    const logoName = `${baseName}-logo${ext}`
    const dest = path.join(outDir, logoName)
    try {
      fs.copyFileSync(mediaSrc, dest)
    } catch (e) {
      // ignore copy errors
    }
    pages.push({
      slug: baseName,
      nameEn: it.title || `Company ${idx + 1}`,
      nameCn: it.descr || it.title || `公司${idx + 1}`,
      logo: `/company-logos/${logoName}`,
      description: it.text,
    })
  })
  const outPath = path.join(root, 'scripts/tmp/companies.json')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(pages, null, 2), 'utf8')
  console.log(`Extracted ${pages.length} companies -> ${outPath}`)
}

main()

