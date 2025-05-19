// lib/data.tsx
import { LucideProps } from "lucide-react";
import { Brain, PenTool, Image, Layout, ShoppingCart, MapPin, Code, MessageSquare, Globe, Star, Languages, FileText, Package, Recycle, Repeat } from "lucide-react";
import { ComponentType } from "react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ComponentType<LucideProps & { className?: string }>;
  href: string;
};

export const services: ServiceItem[] = [
  {
    title: "AIコンサルティング",
    description: "AIを活用したビジネス戦略の立案と実装支援",
    icon: Brain,
    href: "/services/ai-consulting"
  },
  {
    title: "Web制作一括請負サービス",
    description: "企画からデザイン、開発、運用までワンストップで提供するWeb制作サービス",
    icon: Layout,
    href: "/services/web-production-package"
  },
  {
    title: "Web制作・月額プラン",
    description: "月額固定料金でWebサイトの制作・運用・保守を継続的にサポート",
    icon: Repeat,
    href: "/services/web-production-lite"
  },
  {
    title: "Webのお医者さん",
    description: "Webサイトの診断と改善提案",
    icon: Code,
    href: "/services/web-doctor"
  },
  {
    title: "記事作成",
    description: "SEOを考慮した高品質な記事作成サービス",
    icon: PenTool,
    href: "/services/article-writing"
  },
  {
    title: "漫画LP・バナー",
    description: "漫画スタイルのランディングページとバナー制作",
    icon: Image,
    href: "/services/manga-lp-banner"
  },
  {
    title: "ECコンサルティング",
    description: "ECサイトの構築と運用支援",
    icon: ShoppingCart,
    href: "/services/ec-consulting"
  },
  {
    title: "地域活性化支援",
    description: "地域の活性化を促進する支援サービス",
    icon: MapPin,
    href: "/services/regional-revitalization"
  },
  {
    title: "輸入コンサルティング",
    description: "海外製品の輸入ビジネスをトータルでサポート",
    icon: Globe,
    href: "/services/import-consulting"
  },
  {
    title: "企業占い",
    description: "データと占いで企業の未来を予測",
    icon: Star,
    href: "/services/corporate-fortune-telling"
  },
  {
    title: "文字起こし・翻訳",
    description: "音声・動画の文字起こしと多言語翻訳をワンストップで",
    icon: Languages,
    href: "/services/transcription-translation"
  },
  {
    title: "コンテンツ販売",
    description: "高品質なコンテンツを効果的に販売",
    icon: FileText,
    href: "/services/content-sales"
  },
  {
    title: "オリジナル商品",
    description: "オリジナル商品の企画・開発・販売をサポート",
    icon: Package,
    href: "/services/original-products"
  },
  {
    title: "リユースビジネス",
    description: "サステナブルなリユースビジネスを支援",
    icon: Recycle,
    href: "/services/reuse-business"
  },
  {
    title: "無料相談",
    description: "お気軽にご相談ください",
    icon: MessageSquare,
    href: "/free-consultation"
  }
];
