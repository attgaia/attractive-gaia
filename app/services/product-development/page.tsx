import { Metadata } from 'next'
import ProductDevelopmentClient from './ProductDevelopmentClient'

export const metadata: Metadata = {
  title: "商品・サービス開発支援 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAでは、アイデア創出から商品・サービス開発までを一貫して支援し、マーケットに適した革新的なビジネス展開をサポートします。",
};

export default function ProductDevelopmentPage() {
  return <ProductDevelopmentClient />
} 