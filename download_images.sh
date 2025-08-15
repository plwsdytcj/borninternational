#!/bin/bash

# 创建目录
mkdir -p public/backgrounds public/team-members public/company-logos public/hero-images

# 下载背景图片
echo "下载背景图片..."

# 主页英雄背景
curl -o "public/backgrounds/hero-mountain-landscape.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1e7bf0ca-be1d-4e74-b8ef-e0974969b114.jpg-qAVXbwgwgITOqZMjAl9bh2n5kKbUnf.jpeg"

# 项目背景
curl -o "public/backgrounds/bg-project-1.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-project-1.jpg-tV09kNqFLM1dZKM96BCVwuCWLZAO9y.jpeg"

# 团队背景
curl -o "public/backgrounds/bg-team.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-team.jpg-OoZveCWDeOjHeN6l2Np9ve51u4sqN7.jpeg"

# 世界地图
curl -o "public/backgrounds/worldmap.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/worldmap.jpg-MLpAjtteFWsfx1UFAXo9pFZSQYqNYI.jpeg"

# 新闻背景
curl -o "public/backgrounds/bg-news.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-news.jpg-l5ngZiDwXZS3hRRKK6BsoyGNdyegyL.jpeg"

# 案例背景
curl -o "public/backgrounds/bg-case.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-case.jpg-TBjEPgDXpPqKT9TJkQB0HxDlyTfFdp.jpeg"

# 关于背景
curl -o "public/backgrounds/bg-about.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-about.jpg-ytx0bPGlCecDLJktCv9FlH9G7g4wlz.jpeg"

# 数字缩略图
curl -o "public/backgrounds/digital-thumb.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital-thumb.jpg-dBDj7hHgQ8efZNKI44qpRNjWYbsQJy.jpeg"

# 办公室背景
curl -o "public/backgrounds/office-background.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-man-using-smart-phone-office-space-background-copy-space_7191-391.jpg-A5i82ZFdQFjn9Bjtt6sBh9gEngCXJk.jpeg"

# 设计背景
curl -o "public/backgrounds/design-background.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-210914110R4c6_X-Design.jpg-RF2OJ0PUCCp2Liuytq7PXBppZcO22F.jpeg"

# 投资组合背景
curl -o "public/backgrounds/portfolio-background.png" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-210Z92040591c-AQL5YitVBwqKZKgTdSidtYiJsPDuyf.png"

echo "下载团队成员图片..."

# 李文成个人页面
curl -o "public/team-members/李文成_personal_page.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9D%8E%E6%96%87%E6%88%90_personal_page.jpg-xnjsolH3mlT6TbQOp4Uj6JmxaocRLb.jpeg"

echo "下载公司logo..."

# 玻色量子logo
curl -o "public/company-logos/boson-quantum-logo.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%8E%BB%E8%89%B2%E9%87%8F%E5%AD%90.jpg-KBizpMiU68tipjUfgHZV8OOEZcsK8k.jpeg"

# 布比区块链logo
curl -o "public/company-logos/bubi-blockchain-logo.png" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B8%83%E6%AF%94%E5%8C%BA%E5%9D%97%E9%93%BE-stMcd6T9tPwvoyOxK0DyTM6nxUIYk5.png"

# 昆维科技logo
curl -o "public/company-logos/kunwei-technology-logo.jpg" "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9D%A4%E7%BB%B4%E7%A7%91%E6%8A%80.jpg-ooyL0a0NSC1Vqo2iF0I8eiC0PjL7Uu.jpeg"

echo "下载完成！" 