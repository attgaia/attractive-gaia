import React from 'react';

export default function ServiceDetail({ params }) {
  const { slug } = params;

  // 今後、ここで slug に基づいてサービスの詳細データを取得・表示します

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">サービス詳細: {slug}</h1>
      <p>ここにサービス「{slug}」の詳細な内容が表示されます。</p>
      {/* 取得したデータを表示するコンポーネント */}
    </div>
  );
} 