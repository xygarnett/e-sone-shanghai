import type { Metadata } from "next";
import "./globals.css";

const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.GITHUB_ACTIONS
  ? `https://xygarnett.github.io${deploymentBasePath}`
  : "http://localhost:3000";
const socialImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "E-sone（Shanghai）｜中国市場進出・EC・Digital Marketing Partner",
  description: "E-sone（Shanghai）は、日本ブランドの中国市場進出、EC運営、デジタルマーケティング、データ分析を上海から支援します。",
  openGraph: { title: "E-sone（Shanghai）｜中国市場に、確かな一歩を。", description: "日本ブランドの中国市場成長を支えるEC・デジタルマーケティングパートナー。", images: [socialImage], locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image", title: "E-sone（Shanghai）｜中国市場に、確かな一歩を。", description: "E-sone（Shanghai）が中国ECとブランド成長を支援。", images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
