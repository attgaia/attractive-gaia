import React from 'react';

export const metadata = {
  title: "利用規約 | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAの利用規約をご案内します。当社のサービスをご利用いただく際の基本的なルールと注意事項をご確認ください。",
  keywords: "利用規約, サービス利用条件, 契約条件, 群馬, ATTRACTIVEGAIA"
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">利用規約</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            この利用規約（以下「本規約」）は、アトラクティブガイア株式会社（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。本サービスを利用するすべてのユーザー（以下「ユーザー」）は、本規約に同意したものとみなされます。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第1条（適用）</h2>
          <p className="text-gray-600 mb-6">
            本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第2条（利用登録）</h2>
          <p className="text-gray-600 mb-6">
            本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第3条（ユーザーIDおよびパスワードの管理）</h2>
          <p className="text-gray-600 mb-6">
            ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与することはできません。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第4条（禁止事項）</h2>
          <p className="text-gray-600 mb-6">
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当社のサービスの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第5条（本サービスの提供の停止等）</h2>
          <p className="text-gray-600 mb-6">
            当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第6条（利用制限および登録抹消）</h2>
          <p className="text-gray-600 mb-6">
            当社は、以下の場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>本規約のいずれかの条項に違反した場合</li>
            <li>登録事項に虚偽の事実があることが判明した場合</li>
            <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第7条（免責事項）</h2>
          <p className="text-gray-600 mb-6">
            当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第8条（サービス内容の変更等）</h2>
          <p className="text-gray-600 mb-6">
            当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第9条（利用規約の変更）</h2>
          <p className="text-gray-600 mb-6">
            当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第10条（通知または連絡）</h2>
          <p className="text-gray-600 mb-6">
            ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第11条（権利義務の譲渡の禁止）</h2>
          <p className="text-gray-600 mb-6">
            ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">第12条（準拠法・裁判管轄）</h2>
          <p className="text-gray-600 mb-6">
            本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>

          <p className="text-gray-600 mt-8">
            制定日：2025年4月23日<br />
            最終更新日：2025年4月23日
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 