import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { ViSecondaryShell } from "@/components/vi-secondary-shell"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata(
  "/case-studies/geospatial-russia-market-entry",
)

const metrics = [
  ["214家", "俄罗斯潜在客户管道"],
  ["30+场", "高层级技术演示"],
  ["5家", "进入核心谈判的客户"],
] as const

export default function GeospatialRussiaMarketEntryCasePage() {
  return (
    <ViSecondaryShell
      sidebarKicker="Russia market-entry case"
      pageTitle="地理空间科技企业俄罗斯市场开发"
      pageSubtitle="从市场筛选、客户开发到试点订单的本地化执行"
      heroImageSrc="/business-new/media/image2.jpeg"
      heroAlt="中国地理空间科技企业俄罗斯市场开发项目"
      heroPriority
    >
      <article lang="zh-CN" className="bg-slate-100 text-slate-900">
        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Market entry case study
          </p>
          <h1 className="heading-serif max-w-4xl text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            中国地理空间科技企业如何在俄罗斯建立可转化的客户管道
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Born International协助一家中国地理空间科技企业验证俄罗斯市场需求，筛选重点行业客户，组织技术演示，并把潜在客户推进至核心商务谈判和试点订单阶段。
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={value} className="border border-slate-300 bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-slate-950">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-300 bg-white">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Challenge</p>
              <h2 className="heading-serif mt-3 text-3xl font-light">从“市场存在”走向“客户愿意谈”</h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-700">
              <p>
                俄罗斯地理空间市场具有行业集中、采购链条长、技术验证要求高等特点。仅依靠线上获客或通用代理商，难以判断哪些客户具备真实需求、预算和采购决策权。
              </p>
              <p>
                项目需要同时完成市场地图梳理、重点客户筛选、技术价值本地化表达及持续跟进，并在合规和跨境沟通条件下推动试点。
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="heading-serif text-3xl font-light">Born International的执行路径</h2>
              <ol className="mt-7 space-y-5 text-slate-700">
                <li><strong>01 市场与客户分层：</strong>梳理应用行业、采购场景和重点企业，建立可跟进的俄罗斯潜在客户数据库。</li>
                <li><strong>02 本地商务触达：</strong>围绕Rusgeocom、EFT Group、Technokauf等行业参与者开展定向沟通。</li>
                <li><strong>03 技术演示：</strong>组织30余场高层级技术演示，将产品能力转化为客户可以评估的应用价值。</li>
                <li><strong>04 谈判与试点：</strong>持续协调技术、商务与本地合作资源，推动5家客户进入核心谈判并取得试点订单。</li>
              </ol>
            </div>
            <div className="relative min-h-80 overflow-hidden bg-slate-200">
              <Image
                src="/business-new/media/image2.jpeg"
                alt="俄罗斯市场客户开发与技术演示"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-14 text-white sm:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Result</p>
            <h2 className="heading-serif mt-3 max-w-3xl text-3xl font-light sm:text-4xl">
              以可量化的客户管道验证俄罗斯市场，而不是用一次性考察代替落地
            </h2>
            <p className="mt-6 max-w-3xl leading-7 text-slate-300">
              项目最终建立214家潜在客户管道，完成30余场技术演示，推动5家客户进入核心谈判，并启动试点订单和长期合作讨论。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                咨询俄罗斯市场进入
              </Link>
              <Link href="/business-new" className="border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400">
                查看完整服务体系
              </Link>
            </div>
          </div>
        </section>
      </article>
      <SiteFooter />
    </ViSecondaryShell>
  )
}
