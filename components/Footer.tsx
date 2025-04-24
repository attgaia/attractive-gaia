import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="flex justify-center mb-8">
          <Link href="/" className="font-bold text-xl text-secondary">
            ATT GAIA
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-medium mb-4">サービス</h4>
            <nav className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2">サービス</h3>
              <Link href="#" className="hover:text-secondary transition-colors">
                AI支援サービス
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Webサイト制作
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                ブランディング
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                オリジナル商品開発
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                集客支援
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">メディア</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  最新記事
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  AI活用事例
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  ビジネストレンド
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  お役立ち情報
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  ミッション
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  経営陣
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  お問い合わせフォーム
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  LINE公式アカウント
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">SNS</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 Attractive Gaia. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-secondary transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">
                利用規約
              </Link>
              <Link href="/commercial-transaction" className="hover:text-secondary transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 