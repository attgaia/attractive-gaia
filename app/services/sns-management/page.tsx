import { Metadata } from 'next'
import SNSManagementClient from './SNSManagementClient'

export const metadata: Metadata = {
  title: "SNS運用代行サービス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAが提供するSNS運用代行サービスは、企業アカウントの戦略立案から投稿制作・分析まで一貫サポートし、SNSマーケティングを強化します。",
};

export default function SNSManagementPage() {
  return <SNSManagementClient />
} 