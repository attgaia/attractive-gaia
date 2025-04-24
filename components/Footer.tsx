import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-sm">
          <span>© 2025 Attractive Gaia. All rights reserved.</span>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/commercial-transaction" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 