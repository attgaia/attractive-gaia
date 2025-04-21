'use client';

import Link from "next/link";
import Image from "next/image";
import { getPosts } from '@/lib/graphql';
import { useEffect, useState } from 'react';

export default function AllArticles() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
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
              <div className="text-xs text-white bg-emerald-600/90 rounded-full px-2 py-1 inline-block">
                {post.categories.nodes.map(cat => cat.name).join(', ')}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 line-clamp-2">
                {post.excerpt}
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
      </div>
    </div>
  );
} 