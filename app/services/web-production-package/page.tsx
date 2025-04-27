import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Globe, Palette, Code, Server, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "Web制作パッケージ | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAが提供するWeb制作パッケージは、デザインから開発、運用までを一貫してサポート。ビジネスの成長に繋がるサイト構築を実現します。",
};

const WebProductionPackagePage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="relative mb-16 md:mb-24 text-center rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div> {/* オーバーレイ */}
        <div className="relative z-10 px-4">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Web制作一括請負サービス</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            企画からデザイン、開発、運用までワンストップで提供。<br />システム・ECサイト構築にも対応し、ビジネスの成長を加速させます。
          </p>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ワンストップで理想のWebサイトを実現</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Palette className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">戦略的な企画・デザイン</h3>
            <p className="text-gray-600 text-sm">ターゲット分析、競合調査に基づき、成果につながるサイト構成と、ブランドイメージを高めるオリジナルデザインをご提案します。</p>
          </Card>
          <Card className="p-6">
            <Code className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">高品質な開発・実装</h3>
            <p className="text-gray-600 text-sm">WordPressを始め、各種CMSやフレームワークに対応。ECサイト、予約システム、会員サイトなど、複雑な要件にも応えます。</p>
          </Card>
          <Card className="p-6">
            <Server className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">公開後の運用・保守</h3>
            <p className="text-gray-600 text-sm">サーバー管理、ドメイン設定、コンテンツ更新、アクセス解析、セキュリティ対策まで、公開後も安心して運用できる体制をサポートします。</p>
          </Card>
        </div>
      </section>

      {/* メリットセクション */}
      <section className="mb-16 md:mb-24 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">このサービスを選ぶメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">窓口一本化でスムーズ</h3>
            <p className="text-gray-600 text-sm">企画から運用まで担当者が一貫して対応。コミュニケーションロスを防ぎ、迅速な進行を実現します。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">拡張性の高いサイト構築</h3>
            <p className="text-gray-600 text-sm">将来的な機能追加やリニューアルを見据えた、柔軟でメンテナンスしやすい構成で開発します。</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">集客・売上向上に貢献</h3>
            <p className="text-gray-600 text-sm">SEO対策やマーケティング視点を取り入れ、単なる制作に留まらず、ビジネス成果につながるWebサイトを目指します。</p>
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ご利用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ステップ1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">お問い合わせ</h3>
              <p className="text-gray-600">
                お問い合わせフォームまたはお電話にてご連絡ください。ご要望やお悩みをお伺いします。
              </p>
            </div>

            {/* ステップ2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ヒアリング</h3>
              <p className="text-gray-600">
                オンラインまたは対面にて、詳細なヒアリングを行います。ご要望や目的を明確にさせていただきます。
              </p>
            </div>

            {/* ステップ3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">制作開始</h3>
              <p className="text-gray-600">
                ご契約後、制作を開始します。定期的な進捗報告とご確認をさせていただきます。
              </p>
            </div>

            {/* ステップ4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">納品・運用開始</h3>
              <p className="text-gray-600">
                完成したサイトを納品し、運用を開始します。必要に応じて運用サポートも承ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">Webサイト制作に関するご相談はこちら</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">ご予算</label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">選択してください</option>
                <option value="under-500k">50万円未満</option>
                <option value="500k-1m">50万円〜100万円</option>
                <option value="1m-2m">100万円〜200万円</option>
                <option value="over-2m">200万円以上</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">ご要望・お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                <a href="/privacy" className="text-emerald-600 hover:text-emerald-500">プライバシーポリシー</a>に同意する
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WebProductionPackagePage; 