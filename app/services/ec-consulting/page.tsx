import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ShoppingCart, TrendingUp, Settings, Target } from 'lucide-react';

const EcConsultingPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="relative mb-16 md:mb-24 text-center rounded-lg overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-500 py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div> {/* オーバーレイ */}
        <div className="relative z-10 px-4">
          <ShoppingCart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ECコンサルティング</h1>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Amazon・Shopify・BASEなど各種プラットフォームに対応。<br />ECサイト構築から運営戦略、売上向上施策まで、オンライン販売の成功をトータルサポートします。
          </p>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ECビジネスの成長を加速させる支援</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Settings className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">ECサイト構築・最適化</h3>
            <p className="text-gray-600 text-sm">Shopify, BASE等の構築、既存サイトの改修・最適化。売れるサイト設計とデザインをご提案します。</p>
          </Card>
          <Card className="p-6">
            <TrendingUp className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">売上向上戦略・施策実行</h3>
            <p className="text-gray-600 text-sm">SEO、広告運用、SNS連携、CRM導入など、データに基づいた効果的なマーケティング戦略を立案・実行します。</p>
          </Card>
          <Card className="p-6">
            <Target className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Amazon出品・運用サポート</h3>
            <p className="text-gray-600 text-sm">アカウント開設、商品登録、広告運用、SEO対策、レビュー獲得支援まで、Amazon販売を強力にバックアップします。</p>
          </Card>
        </div>
      </section>

      {/* メリットセクション */}
      <section className="mb-16 md:mb-24 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">このサービスを選ぶメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">多様なプラットフォーム対応</h3>
            <p className="text-gray-600 text-sm">Amazon、Shopify、BASEなど、お客様の状況に最適なプラットフォームでの支援が可能です。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">データに基づいた改善提案</h3>
            <p className="text-gray-600 text-sm">アクセス解析や売上データを分析し、具体的な改善施策を継続的にご提案します。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">最新トレンドを反映</h3>
            <p className="text-gray-600 text-sm">常に変化するEC市場の最新動向や技術を取り入れ、競争力のあるECサイト運営を支援します。</p>
          </div>
        </div>
      </section>

      {/* ご利用の流れセクション (記事作成代行ページと同様) */}
      <section className="mb-16 md:mb-24 bg-gray-100 rounded-lg p-8 md:p-12">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">サービスご利用の流れ</h2>
         {/* ... (内容は記事作成代行と同様のため省略) ... */}
         <p className="text-center text-gray-500">(ここに「ご利用の流れ」セクションが入ります)</p>
       </section>

      {/* CTAセクション (記事作成代行ページと同様) */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">ECサイトの売上アップ・効率化のご相談</h2>
        {/* ... (内容は記事作成代行と同様のため省略) ... */}
        <p className="text-center text-emerald-100 mb-8">(ここにCTAセクションが入ります)</p>
        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
          無料相談フォームへ
        </Button>
      </section>
    </div>
  );
};

export default EcConsultingPage; 