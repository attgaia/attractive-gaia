import { Metadata } from 'next'
import ContentSalesClient from './ContentSalesClient'

export const metadata: Metadata = {
  title: "コンテンツ販売 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのコンテンツ販売では、デジタル商品や講座、ノウハウコンテンツなどのオンライン販売を行っています。",
};

export default function ContentSalesPage() {
  return <ContentSalesClient />
} 