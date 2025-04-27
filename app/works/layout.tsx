import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "制作実例 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAの制作実例をご紹介します。AI活用、Web制作、ブランディングなど、多岐にわたる実績から、お客様のビジネスに最適なソリューションをご提案します。",
  keywords: "制作実例, ポートフォリオ, AI活用事例, Web制作事例, 群馬, ATTRACTIVEGAIA"
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 