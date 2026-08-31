import type { Metadata } from "next";
import { SitePage } from "../page";

export const metadata: Metadata = {
  title: "Brand Success Stories｜E-sone（Shanghai）",
  description: "GOLDWIN、RANDA、DENHAMをはじめとするブランドの中国市場成長支援事例をご紹介します。",
};

export default function CasesPage() {
  return <SitePage view="cases" />;
}
