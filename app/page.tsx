'use client';

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import AiSupportCard from "@/components/ai-support-card"
import NewsCard from "@/components/news-card"
import TestimonialSlider from "@/components/testimonial-slider"
import HeroAnimation from "@/components/hero-animation"
import CategoryNav from "@/components/category-nav"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function ArticleList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://attgaia.com/wp-json/wp/v2/posts?_embed');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {posts.slice(0, 6).map((post: any) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '/placeholder.svg'}
            alt={post.title.rendered}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="text-lg font-bold mb-2" />
            <a href={`/${post.slug}`} className="text-blue-500 hover:underline">続きを読む</a>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <a href="/all-articles" className="inline-block bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition text-center">記事一覧はこちら</a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* 新しいヒーローセクション */}
        <section className="relative h-screen overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 text-white">
          {/* アニメーション背景 */}
          <div className="absolute inset-0 opacity-70">
            <HeroAnimation />
          </div>

          {/* オーバーレイグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-900/80"></div>

          <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-emerald-400/20 text-emerald-100 hover:bg-emerald-400/30 border-emerald-400/30 backdrop-blur-sm">
                AI技術で企業の未来を創造する
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight"
            >
              AIで<span className="text-emerald-300">ビジネスの可能性</span>を<br className="hidden md:block" />
              無限に広げる
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl"
            >
              業務効率化、社内教育、商品開発まで、<br className="hidden md:block" />
              すべてを支える"デジタル右腕"として<br className="hidden md:block" />
              あなたのビジネスを次のステージへ
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Button
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-700/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                AI支援サービスを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
              <a href="#services" className="text-emerald-300 hover:text-emerald-100 transition-colors">
                <ArrowDown className="h-8 w-8" />
              </a>
            </div>

            {/* 波形デザイン */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        {/* サービスカテゴリナビゲーション */}
        <CategoryNav />

        {/* サービス紹介セクション */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">サービス一覧</h2>

{/* メインサービス（特大表示） */}            
<section className="py-12">
  <AiSupportCard />
</section>

            {/* カテゴリー3: Web制作・技術サポート系 */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">Web制作・技術サポート系</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="Web制作一括請負サービス"
                  description="企画からデザイン、開発、運用までワンストップで提供するWeb制作サービス。システム・ECサイト構築に強みを持っています。"
                  icon="globe"
                  link="/services/web-production-package"
                />
                <ServiceCard
                  title="Web制作・月額ライトプラン"
                  description="月額固定料金でWebサイトの制作・運用・保守を継続的にサポート。EC機能を除く一般的なWebサイト向けのプランです。"
                  icon="repeat"
                  link="/services/web-production-lite"
                />
                <ServiceCard
                  title="Webのお医者さん"
                  description="WordPressのエラー修正や部分改修など、Webサイトの「健康診断」と「治療」を行うサービスです。"
                  icon="stethoscope"
                  link="/services/web-doctor"
                />
              </div>
            </div>

            {/* カテゴリー4: デザイン・プロモーション系 */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">デザイン・プロモーション系</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="ブランディングパッケージ"
                  description="ロゴ／名刺／チラシ／パンフ／動画／Webなど一括支援。一貫したブランドイメージを構築するためのパッケージサービスです。"
                  icon="palette"
                  link="/services/branding-package"
                />
                <ServiceCard
                  title="マンガLP・バナー制作"
                  description="ストーリー性のある漫画形式のランディングページやバナーで、商品・サービスの魅力を効果的に伝えます。"
                  icon="pen-tool"
                  link="/services/manga-lp-banner"
                />
                <ServiceCard
                  title="動画撮影編集"
                  description="企業PR、商品紹介、採用動画など、目的に合わせた高品質な映像制作。撮影から編集、公開までワンストップでサポートします。"
                  icon="video"
                  link="/services/video-production"
                />
              </div>
            </div>

            {/* カテゴリー5: 集客・ライティング・採用支援 */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">集客・ライティング・採用支援</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="企業担当者向け記事作成代行"
                  description="SEOを意識した高品質なコンテンツ制作で、企業ブログやメディアの運営をサポートします。"
                  icon="file-text"
                  link="/services/article-writing"
                />
                <ServiceCard
                  title="採用コンサルティング"
                  description="採用ターゲットに響く求人ページの制作と、採用戦略のコンサルティングを提供します。"
                  icon="users"
                  link="/services/recruitment-consulting"
                />
                <ServiceCard
                  title="SNS運用代行サービス"
                  description="Instagram、X、Facebook、TikTokなど各種SNSの運用代行。コンテンツ制作から投稿、分析までトータルサポートします。"
                  icon="message-circle"
                  link="/services/sns-management"
                />
              </div>
            </div>

            {/* カテゴリー7: 商品開発・EC・輸入支援 */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">商品開発・EC・輸入支援</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="商品開発支援サービス"
                  description="OEMから販売サポートまで、新商品開発の全プロセスをサポートします。市場調査からプロトタイプ開発、テスト販売まで対応可能です。"
                  icon="lightbulb"
                  link="/services/product-development"
                />
                <ServiceCard
                  title="ECコンサルティング"
                  description="Amazon／Shopify／BASE対応。ECサイトの構築から運営戦略、売上向上施策まで、オンライン販売の成功をサポートします。"
                  icon="shopping-cart"
                  link="/services/ec-consulting"
                />
                <ServiceCard
                  title="輸入コンサルティング"
                  description="主にインドネシア・米国からの輸入ビジネスを支援。海外製品の調達から輸入手続き、販売戦略までをトータルでサポートします。"
                  icon="ship"
                  link="/services/import-consulting"
                />
              </div>
            </div>

            {/* その他のサービス */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">その他のサービス</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="地域活性化・町おこし支援"
                  description="地元企業支援／求人強化／セミナー講師派遣など、地域の特色を活かした観光振興や特産品開発など、地域活性化のための総合支援を行います。"
                  icon="map-pin"
                  link="/services/regional-revitalization"
                />
                <ServiceCard
                  title="法人向け占い・診断サービス"
                  description="提携占い師による屋号の画数診断、オフィスの家相診断、社長と社員の相性診断、開業日／契約日／イベント日選定などのサービスを提供します。"
                  icon="star"
                  link="/services/corporate-fortune-telling"
                />
                <ServiceCard
                  title="音声書き起こし＆翻訳支援"
                  description="会議・セミナーの録音を文章化 → ビジネス翻訳（日→英）対応。AI活用と人力補正を組み合わせた高品質なサービスを提供します。"
                  icon="mic"
                  link="/services/transcription-translation"
                />
                <ServiceCard
                  title="コンテンツ教材販売事業"
                  description="ドメイン取得、サーバー移行、ブログ記事の書き方などの教材を販売（note/Brain/自社EC）。企業研修向けカスタマイズにも対応します。"
                  icon="book-open"
                  link="/services/content-sales"
                />
                <ServiceCard
                  title="自社オリジナル商品販売"
                  description="当社が独自に開発したAI活用ツールやデジタルコンテンツを販売。業務効率化や学習に役立つ製品を提供しています。"
                  icon="shopping-bag"
                  link="/services/original-products"
                />
                <ServiceCard
                  title="リユース事業"
                  description="環境に配慮したサステナブルな取り組みとして、IT機器のリユース・リサイクル事業を展開。オフィス機器の買取から処分までワンストップで対応します。"
                  icon="recycle"
                  link="/services/reuse-business"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">お探しのサービスが見つからない場合</h3>
                  <p className="text-gray-100">
                    ご要望に合わせたカスタムサービスもご提案可能です。まずはお気軽にご相談ください。
                  </p>
                </div>
                <Button className="mt-4 md:mt-0 bg-white text-emerald-700 hover:bg-gray-100">無料相談する</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 事例紹介セクション */}
        <section id="case-studies" className="py-16 md:py-24 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">制作実例</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/case-study-1.jpg"
                    alt="制作実例1"
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Webサイト制作・ECサイト構築</h3>
                    <p className="text-sm text-gray-600 mb-4">ShopifyとWordPressを連携し、メディアECサイトを構築。デザインから開発、マーケティングまで一貫して支援しました。</p>
                    <Link href="/case-studies/web-site-ec" className="text-sm font-medium text-emerald-600 hover:underline">
                      詳細を見る
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/case-study-2.jpg"
                    alt="制作実例2"
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">パンフレット・チラシデザイン</h3>
                    <p className="text-sm text-gray-600 mb-4">企業パンフレットのデザインを刷新。ブランドイメージを効果的に伝え、営業活動をサポートするツールを作成しました。</p>
                    <Link href="/case-studies/pamphlet-design" className="text-sm font-medium text-emerald-600 hover:underline">
                      詳細を見る
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/case-study-3.jpg"
                    alt="制作実例3"
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">AI導入コンサルティング</h3>
                    <p className="text-sm text-gray-600 mb-4">製造業のお客様向けに、AIを活用した品質検査システムの導入を支援。検品作業の自動化と精度向上を実現しました。</p>
                    <Link href="/case-studies/ai-consulting" className="text-sm font-medium text-emerald-600 hover:underline">
                      詳細を見る
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                すべての実例を見る
                <ArrowRight className="ml-2 h-4 w-4" />
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
  )
}
