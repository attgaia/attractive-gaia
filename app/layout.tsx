import React from 'react';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { FormProvider } from '@/components/context/FormContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KFNDEDVE9C"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KFNDEDVE9C', {
              page_path: window.location.pathname,
            });
          `
        }} />
      </head>
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
