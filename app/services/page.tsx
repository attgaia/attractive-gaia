import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import AiSupportCard from "@/components/ai-support-card"

export const metadata = {
  title: "サービス紹介 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAが提供する各種サービスをご紹介します。AI支援、業務効率化、社内教育、商品開発支援を通じて、貴社の成長を力強くサポートします。",
  keywords: "サービス紹介, AI支援, 業務効率化, 社内教育, 商品開発, ATTRACTIVEGAIA"
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-16">
        <div className="container">
          <div className="mb-8">
            <Link href="/" className="text-[#008B8B] hover:text-[#007070] transition-colors flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-center mb-12">サービス一覧</h1>

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

          {/* カテゴリー4: デザイン・プロモーション系 */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-emerald-200">デザイン・プロモーション系</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="ブランディングパッケージ"
                description="ロゴ／名刺／チラシ／パンフ／動画／Webなど一括支援。一貫したブランドイメージを構築するためのパッケージサービスです。お客様の魅力を最大限に引き出します。"
                icon="palette"
                link="/services/branding-package"
              />
              <ServiceCard
                title="マンガLP・バナー制作"
                description="ストーリー性のある漫画形式のランディングページやバナーで、商品・サービスの魅力を効果的に伝えます。独自のイラストで訴求力の高い広告を制作します。"
                icon="pen-tool"
                link="/services/manga-lp-banner"
              />
              <ServiceCard
                title="動画撮影編集"
                description="企業PR、商品紹介、採用動画など、目的に合わせた高品質な映像制作。撮影から編集、公開までワンストップでサポートします。魅力的な動画コンテンツを提供します。"
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
                description="SEOを意識した高品質なコンテンツ制作で、企業ブログやメディアの運営をサポートします。検索上位表示を実現し、サイトへの集客を強化する記事を提供します。"
                icon="file-text"
                link="/services/article-writing"
              />
              <ServiceCard
                title="採用コンサルティング"
                description="採用ターゲットに響く求人ページの制作と、採用戦略のコンサルティングを提供します。応募者の心に響くコンテンツで、採用成功率を高めるお手伝いをします。"
                icon="users"
                link="/services/recruitment-consulting"
              />
              <ServiceCard
                title="SNS運用代行サービス"
                description="Instagram、X、Facebook、TikTokなど各種SNSの運用代行。コンテンツ制作から投稿、分析までトータルサポートします。戦略的な運用でフォロワー増加を実現します。"
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
                description="OEMから販売サポートまで、新商品開発の全プロセスをサポートします。市場調査からプロトタイプ開発、テスト販売まで対応可能です。成功に導くノウハウを提供します。"
                icon="lightbulb"
                link="/services/product-development"
              />
              <ServiceCard
                title="ECコンサルティング"
                description="Amazon／Shopify／BASE対応。ECサイトの構築から運営戦略、売上向上施策まで、オンライン販売の成功をサポートします。データ分析に基づく改善提案を行います。"
                icon="shopping-cart"
                link="/services/ec-consulting"
              />
              <ServiceCard
                title="輸入コンサルティング"
                description="主にインドネシア・米国からの輸入ビジネスを支援。海外製品の調達から輸入手続き、販売戦略までをトータルでサポートします。市場ニーズに合った商品選定を提案します。"
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
                description="地域の特色を活かした観光振興や特産品開発、地元企業支援、求人強化、セミナー講師派遣など、地域活性化のための総合支援を行います。持続可能な地域づくりを目指します。"
                icon="map-pin"
                link="/services/regional-revitalization"
              />
              <ServiceCard
                title="法人向け占い・診断サービス"
                description="提携占い師による屋号の画数診断、オフィスの家相診断、社長と社員の相性診断、開業日／契約日／イベント日選定などのサービスを提供します。ビジネスの運気を最大化します。"
                icon="star"
                link="/services/corporate-fortune-telling"
              />
              <ServiceCard
                title="音声書き起こし＆翻訳支援"
                description="会議・セミナーの録音を文章化 → ビジネス翻訳（日→英）対応。AI活用と人力補正を組み合わせた高品質なサービスを提供します。正確で自然な翻訳をお届けします。"
                icon="mic"
                link="/services/transcription-translation"
              />
              <ServiceCard
                title="コンテンツ教材販売事業"
                description="ドメイン取得、サーバー移行、ブログ記事の書き方などの教材を販売（note/Brain/自社EC）。企業研修向けカスタマイズにも対応します。実践的なノウハウを提供します。"
                icon="book-open"
                link="/services/content-sales"
              />
              <ServiceCard
                title="自社オリジナル商品販売"
                description="当社が独自に開発したAI活用ツールやデジタルコンテンツを販売。業務効率化や学習に役立つ製品を提供しています。最新技術を活用した独自のソリューションをお届けします。"
                icon="shopping-bag"
                link="/services/original-products"
              />
              <ServiceCard
                title="リユース事業"
                description="環境に配慮したサステナブルな取り組みとして、IT機器のリユース・リサイクル事業を展開。オフィス機器の買取・処分をワンストップで対応し、環境負荷の低減に貢献します。"
                icon="recycle"
                link="/services/reuse-business"
              />
            </div>
          </div>

          {/* お問い合わせセクション */}
          <section className="mt-16 md:mt-24 bg-gradient-to-r from-[#008B8B] to-[#40E0D0] rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">お探しのサービスが見つからない場合</h3>
                <p className="text-white/80">
                  ご要望に合わせたカスタムサービスもご提案可能です。まずはお気軽にご相談ください。
                </p>
              </div>
              <Button className="mt-4 md:mt-0 bg-white text-[#008B8B] hover:bg-white/90">
                <Link href="/free-consultation">無料相談する</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 