'use client'; // アコーディオンなどクライアントサイドのインタラクションが必要になる可能性があるため

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check, X, Star, ChevronDown } from 'lucide-react'; // アイコン追加
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // FAQ用（要インストール・設定）

const WebProductionLitePage = () => {
  // FAQデータ（仮）
  const faqItems = [
    { question: '契約期間に縛りはありますか？', answer: '最低契約期間は6ヶ月です。その後は1ヶ月単位での更新となります。' },
    { question: 'ドメインやサーバーは用意してもらえますか？', answer: 'ライト・スタンダードプランは基本的にシンレンタルサーバーでの運用を推奨しています。ドメイン取得・サーバー契約の代行も可能です（別途費用）。プレミアムプランでは最適なホスティング環境をご提案します。' },
    { question: '修正回数を超えた場合はどうなりますか？', answer: '超過分については、別途スポットでの修正費用をお見積りさせていただきます。' },
    { question: 'ECサイトは作れますか？', answer: '本プランは簡易ホームページ支援サービスのため、EC機能は対象外となります。ECサイト構築をご希望の場合は、別途ご相談ください。' },
  ];

  return (
    <div className="bg-gray-50">
      {/* 1. ファーストビュー（ヒーロー） */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-center overflow-hidden">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">月額制 Webサイト制作・運用プラン</h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            初期費用を抑えて、プロ品質のホームページを。制作から運用・保守まで月額固定でサポートします。
          </p>
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
            今すぐ相談する (無料)
          </Button>
        </div>
        {/* 背景装飾など */}
        <div className="absolute -bottom-1/2 left-0 right-0 h-1/2 bg-gray-50 skew-y-[-3deg] transform"></div>
      </section>

      <div className="container mx-auto py-12 md:py-20">
        {/* 2. 料金プラン */}
        <section id="pricing" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">選べる3つの月額プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* ライトプラン */}
            <Card className="flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">ライト</CardTitle>
                <CardDescription>まずは手軽に始めたい方</CardDescription>
                <p className="text-3xl font-bold my-4">¥9,800<span className="text-sm font-normal">/月</span></p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-sm">
                <p className="font-semibold">テンプレート使用</p>
                <p>静的HTML (V0ベース手組み)</p>
                <p>ページ数: 1〜3P</p>
                <p>シンレンタルサーバー向け</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />修正: 月1回まで</p>
                <p className="flex items-center"><X className="h-4 w-4 text-red-500 mr-2" />カスタムデザイン</p>
                <p className="flex items-center"><X className="h-4 w-4 text-red-500 mr-2" />CMS導入</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  ライトプランで申込む
                </Button>
              </CardFooter>
            </Card>

            {/* スタンダードプラン */}
            <Card className="flex flex-col border-2 border-emerald-500 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-3 py-1 text-sm font-semibold rounded-full">一番人気</div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">スタンダード</CardTitle>
                <CardDescription>一般的なWebサイトに最適</CardDescription>
                <p className="text-3xl font-bold my-4">¥19,800<span className="text-sm font-normal">/月</span></p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-sm">
                <p className="font-semibold">複数ページ対応</p>
                <p>静的HTML + 軽量JS</p>
                <p>ページ数: 応相談</p>
                <p>顧客用サーバー対応可</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />修正: 月2回まで</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />軽度のカスタム</p>
                <p className="flex items-center"><X className="h-4 w-4 text-red-500 mr-2" />CMS導入</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  スタンダードプランで申込む
                </Button>
              </CardFooter>
            </Card>

            {/* プレミアムプラン */}
            <Card className="flex flex-col bg-gray-800 text-white border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">プレミアム</CardTitle>
                <CardDescription className="text-gray-400">高機能・高拡張性が必要な方</CardDescription>
                <p className="text-3xl font-bold my-4">¥39,800<span className="text-sm font-normal">/月〜</span></p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-sm text-gray-300">
                <p className="font-semibold">フルカスタムデザイン</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" />CMS導入 (WordPress/Headless)</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" />AIチャットボット導入可 (Dify等)</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" />複数LP、DB連携、ステップメール等</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" />高速ホスティング (Vercel+Cloudflare)</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" />優先サポート</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                  プレミアムプランの詳細・相談
                </Button>
              </CardFooter>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8">※プレミアムプランは要件に応じてお見積り。上記は基本構成の目安です。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-16 md:mb-24 text-center">
           <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
             プランについて相談する (無料)
           </Button>
         </section>

        {/* 3. プレミアムプランの特典紹介 */}
        <section id="premium-features" className="mb-16 md:mb-24 bg-white rounded-lg p-8 md:p-12 shadow">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">プレミアムプランだけの特別支援</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">最新技術の導入支援</h3>
                <p className="text-sm text-gray-600">ヘッドレスCMS、AIチャットボットなど、ビジネスを加速させる最新技術の導入をサポートします。</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">高速・高セキュリティ環境</h3>
                <p className="text-sm text-gray-600">Vercel + Cloudflareによるモダンな構成で、表示速度とセキュリティを高めます。</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">柔軟なカスタマイズ対応</h3>
                <p className="text-sm text-gray-600">データベース連携、外部API連携、ステップメール実装など、複雑な要件にも柔軟に対応可能です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 想定業種・導入シーン例 */}
        <section id="use-cases" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">こんな業種・シーンにおすすめ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Card className="p-4">
              <p className="font-medium">飲食店・小売店</p>
              <p className="text-xs text-gray-500">店舗紹介・メニュー掲載</p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">士業・コンサルタント</p>
              <p className="text-xs text-gray-500">サービス紹介・実績掲載</p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">個人事業主・フリーランス</p>
              <p className="text-xs text-gray-500">ポートフォリオ・ブログ</p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">スタートアップ企業</p>
              <p className="text-xs text-gray-500">サービスLP・会社概要</p>
            </Card>
          </div>
        </section>

        {/* 5. よくある質問 */}
        <section id="faq" className="mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                {/* <Accordion type="single" collapsible> */}
                {/*   <AccordionItem value={`item-${index}`}> */}
                {/*     <AccordionTrigger className="p-4 font-medium text-left hover:bg-gray-50"> */}
                {/*       {item.question} */}
                {/*     </AccordionTrigger> */}
                {/*     <AccordionContent className="p-4 pt-0 text-gray-600 text-sm"> */}
                {/*       {item.answer} */}
                {/*     </AccordionContent> */}
                {/*   </AccordionItem> */}
                {/* </Accordion> */}
                {/* --- アコーディオンUI (ライブラリなし版) --- */}
                <details>
                  <summary className="p-4 font-medium cursor-pointer hover:bg-gray-100 flex justify-between items-center">
                    {item.question}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 text-sm border-t">
                    {item.answer}
                  </div>
                </details>
                {/* --- ここまで --- */}
              </Card>
            ))}
          </div>
        </section>

        {/* 6. 注意事項 */}
        <section id="notes" className="mb-16 md:mb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto">
          <h3 className="font-semibold text-gray-700 mb-2">【注意事項】</h3>
          <p>・修正対応は各プラン記載の回数・範囲内となります。デザインの大幅な変更や機能追加は別途お見積りとなります。</p>
          <p>・複雑な機能（予約システム、決済連携、会員機能など）の追加や、ロゴ制作・写真撮影などの業務外作業は別途お見積りとなります。</p>
          <p>・本サービスは「簡易ホームページ支援サービス」として設計されており、大規模サイトや高度なシステム開発は対象外となる場合がございます。</p>
        </section>

        {/* 7. 申込み・相談導線（CTA付き） */}
        <section id="cta-bottom" className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
          <h2 className="text-3xl font-bold text-white mb-6">Webサイト制作・運用でお悩みですか？</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            最適なプランのご提案や、ご不明点について丁寧にご説明します。まずはお気軽にご相談ください。
          </p>
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
            無料相談を申し込む
          </Button>
        </section>
      </div>
    </div>
  );
};

export default WebProductionLitePage; 