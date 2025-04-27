'use client';

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Package, ShoppingBag, TrendingUp, Leaf } from "lucide-react"

export default function OriginalProductsClient() {
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
                オリジナル商品
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                高品質な<br />
                オリジナル商品を展開
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                当社では、独自のノウハウと技術で<br />
                高品質なオリジナル商品を開発・販売しています。
              </p>
            </motion.div>
          </div>
        </section>

        {/* 商品内容セクション */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">商品ラインナップ</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Package className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">食品・飲料</h3>
                  </div>
                  <p className="text-gray-600">
                    厳選された原料を使用した、安全で美味しい食品・飲料を提供しています。
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
                    <h3 className="text-xl font-semibold">生活雑貨</h3>
                  </div>
                  <p className="text-gray-600">
                    使いやすさとデザイン性を追求した、日常を彩る生活雑貨を展開しています。
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
                    <h3 className="text-xl font-semibold">健康食品</h3>
                  </div>
                  <p className="text-gray-600">
                    健康と美容をサポートする、高品質な健康食品を開発しています。
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
                    <h3 className="text-xl font-semibold">エコ商品</h3>
                  </div>
                  <p className="text-gray-600">
                    環境に配慮した素材を使用した、サステナブルな商品を展開しています。
                  </p>
                </motion.div>
              </div>

              {/* 特徴セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">商品の特徴</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">高品質</h4>
                      <p className="text-gray-600">
                        厳選された原料と最新の技術で、高品質な商品を提供しています。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">独自性</h4>
                      <p className="text-gray-600">
                        独自の開発ノウハウにより、他にはない特徴的な商品を展開しています。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">安全性</h4>
                      <p className="text-gray-600">
                        厳格な品質管理と安全基準をクリアした商品を提供しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 実績セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">人気商品</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">有機栽培食品シリーズ</h4>
                    <p className="text-gray-600">
                      年間10,000個以上の販売実績を誇る、人気の有機栽培食品シリーズです。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">エコ生活雑貨</h4>
                    <p className="text-gray-600">
                      環境に配慮した素材を使用した、人気のエコ生活雑貨シリーズです。
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