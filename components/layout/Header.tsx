'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo_attractivegaia.png" alt="ATT GAIA" width={300} height={40} className="object-contain" />
        </Link>
        <nav className="flex gap-6">
          <Link href="/services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            サービス一覧
          </Link>
          <Link href="/works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            成功事例
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            企業情報
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* AI支援サービスボタンを削除 */}
        </div>
      </div>
    </header>
  );
}
