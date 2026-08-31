import type { Metadata } from "next";
import { SitePage } from "../page";

export const metadata: Metadata = {
  title: "ACCIO WORK導入・AI実装支援｜E-sone（Shanghai）",
  description: "ACCIO WORKの導入・販売、Skill・AIエージェント開発、TOKEN調達、日本企業向けROI検証を支援します。",
};

export default function AccioPage() {
  return <SitePage view="accio" />;
}
