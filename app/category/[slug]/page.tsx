import { getPosts, getCategories } from '@/lib/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const [allPosts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ]);

  // カテゴリー名を取得
  const category = categories.find(cat => cat.slug === params.slug);
  if (!category) {
    notFound();
  }

  // カテゴリーでフィルタリング
  const posts = allPosts.filter(post => 
    post.categories.nodes.some(cat => cat.slug === params.slug)
  );

  if (posts.length === 0) {
    return (
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">このカテゴリーの記事はありません。</h1>
          <Link href="/" className="text-[#008B8B] hover:text-[#007070] transition-colors">
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <div className="mb-8">
        <Link href="/" className="text-[#008B8B] hover:text-[#007070] transition-colors flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          トップページに戻る
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-12 text-center">
        {category.name} の記事一覧
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-0">
              {post.featuredImage?.node?.sourceUrl && (
                <div className="relative aspect-video">
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-xs text-white bg-[#008B8B] rounded-full px-2 py-1 inline-block mb-2">
                  {post.categories.nodes.map(cat => cat.name).join(', ')}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div 
                  className="text-sm text-gray-600 mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-[#008B8B] hover:underline"
                >
                  続きを読む
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 