import React from 'react';

const CommercialTransactionPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">特定商取引法に基づく表記</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50 w-1/3">販売業者</th>
                <td className="py-4 px-4">アトラクティブガイア株式会社</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">代表者</th>
                <td className="py-4 px-4">村山慎也</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">所在地</th>
                <td className="py-4 px-4">群馬県伊勢崎市上泉町235</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">メールアドレス</th>
                <td className="py-4 px-4">info@attgaia.com</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">URL</th>
                <td className="py-4 px-4">https://attgaia.com</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">商品代金以外の必要料金</th>
                <td className="py-4 px-4">
                  <ul className="list-disc pl-6">
                    <li>消費税</li>
                    <li>銀行振込手数料（お客様負担）</li>
                    <li>クレジットカード決済手数料（当社負担）</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">商品引渡し時期</th>
                <td className="py-4 px-4">
                  ご注文後、お支払い確認後7営業日以内に納品いたします。<br />
                  ただし、商品の特性上、納期が異なる場合は事前にご連絡いたします。
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">支払方法</th>
                <td className="py-4 px-4">
                  <ul className="list-disc pl-6">
                    <li>クレジットカード決済</li>
                    <li>銀行振込</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">支払期限</th>
                <td className="py-4 px-4">
                  クレジットカード決済：ご注文時<br />
                  銀行振込：ご注文後7日以内
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">返品・交換について</th>
                <td className="py-4 px-4">
                  商品の特性上、原則として返品・交換はお受けできません。<br />
                  ただし、商品に欠陥がある場合や、明らかに当社の過失がある場合は、商品到着後7日以内にご連絡ください。
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">販売数量</th>
                <td className="py-4 px-4">各商品ページに記載の在庫数まで</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">引渡し時期</th>
                <td className="py-4 px-4">
                  在庫がある場合は、ご注文後3営業日以内に発送いたします。<br />
                  在庫切れの場合は、入荷次第発送いたします。
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">商品の販売価格</th>
                <td className="py-4 px-4">各商品ページに表示の価格（税込）</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">役務または商品の対価の支払時期および方法</th>
                <td className="py-4 px-4">
                  クレジットカード決済：ご注文時<br />
                  銀行振込：ご注文後7日以内
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-4 text-left bg-gray-50">役務または商品の引渡し時期</th>
                <td className="py-4 px-4">
                  ご注文後、お支払い確認後7営業日以内に納品いたします。<br />
                  ただし、商品の特性上、納期が異なる場合は事前にご連絡いたします。
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-600 mt-8">
            制定日：2025年4月23日<br />
            最終更新日：2025年4月23日
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommercialTransactionPage; 