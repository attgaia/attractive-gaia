import { Metadata } from 'next'
import WebProductionLiteClient from './WebProductionLiteClient'

export const metadata: Metadata = {
  title: "Web制作月額プラン | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのWeb制作ライトプランは、コストを抑えつつも高品質なサイト制作を希望する方に最適なプランです。スピーディーにオンライン展開をサポートします。",
};

export default function WebProductionLitePage() {
  return <WebProductionLiteClient />
} 