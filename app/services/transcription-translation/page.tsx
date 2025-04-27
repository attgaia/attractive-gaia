import { Metadata } from 'next'
import TranscriptionTranslationClient from './TranscriptionTranslationClient'

export const metadata: Metadata = {
  title: "文字起こし・翻訳サービス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAの文字起こし・翻訳サービスは、正確でスピーディーなドキュメント変換と多言語対応を実現します。",
};

export default function TranscriptionTranslationPage() {
  return <TranscriptionTranslationClient />
} 