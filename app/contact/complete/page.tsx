import Link from 'next/link';

export default function CompletePage() {
  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded text-center">
      <h1 className="text-2xl font-bold mb-6">送信完了</h1>
      <p className="mb-8">
        お問い合わせありがとうございました。<br />
        内容を確認次第、担当者よりご連絡させていただきます。
      </p>
      <Link
        href="/"
        className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 inline-block"
      >
        トップページへ戻る
      </Link>
    </div>
  );
} 