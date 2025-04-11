import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Sparkles, CheckCircle, Clock, Users } from 'lucide-react'

const FreeConsultationPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          無料相談
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          あなたのビジネスの課題や目標について、専門家が無料でご相談に乗ります。
          お気軽にお申し込みください。
        </p>
      </section>

      {/* メリットセクション */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          無料相談のメリット
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Sparkles className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">専門家のアドバイス</h3>
            <p className="text-gray-600">
              経験豊富な専門家が、あなたのビジネスに最適な解決策を提案します。
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">時間の節約</h3>
            <p className="text-gray-600">
              効率的なアドバイスで、試行錯誤の時間を大幅に削減できます。
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">継続的なサポート</h3>
            <p className="text-gray-600">
              必要に応じて、より詳細なコンサルティングサービスもご提供可能です。
            </p>
          </Card>
        </div>
      </section>

      {/* 相談内容セクション */}
      <section className="mb-12 md:mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          こんなご相談にお応えします
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">Webサイトの改善や新規制作について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">AIを活用した業務効率化について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">コンテンツ制作やマーケティングについて</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">ECサイトの運営や改善について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">地域活性化や観光振興について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">その他、デジタル活用全般について</p>
          </div>
        </div>
      </section>

      {/* お申し込みフォームセクション */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            無料相談お申し込みフォーム
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="consultation" className="block text-sm font-medium text-gray-700 mb-1">
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="consultation"
                name="consultation"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md shadow-lg"
              >
                送信する
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default FreeConsultationPage 