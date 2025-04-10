import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attractive Gaia',
  description: 'AI活用で業務効率と商品開発とWeb集客を一括サポート',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
