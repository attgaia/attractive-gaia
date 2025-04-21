import { notFound } from 'next/navigation'
import { getPosts, getPostBySlug, getCategories } from '@/lib/graphql'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const [post, categories] = await Promise.all([
    getPostBySlug(params.slug),
    getCategories()
  ])

  if (!post) {
    notFound()
  }

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
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/blog/category/${category.slug}`}
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