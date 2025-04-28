'use client';

import Link from "next/link"
import { ArrowLeft, Check, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function WebProductionLiteClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-16">
        <div className="container">
          <div className="mb-8">
            <Link href="/services" className="text-emerald-600 hover:underline flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              サービス一覧に戻る
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Web制作・月額プラン</h1>
            <p className="text-lg text-center text-gray-600 mb-12">
              月額固定料金でWebサイトの制作・運用・保守を継続的にサポート。<br />
              EC機能を除く一般的なWebサイト向けのプランで、安心の保守体制を提供します。
            </p>

            {/* プラン一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* ライトプラン */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-emerald-500">
                <div className="p-6">
                  <div className="inline-block bg-emerald-100 rounded-full px-3 py-1 text-sm font-semibold text-emerald-600 mb-4">
                    🟢 ライトプラン
                  </div>
                  <h3 className="text-sm text-gray-500 mb-2">おまかせ型</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">¥9,800</span>
                    <span className="text-gray-500">/月（税込）</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    シンプルで十分。まずは「名刺代わり」のホームページが欲しい方へ。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                      <p>初期費用 0円</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                      <p>テンプレートおまかせ制作（1〜3ページ）</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                      <p>スマホ対応・独自ドメイン可（ドメイン代別）</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                      <p>シンレンタルサーバー対応（またはお持ちのサーバー）</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                      <p>月1回までのテキスト修正対応</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm">✅ 制作は最短3営業日以内に納品。</p>
                    <p className="text-sm">✅ デザインは完全おまかせ。迷わず始められます。</p>
                  </div>
                </div>
              </div>

              {/* スタンダードプラン */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500">
                <div className="p-6">
                  <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mb-4">
                    🔵 スタンダードプラン
                  </div>
                  <h3 className="text-sm text-gray-500 mb-2">柔軟対応型</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">¥19,800</span>
                    <span className="text-gray-500">/月（税込）</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    しっかり見せたい。お店・サービス紹介に"ちゃんとしたサイト"を持ちたい方へ。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <p>ページ数：〜5ページ（テンプレカスタム可）</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <p>画像・カラーの調整可能</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <p>お問い合わせフォーム設置</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <p>修正は月2回まで</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <p>サーバーはシン or 持ち込み自由</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <p>SEO軽微対応（OGP・タイトル・メタ設定など）</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm">💡 おまかせと違い、細かい指定やご要望も反映します。</p>
                  </div>
                </div>
              </div>

              {/* プレミアムプラン */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-purple-500">
                <div className="p-6">
                  <div className="inline-block bg-purple-100 rounded-full px-3 py-1 text-sm font-semibold text-purple-600 mb-4">
                    🟣 プレミアムプラン
                  </div>
                  <h3 className="text-sm text-gray-500 mb-2">拡張型・AI対応</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">¥29,800</span>
                    <span className="text-gray-500">〜/月（税別）</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    集客・自動化・CMS管理…次のフェーズを本気で目指す方に。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <p>Vercel＋Cloudflare構成（超高速＆安定）</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <p>WordPressまたはヘッドレスCMS導入</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <p>DifyなどAIチャットボット連携可能</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <p>高機能フォーム・LP複数展開対応</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <p>ブログ構築・予約機能なども相談可</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <p>月3回までの修正含む（内容に応じて調整）</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm">🚀 海外対応・多言語展開・アプリ連携も別途相談可能です。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold mb-6">📌 ご注意事項（全プラン共通）</h2>
              <div className="space-y-4 text-gray-700">
                <p>・契約は月単位。最低利用期間：3ヶ月（途中解約は返金不可）</p>
                <p>・内容により制作をお断りする場合があります（規約あり）</p>
                <p>・支払い方法：クレジットカード（Stripe）推奨。銀行振込は6ヶ月一括のみ対応可</p>
              </div>
            </div>

            {/* 無料相談セクション */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">無料相談を承ります</h2>
              <div className="text-center">
                <a href="/free-consultation" className="inline-block bg-emerald-600 text-white py-4 px-8 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors text-lg font-semibold">
                  無料相談する
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 