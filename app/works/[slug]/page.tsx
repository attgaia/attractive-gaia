import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getWorkBySlug, getCategories, getPosts } from '@/lib/graphql';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: {
    slug: string;
  };
};

export default async function WorkDetail({ params }: Props) {
  const [work, categories, allPosts] = await Promise.all([
    getWorkBySlug(params.slug),
    getCategories(),
    getPosts()
  ]);

  if (!work) {
    notFound();
  }

  // 記事が存在するカテゴリーのみをフィルタリング
  const categoriesWithPosts = categories.filter(category => 
    allPosts.some(post => 
      post.categories.nodes.some(cat => cat.slug === category.slug)
    )
  );

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* メインコンテンツ */}
        <article className="lg:w-2/3">
          <div className="mb-8">
            <Link href="/works" className="text-[#008B8B] hover:text-[#007070] transition-colors flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              制作実例一覧に戻る
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-8">{work.title}</h1>

          {work.featuredImage?.node?.sourceUrl && (
            <div className="relative aspect-video mb-8">
              <Image
                src={work.featuredImage.node.sourceUrl}
                alt={work.featuredImage.node.altText || work.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: work.content }}
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
  );
} 