'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-emerald-600">
            ATTRACTIVE GAIA
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            サービス
          </Link>
          <Link href="#case-studies" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            制作実例
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            お客様の声
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">AI支援サービスを見る</Button>
        </div>
      </div>
    </header>
  )
}

function ArticleList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://attgaia.com/wp-json/wp/v2/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {posts.map((post: any) => (
        <div key={post.id} className="card">
          <img src={post.featured_media_url} alt={post.title.rendered} className="w-full h-48 object-cover mb-4" />
          <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="text-lg font-bold mb-2" />
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="text-sm mb-4" />
          <a href={post.link} className="text-blue-500 hover:underline">続きを読む</a>
        </div>
      ))}
    </div>
  );
}

<section id="media" className="py-16 md:py-24 bg-gray-50">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-12">記事一覧</h2>
    <ArticleList />
  </div>
</section> 