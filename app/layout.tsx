import React from 'react';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { FormProvider } from '@/components/context/FormContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ATT GAIA',
  description: '地球環境に優しく銀河系を代表する会社を創る',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <FormProvider>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </FormProvider>
      </body>
    </html>
  );
}
