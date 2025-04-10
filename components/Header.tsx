import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-emerald-600">
            ATTRACTIVE GAIA
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            サービス
          </Link>
          <Link href="#case-studies" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            制作実例
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            お客様の声
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white">AI支援サービスを見る</button>
        </div>
      </div>
    </header>
  );
} 