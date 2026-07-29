"use client"

import { Bookmark, Calendar, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type RelatedArticle = {
  id: string | number
  title: string
  excerpt: string
  image: string
  date: string
}

type NewsArticleLayoutProps = {
  article: {
    title: string
    subtitle?: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
    imagePosition?: string
    content: string
    tags: string[]
  }
  relatedArticles: RelatedArticle[]
  getArticlePath: (id: string | number) => string
}

export function NewsArticleLayout({
  article,
  relatedArticles,
  getArticlePath,
}: NewsArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader backHref="/" backLabel="Back to Home" />

      <section className="relative">
        <div className="relative h-[22rem] overflow-hidden sm:h-[28rem] md:h-[32rem]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            style={{ objectPosition: article.imagePosition }}
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-6 sm:pb-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-white/85 sm:mb-4 sm:gap-4">
              <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white sm:px-3 sm:text-sm">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="heading-serif mb-3 max-w-4xl text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            {article.subtitle ? (
              <p className="mb-3 max-w-3xl text-sm text-white/90 sm:mb-4 sm:text-base md:text-lg lg:text-xl">
                {article.subtitle}
              </p>
            ) : null}
            <p className="text-xs text-white/80 sm:text-sm">By {article.author}</p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
            <div className="min-w-0">
              <article className="prose prose-sm prose-slate max-w-none sm:prose-base lg:prose-lg">
                <div
                  className="text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>

              <div className="mt-10 border-t border-slate-200 pt-8 sm:mt-12">
                <h3 className="mb-4 text-lg font-medium text-slate-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="justify-start">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <Bookmark className="h-4 w-4" />
                      <span>Bookmark</span>
                    </Button>
                  </div>
                  <div className="text-sm text-slate-500">Published on {article.date}</div>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
                <h3 className="mb-4 text-lg font-medium text-slate-900">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.length > 0 ? (
                    relatedArticles.map((relatedArticle) => (
                      <Link key={relatedArticle.id} href={getArticlePath(relatedArticle.id)}>
                        <Card className="border-0 shadow-sm transition-shadow hover:shadow-md">
                          <CardContent className="p-0">
                            <div className="relative h-24">
                              <Image
                                src={relatedArticle.image}
                                alt={relatedArticle.title}
                                fill
                                className="rounded-t-lg object-cover"
                              />
                            </div>
                            <div className="p-3">
                              <p className="mb-1 text-xs text-slate-500">{relatedArticle.date}</p>
                              <h4 className="mb-1 line-clamp-2 text-sm font-medium text-slate-900">
                                {relatedArticle.title}
                              </h4>
                              <p className="line-clamp-2 text-xs text-slate-600">{relatedArticle.excerpt}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <p className="py-4 text-center text-sm text-slate-500">No related articles found</p>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-medium text-slate-900">Stay Updated</h3>
                <p className="mb-4 text-sm text-slate-600">
                  Contact our team for the latest news and investment insights.
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700"><Link href="/contact">Contact our team</Link></Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
