import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - ページが見つかりません | ATTRACTIVEGAIA',
  description: 'お探しのページが見つかりませんでした。',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">ページが見つかりませんでした</p>
        <Button asChild className="bg-gray-900 text-white hover:bg-gray-800">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            トップページへ戻る
          </Link>
        </Button>
      </div>
    </div>
  );
} 