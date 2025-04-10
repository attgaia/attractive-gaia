import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BadgeCheck, Zap, MessageSquare, Eye, Heart, FileText, CheckSquare } from 'lucide-react';

const MangaLpBannerPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="relative mb-16 md:mb-24 rounded-lg overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
          <div className="relative z-10 text-center md:text-left">
            <Zap className="h-12 w-12 text-yellow-300 mx-auto md:mx-0 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              🔥 マンガ×デザインで"伝わる"LPへ！
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-6">
              集客・売上アップを狙えるマンガLP・バナーをプロが制作します。
            </p>
            <p className="text-md text-white">
              マンガは読まれやすく、記憶にも残りやすい。
              その力をLPや広告バナーに活かすことで、
              あなたの商品・サービスの魅力が自然と伝わる"仕組み"をつくります。
            </p>
          </div>
          <div className="relative z-10">
            <Image
              src="/images/serviceimage_mangalp.png"
              alt="マンガLP・バナー制作イメージ"
              width={500} // サイズ調整
              height={400} // サイズ調整
              className="rounded-lg shadow-xl mx-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 課題提起セクション */}
      <section className="mb-16 md:mb-24 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">✅ こんなお悩み、ありませんか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-4 bg-white shadow-sm flex items-center">
            <Eye className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <p className="font-medium">LPの離脱率が高く、読まれていない気がする</p>
          </Card>
          <Card className="p-4 bg-white shadow-sm flex items-center">
            <FileText className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <p className="font-medium">商品の魅力をテキストで説明しきれない</p>
          </Card>
          <Card className="p-4 bg-white shadow-sm flex items-center">
            <MessageSquare className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <p className="font-medium">広告バナーがスルーされて効果が薄い</p>
          </Card>
          <Card className="p-4 bg-white shadow-sm flex items-center">
            <Heart className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <p className="font-medium">競合とデザインが被って差別化が難しい</p>
          </Card>
        </div>
        <p className="text-center text-xl font-bold text-emerald-600 mt-8">👉 その悩み「マンガ」が解決します！</p>
      </section>

      {/* マンガLP・バナーの強みセクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💡 マンガLP・バナーの強み</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">ストーリー仕立て</h3>
            <p className="text-gray-600 text-sm">サービスの価値を自然に理解させる</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">キャラで覚えやすい</h3>
            <p className="text-gray-600 text-sm">ブランド認知が高まる</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">難しい内容も噛み砕ける</h3>
            <p className="text-gray-600 text-sm">専門性が伝わりやすい</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">SNSとの相性も抜群</h3>
            <p className="text-gray-600 text-sm">拡散性＆話題性アップ</p>
          </Card>
        </div>
      </section>

      {/* サービス内容セクション */}
      <section className="mb-16 md:mb-24 bg-emerald-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">🛠️ サービス内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">① マンガLP制作プラン</h3>
            <p className="text-gray-700 mb-4">4〜8コマのオリジナルマンガ入りLP制作</p>
            <div className="space-y-2 text-sm text-gray-600 border-l-4 border-emerald-300 pl-4">
              <p>ヒアリング → シナリオ構成 → 作画 → デザイン → 納品</p>
              <p>WordPressなどへの設置サポートも対応（※オプション）</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">② マンガバナー制作プラン</h3>
            <p className="text-gray-700 mb-4">広告用／SNS投稿用などの各種バナー対応</p>
            <div className="space-y-2 text-sm text-gray-600 border-l-4 border-emerald-300 pl-4">
              <p>1200×628（Facebook/Instagram向け）などサイズ指定可</p>
              <p>ターゲットや媒体に応じたデザイン・キャッチコピーもご提案</p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💰 料金プラン</h2>
        <Card className="max-w-3xl mx-auto overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-[200px]">プラン名</TableHead>
                <TableHead>内容</TableHead>
                <TableHead className="text-right">料金（総額）</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">マンガLP基本プラン</TableCell>
                <TableCell>4Pマンガ＋LPデザイン</TableCell>
                <TableCell className="text-right">¥98,000〜</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">バナープラン</TableCell>
                <TableCell>マンガ風バナー1枚</TableCell>
                <TableCell className="text-right">¥15,000〜</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">フルカスタム対応</TableCell>
                <TableCell>ストーリー企画・複数バリエーション</TableCell>
                <TableCell className="text-right">要見積もり</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* ご依頼の流れセクション */}
      <section className="mb-16 md:mb-24 bg-gray-100 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">📩 ご依頼の流れ</h2>
        <div className="relative max-w-2xl mx-auto pl-8">
          {/* 縦線 */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">1</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">【お問い合わせフォーム】からご相談</h3>
          </div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">2</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">ヒアリング＆ご提案</h3>
          </div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">3</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">お見積り・ご契約・お支払い</h3>
          </div>
          <div className="relative mb-8">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">4</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">制作スタート（途中確認あり）</h3>
          </div>
          <div className="relative">
            <div className="absolute left-[-1.5rem] top-1 h-8 w-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold z-10">5</div>
            <h3 className="text-xl font-semibold mb-1 ml-4 text-emerald-700">納品＆公開サポート（オプション対応）</h3>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-10 md:p-16">
        <h2 className="text-3xl font-bold text-white mb-6">📞 まずは無料相談から</h2>
        <p className="text-emerald-100 mb-4">"どんな内容でもマンガにできますか？""イメージが湧かない…"</p>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
          そんな方も大歓迎。まずは気軽にご相談ください！
          下記フォームより必要事項をご記入の上お送りください。
        </p>
        {/* TODO: お問い合わせフォームへのリンク or 埋め込み */}
        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg">
          お問い合わせフォームへ
        </Button>
      </section>
    </div>
  );
};

export default MangaLpBannerPage; 