import type { Metadata } from "next";
import { Zen_Maru_Gothic, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { TextureOverlay } from "@/components/layout/TextureOverlay";
import { BackToTop } from "@/components/ui/BackToTop";

const zenMaru = Zen_Maru_Gothic({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const notoTC = Noto_Sans_TC({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "台南柑仔蜜之旅 | 5/23 - 5/25",
  description: "酸甘甜的全新行程 — 阿堡榮譽出品",
  openGraph: {
    title: "台南柑仔蜜之旅 | 5/23 - 5/25",
    description: "酸甘甜的全新行程 — 阿堡榮譽出品",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "台南柑仔蜜之旅 | 5/23 - 5/25",
    description: "酸甘甜的全新行程 — 阿堡榮譽出品",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW" className={`${zenMaru.variable} ${notoTC.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">跳至內容</a>
        <TextureOverlay />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
