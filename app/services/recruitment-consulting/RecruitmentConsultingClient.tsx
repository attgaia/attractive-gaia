'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Users, MessageSquare, BarChart2, Target, Award } from "lucide-react"

export default function RecruitmentConsultingClient() {
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
                採用コンサルティング
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                採用ターゲットに響く<br />
                効果的な採用戦略を提案
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                求人ページの制作から採用戦略の立案まで、<br />
                あなたの会社に最適な人材を獲得するためのサポートを提供します。
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
                    <Users className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">求人ページ制作</h3>
                  </div>
                  <p className="text-gray-600">
                    自社の魅力を最大限に伝える求人ページを制作します。ターゲット層に響くデザインとコピーライティングで、応募率の向上をサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">採用戦略コンサルティング</h3>
                  </div>
                  <p className="text-gray-600">
                    業界動向や競合分析を基に、効果的な採用戦略を提案します。採用プロセスの改善や採用ツールの選定もサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <BarChart2 className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">採用効果分析</h3>
                  </div>
                  <p className="text-gray-600">
                    採用活動の効果を定量的・定性的に分析し、改善点を提案します。データに基づいた採用戦略の最適化をサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">ターゲット層分析</h3>
                  </div>
                  <p className="text-gray-600">
                    求職者の属性や行動特性を分析し、効果的なアプローチ方法を提案します。採用ターゲットの明確化と最適な採用チャネルの選定をサポートします。
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
                      <h4 className="font-semibold mb-2">カスタマイズされた提案</h4>
                      <p className="text-gray-600">
                        業種や企業規模、採用ポジションに応じて、最適な採用戦略をカスタマイズして提案します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">データドリブンなアプローチ</h4>
                      <p className="text-gray-600">
                        採用データの分析に基づき、効果的な採用戦略を立案します。定量的な指標で採用活動の改善をサポートします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">継続的なサポート</h4>
                      <p className="text-gray-600">
                        採用活動の開始から定着まで、一貫したサポートを提供します。定期的な進捗確認と戦略の見直しを行います。
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
                    <Award className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">IT企業のエンジニア採用</h4>
                    <p className="text-gray-600">
                      求人ページの改善と採用プロセスの最適化により、応募者数が2倍に増加。採用コストも30%削減しました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <Award className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">小売業の店舗スタッフ採用</h4>
                    <p className="text-gray-600">
                      ターゲット層に合わせた採用戦略の立案と実施により、採用期間を50%短縮。定着率も向上しました。
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* CTAセクション */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">採用戦略の改善をお考えですか？</h3>
                    <p className="text-gray-100">
                      無料相談で、あなたの会社に最適な採用戦略をご提案します。
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