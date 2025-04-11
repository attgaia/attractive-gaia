import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, PenTool, Search, Clock, UserCheck, Edit, Users, Zap, MapPin, CheckSquare, Mic, Camera, MessageCircle } from 'lucide-react';

const ArticleWritingPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="relative mb-16 md:mb-24 text-center rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat py-24 md:py-32" style={{ backgroundImage: "url('/images/serviceimage_kijisakusei.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/80 to-teal-700/80 mix-blend-multiply"></div> {/* オーバーレイ */}
        <div className="relative z-10 px-4">
          {/* <PenTool className="h-16 w-16 text-emerald-100 mx-auto mb-6" /> アイコンは背景と重なるためコメントアウト */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">企業担当者向け記事作成代行サービス</h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            「時間がない」「何を書けばいいかわからない」<br />
            そんな担当者のために、プロのライターと最新AI技術を駆使し、<br />
            効率的かつ高品質な記事をご提供します。
          </p>
        </div>
      </section>

      {/* 課題提起セクション */}
      <section className="mb-16 md:mb-24 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">こんなお悩みありませんか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <Card className="p-6 bg-white shadow-sm">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">社内にライティングできる人材がいない</p>
          </Card>
          <Card className="p-6 bg-white shadow-sm">
            <Search className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">SEOを意識した記事を作りたいが、知識がない</p>
          </Card>
          <Card className="p-6 bg-white shadow-sm">
            <Clock className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">定期的な更新ができず、サイトが放置状態</p>
          </Card>
          <Card className="p-6 bg-white shadow-sm">
            <UserCheck className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">社員インタビューや導入事例を記事化したい</p>
          </Card>
          <Card className="p-6 bg-white shadow-sm">
            <Edit className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="font-medium">AIで下書きはできても、読みやすく仕上げられない</p>
          </Card>
          <Card className="p-6 bg-emerald-600 text-white shadow-md flex flex-col justify-center">
            <p className="font-bold text-lg">→ アトラクティブガイアが<br/>すべて解決いたします！</p>
          </Card>
        </div>
      </section>

      {/* サービス内容セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">記事作成代行サービス内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">▶ 記事の企画・構成作成</h3>
            <p className="text-gray-600">事前ヒアリングをもとに、ターゲット・目的に合った記事構成をご提案。SEOキーワードのご提案も可能です。</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">▶ インタビュー記事・導入事例のライティング</h3>
            <p className="text-gray-600">社内スタッフ・顧客への取材代行や、録音データ・チャット履歴を元に記事化も対応可能です。</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">▶ SEO対策を意識した記事ライティング</h3>
            <p className="text-gray-600">検索上位を狙える構成と自然なキーワード挿入。AIツールを活用しつつ、人の手で仕上げます。</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">▶ AI×人力のハイブリッド執筆</h3>
            <p className="text-gray-600">AIによる初稿生成＋プロの編集者によるチェックで、コストと品質のバランスを実現。</p>
          </Card>
          <Card className="p-6 md:col-span-2 bg-emerald-50 border-emerald-200">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">▶ オプション対応：画像・動画・音声コンテンツの作成</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex gap-4 text-emerald-600">
                <Camera className="h-8 w-8" />
                <Mic className="h-8 w-8" />
              </div>
              <p className="text-gray-600 flex-1">
                記事に必要なイメージ画像・図解・バナーなどのグラフィックや、PR動画・ナレーション音声の作成もオプションで対応可能です。「文字だけでは伝わらない」情報も、視覚・聴覚でしっかり補完します。
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">アトラクティブガイアの記事作成代行が選ばれる理由</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center border p-6 rounded-lg shadow-sm">
            <CheckSquare className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">豊富な事業経験に基づいた「伝わる記事」</h3>
            <p className="text-gray-600 text-sm">20年以上の事業経験をもとに、表面的でない"本質"を言語化します。</p>
          </div>
          <div className="text-center border p-6 rounded-lg shadow-sm">
            <Zap className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">AI活用でスピードと低コストを両立</h3>
            <p className="text-gray-600 text-sm">ChatGPTなどの最新AIを活用。従来のライター依頼よりもスピーディに納品可能です。</p>
          </div>
          <div className="text-center border p-6 rounded-lg shadow-sm">
            <MapPin className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">地元企業×全国展開をサポート</h3>
            <p className="text-gray-600 text-sm">群馬県を拠点にしつつ、全国の企業様のWeb支援実績あり。地元に根ざし、未来を見据えたご提案をいたします。</p>
          </div>
        </div>
      </section>

      {/* ご利用の流れセクション */}
      <section className="mb-16 md:mb-24 bg-gray-100 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">サービスご利用の流れ</h2>
        <div className="relative max-w-2xl mx-auto pl-8">
          {/* 縦線 */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">1</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">お問い合わせ</h3>
            <p className="ml-4 text-gray-600 text-sm">フォームよりお気軽にご連絡ください。</p>
          </div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">2</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">無料ヒアリング</h3>
            <p className="ml-4 text-gray-600 text-sm">目的・ご要望・記事本数などをヒアリングします。</p>
          </div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">3</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">構成案のご提案・お見積もり</h3>
            <p className="ml-4 text-gray-600 text-sm">内容に問題ないようでしたらこの時点でお支払いいただきます。お支払い方法は銀行振り込み・クレジットカードがございます。</p>
          </div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">4</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">執筆＆ご確認</h3>
            <p className="ml-4 text-gray-600 text-sm">下書き納品後、修正希望があれば対応します。</p>
          </div>
          <div className="relative">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">5</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">納品・公開サポート</h3>
            <p className="ml-4 text-gray-600 text-sm">WordPress入稿代行も対応可能です。</p>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">お問い合わせ・ご相談は無料です</h2>
        <p className="text-emerald-100 mb-4">「とりあえず話を聞いてみたい」だけでも大歓迎です。</p>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
          企業担当者様のパートナーとして、柔軟に対応いたします。
          必要事項を下記フォームよりお送りください。
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
            <MessageCircle className="mr-2 h-5 w-5" /> お問い合わせフォームへ
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArticleWritingPage; 