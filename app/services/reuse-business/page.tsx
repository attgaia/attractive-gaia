import { Metadata } from 'next'
import ReuseBusinessClient from './ReuseBusinessClient'

export const metadata: Metadata = {
  title: "リユースビジネス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのリユースビジネスは、中古品の仕入れから販売まで行っています",
};

export default function ReuseBusinessPage() {
  return <ReuseBusinessClient />
} 