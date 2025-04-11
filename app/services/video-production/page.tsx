'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Film, Users, Mic, Store, Sparkles, Camera, Edit3, Bot, Target, Clock, PlayCircle, MessageCircle, CheckCircle } from 'lucide-react';

const VideoProductionPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. ヒーローセクション */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
        {/* 背景要素: 半透明オーバーレイと再生ボタン風アイコン */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        {/* <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-white opacity-20 z-0" /> */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0" style={{backgroundImage: "url('/images/video-bg-placeholder.jpg')"}}></div> {/* 背景画像プレースホルダ */}

        <div className="container relative z-10">
          <Film className="h-16 w-16 mx-auto mb-6 text-white drop-shadow-lg" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
            伝わる、惹きつける、映像の力。
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow">
            企業PR、商品紹介、採用ムービーまで。<br />
            目的に合わせた"伝える映像"を、撮影から編集までワンストップで制作します。
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        {/* 2. サービス紹介セクション */}
        <section id="service-menu" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">📹 こんな映像を制作できます</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              icon: <Video className="h-6 w-6 text-purple-600" />,
              title: "企業ブランディング動画",
            }, {
              icon: <Sparkles className="h-6 w-6 text-pink-500" />,
              title: "商品紹介・使い方動画",
            }, {
              icon: <Users className="h-6 w-6 text-red-500" />,
              title: "採用・リクルートムービー",
            }, {
              icon: <Mic className="h-6 w-6 text-blue-500" />,
              title: "セミナー・講演記録映像",
            }, {
              icon: <Store className="h-6 w-6 text-green-500" />,
              title: "店舗・施設紹介動画",
            }, {
              icon: <PlayCircle className="h-6 w-6 text-indigo-500" />,
              title: "SNS用ショートクリップ",
              sub: "(TikTok・Instagramリール)"
            }].map((item, index) => (
              <Card key={index} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{item.title}</h3>
                </div>
                {item.sub && <p className="text-sm text-gray-500 ml-9">{item.sub}</p>}
              </Card>
            ))}
          </div>
        </section>

        {/* 3. ここが強い！ポイント */}
        <section id="strengths" className="mb-16 md:mb-24 bg-gradient-to-r from-gray-100 to-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💡 なぜ選ばれる？当社の強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Camera className="h-7 w-7 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">経験豊富な撮影パートナー</h3>
                <p className="text-sm text-gray-600">多様なジャンルに対応可能なプロが撮影を担当します。</p>
              </div>
            </div>
            <div className="flex items-start">
              <Edit3 className="h-7 w-7 text-pink-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">編集のみの依頼もOK</h3>
                <p className="text-sm text-gray-600">撮影済みの素材からの編集、AIツール活用も可能です。</p>
              </div>
            </div>
            <div className="flex items-start">
              <Bot className="h-7 w-7 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">AI動画生成オプション</h3>
                <p className="text-sm text-gray-600">AIでナレーション付きPR映像などを効率的に制作できます。</p>
              </div>
            </div>
            <div className="flex items-start">
              <Target className="h-7 w-7 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">「伝える」構成力</h3>
                <p className="text-sm text-gray-600">目的達成にフォーカスしたシナリオ・構成をご提案します。</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-7 w-7 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">スピード納品＆柔軟対応</h3>
                <p className="text-sm text-gray-600">お急ぎの案件にも可能な限り対応いたします。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 制作の流れ */}
        <section id="flow" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🎬 制作の流れ</h2>
          <div className="relative max-w-2xl mx-auto pl-12">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-purple-200 rounded-full"></div>
            {[{
              title: "【ご相談】",
              desc: "どんな映像を作りたいか、目的やターゲットなどをヒアリングします。"
            }, {
              title: "【企画構成】",
              desc: "ヒアリング内容に基づき、絵コンテや構成案を作成。すり合わせを行います。"
            }, {
              title: "【撮影・編集】",
              desc: "必要に応じて撮影を実施。AI生成や編集作業を進めます。"
            }, {
              title: "【納品・公開】",
              desc: "完成映像をご確認いただき納品。YouTube・SNS用フォーマット等にも対応します。"
            }].map((step, index) => (
              <div key={index} className="relative mb-10">
                <div className="absolute left-[-2rem] top-0 h-10 w-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">{index + 1}</div>
                <Card className="ml-8 bg-white p-4 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-1 text-purple-800">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </Card>
              </div>
            ))}
          </div>
           <p className="text-center text-sm text-gray-600 mt-8">※ 撮影のみ・編集のみのご依頼も承ります。お気軽にご相談ください。</p>
        </section>

        {/* 5. サンプル映像・実績（準備中） */}
        <section id="portfolio" className="mb-16 md:mb-24 text-center bg-gray-100 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">🎞️ 制作実績</h2>
          <p className="text-gray-600 mb-4">ただいま、順次掲載予定です。</p>
          <p className="text-sm text-gray-500">お急ぎの方には、個別にご紹介可能な過去事例もございますので、お問い合わせください。</p>
        </section>

        {/* 6. CTA（お問い合わせ誘導） */}
        <section id="cta" className="text-center bg-white rounded-lg shadow-xl p-10 md:p-16 border-t-4 border-purple-600">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">あなたの想い、映像で届けよう。</h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            LINEまたはお問い合わせフォームより、まずはご相談ください。<br />構成や台本づくりから、プロが伴走します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
              <MessageCircle className="mr-2 h-5 w-5" /> お問い合わせフォームへ
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
              {/* 仮のLINEアイコン */}
              <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 40 40"><path d="M32.2 6.8a15.9 15.9 0 10-24.4 24.4A15.9 15.9 0 0032.2 6.8zM11.5 25.5l-.2.1h-.1l-1.7.8c-.5.3-.8.8-.8 1.4 0 .8.7 1.5 1.5 1.5.3 0 .5-.1.8-.2l2.5-1.2c.2-.1.3-.2.5-.2.2 0 .4.1.6.2l2.3 1.5c.3.2.6.3 1 .3.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-.1 0-.2 0-.3.1l-1.8 1.1c-.2.1-.4.2-.7.2-.2 0-.4-.1-.6-.2l-2.3-1.5c-.6-.4-1.3-.5-2 .1zm8.8-2.4c.8 0 1.5-.7 1.5-1.5v-7.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v7.3c0 .8.7 1.5 1.5 1.5zm6.7 0c.8 0 1.5-.7 1.5-1.5v-7.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v7.3c0 .8.7 1.5 1.5 1.5z"></path></svg>
              LINEで相談する
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoProductionPage; 