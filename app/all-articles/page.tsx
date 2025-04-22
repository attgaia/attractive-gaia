'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { getPosts } from '@/lib/graphql';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AllArticlesPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // 3列 × 3段 = 9記事

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // 現在のページの記事を取得
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (isLoading) {
    return (
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <div className="mb-8">
        <Link href="/" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          トップページに戻る
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-12 text-center">記事一覧</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {currentPosts.map((post) => (
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
                <div className="text-xs text-white bg-emerald-600/90 rounded-full px-2 py-1 inline-block mb-2">
                  {post.categories.nodes.map(cat => cat.name).join(', ')}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div 
                  className="text-sm text-gray-600 mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-emerald-600 hover:underline"
                >
                  続きを読む
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ページネーション */}
      <div className="flex justify-center items-center space-x-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          前へ
        </Button>
        
        <div className="flex items-center space-x-1">
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
              className="w-8 h-8 p-0"
            >
              {i + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center"
        >
          次へ
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
} 