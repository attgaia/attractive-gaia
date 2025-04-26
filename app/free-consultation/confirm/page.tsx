'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

type ConfirmFieldProps = {
  label: string;
  value: string;
  required?: boolean;
};

const ConfirmField = ({ label, value, required }: ConfirmFieldProps) => (
  <div className="space-y-2">
    <div className="text-sm text-gray-500">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </div>
    <div className="text-base">{value || '未入力'}</div>
  </div>
);

export default function ConsultationConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formData = {
    companyName: searchParams.get('companyName') || '',
    name: searchParams.get('name') || '',
    department: searchParams.get('department') || '',
    position: searchParams.get('position') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    address: searchParams.get('address') || '',
    consultationType: searchParams.get('consultationType') || '',
    message: searchParams.get('message') || '',
  };

  const consultationTypeMap = {
    business: '事業相談',
    technical: '技術相談',
    other: 'その他',
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyN5XX_iVpUuIQ9YtnafMvSo4Vckbv0zJ2V_y9y696RJfPwruU4HmDo3SSN1NwPYdGv/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );

      if (response.ok) {
        router.push('/free-consultation/complete');
      } else {
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">入力内容の確認</h1>
      <div className="space-y-6 mb-8">
        <ConfirmField
          label="法人名・屋号名・団体名"
          value={formData.companyName}
          required
        />
        <ConfirmField
          label="お名前"
          value={formData.name}
          required
        />
        <ConfirmField
          label="部署名"
          value={formData.department}
        />
        <ConfirmField
          label="役職名"
          value={formData.position}
        />
        <ConfirmField
          label="メールアドレス"
          value={formData.email}
          required
        />
        <ConfirmField
          label="電話番号"
          value={formData.phone}
        />
        <ConfirmField
          label="所在地"
          value={formData.address}
          required
        />
        <ConfirmField
          label="無料相談の種類"
          value={consultationTypeMap[formData.consultationType as keyof typeof consultationTypeMap] || formData.consultationType}
          required
        />
        <ConfirmField
          label="無料相談内容"
          value={formData.message}
          required
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link
          href="/free-consultation"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          入力画面に戻る
        </Link>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-8"
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </Button>
      </div>
    </div>
  );
} 