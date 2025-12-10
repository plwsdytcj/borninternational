#!/usr/bin/env node
// Minimal .docx -> news page converter without external deps
// Usage: node scripts/convert-docx.js <input.docx> <slug> [title]

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function decodeXmlEntities(str) {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function main() {
  const [,, inputPath, slugArg, titleArg] = process.argv
  if (!inputPath || !slugArg) {
    console.error('Usage: node scripts/convert-docx.js <input.docx> <slug> [title]')
    process.exit(1)
  }

  const repoRoot = process.cwd()
  const slug = slugArg
  const title = titleArg || path.basename(inputPath, path.extname(inputPath))

  const tmpDir = path.join('scripts', 'tmp', slug)
  ensureDir(tmpDir)
  const unzipCmd = `unzip -o "${inputPath}" -d "${tmpDir}" > /dev/null`
  try {
    execSync(unzipCmd)
  } catch (e) {
    console.error('Failed to unzip DOCX:', e.message)
    process.exit(2)
  }

  const docXmlPath = path.join(tmpDir, 'word', 'document.xml')
  const relsPath = path.join(tmpDir, 'word', '_rels', 'document.xml.rels')
  if (!fs.existsSync(docXmlPath)) {
    console.error('document.xml not found in DOCX')
    process.exit(3)
  }

  const docXml = fs.readFileSync(docXmlPath, 'utf-8')
  const relsXml = fs.existsSync(relsPath) ? fs.readFileSync(relsPath, 'utf-8') : ''

  // Build rId -> media target map
  const relMap = {}
  if (relsXml) {
    const relRe = /<Relationship[^>]*Id="(rId\d+)"[^>]*Target="([^"]+)"/g
    let m
    while ((m = relRe.exec(relsXml))) {
      relMap[m[1]] = m[2]
    }
  }

  // Prepare output image dir
  const publicDir = path.join('public', 'news', slug)
  ensureDir(publicDir)
  const mediaDir = path.join(tmpDir, 'word', 'media')
  let heroImage = ''
  if (fs.existsSync(mediaDir)) {
    const files = fs.readdirSync(mediaDir)
    files.forEach((f) => {
      const src = path.join(mediaDir, f)
      const dst = path.join(publicDir, f)
      fs.copyFileSync(src, dst)
      if (!heroImage && /\.(png|jpe?g|gif|webp)$/i.test(f)) {
        heroImage = `/news/${slug}/${f}`
      }
    })
  }

  // Parse document paragraphs; very lightweight
  const paraRe = /<w:p[\s\S]*?<\/w:p>/g
  const textRe = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g
  const brRe = /<w:br\b[^>]*\/>/g
  const embedRe = /r:embed="(rId\d+)"/g
  const parts = []

  let m
  while ((m = paraRe.exec(docXml))) {
    const block = m[0]
    let text = ''
    let tm
    while ((tm = textRe.exec(block))) {
      text += decodeXmlEntities(tm[1])
    }
    // Convert explicit line breaks
    text = text.replace(brRe, '<br/>')

    // Images in this paragraph
    const imgs = []
    let em
    while ((em = embedRe.exec(block))) {
      const rid = em[1]
      const target = relMap[rid] || ''
      if (target && target.startsWith('media/')) {
        const file = target.replace('media/', '')
        imgs.push(`<figure class="my-4"><img src="/news/${slug}/${file}" class="mx-auto" /></figure>`)
      }
    }

    if (text.trim().length || imgs.length) {
      if (text.trim().length) {
        parts.push(`<p>${text}</p>`) 
      }
      parts.push(...imgs)
    }
  }

  const html = parts.join('\n') || '<p></p>'

  // Create Next.js page
  const pageDir = path.join('app', 'news', slug)
  ensureDir(pageDir)
  const pageTsx = `"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function DocxNewsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gray-100">
        <div className="flex items-center">
          <Image src="/logo/born_logo_white.png" alt="BORN International logo" width={120} height={48} className="h-8 sm:h-12 w-auto" />
        </div>
        <div className="flex items-center">
          <button onClick={() => router.push('/news')} className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </button>
        </div>
      </header>

      {${JSON.stringify(heroImage)} && (
        <section className="relative">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <Image src=${JSON.stringify(heroImage)} alt=${JSON.stringify(title)} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </section>
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light text-slate-900 mb-6">${title}</h1>
        <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(html)} }} />
      </main>
    </div>
  )
}
`
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageTsx)

  console.log(`Created news page at app/news/${slug}/page.tsx`)
}

main()

