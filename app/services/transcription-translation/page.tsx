'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, FileText, Languages, Headphones, Clock, TrendingUp } from "lucide-react"

export default function TranscriptionTranslationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-900 via-sky-800 to-blue-900 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-sky-400/20 text-sky-100 hover:bg-sky-400/30 border-sky-400/30 backdrop-blur-sm">
                文字起こし・翻訳
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                音声・動画の文字起こしと<br />
                多言語翻訳をワンストップで
              </h1>
              <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-3xl mx-auto">
                音声・動画の文字起こしから多言語翻訳まで、<br />
                高品質なサービスを提供します。
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
                    <Headphones className="w-6 h-6 text-sky-600 mr-2" />
                    <h3 className="text-xl font-semibold">文字起こし</h3>
                  </div>
                  <p className="text-gray-600">
                    音声・動画の文字起こしを高精度で行います。専門分野の用語にも対応します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Languages className="w-6 h-6 text-sky-600 mr-2" />
                    <h3 className="text-xl font-semibold">翻訳</h3>
                  </div>
                  <p className="text-gray-600">
                    英語・中国語・韓国語など、多言語への翻訳を提供します。専門分野の翻訳にも対応します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-sky-600 mr-2" />
                    <h3 className="text-xl font-semibold">校正・編集</h3>
                  </div>
                  <p className="text-gray-600">
                    文字起こしや翻訳の内容を校正・編集し、より自然な表現に仕上げます。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-sky-600 mr-2" />
                    <h3 className="text-xl font-semibold">納期管理</h3>
                  </div>
                  <p className="text-gray-600">
                    緊急案件にも対応可能な納期管理システムで、スピーディーな納品を実現します。
                  </p>
                </motion.div>
              </div>

              {/* 特徴セクション */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">サービスの特徴</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">高精度な文字起こし</h4>
                      <p className="text-gray-600">
                        AIと人間のダブルチェックにより、高精度な文字起こしを実現します。専門分野の用語にも対応します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">ネイティブチェック</h4>
                      <p className="text-gray-600">
                        翻訳はネイティブスピーカーによるチェックを行い、自然な表現を実現します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">セキュリティ対策</h4>
                      <p className="text-gray-600">
                        機密情報の取り扱いに関する厳格なセキュリティ対策を実施しています。
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
                    <TrendingUp className="w-8 h-8 text-sky-600 mb-4" />
                    <h4 className="font-semibold mb-2">大手メーカーの技術文書翻訳</h4>
                    <p className="text-gray-600">
                      技術文書の英語・中国語翻訳を担当。専門用語の正確な翻訳で高評価を獲得しました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-sky-600 mb-4" />
                    <h4 className="font-semibold mb-2">インタビュー動画の文字起こし</h4>
                    <p className="text-gray-600">
                      複数のインタビュー動画の文字起こしを担当。短時間での納品と高精度な文字起こしで評価されました。
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* CTAセクション */}
              <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">文字起こし・翻訳サービスをお探しですか？</h3>
                    <p className="text-gray-100">
                      無料相談で、あなたのニーズに最適なサービスをご提案します。
                    </p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-white text-sky-700 hover:bg-gray-100">
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