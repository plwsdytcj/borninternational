import type { Metadata } from "next"

export const SITE_URL = "https://www.bornpe.com"
export const SITE_NAME = "Born International"

type SeoEntry = {
  title: string
  description: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  noIndex?: boolean
}

export const seoEntries: Record<string, SeoEntry> = {
  "/business-new": {
    title: "中国企业进入俄罗斯市场一站式服务｜Born International",
    description:
      "为中国企业提供俄罗斯市场可行性研究、政商与客户对接、公司注册、银行开户、EAC认证、团队招聘、渠道开发及本地化运营服务。",
  },
  "/portfolio": {
    title: "中国硬科技投资组合与基金团队｜Born International",
    description:
      "了解Born International在量子计算、人工智能、机器人、工业互联网、区块链与低碳科技领域的投资组合、基金团队和长期价值创造能力。",
  },
  "/global": {
    title: "中国企业全球化与俄罗斯市场落地网络｜Born International",
    description:
      "Born International通过俄罗斯、独联体、欧洲及亚洲合作网络，为中国科技企业提供市场进入、产业对接、渠道建设和本地化运营支持。",
  },
  "/mother-fund": {
    title: "Born融创母基金与联合投资平台｜Born International",
    description:
      "Born融创母基金连接多阶段、多行业子基金，为中国硬科技企业提供资本、产业资源、客户渠道及后续融资支持。",
  },
  "/ai-company": {
    title: "企业AI系统与金融机构智能化解决方案｜Born International",
    description:
      "Born International开发面向企业和金融机构的AI系统，帮助客户提升运营效率、降低成本、强化风险管理并实现可扩展的智能化管理。",
  },
  "/contact": {
    title: "联系Born International｜俄罗斯与独联体市场进入咨询",
    description:
      "联系Born International香港、上海、成都、莫斯科和圣彼得堡团队，咨询中国科技投资、俄罗斯及独联体市场进入和本地化运营。",
  },
  "/case-studies/geospatial-russia-market-entry": {
    title: "某地理空间科技企业俄罗斯市场开发案例｜Born International",
    description:
      "Born International帮助中国地理空间科技企业在俄罗斯建立214家潜在客户管道，完成30余场技术演示并推动5家客户进入核心谈判。",
  },
  "/news": {
    title: "俄罗斯市场进入与跨境科技合作新闻｜Born International",
    description:
      "查看Born International在中国科技投资、俄罗斯市场进入、人工智能、医疗科技及中俄产业合作方面的最新新闻、项目与案例。",
  },
  "/portfolio/boson-quantum": {
    title: "玻色量子：光量子计算投资项目｜Born International",
    description:
      "了解Born International投资组合企业玻色量子的相干光量子计算技术、千量子比特工程验证及量子人工智能商业化进展。",
  },
  "/portfolio/bubi-blockchain": {
    title: "布比区块链：产业区块链基础设施项目｜Born International",
    description:
      "了解Born International投资组合企业布比区块链在数字资产、供应链金融及国家级区块链基础设施领域的技术与应用。",
  },
  "/portfolio/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd": {
    title: "中康大成：数字物联网与智慧零售项目｜Born International",
    description:
      "了解中康大成以硬件、软件和运营服务推动智慧零售、智能物流及数字物联网场景规模化落地的项目进展。",
  },
  "/portfolio/china-carbon-zero-and-technology-group": {
    title: "中国零碳科技集团：碳资产管理项目｜Born International",
    description:
      "了解中国零碳科技集团在碳资产开发、碳交易、碳管理咨询、碳金融及数字化碳数据平台方面的业务能力。",
  },
  "/portfolio/kunwei-technology": {
    title: "坤维科技：六维力传感器投资项目｜Born International",
    description:
      "了解Born International投资组合企业坤维科技在六维力传感器、机器人力控及智能制造领域的产品和市场优势。",
  },
  "/portfolio/shanghai-droid-robotics-co-ltd-droidup": {
    title: "卓益得机器人DroidUp：通用人形机器人项目｜Born International",
    description:
      "了解卓益得机器人在通用人形机器人、仿生运动控制、表情机器人及具身智能解决方案方面的技术和产品进展。",
  },
  "/portfolio/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd": {
    title: "华制智能：工业互联网与智能制造项目｜Born International",
    description:
      "了解华制智能以工业互联网、物联网、大数据和AI技术为制造企业提供设备互联、运营管理和数字化升级解决方案。",
  },
  "/portfolio/token-cloud-shanghai-technology-co-ltd": {
    title: "令牌云：可信数字身份认证项目｜Born International",
    description:
      "了解令牌云在身份证与护照芯片核验、可信设备安全和企业数字身份认证领域的技术、资质与行业应用。",
  },
  "/news/ranepa-emba-china-study-tour-2026": {
    title: "Born International组织RANEPA EMBA中国研学｜Born International",
    description:
      "18位俄罗斯企业家访问上海、杭州和乌镇，考察金融、先进制造、机器人与文化创新，推动中俄企业交流合作。",
    type: "article",
    publishedTime: "2026-07-21",
  },
  "/news/apec-healthcare-digitalization-forum-2026": {
    title: "APEC医疗数字化论坛与跨境商业化机会｜Born International",
    description:
      "李文成博士在APEC医疗数字化论坛分享中国数字医疗技术进入俄罗斯、中亚及新兴APEC市场的商业化路径。",
    type: "article",
    publishedTime: "2026-07-18",
  },
  "/news/spief-2026-strategic-cooperation": {
    title: "SPIEF 2026三方战略合作签约｜Born International",
    description:
      "Born International在圣彼得堡国际经济论坛与俄罗斯实验医学研究所及上合组织+人工智能中心签署战略合作协议。",
    type: "article",
    publishedTime: "2026-06-19",
  },
  "/news/muhammad-yunus-meeting-2026": {
    title: "李文成博士会见诺贝尔和平奖得主穆罕默德·尤努斯｜Born International",
    description:
      "双方在达卡就医疗技术本地化、生物医药合作和普惠医疗展开交流，并探讨中国技术的跨境落地模式。",
    type: "article",
    publishedTime: "2026-05-19",
  },
  "/news/hong-kong-health-week-2026": {
    title: "香港国际医疗健康周与中俄医疗合作｜Born International",
    description:
      "Born International考察医疗机器人、AI辅助诊断和跨境医疗合作机会，为中国医疗科技进入俄罗斯及独联体市场寻找路径。",
    type: "article",
    publishedTime: "2026-05-11",
  },
  "/news/moscow-startup-village-2025": {
    title: "中国科技代表团参加莫斯科Startup Village 2025｜Born International",
    description:
      "Born International带领中国科技企业参加莫斯科Startup Village，连接俄罗斯创新机构、投资者和产业合作伙伴。",
    type: "article",
    publishedTime: "2025-05-29",
  },
  "/news/brics-municipal-forum-2025": {
    title: "BRICS国际市政论坛中俄合作签约｜Born International",
    description:
      "Born International代表参加BRICS国际市政论坛并推动合作备忘录签署，深化中俄技术、产业和地方政府合作。",
    type: "article",
    publishedTime: "2025-11-21",
  },
  "/news/institute-of-experimental-medicine-2025": {
    title: "俄罗斯实验医学研究所访问与医疗园区合作｜Born International",
    description:
      "Born International代表团访问圣彼得堡俄罗斯实验医学研究所，推进上合组织+医疗与生物科技园合作。",
    type: "article",
    publishedTime: "2025-11-22",
  },
  "/news/china-russia-investment-committee-2025": {
    title: "中俄政府间投资合作委员会与北极项目机会｜Born International",
    description:
      "中俄政府间投资合作委员会讨论超过2000亿美元项目储备、摩尔曼斯克北极开发及北方海航道合作机会。",
    type: "article",
    publishedTime: "2025-11-01",
  },
  "/news/murmansk-governor-meeting-2025": {
    title: "摩尔曼斯克州长会见Born International代表｜Born International",
    description:
      "双方在北京就北极开发、北方海航道物流及中俄产业合作展开讨论，探索中国企业参与俄罗斯北极项目的机会。",
    type: "article",
    publishedTime: "2025-11-02",
  },
  "/news/global-market-outlook": {
    title: "全球市场展望与科技投资机会｜Born International",
    description:
      "Born International分析全球市场趋势、科技创新和新兴投资机会，为跨境投资和企业国际化提供参考。",
    type: "article",
    publishedTime: "2024-01-15",
  },
  "/news/fourth-quarter-results": {
    title: "Born International第四季度投资业绩｜Born International",
    description:
      "查看Born International第四季度投资组合表现、科技投资进展及可持续发展相关成果。",
    type: "article",
    publishedTime: "2024-01-20",
  },
  "/news/template": {
    title: "News Template｜Born International",
    description: "Internal news page template for Born International.",
    noIndex: true,
  },
  "/portfolio/new-company": {
    title: "Portfolio Template｜Born International",
    description: "Internal portfolio page template for Born International.",
    noIndex: true,
  },
}

export function createPageMetadata(path: string): Metadata {
  const entry = seoEntries[path]

  if (!entry) {
    throw new Error(`Missing SEO metadata for ${path}`)
  }

  const canonical = `${SITE_URL}${path}`
  const image = entry.image ?? "/og-image.png"

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical },
    robots: entry.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: entry.type ?? "website",
      url: canonical,
      title: entry.title,
      description: entry.description,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: entry.title }],
      ...(entry.type === "article" && entry.publishedTime
        ? { publishedTime: entry.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [image],
    },
  }
}
