"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const committeeMembers = [
  {
    name: "劳维信",
    title: "投资委员会成员",
    image: "/team/劳维信.jpg",
    description: "资深投资专家，在科技投资领域拥有丰富经验",
  },
  {
    name: "褚浩",
    title: "投资委员会成员",
    image: "/team/褚浩.jpg",
    description: "专注于新兴技术和创新企业投资",
  },
  {
    name: "唐学书",
    title: "投资委员会成员",
    image: "/team/唐学书.jpg",
    description: "在企业管理和战略投资方面经验丰富",
  },
  {
    name: "李文成",
    title: "投资委员会成员",
    image: "/team/李文成.jpg",
    description: "年轻有为的投资专家，专注于科技创新领域",
  },
  {
    name: "郭峰",
    title: "投资委员会成员",
    image: "/team/郭峰.jpg",
    description: "在技术评估和项目分析方面具有专业优势",
  },
  {
    name: "张弛",
    title: "投资委员会成员",
    image: "/team/张弛.jpg",
    description: "拥有丰富的市场分析和投资决策经验",
  },
  {
    name: "李翀",
    title: "投资委员会成员",
    image: "/team/李翀.jpg",
    description: "专业的投资顾问，在风险评估方面经验丰富",
  },
  {
    name: "陈东敏",
    title: "投资委员会主席",
    image: "/team/陈东敏.jpg",
    description: "资深投资专家，领导投资委员会制定重大投资决策",
  },
]

export default function InvestmentCommittee() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-4">投资委员会</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            我们的投资委员会由行业资深专家组成，为重大投资决策提供专业指导和战略支持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
