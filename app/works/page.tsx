import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { getWorksPosts } from '@/lib/graphql';
import { ArrowLeft } from 'lucide-react';
import WorksPagination from './works-pagination';

export default async function WorksPage() {
  const works = await getWorksPosts();

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
                  className="text-sm font-medium text-[#008B8B] hover:text-[#40E0D0] transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <WorksPagination totalWorks={works.length} />
    </div>
  );
} 