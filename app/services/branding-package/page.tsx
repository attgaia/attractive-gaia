import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Palette, Sparkles, Layers, MessageCircle, FileText, Video, Globe } from 'lucide-react';
import { ContactForm } from "@/components/contact-form"

const BrandingPackagePage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="relative mb-16 md:mb-24 text-center rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div> {/* オーバーレイ */}
        <div className="relative z-10 px-4">
          <Palette className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ブランディングパッケージ</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            ロゴ、名刺、Webサイト、各種販促物まで一括支援。<br />一貫したブランドイメージを構築し、企業の価値を高めます。
          </p>
        </div>
      </section>

      {/* 課題提起セクション */}
      <section className="mb-16 md:mb-24 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">ブランドイメージ、<br className="md:hidden"/>こんな課題はありませんか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <Card className="p-6 bg-white shadow-sm">
            <Layers className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">Webサイト、名刺、資料でデザインがバラバラ...</p>
          </Card>
          <Card className="p-6 bg-white shadow-sm">
            <MessageCircle className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">自社の強みや魅力が顧客にうまく伝わっていない...</p>
          </Card>
          <Card className="p-6 bg-white shadow-sm">
            <Sparkles className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">競合との差別化ができず、埋もれてしまっている...</p>
          </Card>
        </div>
        <p className="text-center text-xl font-bold text-emerald-600 mt-8">→ 一貫したブランディングで解決できます！</p>
      </section>

      {/* サービス概要セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">パッケージで提供する主な制作物</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">企業の顔となる各種ツールを、統一されたデザインコンセプトで制作。ブランドのメッセージを一貫して届けます。</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-emerald-100 rounded-full p-4 mb-3">
              <Sparkles className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="font-medium">ロゴデザイン</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-100 rounded-full p-4 mb-3">
              <FileText className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="font-medium">名刺・封筒</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-100 rounded-full p-4 mb-3">
              <Layers className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="font-medium">パンフレット・チラシ</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-100 rounded-full p-4 mb-3">
              <Globe className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="font-medium">Webサイトデザイン</p>
          </div>
          {/* 必要に応じて動画などを追加 */}
           <div className="flex flex-col items-center">
             <div className="bg-emerald-100 rounded-full p-4 mb-3">
               <Video className="h-8 w-8 text-emerald-600" />
             </div>
             <p className="font-medium">PR動画 (オプション)</p>
           </div>
        </div>
         <p className="text-center text-sm text-gray-500 mt-6">※上記は一例です。ご要望に応じて柔軟にカスタマイズ可能です。</p>
      </section>

      {/* メリットセクション */}
      <section className="mb-16 md:mb-24 bg-emerald-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">アトラクティブガイアを選ぶメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ワンストップで統一感</h3>
            <p className="text-gray-600 text-sm">複数の業者に依頼する手間なく、すべての制作物を一貫したデザインとメッセージで制作。ブランド体験を向上させます。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI活用の効率化支援</h3>
            <p className="text-gray-600 text-sm">デザイン案の生成やコピーライティング補助にAIを活用。スピーディーかつコストを抑えた提案も可能です。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">本質を捉えたデザイン</h3>
            <p className="text-gray-600 text-sm">貴社の強み、ビジョン、ターゲットを深く理解し、見た目だけでなく、心に響くブランドストーリーをデザインに落とし込みます。</p>
          </div>
        </div>
      </section>

      {/* 制作プロセス */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">制作プロセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ステップ1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ヒアリング</h3>
              <p className="text-gray-600">
                お客様のビジョンや目標、ターゲット層などを詳しくヒアリングし、ブランド戦略の方向性を決定します。
              </p>
            </div>

            {/* ステップ2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">コンセプト設計</h3>
              <p className="text-gray-600">
                ヒアリング内容を基に、ブランドの核となるコンセプトを設計し、ロゴやカラーパレットなどの基本要素を決定します。
              </p>
            </div>

            {/* ステップ3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">デザイン制作</h3>
              <p className="text-gray-600">
                決定したコンセプトに基づき、ロゴ、カラーパレット、タイポグラフィなどのデザイン要素を制作します。
              </p>
            </div>

            {/* ステップ4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ガイドライン作成</h3>
              <p className="text-gray-600">
                制作したデザイン要素の使用方法や、ブランドの表現方法をまとめたガイドラインを作成します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">ブランド構築に関するご相談はこちら</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default BrandingPackagePage; 