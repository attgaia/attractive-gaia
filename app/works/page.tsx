'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { getWorksPosts } from '@/lib/graphql';
import { ArrowLeft } from 'lucide-react';

export default function WorksPage() {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const data = await getWorksPosts();
        setWorks(data);
      } catch (error) {
        console.error('Error fetching works:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWorks();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
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

      <h1 className="text-4xl font-bold mb-12 text-center">制作実例</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work) => (
          <Card key={work.id}>
            <CardContent className="p-0">
              {work.featuredImage?.node?.sourceUrl && (
                <div className="relative aspect-video">
                  <Image
                    src={work.featuredImage.node.sourceUrl}
                    alt={work.featuredImage.node.altText || work.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
                <div 
                  className="text-sm text-gray-600 mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: work.excerpt }}
                />
                <Link 
                  href={`/works/${work.slug}`}
                  className="text-sm font-medium text-emerald-600 hover:underline"
                >
                  詳細を見る
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 