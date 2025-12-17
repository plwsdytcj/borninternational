import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'

const base = path.join(process.cwd(), '.cache/business-new/unzipped')
const docPath = path.join(base, 'word/document.xml')
const relsPath = path.join(base, 'word/_rels/document.xml.rels')
const outPath = path.join(process.cwd(), 'public/business-new/content.json')

function read(file){ return fs.readFileSync(file, 'utf8') }
const docXml = read(docPath)
const relsXml = read(relsPath)

// Build rId -> image filename mapping
const $rels = cheerio.load(relsXml, { xmlMode: true })
const rIdToTarget = {}
$rels('Relationship').each((_, el) => {
  const $el = $rels(el)
  const type = $el.attr('Type') || ''
  if (type.includes('image')) {
    const id = $el.attr('Id')
    const target = $el.attr('Target') || ''
    if (id && target) rIdToTarget[id] = target.replace(/^.*\//, '')
  }
})

const $ = cheerio.load(docXml, { xmlMode: true })
const blocks = []

function getParaStyle($p) {
  const style = $p.find('w\\:pPr > w\\:pStyle').attr('w:val')
  return style || ''
}
function getParaText($p) {
  // Preserve line breaks within paragraph where w:br exists
  const parts = []
  $p.find('w\\:r, w\\:br').each((_, node) => {
    const $n = $(node)
    if ($n.is('w\\:br')) {
      parts.push('\n')
    } else {
      const t = $n.find('w\\:t').text()
      if (t) parts.push(t)
    }
  })
  const text = parts.join('').replace(/\s+/g, ' ').trim()
  return text
}

$('w\\:body').children().each((_, el) => {
  const $el = $(el)
  if ($el.is('w\\:p')) {
    const $p = $el
    const hasDrawing = $p.find('w\\:drawing').length > 0
    const text = getParaText($p)
    const style = getParaStyle($p)
    if (!hasDrawing) {
      if (text) blocks.push({ type: 'p', style, text })
    } else {
      // one or more drawings inside this paragraph
      $p.find('w\\:drawing').each((__, d) => {
        const $d = $(d)
        const docPr = $d.find('wp\\:docPr').first()
        const name = docPr.attr('name') || ''
        const caption = docPr.attr('descr') || ''
        const rId = $d.find('a\\:blip').attr('r:embed') || ''
        const filename = rIdToTarget[rId]
        if (filename) {
          blocks.push({
            type: 'img',
            src: `/business-new/media/${filename}`,
            name,
            caption,
          })
        }
      })
      // If the paragraph also has text outside drawings, include it
      if (text) blocks.push({ type: 'p', style, text })
    }
  } else if ($el.is('w\\:tbl')) {
    // Optional: extract tables as plain paragraphs (flatten rows)
    // For now, insert a divider indicating a table exists to preserve order
    blocks.push({ type: 'divider' })
  }
})

fs.writeFileSync(outPath, JSON.stringify(blocks, null, 2), 'utf8')
console.log(`Wrote ${blocks.length} blocks to ${outPath}`)
