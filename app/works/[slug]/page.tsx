'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getWorkBySlug } from '@/lib/graphql';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const [work, setWork] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWork() {
      try {
        const data = await getWorkBySlug(params.slug);
        setWork(data);
      } catch (error) {
        console.error('Error fetching work:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWork();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-8"></div>
          <div className="aspect-video bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!work) {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-2xl font-bold mb-8">記事が見つかりませんでした</h1>
        <Link href="/works" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          制作実例一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto py-16">
      <Link href="/works" className="text-emerald-600 hover:underline flex items-center mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        制作実例一覧に戻る
      </Link>

      <h1 className="text-4xl font-bold mb-8">{work.title}</h1>

      {work.featuredImage?.node?.sourceUrl && (
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src={work.featuredImage.node.sourceUrl}
            alt={work.featuredImage.node.altText || work.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: work.content }}
      />
    </article>
  );
} 