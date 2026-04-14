type ResponsibleInvestmentBlurbProps = {
  language?: "en" | "ru"
  theme?: "dark" | "light"
}

const contentByLanguage = {
  en: {
    title: "Responsible Investment",
    summary:
      "Responsible investment is embedded in sourcing, underwriting, investment committee review, and post-investment monitoring. We assess material ESG factors in a manner proportionate to company stage, sector, and geography, including governance quality, sanctions and anti-bribery exposure, data and cyber controls, labor and health and safety practices, environmental footprint, and stakeholder risk in cross-border expansion. After investment, we use reporting, board or observer access, and operating workstreams to support remediation, control-building, and climate or resource-efficiency improvements where relevant, and we disclose material incidents or recurring themes to LPs through periodic updates. We apply enhanced review or exclusion to activities that fall outside our mandate or present unacceptable legal, regulatory, or reputational risk.",
    topics: ["ESG diligence", "Governance", "Climate & EHS", "Compliance", "LP reporting", "Exclusions"],
  },
  ru: {
    title: "Ответственное инвестирование",
    summary:
      "Ответственное инвестирование встроено в поиск сделок, андеррайтинг, рассмотрение инвестиционным комитетом и последующий мониторинг портфельных компаний. Мы оцениваем существенные ESG-факторы с учетом стадии компании, сектора и географии, включая качество корпоративного управления, санкционные и антикоррупционные риски, контроль данных и кибербезопасности, практики труда, охраны здоровья и безопасности, экологический след, а также риски для заинтересованных сторон при трансграничной экспансии. После инвестирования мы используем права отчетности, доступ к совету или статус наблюдателя, а также операционные рабочие потоки для поддержки планов улучшения, построения контролей и климатических либо ресурсосберегающих инициатив там, где это уместно, а существенные инциденты и повторяющиеся темы раскрываем LP в рамках регулярной отчетности. Для направлений, выходящих за пределы нашего мандата или создающих неприемлемый юридический, регуляторный или репутационный риск, применяется усиленная проверка либо исключение.",
    topics: ["ESG-анализ", "Управление", "Климат и ОТ", "Комплаенс", "Отчетность LP", "Исключения"],
  },
} as const

export function ResponsibleInvestmentBlurb({
  language = "en",
  theme = "dark",
}: ResponsibleInvestmentBlurbProps) {
  const content = contentByLanguage[language]
  const isDark = theme === "dark"

  return (
    <div>
      <h4 className={`font-medium mb-4 ${isDark ? "text-white" : "text-slate-950"}`}>{content.title}</h4>
      <p className={`text-sm leading-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{content.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {content.topics.map((topic) => (
          <span
            key={topic}
            className={`rounded-full border px-2.5 py-1 text-xs ${
              isDark ? "border-slate-700 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}
