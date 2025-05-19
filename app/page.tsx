import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import AiSupportCard from "@/components/ai-support-card"
import NewsCard from "@/components/news-card"
import TestimonialSlider from "@/components/testimonial-slider"
import HeroSection from "@/components/hero-section"
import ArticleList from "@/components/article-list"
import { getWorksPosts } from '@/lib/graphql'
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "AI技術で企業の未来を創造する | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAは、AI技術を活用した企業支援サービスを提供しています。業務効率化、社内教育、商品開発まで、すべてを支えるデジタル右腕として、あなたのビジネスを次のステージへ導きます。",
  keywords: "AI支援, 業務効率化, 企業支援, 群馬, デジタル化, ATTRACTIVEGAIA"
};

async function WorksList() {
  const works = await getWorksPosts(6);

  return (
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
              <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
              <div 
                className="text-sm text-gray-600 mb-4 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: work.excerpt }}
              />
              <Link 
                href={`/works/${work.slug}`} 
                className="text-sm font-medium text-[#008B8B] hover:underline"
              >
                詳細を見る
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        <HeroSection />

        {/* サービス紹介セクション */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">サービス一覧</h2>

            {/* メインサービス（特大表示） */}            
            <section className="py-12">
              <AiSupportCard />
            </section>

            {/* Web制作・技術サポート系 */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">Web制作・技術サポート系</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="Web制作一括請負サービス"
                  description="企画からデザイン、開発、運用までワンストップで提供するWeb制作サービス。お客様のビジネスに最適なシステム・ECサイト構築に強みを持っています。"
                  icon="globe"
                  link="/services/web-production-package"
                />
                <ServiceCard
                  title="Web制作・月額プラン"
                  description="月額固定料金でWebサイトの制作・運用・保守を継続的にサポート。EC機能を除く一般的なWebサイト向けのプランで、安心の保守体制を提供します。"
                  icon="repeat"
                  link="/services/web-production-lite"
                />
                <ServiceCard
                  title="Webのお医者さん"
                  description="WordPressのエラー修正や部分改修など、Webサイトの「健康診断」と「治療」を行うサービスです。サイトの問題を迅速に特定し、最適な解決策を提供します。"
                  icon="stethoscope"
                  link="/services/web-doctor"
                />
              </div>
            </div>

            {/* お問い合わせセクション */}
            <section className="py-12 bg-white rounded-lg shadow-sm">
              <div className="container">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">お気軽にご相談ください</h2>
                  <p className="text-gray-600 mb-8">
                    サービスについてのご質問や、具体的なご要望がございましたら、お気軽にお問い合わせください。
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#008B8B] hover:bg-[#007070] transition-colors"
                  >
                    お問い合わせはこちら
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* 事例紹介セクション */}
        <section id="case-studies" className="py-16 md:py-24 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">制作実例</h2>
            <WorksList />
            <div className="text-center">
              <Button variant="outline" className="border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5">
                <Link href="/works" className="flex items-center">
                  すべての実例を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">お客様の声</h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* 記事一覧セクション */}
        <section id="media" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">記事一覧</h2>
            <ArticleList />
          </div>
        </section>
      </main>
    </div>
  );
}
