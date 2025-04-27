'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPosts } from '@/lib/graphql';

export default function ArticleList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
            <div className="p-4 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {posts.slice(0, 6).map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group block space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {post.featuredImage?.node?.sourceUrl && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          )}
          <div className="space-y-2 p-4">
            <div className="text-xs text-white bg-[#008B8B] rounded-full px-2 py-1 inline-block">
              {post.categories.nodes.map(cat => cat.name).join(', ')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary">
              {post.title}
            </h3>
            <p className="text-sm text-gray-700 line-clamp-2">
              {post.excerpt?.replace(/<[^>]+>/g, '')}
            </p>
            <div className="flex items-center text-xs text-gray-500">
              {post.author?.node?.avatar?.url && (
                <img 
                  src={post.author.node.avatar.url} 
                  alt={post.author.node.name} 
                  className="w-6 h-6 rounded-full mr-2 object-cover" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <span>著者: {post.author?.node?.name}</span>
            </div>
          </div>
        </Link>
      ))}
      <div className="col-span-full flex justify-center mt-8">
        <Link href="/all-articles" className="inline-block bg-[#008B8B] text-white py-2 px-4 rounded hover:bg-[#008B8B]/90 transition text-center">記事一覧はこちら</Link>
      </div>
    </div>
  );
} 