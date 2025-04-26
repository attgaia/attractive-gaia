import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ConsultationCompletePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-2xl font-bold">送信完了</h1>
        <p className="text-gray-600">
          無料相談のお申し込みありがとうございます。<br />
          内容を確認次第、担当者よりご連絡させていただきます。
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button>トップページへ戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 