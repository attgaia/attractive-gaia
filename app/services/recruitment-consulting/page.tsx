export default function RecruitmentConsultingPage() {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* ヒーローセクション */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-emerald-600">採用コンサルティング</h1>
          <p className="text-lg text-gray-700 mb-6">
            採用における課題をAIとWebマーケティングの力で解決。
            貴社に最適な人材戦略を一緒に構築していきます。
          </p>
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-1 w-24 mx-auto mb-8"></div>
        </section>
  
        {/* サービス内容 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">サービス内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">採用ページの企画・設計・制作</h3>
              <p className="text-gray-600">魅力的な採用ページを作成し、応募者を引き付けます。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Indeed、求人ボックスなどの活用サポート</h3>
              <p className="text-gray-600">求人媒体を効果的に活用し、採用活動を支援します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Googleしごと検索連携</h3>
              <p className="text-gray-600">Googleしごと検索に対応し、より多くの応募者にリーチします。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">エントリーフォームの改善</h3>
              <p className="text-gray-600">応募者が使いやすいエントリーフォームを提供します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">採用後の定着戦略までサポート</h3>
              <p className="text-gray-600">採用後の定着を支援し、長期的な人材育成をサポートします。</p>
            </div>
          </div>
        </section>
  
        {/* お問い合わせセクション */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 p-8 rounded-lg shadow-md text-center text-white">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-lg mb-6">
            採用に関するお悩みやご相談はお気軽にお問い合わせください。
          </p>
          <a href="/contact" className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            お問い合わせフォームへ
          </a>
        </section>
      </div>
    );
  }