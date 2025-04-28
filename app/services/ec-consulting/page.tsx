import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Target, BarChart, Users, Settings, MessageCircle, ArrowLeft } from 'lucide-react';
import Link from "next/link"

export const metadata: Metadata = {
  title: "ECコンサルティングサービス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのECコンサルティングサービスは、ネットショップの売上向上とブランド強化を支援します。ShopifyやWooCommerce対応。",
};

const EcConsultingPage = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      {/* 1. ファーストビュー（ヒーロー） */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden bg-gradient-to-b from-orange-100 to-orange-50">
        <div className="container relative z-10">
          <ShoppingCart className="h-16 w-16 text-orange-600 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4 leading-tight">ECコンサルティング</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
            あなたのECサイトを成功へ導く
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            プロフェッショナルな視点で、<br />
            ECサイトの運営・改善をサポートします。
          </p>
        </div>
      </section>

      {/* 2. サービス紹介セクション */}
      <div className="container mx-auto py-16 md:py-24">
        <section id="menu" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🛍️ 対応メニュー一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Target className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">ECサイト構築</h3>
              </div>
              <p className="text-sm text-gray-600">Shopify、BASE、楽天市場など、最適なプラットフォームの選定と構築。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <BarChart className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">売上改善</h3>
              </div>
              <p className="text-sm text-gray-600">データ分析に基づく改善提案、コンバージョン率向上施策の実施。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Users className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">マーケティング</h3>
              </div>
              <p className="text-sm text-gray-600">SNS活用、メールマーケティング、SEO対策など、集客施策の提案。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Settings className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">運用サポート</h3>
              </div>
              <p className="text-sm text-gray-600">在庫管理、発送業務、カスタマーサポートなど、日常業務の効率化。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <ShoppingCart className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">商品企画</h3>
              </div>
              <p className="text-sm text-gray-600">市場調査、競合分析、商品ラインナップの最適化提案。</p>
            </Card>
            <Card className="p-6 bg-orange-100 border border-orange-200 flex flex-col justify-center items-center text-center">
              <MessageCircle className="h-8 w-8 text-orange-700 mb-2" />
              <p className="font-medium text-orange-800">「こんなECサイトを作りたい」というご相談もお気軽にどうぞ。</p>
            </Card>
          </div>
        </section>

        {/* 3. サービスご利用の流れ */}
        <section id="flow" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🔄 サービスご利用の流れ</h2>
          <div className="relative max-w-xl mx-auto pl-10">
            {/* 縦線 */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-orange-200 rounded-full"></div>
            {/* ステップ */}
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">1</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-orange-800">【ヒアリング】</h3>
                <p className="text-sm text-gray-600">現状の課題、目標、予算などをお伺いします。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">2</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-orange-800">【分析・提案】</h3>
                <p className="text-sm text-gray-600">データ分析に基づき、具体的な改善案をご提案します。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">3</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-orange-800">【実施計画】</h3>
                <p className="text-sm text-gray-600">改善施策の優先順位付けと実施スケジュールを策定します。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">4</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-orange-800">【実行・サポート】</h3>
                <p className="text-sm text-gray-600">改善施策を実施し、必要に応じてサポートを提供します。</p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">5</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-orange-800">【効果測定】</h3>
                <p className="text-sm text-gray-600">施策の効果を測定し、次の改善につなげます。</p>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* 4. 無料相談セクション */}
      <section className="text-center bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">無料相談を承ります</h2>
        <div className="max-w-2xl mx-auto text-center">
          <a href="/free-consultation" className="inline-block bg-white text-orange-600 py-4 px-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors text-lg font-semibold">
            無料相談する
          </a>
        </div>
      </section>
    </div>
  );
};

export default EcConsultingPage; 