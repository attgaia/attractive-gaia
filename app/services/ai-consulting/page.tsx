import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CheckCircle, BrainCircuit, Globe, Users, Palette } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "AI業務支援サービス | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのAI業務支援サービスでは、企業の業務効率化と生産性向上を目的に、AI技術を活用した最適なソリューションをご提供します。",
  keywords: "AI業務支援, 業務効率化, AI導入, DX, ATTRACTIVEGAIA"
};

const AiConsultingPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-16 items-center bg-yellow-100 rounded-lg p-8 md:p-12 shadow-lg">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            すべての業務に、<br />AIという"右腕"を。
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            人が足りない。でも採れない。<br />──なら、AIを1人、雇いませんか？
          </p>
        </div>
        <div>
          <Image
            src="/images/serviceimage_aisupport.png" // 画像パスを更新
            alt="すべての業務にAIという右腕を"
            width={600}
            height={400}
            className="rounded-lg shadow-md mx-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* 導入・課題提起セクション */}
      <section className="mb-16 md:mb-24 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">人材不足、業務過多、更新の手が止まっている…</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          そんなあなたの会社に"AI"を活用して"成果につながる仕組み"を提供します。
        </p>
        <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-gray-50 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">もう"AIは一部の大企業だけのもの"ではありません</h3>
          <p className="text-gray-700 mb-4">
            ChatGPTやClaudeなどの生成AIは、誰でも使えるようになりました。
            けれど、"どこから使えばいい？" "うちの業務で使える？"
            …そう思ったまま、手が止まっていませんか？
          </p>
          <p className="text-emerald-700 font-medium">
            私たちは、そんな"導入の一歩目"から伴走するAI支援のプロフェッショナルです。
          </p>
        </Card>
      </section>

      {/* AI活用の選択肢セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">"人が足りない"時代にAIという選択肢を</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-[#008B8B] to-[#40E0D0] text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold">AIコンサルティング</CardTitle>
              <CardDescription className="text-white/80">
                最先端のAI技術を活用したビジネスソリューション
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                当社のAIコンサルティングサービスでは、お客様のビジネスに最適なAIソリューションを提案し、実装までサポートいたします。
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="bg-white text-[#008B8B] hover:bg-white/90 w-full">
                詳細を見る
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold text-emerald-700">コンテンツ制作支援</CardTitle>
              <CardDescription className="text-gray-600">
                採用ページやブログ、SNS投稿の作成など
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AIを活用した効率的なコンテンツ制作をサポートします。
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-emerald-700 border-emerald-700 hover:bg-emerald-50 w-full">
                詳細を見る
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold text-emerald-700">顧客対応の自動化</CardTitle>
              <CardDescription className="text-gray-600">
                お客様対応のテンプレ化やチャットボット導入など
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AIを活用した顧客対応の自動化で業務効率を向上させます。
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-emerald-700 border-emerald-700 hover:bg-emerald-50 w-full">
                詳細を見る
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="text-center text-lg text-gray-700 mt-8">
          これらはすべて<span className="font-bold text-emerald-600">「AIで代替 or 補完」</span>できる時代になりました。<br/>
          1人分のコストで3人分の生産性を。アトラクティブガイアが、その仕組みを一緒に設計します。
        </p>
      </section>

      {/* ワンストップ提供セクション */}
      <section className="mb-16 md:mb-24 bg-emerald-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">AI導入 × Web × ブランディングを<br className="md:hidden"/>ワンストップで提供</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-4">
            <BrainCircuit className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">AI導入支援</h3>
            <p className="text-sm text-gray-600">ChatGPT/Claude導入・業務フロー最適化・プロンプト設計</p>
          </div>
          <div className="text-center p-4">
            <Globe className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Webサイト制作</h3>
            <p className="text-sm text-gray-600">WordPress制作・AIライティング支援・導線設計</p>
          </div>
          <div className="text-center p-4">
            <Palette className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">ブランディング</h3>
            <p className="text-sm text-gray-600">ロゴ・名刺・パンフレット制作 (AI支援可能)</p>
          </div>
          <div className="text-center p-4">
            <Users className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">SNS支援</h3>
            <p className="text-sm text-gray-600">Canvaテンプレ作成・投稿設計・自動化アドバイス</p>
          </div>
        </div>
      </section>

      {/* 導入事例セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">群馬の中小企業でもすでにAIで成果が出ています。</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">美容院経営会社 様</h3>
            <p className="text-gray-600">従来であれば外注していたWEBサイトの一部更新や設計をAIに → <span className="font-medium text-emerald-600">費用と工数時間を大幅に削減</span></p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">伊勢崎市・士業事務所 様</h3>
            <p className="text-gray-600">Claude活用で作成した誤字脱字のチェック、外資系顧問先の一部書類を英語化 → <span className="font-medium text-emerald-600">専門業務への集中を実現</span></p>
          </Card>
        </div>
      </section>

      {/* 料金・特典セクション */}
      <section className="mb-16 md:mb-24 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">ご予算に合わせて柔軟に対応！<br className="md:hidden"/>地域特典もご用意しています！</h2>
        <p className="text-lg text-gray-600 mb-4">
          サービス内容や業務範囲により異なりますが、<br className="md:hidden"/>これまでのご相談では<strong className="text-emerald-600">30万円〜100万円</strong>前後が中心です。
        </p>
        <p className="text-md text-gray-600 bg-emerald-100 inline-block px-4 py-2 rounded-md">
          群馬県内の企業様には<strong className="text-emerald-700">地域支援特典（10%OFF）</strong>もございます。
        </p>
      </section>

      {/* 不安解消・最終CTAセクション */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">AIは難しくありません。<br className="md:hidden"/>始めない理由をなくすところから。</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-emerald-100 max-w-3xl mx-auto">
          <p>「社内に詳しい人がいない」</p>
          <p>「とにかく時間がない」</p>
          <p>「誰に聞けばいいか分からない」</p>
        </div>
        <p className="text-xl text-white font-medium mb-8">…そのすべてを、私たちがサポートします。</p>
        <h3 className="text-2xl font-bold text-white mb-4">まずは30分、無料でお話しませんか？</h3>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
          無料相談をご希望のお客様は下記フォームより必要事項をご記入の上お送りください。
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
            <Link href="/free-consultation">無料相談フォームへ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AiConsultingPage; 