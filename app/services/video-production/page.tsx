'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Film, Users, Mic, Store, Sparkles, Camera, Edit3, Bot, Target, Clock, PlayCircle, MessageCircle, CheckCircle, Check, Edit, Music, ArrowLeft } from 'lucide-react';
import Link from "next/link"

const VideoProductionPage = () => {
  return (
    <div className="bg-purple-50 min-h-screen">
      {/* 1. ファーストビュー（ヒーロー） */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden bg-gradient-to-b from-purple-100 to-purple-50">
        <div className="container relative z-10">
          <Video className="h-16 w-16 text-purple-600 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4 leading-tight">動画撮影編集</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
            あなたの想いを映像で伝える
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            プロフェッショナルな撮影・編集技術で、<br />
            あなたのビジネスや活動を魅力的に表現します。
          </p>
        </div>
      </section>

      {/* 2. サービス紹介セクション */}
      <div className="container mx-auto py-16 md:py-24">
        <section id="menu" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🎥 対応メニュー一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Camera className="h-8 w-8 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">企業PR動画</h3>
              </div>
              <p className="text-sm text-gray-600">会社紹介、サービス説明、採用動画など、企業の魅力を伝える動画制作。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Edit className="h-8 w-8 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">商品紹介動画</h3>
              </div>
              <p className="text-sm text-gray-600">商品の特徴や使い方を分かりやすく伝える動画制作。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Music className="h-8 w-8 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">イベント動画</h3>
              </div>
              <p className="text-sm text-gray-600">セミナー、ワークショップ、イベントの記録動画制作。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Video className="h-8 w-8 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">SNS動画</h3>
              </div>
              <p className="text-sm text-gray-600">Instagram、TikTok、YouTube向けの短尺動画制作。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Edit className="h-8 w-8 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">動画編集</h3>
              </div>
              <p className="text-sm text-gray-600">既存の動画素材の編集、カラーグレード、テロップ追加など。</p>
            </Card>
            <Card className="p-6 bg-purple-100 border border-purple-200 flex flex-col justify-center items-center text-center">
              <MessageCircle className="h-8 w-8 text-purple-700 mb-2" />
              <p className="font-medium text-purple-800">「こんな動画を作りたい」というご相談もお気軽にどうぞ。</p>
            </Card>
          </div>
        </section>

        {/* 3. 制作の流れ */}
        <section id="flow" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🎬 制作の流れ</h2>
          <div className="relative max-w-xl mx-auto pl-10">
            {/* 縦線 */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-purple-200 rounded-full"></div>
            {/* ステップ */}
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">1</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-purple-800">【ヒアリング】</h3>
                <p className="text-sm text-gray-600">動画の目的、ターゲット、希望する雰囲気などをお伺いします。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">2</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-purple-800">【企画・構成】</h3>
                <p className="text-sm text-gray-600">動画の構成、撮影プラン、必要な素材などを提案します。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">3</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-purple-800">【撮影】</h3>
                <p className="text-sm text-gray-600">プロの機材を使用し、高品質な映像を撮影します。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">4</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-purple-800">【編集】</h3>
                <p className="text-sm text-gray-600">撮影した素材を編集し、効果音やBGMを追加します。</p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">5</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-purple-800">【納品】</h3>
                <p className="text-sm text-gray-600">完成した動画を確認いただき、必要に応じて修正を加えます。</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. CTA（無料相談誘導） */}
        <section id="cta" className="text-center bg-white rounded-lg shadow-lg p-10 md:p-16 border-t-4 border-purple-600">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">＼まずは無料相談から始めましょう／</h2>
          <p className="text-gray-700 mb-8 max-w-lg mx-auto">
            動画制作のご相談は無料で承ります。<br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 shadow-lg">
              <Link href="/free-consultation">
                <MessageCircle className="mr-2 h-5 w-5" /> 無料相談する
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoProductionPage; 