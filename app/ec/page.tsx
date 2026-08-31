import type { Metadata } from "next";
import { SitePage } from "../page";

export const metadata: Metadata = {
  title: "中国EC・デジタルマーケティング｜E-sone（Shanghai）",
  description: "日本ブランドの中国市場戦略、EC立ち上げ、広告、SNS、データ分析を一貫して支援します。",
};

export default function EcPage() {
  return <SitePage view="ec" />;
}
