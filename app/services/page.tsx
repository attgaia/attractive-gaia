'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import AiSupportCard from "@/components/ai-support-card"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-emerald-400/20 text-emerald-100 hover:bg-emerald-400/30 border-emerald-400/30 backdrop-blur-sm">
                サービス一覧
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                あなたのビジネスを支える<br />
                多彩なサービスラインナップ
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                AI活用からWeb制作、EC支援、地域活性化まで。<br />
                お客様のニーズに合わせた最適なソリューションを提供します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* サービス紹介セクション */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
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

            {/* CTAセクション */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">お探しのサービスが見つからない場合</h3>
                  <p className="text-gray-100">
                    ご要望に合わせたカスタムサービスもご提案可能です。まずはお気軽にご相談ください。
                  </p>
                </div>
                <Button className="mt-4 md:mt-0 bg-white text-emerald-700 hover:bg-gray-100">
                  <Link href="/free-consultation">無料相談する</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 