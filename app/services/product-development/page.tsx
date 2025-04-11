'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Lightbulb, Search, Box, ShoppingCart, TrendingUp } from "lucide-react"

export default function ProductDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-emerald-400/20 text-emerald-100 hover:bg-emerald-400/30 border-emerald-400/30 backdrop-blur-sm">
                商品開発支援サービス
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                新商品開発の全プロセスを<br />
                ワンストップでサポート
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                OEMから販売サポートまで、市場調査からプロトタイプ開発、<br />
                テスト販売まで、商品開発のあらゆる段階を支援します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* サービス内容セクション */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">サービス内容</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Search className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">市場調査・分析</h3>
                  </div>
                  <p className="text-gray-600">
                    競合分析や市場動向の調査、ターゲット層のニーズ分析を行います。データに基づいた商品コンセプトの立案をサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">商品企画・設計</h3>
                  </div>
                  <p className="text-gray-600">
                    市場調査結果を基に、具体的な商品コンセプトの立案と設計を行います。機能性とデザイン性を両立した商品開発をサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Box className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">プロトタイプ開発</h3>
                  </div>
                  <p className="text-gray-600">
                    3Dモデリングや試作制作を通じて、商品の実現可能性を検証します。機能テストやユーザビリティテストも実施します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">販売サポート</h3>
                  </div>
                  <p className="text-gray-600">
                    テスト販売の実施や販売チャネルの開拓、マーケティング戦略の立案まで、商品の販売を全面的にサポートします。
                  </p>
                </motion.div>
              </div>

              {/* 特徴セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">サービスの特徴</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">ワンストップサポート</h4>
                      <p className="text-gray-600">
                        市場調査から販売まで、商品開発の全プロセスを一貫してサポートします。各段階での専門家との連携により、スムーズな開発を実現します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">データドリブンな開発</h4>
                      <p className="text-gray-600">
                        市場データやユーザーフィードバックを活用した、科学的な商品開発を実践します。リスクを最小限に抑えた開発プロセスを提案します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">柔軟な対応</h4>
                      <p className="text-gray-600">
                        小ロットから大量生産まで、様々な生産規模に対応可能です。また、既存商品の改善や新規商品の開発など、幅広いニーズに対応します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 導入事例セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">導入事例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">食品メーカーの新商品開発</h4>
                    <p className="text-gray-600">
                      市場調査から商品企画、試作開発までをサポート。新商品は発売後3ヶ月で売上目標の150%を達成しました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">化粧品ブランドの商品改善</h4>
                    <p className="text-gray-600">
                      既存商品のユーザーフィードバックを基に改善を実施。パッケージデザインと配合の見直しにより、売上を前年比200%に伸ばしました。
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* CTAセクション */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">新商品開発をお考えですか？</h3>
                    <p className="text-gray-100">
                      無料相談で、あなたのビジネスに最適な商品開発戦略をご提案します。
                    </p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-white text-emerald-700 hover:bg-gray-100">
                    <Link href="/free-consultation">無料相談する</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 