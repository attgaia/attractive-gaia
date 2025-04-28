'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">予期せぬエラーが発生しました</h1>
            <p className="text-xl text-gray-600 mb-8">申し訳ありません。問題が発生しました。</p>
            <div className="space-x-4">
              <Button onClick={() => reset()} className="bg-gray-900 text-white hover:bg-gray-800">
                もう一度試す
              </Button>
              <Button asChild className="bg-gray-900 text-white hover:bg-gray-800">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  トップページへ戻る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 