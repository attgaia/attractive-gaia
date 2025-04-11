'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, MessageSquare, BarChart2, Image, Video, TrendingUp } from "lucide-react"

export default function SNSManagementPage() {
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
                SNS運用代行サービス
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                SNSの効果的な運用で<br />
                ファン獲得と売上向上を実現
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                Instagram、X、Facebook、TikTokなど各種SNSの運用を代行。<br />
                コンテンツ制作から投稿、分析までトータルサポートします。
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
                    <MessageSquare className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">コンテンツ制作</h3>
                  </div>
                  <p className="text-gray-600">
                    ターゲット層に響く高品質なコンテンツを制作します。テキスト、画像、動画など、各SNSの特性に合わせた最適なコンテンツを提供します。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Image className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">投稿管理</h3>
                  </div>
                  <p className="text-gray-600">
                    最適な投稿タイミングの設定と投稿スケジュール管理を行います。各SNSのアルゴリズムを考慮した効果的な投稿戦略を実践します。
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
                    <h3 className="text-xl font-semibold">データ分析</h3>
                  </div>
                  <p className="text-gray-600">
                    エンゲージメント率、リーチ数、フォロワー増加率などのKPIを定期的に分析。データに基づいた改善提案を行います。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Video className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold">動画制作</h3>
                  </div>
                  <p className="text-gray-600">
                    ReelsやTikTok向けのショート動画制作も対応可能。商品紹介や企業PRなど、目的に合わせた動画コンテンツを制作します。
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
                      <h4 className="font-semibold mb-2">プラットフォーム最適化</h4>
                      <p className="text-gray-600">
                        各SNSプラットフォームの特性を活かした最適な運用戦略を提案します。Instagram、X、Facebook、TikTokなど、目的に応じたプラットフォーム選定もサポートします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">コンテンツ戦略</h4>
                      <p className="text-gray-600">
                        ブランドの価値観やターゲット層に合わせた一貫性のあるコンテンツ戦略を構築します。定期的なコンテンツカレンダーの作成と管理も行います。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">コミュニティ育成</h4>
                      <p className="text-gray-600">
                        フォロワーとの積極的なコミュニケーションを通じて、強いファンコミュニティを育成します。コメントへの返信やDM対応も代行します。
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
                    <h4 className="font-semibold mb-2">アパレルブランドのSNS運用</h4>
                    <p className="text-gray-600">
                      InstagramとTikTokを中心とした運用で、フォロワー数が3倍に増加。商品の売上も前年比150%を達成しました。
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="font-semibold mb-2">飲食店のSNS活用</h4>
                    <p className="text-gray-600">
                      新メニューのPR動画を中心としたSNS運用で、来店客数が2倍に増加。特に若年層の顧客獲得に成功しました。
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* CTAセクション */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SNS運用でお悩みですか？</h3>
                    <p className="text-gray-100">
                      無料相談で、あなたのビジネスに最適なSNS運用戦略をご提案します。
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