import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { TextureOverlay } from "@/components/layout/TextureOverlay";

const zenMaru = Zen_Maru_Gothic({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

export const metadata: Metadata = {
  title: "台南柑仔蜜之旅 | 5/23 - 5/25",
  description: "酸甘甜的全新行程 — 阿堡榮譽出品",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW" className={zenMaru.variable}>
      <body>
        <TextureOverlay />
        {children}
        <Footer />
      </body>
    </html>
  );
}
