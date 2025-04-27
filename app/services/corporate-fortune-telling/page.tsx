import { Metadata } from 'next'
import CorporateFortuneTellingClient from './CorporateFortuneTellingClient'

export const metadata: Metadata = {
  title: "法人向け占いコンサルティング | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAでは、ビジネス視点で活用できる法人向け占いコンサルティングを提供。人事・経営判断のサポートにご活用いただけます。",
};

export default function CorporateFortuneTellingPage() {
  return <CorporateFortuneTellingClient />
} 