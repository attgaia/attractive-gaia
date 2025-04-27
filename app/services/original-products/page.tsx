import { Metadata } from 'next'
import OriginalProductsClient from './OriginalProductsClient'

export const metadata: Metadata = {
  title: "オリジナル商品開発販売 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAは、オリジナル商品の企画・開発を行い販売しています。",
};

export default function OriginalProductsPage() {
  return <OriginalProductsClient />
} 