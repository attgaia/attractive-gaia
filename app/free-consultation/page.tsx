'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Sparkles, CheckCircle, Clock, Users } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormContext } from '@/components/context/FormContext';

const formSchema = z.object({
  companyName: z.string().min(1, { message: '法人名・屋号名・団体名を入力してください' }),
  name: z.string().min(1, { message: 'お名前を入力してください' }),
  department: z.string().optional(),
  position: z.string().optional(),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  emailConfirm: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  phone: z.string().optional(),
  address: z.string().min(1, { message: '所在地を入力してください' }),
  consultationType: z.string().min(1, { message: '無料相談の種類を選択してください' }),
  message: z.string().min(1, { message: '無料相談内容を入力してください' }),
}).refine((data) => data.email === data.emailConfirm, {
  message: 'メールアドレスが一致しません',
  path: ['emailConfirm'],
});

const RequiredBadge = () => (
  <span className="ml-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
    必須
  </span>
);

const OptionalBadge = () => (
  <span className="ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
    任意
  </span>
);

function InnerConsultationPage() {
  const router = useRouter();
  const { consultationForm, setConsultationForm } = useFormContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: consultationForm,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setConsultationForm(values);
    const params = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    router.push(`/free-consultation/confirm?${params.toString()}`);
  }

  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          無料相談
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          あなたのビジネスの課題や目標について、専門家が無料でご相談に乗ります。
          お気軽にお申し込みください。
        </p>
      </section>

      {/* メリットセクション */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          無料相談のメリット
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Sparkles className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">専門家のアドバイス</h3>
            <p className="text-gray-600">
              経験豊富な専門家が、あなたのビジネスに最適な解決策を提案します。
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">時間の節約</h3>
            <p className="text-gray-600">
              効率的なアドバイスで、試行錯誤の時間を大幅に削減できます。
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">継続的なサポート</h3>
            <p className="text-gray-600">
              必要に応じて、より詳細なコンサルティングサービスもご提供可能です。
            </p>
          </Card>
        </div>
      </section>

      {/* 相談内容セクション */}
      <section className="mb-12 md:mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          こんなご相談にお応えします
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">Webサイトの改善や新規制作について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">AIを活用した業務効率化について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">コンテンツ制作やマーケティングについて</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">ECサイトの運営や改善について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">地域活性化や観光振興について</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">その他、デジタル活用全般について</p>
          </div>
        </div>
      </section>

      {/* お申し込みフォームセクション */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            無料相談お申し込みフォーム
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      法人名・屋号名・団体名
                      <RequiredBadge />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel className="flex items-center">
                      お名前
                      <RequiredBadge />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel className="flex items-center">
                      部署名
                      <OptionalBadge />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel className="flex items-center">
                      役職名
                      <OptionalBadge />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel className="flex items-center">
                      メールアドレス
                      <RequiredBadge />
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
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
                    <FormLabel className="flex items-center">
                      メールアドレス確認
                      <RequiredBadge />
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
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
                    <FormLabel className="flex items-center">
                      電話番号
                      <OptionalBadge />
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
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
                    <FormLabel className="flex items-center">
                      所在地
                      <RequiredBadge />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consultationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      無料相談の種類
                      <RequiredBadge />
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="business">事業相談</SelectItem>
                        <SelectItem value="technical">技術相談</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
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
                    <FormLabel className="flex items-center">
                      無料相談内容
                      <RequiredBadge />
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button type="submit" className="px-8">確認画面へ</Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default InnerConsultationPage; 