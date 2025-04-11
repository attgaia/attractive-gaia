'use client';

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Recycle, ShoppingBag, TrendingUp, Leaf } from "lucide-react"

export default function ReuseBusinessPage() {
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
                リユースビジネス
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                地球環境に優しい<br />
                リユースビジネスを展開
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                当社では、持続可能な社会の実現に向けて<br />
                リユースビジネスを通じて環境保護に取り組んでいます。
              </p>
            </motion.div>
          </div>
        </section>

        {/* サービス内容セクション */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">取り組み内容</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Recycle className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">アパレルリユース</h3>
                  </div>
                  <p className="text-gray-600">
                    ファッション業界の環境負荷低減のため、高品質な中古衣類の回収・販売を行っています。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">家具リユース</h3>
                  </div>
                  <p className="text-gray-600">
                    家具の再利用を通じて、資源の有効活用と廃棄物削減に貢献しています。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">環境認証取得</h3>
                  </div>
                  <p className="text-gray-600">
                    環境配慮型ビジネスとして、各種環境認証を取得し、持続可能な取り組みを推進しています。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Leaf className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">環境教育</h3>
                  </div>
                  <p className="text-gray-600">
                    リユースの重要性を伝える環境教育プログラムを実施し、持続可能な社会の実現を目指しています。
                  </p>
                </motion.div>
              </div>

              {/* 特徴セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">環境への取り組み</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">資源の循環</h4>
                      <p className="text-gray-600">
                        製品のライフサイクルを延長し、資源の有効活用を促進しています。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">廃棄物削減</h4>
                      <p className="text-gray-600">
                        リユースによる廃棄物の削減に取り組み、環境負荷の低減に貢献しています。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">社会貢献</h4>
                      <p className="text-gray-600">
                        環境保護活動を通じて、持続可能な社会の実現に貢献しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 導入事例セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">実績</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">アパレルリユース事業</h4>
                    <p className="text-gray-600">
                      年間10,000着以上の衣類をリユースし、CO2排出量の削減に貢献しています。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">家具リユース事業</h4>
                    <p className="text-gray-600">
                      年間500点以上の家具を再利用し、森林資源の保護に貢献しています。
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