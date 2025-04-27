import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, PenTool, Search, Clock, UserCheck, Edit, Users, Zap, MapPin, CheckSquare, Mic, Camera, MessageCircle, Target, Settings, ArrowLeft } from 'lucide-react';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const metadata: Metadata = {
  title: "記事作成代行サービス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAでは、SEOを意識した記事作成代行サービスを提供。高品質なコンテンツで集客・ブランディングをサポートします。",
};

const ArticleWritingPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* 1. ファーストビュー（ヒーロー） */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="container relative z-10">
          <PenTool className="h-16 w-16 text-blue-600 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">記事作成代行</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
            あなたの想いを言葉に
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            プロフェッショナルなライターが、<br />
            あなたのビジネスや活動を魅力的に表現します。
          </p>
        </div>
      </section>

      {/* 2. サービス紹介セクション */}
      <div className="container mx-auto py-16 md:py-24">
        <section id="menu" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">📝 対応メニュー一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Target className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">企業ブログ</h3>
              </div>
              <p className="text-sm text-gray-600">会社紹介、サービス説明、採用情報など、企業の魅力を伝える記事作成。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Users className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">商品紹介</h3>
              </div>
              <p className="text-sm text-gray-600">商品の特徴や使い方を分かりやすく伝える記事作成。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Settings className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">SEO対策</h3>
              </div>
              <p className="text-sm text-gray-600">検索エンジン対策を考慮した、効果的な記事作成。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <PenTool className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">コラム執筆</h3>
              </div>
              <p className="text-sm text-gray-600">専門的な知識や経験を活かした、深みのある記事作成。</p>
            </Card>
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <MessageCircle className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">インタビュー記事</h3>
              </div>
              <p className="text-sm text-gray-600">人物インタビュー、対談記事の作成。</p>
            </Card>
            <Card className="p-6 bg-blue-100 border border-blue-200 flex flex-col justify-center items-center text-center">
              <MessageCircle className="h-8 w-8 text-blue-700 mb-2" />
              <p className="font-medium text-blue-800">「こんな記事を作りたい」というご相談もお気軽にどうぞ。</p>
            </Card>
          </div>
        </section>

        {/* 3. お問い合わせフォーム */}
        <section id="form" className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">📝 お問い合わせフォーム</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="service">ご希望のサービス</Label>
                  <RadioGroup defaultValue="blog" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="blog" id="blog" />
                      <Label htmlFor="blog">企業ブログ</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="product" id="product" />
                      <Label htmlFor="product">商品紹介</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="seo" id="seo" />
                      <Label htmlFor="seo">SEO対策</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="column" id="column" />
                      <Label htmlFor="column">コラム執筆</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="interview" id="interview" />
                      <Label htmlFor="interview">インタビュー記事</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="company">会社名</Label>
                  <Input id="company" placeholder="株式会社〇〇" />
                </div>

                <div>
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" placeholder="山田 太郎" />
                </div>

                <div>
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="example@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">電話番号</Label>
                  <Input id="phone" type="tel" placeholder="090-0000-0000" />
                </div>

                <div>
                  <Label htmlFor="message">ご要望・ご質問</Label>
                  <Textarea
                    id="message"
                    placeholder="記事の目的やご要望をお聞かせください。"
                    className="min-h-[120px]"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg">
                  お問い合わせ内容を確認する
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticleWritingPage; 