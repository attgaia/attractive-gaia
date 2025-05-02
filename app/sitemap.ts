import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

// サイトマップに含めるページのパスを定義
const pages = [
  '',
  '/about',
  '/contact',
  // 必要に応じて他のページを追加
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  // 現在の日時を取得
  const currentDate = new Date().toISOString()

  // 各ページのURLを生成
  const routes = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  return routes
} 