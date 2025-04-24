'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// バリデーションスキーマの定義
const formSchema = z.object({
  companyName: z.string().min(1, { message: '法人名・屋号名・団体名を入力してください' }),
  name: z.string().min(1, { message: 'お名前を入力してください' }),
  department: z.string().optional(),
  position: z.string().optional(),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  emailConfirm: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  phone: z.string().optional(),
  address: z.string().min(1, { message: '所在地を入力してください' }),
  inquiryType: z.string().min(1, { message: 'お問い合わせの種類を選択してください' }),
  message: z.string().min(1, { message: 'お問い合わせ内容を入力してください' }),
}).refine((data) => data.email === data.emailConfirm, {
  message: "メールアドレスが一致しません",
  path: ["emailConfirm"],
});

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      name: '',
      department: '',
      position: '',
      email: '',
      emailConfirm: '',
      phone: '',
      address: '',
      inquiryType: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // 確認画面へ遷移
      const params = new URLSearchParams();
      Object.entries(values).forEach(([key, value]) => {
        params.append(key, value || '');
      });
      router.push(`/contact/confirm?${params.toString()}`);
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  }

  const RequiredLabel = () => (
    <span className="px-2 py-1 text-xs font-bold text-white bg-[#FF3B30] rounded">必須</span>
  );

  const OptionalLabel = () => (
    <span className="px-2 py-1 text-xs font-bold text-white bg-[#40E0D0] rounded">任意</span>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-[#008B8B] hover:text-[#007070] transition-colors flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            トップページに戻る
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">お問い合わせフォーム</h1>
        
        <p className="text-center mb-12 text-gray-700">
          アトラクティブガイア株式会社へのお問い合わせは、下記フォームより必要事項をご記入の上、お送りください。
        </p>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      法人名・屋号名・団体名
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="アトラクティブガイア株式会社" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      お名前
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="亜藤 太郎" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <OptionalLabel />
                      部署名
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="広報部" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <OptionalLabel />
                      役職名
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="取締役" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      メールアドレス
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      メールアドレス確認
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <OptionalLabel />
                      電話番号
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="090-9999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      所在地
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="〒106-6108 東京都港区六本木6丁目10-1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      お問い合わせの種類
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="以下から選択してください" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="資料請求">資料請求</SelectItem>
                        <SelectItem value="お見積り">お見積り</SelectItem>
                        <SelectItem value="ご相談">ご相談</SelectItem>
                        <SelectItem value="その他">その他</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <RequiredLabel />
                      お問い合わせ内容
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="こちらにお問い合わせ内容を入力してください。" 
                        className="min-h-[200px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-[#008B8B] hover:bg-[#007070] text-white px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '確認画面へ'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
} 