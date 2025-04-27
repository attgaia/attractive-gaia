'use client';

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, FileText, ShoppingCart, BarChart3, TrendingUp } from "lucide-react"

export default function ContentSalesClient() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-900 via-amber-800 to-orange-900 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-amber-400/20 text-amber-100 hover:bg-amber-400/30 border-amber-400/30 backdrop-blur-sm">
                コンテンツ販売
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                高品質なコンテンツを<br />
                効果的に販売
              </h1>
              <p className="text-lg md:text-xl text-amber-100 mb-10 max-w-3xl mx-auto">
                記事、動画、画像など、様々なコンテンツの販売をサポート。<br />
                販売戦略から収益化までをトータルで支援します。
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
                    <FileText className="w-6 h-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-semibold">コンテンツ制作</h3>
                  </div>
                  <p className="text-gray-600">
                    記事、動画、画像など、販売に適した高品質なコンテンツを制作します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-semibold">販売プラットフォーム構築</h3>
                  </div>
                  <p className="text-gray-600">
                    コンテンツ販売に最適なプラットフォームを構築し、スムーズな販売を実現します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-6 h-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-semibold">販売戦略立案</h3>
                  </div>
                  <p className="text-gray-600">
                    ターゲット層や市場動向を分析し、最適な販売戦略を提案します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-semibold">収益化サポート</h3>
                  </div>
                  <p className="text-gray-600">
                    販売データの分析と改善提案により、収益の最大化をサポートします。
                  </p>
                </motion.div>
              </div>

              {/* 特徴セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">サービスの特徴</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">高品質なコンテンツ</h4>
                      <p className="text-gray-600">
                        専門的な知識と経験を持つクリエイターが、販売に適した高品質なコンテンツを制作します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">最適な販売戦略</h4>
                      <p className="text-gray-600">
                        市場分析とデータに基づき、コンテンツの特性に合わせた最適な販売戦略を提案します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">継続的な改善</h4>
                      <p className="text-gray-600">
                        販売データの分析と改善提案により、コンテンツの品質と収益性を継続的に向上させます。
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
                    <TrendingUp className="w-8 h-8 text-amber-600 mb-4" />
                    <h4 className="font-semibold mb-2">専門家の記事販売</h4>
                    <p className="text-gray-600">
                      専門家の記事を月額制で販売。安定した収益を実現し、継続的なコンテンツ制作を可能にしました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-amber-600 mb-4" />
                    <h4 className="font-semibold mb-2">教育コンテンツの販売</h4>
                    <p className="text-gray-600">
                      オンライン講座のコンテンツを販売。効果的な販売戦略により、高い売上を達成しました。
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 