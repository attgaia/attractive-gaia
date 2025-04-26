'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useFormContext } from '@/components/context/FormContext';

export default function ConfirmPage() {
  const router = useRouter();
  const { contactForm } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // すべての入力項目を取得
  const formData = contactForm;

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        // emailConfirm は送信しない
        if (key !== 'emailConfirm') {
          params.append(key, value);
        }
      });

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzXf5lmeEn2EgMHTb68mZRAGOfYlSYEtjT1QJlpv7m_bpmmvfadoJF2Vs5gSf3QY0pP/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );

      if (response.ok) {
        router.push('/contact/complete');
      } else {
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ConfirmField = ({ label, value, required = false }: { label: string; value: string; required?: boolean }) => (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-1">
        <label className="text-gray-700">{label}</label>
        {required ? (
          <span className="px-2 py-0.5 text-xs font-bold text-white bg-[#FF3B30] rounded">必須</span>
        ) : (
          <span className="px-2 py-0.5 text-xs font-bold text-white bg-[#40E0D0] rounded">任意</span>
        )}
      </div>
      <div className="border p-2 rounded bg-gray-50">{value || '未入力'}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="text-[#008B8B] hover:text-[#007070] transition-colors flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            入力画面に戻る
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">入力内容の確認</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <ConfirmField label="法人名・屋号名・団体名" value={formData.companyName || ''} required />
          <ConfirmField label="お名前" value={formData.name || ''} required />
          <ConfirmField label="部署名" value={formData.department || ''} />
          <ConfirmField label="役職名" value={formData.position || ''} />
          <ConfirmField label="メールアドレス" value={formData.email || ''} required />
          <ConfirmField label="電話番号" value={formData.phone || ''} />
          <ConfirmField label="所在地" value={formData.address || ''} required />
          <ConfirmField label="お問い合わせの種類" value={formData.inquiryType || ''} required />
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <label className="text-gray-700">お問い合わせ内容</label>
              <span className="px-2 py-0.5 text-xs font-bold text-white bg-[#FF3B30] rounded">必須</span>
            </div>
            <div className="border p-2 rounded bg-gray-50 whitespace-pre-wrap min-h-[100px]">
              {formData.message || ''}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleBack}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              入力画面に戻る
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#008B8B] text-white py-2 px-4 rounded hover:bg-[#007070] disabled:bg-[#008B8B]/50"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 