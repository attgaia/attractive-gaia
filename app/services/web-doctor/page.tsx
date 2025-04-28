import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, HelpCircle, MessageCircle, Server, Settings, HardDrive, Truck, Edit, Wrench, AlertTriangle, ArrowLeft } from 'lucide-react'; // アイコン追加
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const metadata: Metadata = {
  title: "Webドクターサービス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのWebドクターサービスは、既存サイトの課題を診断・改善。SEO対策や表示速度向上など、Webサイトの健康状態を最適化します。",
};

const WebDoctorPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* 1. ファーストビュー（ヒーロー） */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
        {/* 背景に波線や模様などを追加するとよりクリエイティブに */}
        <div className="container relative z-10">
          <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">Webのお医者さん</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
            あなたのサイト、調子悪くありませんか？
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            WordPressサイトの不調・引越し・部分修正など、<br />
            「ちょっとした困りごと」にプロが迅速に対応します。
          </p>
        </div>
      </section>

      {/* 2. サービス紹介セクション */}
      <div className="container mx-auto py-16 md:py-24">
        <section id="menu" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">✅ 対応メニュー一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Truck className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">サーバー移行</h3>
              </div>
              <p className="text-sm text-gray-600">レンタルサーバーの乗り換えサポート、データ移行、動作確認まで。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Settings className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">ドメイン登録・設定</h3>
              </div>
              <p className="text-sm text-gray-600">ネームサーバー設定、SSL証明書の導入・更新なども対応。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <HardDrive className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">WordPressインストール</h3>
              </div>
              <p className="text-sm text-gray-600">新規サーバーへの初期構築、推奨プラグイン導入・設定。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Server className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">WordPressお引越し</h3>
              </div>
              <p className="text-sm text-gray-600">旧サイトからのデータ移行、URL調整、リダイレクト設定など。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Edit className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">サイトの一部修正</h3>
              </div>
              <p className="text-sm text-gray-600">レイアウト調整、表示崩れの修正、テキスト・画像差し替え、リンク追加など。</p>
            </Card>
            <Card className="p-6 bg-blue-100 border border-blue-200 flex flex-col justify-center items-center text-center">
              <HelpCircle className="h-8 w-8 text-blue-700 mb-2" />
              <p className="font-medium text-blue-800">「これって頼めるかな？」というご相談もお気軽にどうぞ。</p>
            </Card>
          </div>
        </section>

        {/* 3. 利用シーン・よくあるお悩み */}
        <section id="problems" className="mb-16 md:mb-24 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💬 よくあるご相談</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center p-4 bg-red-50 rounded-md border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-red-800">「サイトが表示されなくなった…」</p>
            </div>
            <div className="flex items-center p-4 bg-red-50 rounded-md border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-red-800">「前に作った業者と連絡がつかない」</p>
            </div>
            <div className="flex items-center p-4 bg-red-50 rounded-md border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-red-800">「一部だけ直したいけど誰に頼めば？」</p>
            </div>
            <div className="flex items-center p-4 bg-red-50 rounded-md border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-red-800">「ドメインとサーバー周りが不安」</p>
            </div>
            <div className="flex items-center p-4 bg-red-50 rounded-md border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-red-800">「WordPressの管理画面に入れない…」</p>
            </div>
            <div className="flex items-center p-4 bg-blue-600 text-white rounded-md">
              <Check className="h-5 w-5 mr-3 flex-shrink-0" />
              <p className="text-sm font-semibold">そんな"Webのかかりつけ医"として、スポット対応いたします。</p>
            </div>
          </div>
        </section>

        {/* 4. 対応の流れ */}
        <section id="flow" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🩺 サービスの流れ</h2>
          <div className="relative max-w-xl mx-auto pl-10">
            {/* 縦線 */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-200 rounded-full"></div>
            {/* ステップ */}
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">1</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-blue-800">【お問い合わせ】</h3>
                <p className="text-sm text-gray-600">フォームやLINEから現状のお困りごとをご相談ください。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">2</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-blue-800">【ヒアリング・お見積り】</h3>
                <p className="text-sm text-gray-600">状況を詳しく伺い、対応内容と費用をお見積りします。</p>
              </Card>
            </div>
            <div className="relative mb-10">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">3</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-blue-800">【作業実施】</h3>
                <p className="text-sm text-gray-600">ご依頼内容に基づき、迅速かつ丁寧に対応いたします。</p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute left-[-1.75rem] top-0 h-10 w-10 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 shadow">4</div>
              <Card className="ml-6 bg-white p-4 shadow">
                <h3 className="text-lg font-semibold mb-1 text-blue-800">【ご報告・確認】</h3>
                <p className="text-sm text-gray-600">作業内容をご報告し、問題ないかご確認いただきます。必要に応じて再調整も可能です。</p>
              </Card>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">※急ぎ対応にもできる限り柔軟に対応します。</p>
        </section>

        {/* 5. お申し込みフォーム */}
        <section id="form" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">無料相談を承ります</h2>
          <div className="max-w-2xl mx-auto text-center">
            <a href="/free-consultation" className="inline-block bg-blue-600 text-white py-4 px-8 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg font-semibold">
              無料相談する
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDoctorPage; 