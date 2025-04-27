import { Metadata } from 'next'
import ImportConsultingClient from './ImportConsultingClient'

export const metadata: Metadata = {
  title: "輸入ビジネス支援 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAでは、海外商品の輸入・販売ビジネスを立ち上げるためのサポートを提供。仕入れから販売戦略までトータルで支援します。",
};

export default function ImportConsultingPage() {
  return <ImportConsultingClient />
} 