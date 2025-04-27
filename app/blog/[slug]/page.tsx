import { notFound } from 'next/navigation'
import { getPosts, getPostBySlug, getCategories } from '@/lib/graphql'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

// キーワードを生成する関数
function generateKeywords(title: string, categories: { name: string }[]): string[] {
  const keywords = new Set<string>()
  
  // タイトルからキーワードを抽出
  const titleWords = title.split(/\s+/).filter(word => word.length > 1)
  titleWords.forEach(word => keywords.add(word))
  
  // カテゴリー名をキーワードとして追加
  categories.forEach(category => keywords.add(category.name))
  
  // キーワードを3-5個に制限
  return Array.from(keywords).slice(0, 5)
}

// 説明文を生成する関数
function generateDescription(content: string, excerpt: string | null): string {
  if (excerpt) {
    return excerpt.replace(/<[^>]*>/g, '').slice(0, 100)
  }
  
  // HTMLタグを除去して本文から説明文を生成
  const plainContent = content.replace(/<[^>]*>/g, '')
  return plainContent.slice(0, 100) + '...'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)
    
    if (!post) {
      return {
        title: '記事が見つかりません | ATTRACTIVEGAIA',
        description: 'お探しの記事は見つかりませんでした。',
        keywords: 'ブログ, 記事, 404'
      }
    }

    const keywords = generateKeywords(post.title, post.categories.nodes)
    const description = generateDescription(post.content, post.excerpt)

    return {
      title: post.title,
      description,
      keywords: keywords.join(', ')
    }
  } catch (error) {
    console.error('Metadata generation error:', error)
    return {
      title: 'ブログ記事 | ATTRACTIVEGAIA',
      description: 'ATTRACTIVEGAIAのブログ記事です。',
      keywords: 'ブログ, 記事, ATTRACTIVEGAIA'
    }
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const [post, categories, allPosts] = await Promise.all([
    getPostBySlug(params.slug),
    getCategories(),
    getPosts()
  ])

  if (!post) {
    notFound()
  }

  // 記事が存在するカテゴリーのみをフィルタリング
  const categoriesWithPosts = categories.filter(category => 
    allPosts.some(post => 
      post.categories.nodes.some(cat => cat.slug === category.slug)
    )
  )

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* メインコンテンツ */}
        <article className="lg:w-2/3">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <time className="text-gray-500" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>

          {post.featuredImage?.node?.sourceUrl && (
            <div className="relative aspect-video mb-8">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* サイドバー */}
        <aside className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">カテゴリー</h2>
            <ul className="space-y-2">
              {categoriesWithPosts.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="flex items-center justify-between text-gray-700 hover:text-primary"
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
} 