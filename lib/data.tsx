// lib/data.tsx
import { LucideProps } from "lucide-react";
import { Brain, PenTool, Image, Layout, ShoppingCart, MapPin, Code, MessageSquare } from "lucide-react";
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
    title: "Web制作パッケージ",
    description: "包括的なWebサイト制作サービス",
    icon: Layout,
    href: "/services/web-production-package"
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
    title: "Webドクター",
    description: "Webサイトの診断と改善提案",
    icon: Code,
    href: "/services/web-doctor"
  },
  {
    title: "無料相談",
    description: "お気軽にご相談ください",
    icon: MessageSquare,
    href: "/contact"
  }
];
