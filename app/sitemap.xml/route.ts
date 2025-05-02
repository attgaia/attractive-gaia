import { GraphQLClient } from 'graphql-request'

export const dynamic = 'force-dynamic'

// 静的ページのパスを定義
const staticPages = [
  '',
  '/about',
  '/contact',
  '/services',
  '/privacy',
  '/terms',
  '/commercial-transaction',
  '/services/branding-package',
  '/services/video-production',
  '/services/recruitment-consulting',
  '/services/sns-management',
  '/services/reuse-business',
  '/services/original-products',
  '/services/content-sales',
  '/services/product-development',
  '/services/corporate-fortune-telling',
  '/services/transcription-translation',
  '/services/web-production-lite',
  '/services/ai-consulting',
  '/services/import-consulting',
  '/services/ec-consulting',
  '/services/regional-revitalization',
  '/services/web-doctor',
  '/services/article-writing',
  '/services/manga-lp-banner',
  '/services/web-production-package',
  '/all-articles',
  '/works',
  '/free-consultation',
]

// GraphQLクエリ
const query = `
  {
    posts(first: 100) {
      nodes {
        slug
        date
      }
    }
  }
`

// 記事の型定義
interface Article {
  slug: string
  date: string
}

// GraphQLレスポンスの型定義
interface GraphQLResponse {
  posts: {
    nodes: Article[]
  }
}

// 記事データを取得する関数
async function fetchArticles(): Promise<Article[]> {
  try {
    const client = new GraphQLClient('https://attgaia.com/graphql')
    const data = await client.request<GraphQLResponse>(query)
    return data.posts.nodes
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://attgaia.com'
  
  // 静的ページのURLを生成
  const staticUrls = staticPages.map(path => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${path === '' ? '1' : '0.8'}</priority>
    </url>
  `).join('')

  // 記事ページのURLを生成
  const articles = await fetchArticles()
  const articleUrls = articles.map(article => `
    <url>
      <loc>${baseUrl}/articles/${article.slug}</loc>
      <lastmod>${new Date(article.date).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('')

  // すべてのURLを結合
  const allUrls = staticUrls + articleUrls

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls}
    </urlset>`.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store',
    },
  })
} 