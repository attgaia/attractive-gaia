'use client';

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-16">
        <div className="container">
          <div className="mb-8">
            <Link href="/" className="text-emerald-600 hover:underline flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-center mb-12">企業情報</h1>

          {/* 企業理念セクション */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">企業理念</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl font-bold text-emerald-700 mb-6">
                地球環境に優しく銀河系を代表する会社を創る
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">『売り手よし 買い手よし 世間よし』の精神</h3>
                <p className="text-gray-700 leading-relaxed">
                  アトラクティブガイア株式会社では『売り手よし 買い手よし 世間よし』を目指しています。
                  この言葉は、近江商人の言葉です。企業というのは、利益を得なければなりません。
                  しかしただ利益を上げるのではなく、関わる全ての人に良くなって欲しい、つまりは全ての人に幸せになってほしいという想いがあります。
                </p>
              </div>
            </div>
          </section>

          {/* 企業理念2セクション */}
          <section className="mb-20 bg-white py-16">
            <div className="container">
              <h3 className="text-2xl font-bold mb-6 text-center">『0 to 1 常に原点回帰』</h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed mb-6">
                  2005年、1枚のTシャツをデザインするところから弊社はスタートしました。
                  常に弊社の原点にあるのは「困っている人を助ける」ことです。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  アトラクティブガイア株式会社で提供する事業サービスは多岐にわたりますが、
                  全ての提供サービスに一貫して共通しているのが、<strong>お客様の利益向上</strong>です。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  お客様と共に、二人三脚で進んでいきます。
                  決して、独りよがりのデザインやマーケティングは行いません。
                  お客様の利益の為に、無駄は徹底的に省いていきます。
                </p>
              </div>
            </div>
          </section>

          {/* 会社概要セクション */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">会社概要</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700 w-1/3">会社名</th>
                      <td className="px-6 py-4 text-gray-700">ATTRACTIVEGAIA Co., Ltd. (アトラクティブガイア株式会社)</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700">設立</th>
                      <td className="px-6 py-4 text-gray-700">2013年12月24日</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700">創業</th>
                      <td className="px-6 py-4 text-gray-700">2005年6月9日</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700">本社所在地</th>
                      <td className="px-6 py-4 text-gray-700">群馬県伊勢崎市上泉町</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700">伊勢崎営業所</th>
                      <td className="px-6 py-4 text-gray-700">群馬県伊勢崎市田部井町</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700">代表取締役</th>
                      <td className="px-6 py-4 text-gray-700">村山慎也</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-700">事業内容</th>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-2">Web制作・技術サポート系</h4>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Web制作一括請負サービス</li>
                              <li>Web制作・月額ライトプラン</li>
                              <li>Webのお医者さん（WordPress修正・改修）</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">デザイン・プロモーション系</h4>
                            <ul className="list-disc list-inside space-y-1">
                              <li>ブランディングパッケージ</li>
                              <li>マンガLP・バナー制作</li>
                              <li>動画撮影編集</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">集客・ライティング・採用支援</h4>
                            <ul className="list-disc list-inside space-y-1">
                              <li>企業担当者向け記事作成代行</li>
                              <li>採用コンサルティング</li>
                              <li>SNS運用代行サービス</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">商品開発・EC・輸入支援</h4>
                            <ul className="list-disc list-inside space-y-1">
                              <li>商品開発支援サービス</li>
                              <li>ECコンサルティング</li>
                              <li>輸入コンサルティング</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">その他のサービス</h4>
                            <ul className="list-disc list-inside space-y-1">
                              <li>地域活性化・町おこし支援</li>
                              <li>法人向け占い・診断サービス</li>
                              <li>音声書き起こし＆翻訳支援</li>
                              <li>コンテンツ教材販売事業</li>
                              <li>自社オリジナル商品販売</li>
                              <li>リユース事業</li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* お問い合わせセクション */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">お問い合わせ</h3>
                <p className="text-gray-100">
                  サービスに関するご質問やご相談は、お気軽にお問い合わせください。
                </p>
              </div>
              <Button className="mt-4 md:mt-0 bg-white text-emerald-700 hover:bg-gray-100">
                <Link href="/contact">お問い合わせする</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}