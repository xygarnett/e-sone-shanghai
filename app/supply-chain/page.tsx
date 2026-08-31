import type { Metadata } from "next";
import { SitePage } from "../page";

export const metadata: Metadata = {
  title: "中国サプライチェーン紹介｜E-sone（Shanghai）",
  description: "中国の工場探索、商品開発、サンプル、品質確認、物流パートナーへの接続を支援します。",
};

export default function SupplyChainPage() {
  return <SitePage view="supply" />;
}
