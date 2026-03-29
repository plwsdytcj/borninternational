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
      name: language === "en" ? "BOSON Quantum" : "玻色量子",
      sector: language === "en" ? "Quantum Computing" : "量子计算",
      description:
        language === "en"
          ? "Leading quantum computing technology company specializing in quantum algorithms and hardware solutions."
          : "领先的量子计算技术公司，专注于量子算法和硬件解决方案",
      logo: "/company-logos/boson-quantum-logo.jpg",
      logoStyle: "object-contain",
    },
    {
      slug: "shanghai-droid-robotics-co-ltd-droidup",
      featured: true,
      returnMultiple: "24.34x",
      name: language === "en" ? "Shanghai Droid Robotics Co., Ltd. (DroidUp)" : "卓益得",
      sector: language === "en" ? "Humanoid Robotics" : "人形机器人",
      description:
        language === "en"
          ? "General-purpose humanoid robots with multi-modal AI limb bionics; platforms, expression robots; Guinness-record biped."
          : "通用人形机器人，多模态AI四肢仿生；平台、表情机器人；双足步行创纪录。",
      logo: "/company-logos/shanghai-droid-robotics-co-ltd-droidup-logo.jpeg",
      logoStyle: "object-contain",
    },
    {
      slug: "kunwei-technology",
      featured: true,
      returnMultiple: "27.70x",
      name: language === "en" ? "Kunwei Technology" : "坤维科技",
      sector: language === "en" ? "Technology Solutions" : "技术解决方案",
      description:
        language === "en"
          ? "Innovative technology solutions provider focusing on digital transformation."
          : "创新技术解决方案提供商，专注于数字化转型",
      logo: "/company-logos/kunwei-technology-logo.jpg",
      logoStyle: "object-contain",
    },
    {
      slug: "bubi-blockchain",
      name: language === "en" ? "Bubi Blockchain" : "布比区块链",
      sector: language === "en" ? "Blockchain Technology" : "区块链技术",
      description:
        language === "en"
          ? "Leading blockchain technology platform and solutions provider."
          : "领先的区块链技术平台和解决方案提供商",
      logo: "/company-logos/bubi-blockchain-logo.png",
      logoStyle: "object-contain",
    },
    {
      slug: "token-cloud-shanghai-technology-co-ltd",
      name: language === "en" ? "Token Cloud (Shanghai) Technology Co., Ltd." : "令牌云",
      sector: language === "en" ? "Digital Identity" : "数字身份",
      description:
        language === "en"
          ? "Digital identity authentication for finance, government and hospitality; ID/passport chip verification and TMFA device security."
          : "面向金融、政务、酒店的数字身份认证；身份证/护照芯片校验与TMFA设备安全。",
      logo: "/company-logos/token-cloud-shanghai-technology-co-ltd-logo.png",
      logoStyle: "object-contain",
    },
    {
      slug: "shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd",
      name: language === "en" ? "Shenzhen Huazhi Intelligent Manufacturing Technology Co., LTD." : "华制智能",
      sector: language === "en" ? "Industrial Internet" : "工业互联网",
      description:
        language === "en"
          ? "'Huazhi Cloud' for equipment interconnection, collaboration, ops control and data intelligence; national standards participant."
          : "“华制云”覆盖设备互联、协同、运营管控与数据智能；参与国家标准制定。",
      logo: "/company-logos/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd-logo.jpeg",
      logoStyle: "object-contain",
    },
    {
      slug: "chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd",
      name:
        language === "en"
          ? "Chengdu Zhongkang Dacheng Environmental Protection Technology Co., Ltd."
          : "中康达成",
      sector: language === "en" ? "IoT + Retail" : "物联网+零售",
      description:
        language === "en"
          ? "IoT + tobacco-industry digitalization; smart retail, smoking cabins, age-verification, logistics; 10,000+ devices deployed."
          : "物联网与烟草行业数字化；智能零售、吸烟亭、年龄验证、物流；累计部署1万+设备。",
      logo: "/company-logos/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd-logo.png",
      logoStyle: "object-contain",
    },
    {
      slug: "china-carbon-zero-and-technology-group",
      name: language === "en" ? "China Carbon Zero and Technology Group" : "China Carbon Zero and Technology Group",
      sector: language === "en" ? "Carbon Assets" : "碳资产",
      description:
        language === "en"
          ? "Carbon asset development and trading: consulting, CCER/VCS projects, market trading and carbon finance; blockchain-enabled platform."
          : "碳资产开发与交易：咨询、CCER/VCS项目、市场交易与碳金融；区块链数据平台。",
      logo: "/company-logos/china-carbon-zero-and-technology-group-logo.png",
      logoStyle: "object-contain",
    },
  ]
}
