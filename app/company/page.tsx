import type { Metadata } from "next";
import { SitePage } from "../page";

export const metadata: Metadata = {
  title: "会社情報・お問い合わせ｜E-sone（Shanghai）",
  description: "E-sone（Shanghai）の会社情報、Founder紹介、日本企業向けお問い合わせ窓口をご案内します。",
};

export default function CompanyPage() {
  return <SitePage view="company" />;
}
