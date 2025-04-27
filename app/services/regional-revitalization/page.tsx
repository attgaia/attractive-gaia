import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Map, Users, Store, Lightbulb, MessageCircle, ArrowLeft } from 'lucide-react';
import Link from "next/link"

export const metadata: Metadata = {
  title: "地域活性化プロジェクト | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAの地域活性化プロジェクトは、地域資源を活かしたビジネス支援と、地方創生のための取り組みを推進しています。",
};

const RegionalRevitalizationPage = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* 1. ファーストビュー（ヒーロー） */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden bg-gradient-to-b from-green-100 to-green-50">
        <div className="container relative z-10">
          <Map className="h-16 w-16 text-green-600 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4 leading-tight">地域活性化・町おこし支援</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
            地域の魅力を引き出す
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            地域の特色を活かした観光振興や特産品開発、<br />
            地元企業支援など、地域活性化のための総合支援を行います。
          </p>
        </div>
      </section>

      {/* 2. サービス紹介セクション */}
      <div className="container mx-auto py-16 md:py-24">
        <section id="menu" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🌱 対応メニュー一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Store className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">観光振興</h3>
              </div>
              <p className="text-sm text-gray-600">観光資源の掘り起こし、観光ルートの企画、観光PRの実施。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Lightbulb className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">特産品開発</h3>
              </div>
              <p className="text-sm text-gray-600">地域資源を活かした商品開発、販路開拓、ブランディング。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Users className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">人材育成</h3>
              </div>
              <p className="text-sm text-gray-600">地域人材の育成、起業支援、雇用創出のための施策実施。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Map className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">地域ブランディング</h3>
              </div>
              <p className="text-sm text-gray-600">地域の魅力を発信するためのブランディング、PR活動。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Store className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">地元企業支援</h3>
              </div>
              <p className="text-sm text-gray-600">地元企業の経営支援、新規事業開発、販路拡大支援。</p>
            </Card>
            <Card className="p-6 bg-green-100 border border-green-200 flex flex-col justify-center items-center text-center">
              <MessageCircle className="h-8 w-8 text-green-700 mb-2" />
              <p className="font-medium text-green-800">「こんな地域活性化をしたい」というご相談もお気軽にどうぞ。</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegionalRevitalizationPage; 