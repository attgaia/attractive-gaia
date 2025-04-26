'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, getCategories } from '@/lib/graphql';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [categoriesData, postsData] = await Promise.all([
          getCategories(),
          getPosts()
        ]);

        // 記事が存在するカテゴリーのみをフィルタリング
        const categoriesWithPosts = categoriesData.filter(category => 
          postsData.some(post => 
            post.categories.nodes.some(cat => cat.name === category.name)
          )
        );

        setCategories(categoriesWithPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">カテゴリ一覧</h2>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">カテゴリ一覧</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="text-sm">
            <Link 
              href={`/category/${category.name}`}
              className="hover:text-emerald-600 transition-colors"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 