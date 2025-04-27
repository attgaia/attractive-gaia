'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Ship, Globe, FileText, ShoppingCart, TrendingUp } from "lucide-react"

export default function ImportConsultingClient() {
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
                輸入コンサルティング
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                海外製品の輸入ビジネスを<br />
                トータルでサポート
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                主にインドネシア・米国からの輸入ビジネスを支援。<br />
                海外製品の調達から輸入手続き、販売戦略までをトータルでサポートします。
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
                    <Globe className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">海外サプライヤー開拓</h3>
                  </div>
                  <p className="text-gray-600">
                    インドネシア・米国を中心に、信頼性の高いサプライヤーを開拓します。品質管理や価格交渉もサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Ship className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">輸入手続きサポート</h3>
                  </div>
                  <p className="text-gray-600">
                    通関手続きや輸送手配、輸入規制の確認など、輸入に必要な手続きを一貫してサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">法規制対応</h3>
                  </div>
                  <p className="text-gray-600">
                    輸入規制や認証取得、知的財産権の確認など、法規制に関するアドバイスを提供します。
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
                    <h3 className="text-xl font-semibold">販売戦略支援</h3>
                  </div>
                  <p className="text-gray-600">
                    市場分析や価格設定、販売チャネルの開拓など、輸入品の販売戦略をサポートします。
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
                      <h4 className="font-semibold mb-2">現地ネットワーク</h4>
                      <p className="text-gray-600">
                        インドネシア・米国に現地スタッフを配置し、信頼性の高いサプライヤーとのネットワークを構築しています。現地での品質チェックも可能です。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">リスク管理</h4>
                      <p className="text-gray-600">
                        為替リスクや輸送リスク、品質リスクなど、輸入ビジネスに伴う様々なリスクを最小限に抑えるための対策を提案します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">ワンストップサポート</h4>
                      <p className="text-gray-600">
                        サプライヤー開拓から販売まで、輸入ビジネスの全プロセスを一貫してサポートします。各段階での専門家との連携により、スムーズな輸入を実現します。
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
                    <h4 className="font-semibold mb-2">インドネシア産食品の輸入</h4>
                    <p className="text-gray-600">
                      現地サプライヤーの開拓から輸入、販売までをサポート。1年で売上を前年比300%に伸ばしました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">米国製健康食品の輸入</h4>
                    <p className="text-gray-600">
                      輸入規制の確認から販売戦略までをサポート。ECサイトでの販売を中心に、月間売上1000万円を達成しました。
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* CTAセクション */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">輸入ビジネスをお考えですか？</h3>
                    <p className="text-gray-100">
                      無料相談で、あなたのビジネスに最適な輸入戦略をご提案します。
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