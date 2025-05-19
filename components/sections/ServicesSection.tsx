'use client';

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">サービス一覧</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AIを活用した様々なサービスで、お客様のビジネスをサポートします
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">AIコンサルティング</h3>
                <p className="text-sm text-muted-foreground">
                  AI導入の戦略立案から実装まで、専門家がサポート
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/services/ai-consulting">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-sm group hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Web制作一括請負サービス</h3>
                <p className="text-sm text-muted-foreground">
                  企画からデザイン、開発、運用までワンストップで提供
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/services/web-production-package">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-sm group hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Web制作・月額プラン</h3>
                <p className="text-sm text-muted-foreground">
                  月額固定料金でWebサイトの制作・運用・保守をサポート
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/services/web-production-lite">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-sm group hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Webのお医者さん</h3>
                <p className="text-sm text-muted-foreground">
                  Webサイトの診断と改善提案
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/services/web-doctor">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-sm group hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 