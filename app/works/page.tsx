'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { getWorksPosts } from '@/lib/graphql';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function WorksPage() {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 9;

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

  // 現在のページの記事を取得
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = works.slice(indexOfFirstWork, indexOfLastWork);
  const totalPages = Math.ceil(works.length / worksPerPage);

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
        <Link href="/" className="text-[#008B8B] hover:text-[#007070] transition-colors flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          トップページに戻る
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-12 text-center">制作実例</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {currentWorks.map((work) => (
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
                  className="text-sm font-medium text-[#008B8B] hover:text-[#40E0D0] transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5 disabled:opacity-50 disabled:cursor-not-allowed"
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
                className={cn(
                  "w-8 h-8 p-0",
                  currentPage === i + 1 
                    ? "bg-[#008B8B] text-white hover:bg-[#40E0D0]"
                    : "border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5"
                )}
              >
                {i + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            次へ
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
} 