import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { getPosts } from '@/lib/graphql';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "記事一覧 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAの最新情報や技術ブログをご紹介します。AI技術、Web制作、デジタルマーケティングなど、幅広い分野の記事を掲載しています。",
  keywords: "記事一覧, ブログ, AI技術, Web制作, デジタルマーケティング, ATTRACTIVEGAIA"
};

export default async function AllArticlesPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">記事がありません</h1>
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

      <h1 className="text-4xl font-bold mb-12 text-center">記事一覧</h1>

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