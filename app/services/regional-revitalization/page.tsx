import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin, Users, Megaphone, Building } from 'lucide-react';

const RegionalRevitalizationPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="relative mb-16 md:mb-24 text-center rounded-lg overflow-hidden bg-gradient-to-r from-lime-500 to-green-500 py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div> {/* オーバーレイ */}
        <div className="relative z-10 px-4">
          <MapPin className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">地域活性化・町おこし支援</h1>
          <p className="text-lg md:text-xl text-lime-100 mb-8 max-w-3xl mx-auto">
            地域の特色を活かした観光振興や特産品開発、企業支援まで。<br />地元群馬を拠点に、持続可能な地域づくりをサポートします。
          </p>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">地域と共に未来を創る支援</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Building className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">地元企業支援・連携</h3>
            <p className="text-gray-600 text-sm">地元企業のDX推進、マーケティング支援、補助金活用サポートなどを通じ、地域経済の活性化に貢献します。</p>
          </Card>
          <Card className="p-6">
            <Users className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">観光振興・関係人口創出</h3>
            <p className="text-gray-600 text-sm">地域の魅力を発信するWebサイトやSNS運用、イベント企画、特産品開発などを支援し、交流人口・関係人口の増加を目指します。</p>
          </Card>
          <Card className="p-6">
            <Megaphone className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">セミナー・講演活動</h3>
            <p className="text-gray-600 text-sm">AI活用、Webマーケティング、地域ブランディングなどをテーマにしたセミナーや講演を行い、地域の人材育成に貢献します。</p>
          </Card>
        </div>
      </section>

      {/* メリットセクション */}
      <section className="mb-16 md:mb-24 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">このサービスを選ぶメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">地域密着の視点</h3>
            <p className="text-gray-600 text-sm">群馬県に根ざし、地域の課題や特性を深く理解した上で、最適なソリューションをご提案します。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">多様なネットワーク</h3>
            <p className="text-gray-600 text-sm">行政、企業、地域団体など、多様な主体との連携により、幅広い支援を実現します。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">デジタル技術の活用</h3>
            <p className="text-gray-600 text-sm">Webサイト、SNS、AIなどのデジタル技術を活用し、効果的・効率的な地域活性化を推進します。</p>
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
        <h2 className="text-3xl font-bold text-white mb-6">地域活性化に関するご相談はこちら</h2>
        {/* ... (内容は記事作成代行と同様のため省略) ... */}
        <p className="text-center text-emerald-100 mb-8">(ここにCTAセクションが入ります)</p>
        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
          無料相談フォームへ
        </Button>
      </section>
    </div>
  );
};

export default RegionalRevitalizationPage; 