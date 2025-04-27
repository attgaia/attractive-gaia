'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Star, Building2, Users, Calendar } from "lucide-react"

export default function CorporateFortuneTellingClient() {
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
                法人向け占い・診断サービス
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                企業の運勢を<br />
                占いでサポート
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                提携占い師による専門的な診断で<br />
                企業の運勢をサポートします。
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
                    <Star className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">屋号の画数診断</h3>
                  </div>
                  <p className="text-gray-600">
                    会社名や屋号の画数を分析し、運勢を診断します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Building2 className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">オフィスの家相診断</h3>
                  </div>
                  <p className="text-gray-600">
                    オフィスの配置や間取りを分析し、運勢を診断します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">相性診断</h3>
                  </div>
                  <p className="text-gray-600">
                    社長と社員の相性を分析し、チームワークの向上をサポートします。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">日選定</h3>
                  </div>
                  <p className="text-gray-600">
                    開業日、契約日、イベント日などの吉日を選定します。
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
                      <h4 className="font-semibold mb-2">専門的な診断</h4>
                      <p className="text-gray-600">
                        提携占い師による、専門的で信頼性の高い診断を提供します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">カスタマイズ対応</h4>
                      <p className="text-gray-600">
                        企業のニーズに合わせて、診断内容をカスタマイズします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">継続的なサポート</h4>
                      <p className="text-gray-600">
                        定期的な診断とアドバイスで、企業の運勢を継続的にサポートします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 実績セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">導入事例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <Star className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">IT企業の新規事業立ち上げ</h4>
                    <p className="text-gray-600">
                      屋号診断と開業日選定により、順調な事業展開を実現しました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <Star className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">小売業の店舗移転</h4>
                    <p className="text-gray-600">
                      家相診断と移転日選定により、売上向上に貢献しました。
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* CTAセクション */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">企業の未来を知りたいですか？</h3>
                    <p className="text-gray-100">
                      無料相談で、あなたの企業に最適な予測と戦略をご提案します。
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