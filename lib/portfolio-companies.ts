export type PortfolioCompany = {
  slug: string
  featured?: boolean
  returnMultiple?: string
  name: string
  sector: string
  description: string
  logo: string
  logoStyle?: string
}

export function getPortfolioCompanies(language: "en" | "ru"): PortfolioCompany[] {
  return [
    {
      slug: "boson-quantum",
      featured: true,
      returnMultiple: "50.00x",
      name: language === "en" ? "BOSON Quantum" : "BOSON Quantum",
      sector: language === "en" ? "Quantum Computing" : "Квантовые вычисления",
      description:
        language === "en"
          ? "Leading quantum computing technology company specializing in quantum algorithms and hardware solutions."
          : "Ведущая компания в области квантовых вычислений, специализирующаяся на квантовых алгоритмах и аппаратных решениях.",
      logo: "/company-logos/boson-quantum-logo.jpg",
      logoStyle: "object-contain",
    },
    {
      slug: "shanghai-droid-robotics-co-ltd-droidup",
      featured: true,
      returnMultiple: "24.34x",
      name: language === "en" ? "Shanghai Droid Robotics Co., Ltd. (DroidUp)" : "Shanghai Droid Robotics Co., Ltd. (DroidUp)",
      sector: language === "en" ? "Humanoid Robotics" : "Гуманоидная робототехника",
      description:
        language === "en"
          ? "General-purpose humanoid robots with multi-modal AI limb bionics; platforms, expression robots; Guinness-record biped."
          : "Универсальные гуманоидные роботы с мультимодальным ИИ, бионическими конечностями и рекордной двуногой платформой.",
      logo: "/company-logos/shanghai-droid-robotics-co-ltd-droidup-logo.jpeg",
      logoStyle: "object-contain",
    },
    {
      slug: "kunwei-technology",
      featured: true,
      returnMultiple: "27.70x",
      name: language === "en" ? "Kunwei Technology" : "Kunwei Technology",
      sector: language === "en" ? "Technology Solutions" : "Технологические решения",
      description:
        language === "en"
          ? "Innovative technology solutions provider focusing on digital transformation."
          : "Поставщик инновационных технологических решений с фокусом на цифровую трансформацию.",
      logo: "/company-logos/kunwei-technology-logo.jpg",
      logoStyle: "object-contain",
    },
    {
      slug: "bubi-blockchain",
      name: language === "en" ? "Bubi Blockchain" : "Bubi Blockchain",
      sector: language === "en" ? "Blockchain Technology" : "Блокчейн-технологии",
      description:
        language === "en"
          ? "Leading blockchain technology platform and solutions provider."
          : "Ведущая блокчейн-платформа и поставщик отраслевых решений.",
      logo: "/company-logos/bubi-blockchain-logo.png",
      logoStyle: "object-contain",
    },
    {
      slug: "token-cloud-shanghai-technology-co-ltd",
      name: language === "en" ? "Token Cloud (Shanghai) Technology Co., Ltd." : "Token Cloud (Shanghai) Technology Co., Ltd.",
      sector: language === "en" ? "Digital Identity" : "Цифровая идентификация",
      description:
        language === "en"
          ? "Digital identity authentication for finance, government and hospitality; ID/passport chip verification and TMFA device security."
          : "Цифровая идентификация для финансового сектора, госуслуг и гостиниц; проверка чипов удостоверений и паспортов, а также защита устройств TMFA.",
      logo: "/company-logos/token-cloud-shanghai-technology-co-ltd-logo.png",
      logoStyle: "object-contain",
    },
    {
      slug: "shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd",
      name: language === "en" ? "Shenzhen Huazhi Intelligent Manufacturing Technology Co., LTD." : "Shenzhen Huazhi Intelligent Manufacturing Technology Co., LTD.",
      sector: language === "en" ? "Industrial Internet" : "Промышленный интернет",
      description:
        language === "en"
          ? "'Huazhi Cloud' for equipment interconnection, collaboration, ops control and data intelligence; national standards participant."
          : "Платформа Huazhi Cloud объединяет оборудование, совместную работу, операционное управление и аналитику данных; компания участвует в разработке национальных стандартов.",
      logo: "/company-logos/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd-logo.jpeg",
      logoStyle: "object-contain",
    },
    {
      slug: "chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd",
      name:
        language === "en"
          ? "Chengdu Zhongkang Dacheng Environmental Protection Technology Co., Ltd."
          : "Chengdu Zhongkang Dacheng Environmental Protection Technology Co., Ltd.",
      sector: language === "en" ? "IoT + Retail" : "Интернет вещей и ритейл",
      description:
        language === "en"
          ? "IoT + tobacco-industry digitalization; smart retail, smoking cabins, age-verification, logistics; 10,000+ devices deployed."
          : "IoT и цифровизация табачной отрасли: умный ритейл, курительные кабины, проверка возраста и логистика; развернуто более 10 000 устройств.",
      logo: "/company-logos/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd-logo.png",
      logoStyle: "object-contain",
    },
    {
      slug: "china-carbon-zero-and-technology-group",
      name: language === "en" ? "China Carbon Zero and Technology Group" : "China Carbon Zero and Technology Group",
      sector: language === "en" ? "Carbon Assets" : "Углеродные активы",
      description:
        language === "en"
          ? "Carbon asset development and trading: consulting, CCER/VCS projects, market trading and carbon finance; blockchain-enabled platform."
          : "Разработка и торговля углеродными активами: консалтинг, проекты CCER/VCS, рыночные сделки, углеродное финансирование и блокчейн-платформа данных.",
      logo: "/company-logos/china-carbon-zero-and-technology-group-logo.png",
      logoStyle: "object-contain",
    },
  ]
}
