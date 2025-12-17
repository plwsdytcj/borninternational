import fs from 'fs'
import path from 'path'
const unzipDir = path.join(process.cwd(), '.cache/business-new/unzipped')
const relsPath = path.join(unzipDir, 'word/_rels/document.xml.rels')
const docPath = path.join(unzipDir, 'word/document.xml')
const pubMedia = '/business-new/media/'
const outJson = path.join(process.cwd(), 'public/business-new/images.json')
function readSafe(p){try{return fs.readFileSync(p,'utf8')}catch{return ''}}
const relsXml = readSafe(relsPath)
const docXml = readSafe(docPath)
const rIdToTarget = {}
const relRe = /<Relationship\b[^>]*\bId="([^"]+)"[^>]*\bTarget="([^"]+)"[^>]*>/g
for (const m of relsXml.matchAll(relRe)) {
  const full = m[0]
  const id = m[1]
  const target = m[2]
  if (/Type="[^"]*image/.test(full)) rIdToTarget[id] = target
}
const items = []
const drawingRe = /<w:drawing[\s\S]*?<\/w:drawing>/g
for (const d of docXml.matchAll(drawingRe)) {
  const block = d[0]
  const docPrMatch = block.match(/<wp:docPr\b[^>]*>/)
  let caption = ''
  let name = ''
  if (docPrMatch) {
    const tag = docPrMatch[0]
    const descrM = tag.match(/\bdescr="([^"]*)"/)
    const nameM = tag.match(/\bname="([^"]*)"/)
    if (descrM) caption = descrM[1]
    if (nameM) name = nameM[1]
  }
  const blipM = block.match(/<a:blip\b[^>]*r:embed="([^"]+)"/)
  if (!blipM) continue
  const rId = blipM[1]
  const target = rIdToTarget[rId]
  if (!target) continue
  const filename = target.replace(/^.*\//,'')
  items.push({ src: pubMedia + filename, caption, name, rId })
}
fs.writeFileSync(outJson, JSON.stringify(items, null, 2),'utf8')
console.log(`images: ${items.length}`)
