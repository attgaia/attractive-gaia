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
      </main>
    </div>
  )
} 