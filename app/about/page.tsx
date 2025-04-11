export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* ヒーローセクション */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-emerald-600">会社概要</h1>
          <p className="text-lg text-gray-700 mb-6">
            私たちの会社について知っていただくための情報を提供します。
          </p>
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-1 w-24 mx-auto mb-8"></div>
        </section>
  
        {/* 会社情報 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">会社情報</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">会社名</h3>
            <p className="text-gray-600">アトラクティブガイア株式会社</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition mt-4">
            <h3 className="text-xl font-semibold mb-2">設立</h3>
            <p className="text-gray-600">2013年12月23日</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition mt-4">
            <h3 className="text-xl font-semibold mb-2">所在地</h3>
            <p className="text-gray-600">群馬県伊勢崎市上泉町</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition mt-4">
            <h3 className="text-xl font-semibold mb-2">事業内容</h3>
            <p className="text-gray-600">Webマーケティング、AIソリューション、採用コンサルティング</p>
          </div>
        </section>
  
        {/* ビジョンとミッション */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 p-8 rounded-lg shadow-md text-center text-white">
          <h2 className="text-2xl font-bold mb-4">ビジョンとミッション</h2>
          <p className="text-lg mb-6">
            私たちは、テクノロジーを駆使して、より良い未来を創造します。
          </p>
        </section>
      </div>
    );
  }