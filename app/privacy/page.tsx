import React from 'react';

export const metadata = {
  title: "プライバシーポリシー | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAのプライバシーポリシーをご案内します。お客様の個人情報の取り扱いについて、当社の考え方と具体的な運用方法をご説明いたします。",
  keywords: "プライバシーポリシー, 個人情報保護, セキュリティ, 群馬, ATTRACTIVEGAIA"
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">プライバシーポリシー</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            アトラクティブガイア株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、適切な管理・保護に努めます。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 個人情報の定義</h2>
          <p className="text-gray-600 mb-6">
            個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できるものをいいます。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 個人情報の収集</h2>
          <p className="text-gray-600 mb-6">
            当社は、以下の目的で個人情報を収集します：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>お問い合わせへの対応</li>
            <li>サービスの提供</li>
            <li>契約の履行</li>
            <li>新サービスの開発</li>
            <li>マーケティング活動</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 個人情報の利用</h2>
          <p className="text-gray-600 mb-6">
            当社は、収集した個人情報を以下の目的で利用します：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>お客様へのサービス提供</li>
            <li>お客様からのお問い合わせへの対応</li>
            <li>サービスの改善・開発</li>
            <li>新商品・サービスのご案内</li>
            <li>統計データの作成</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 個人情報の管理</h2>
          <p className="text-gray-600 mb-6">
            当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。また、従業員に対して個人情報保護に関する教育を実施し、個人情報の適切な取り扱いを徹底します。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 個人情報の第三者提供</h2>
          <p className="text-gray-600 mb-6">
            当社は、以下の場合を除き、個人情報を第三者に提供しません：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 個人情報の開示・訂正・利用停止</h2>
          <p className="text-gray-600 mb-6">
            お客様は、当社が保有する個人情報の開示、訂正、利用停止等を請求することができます。請求があった場合は、本人確認を行った上で、合理的な範囲で対応いたします。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. プライバシーポリシーの変更</h2>
          <p className="text-gray-600 mb-6">
            当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更があった場合は、当社ウェブサイトにて公表いたします。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. お問い合わせ</h2>
          <p className="text-gray-600">
            本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              アトラクティブガイア株式会社<br />
              個人情報保護管理者：代表取締役 村山慎也<br />
              メールアドレス：info@attgaia.com
            </p>
          </div>

          <p className="text-gray-600 mt-8">
            制定日：2025年4月23日<br />
            最終更新日：2025年4月23日
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 