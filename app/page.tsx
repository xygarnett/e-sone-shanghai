import Link from "next/link";
import { brandLogoData } from "./brand-logo-data";

const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${deploymentBasePath}${path}`;

const metrics = [
  { value: "10年以上", label: "ブランドEC支援経験" },
  { value: "130+", label: "国内外ブランド支援" },
  { value: "25億RMB+", label: "年間サービスGMV" },
  { value: "10億RMB+", label: "広告運用実績" },
];

const contactEmail = "tim@e-sone.com";
const consultationMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("中国市場進出についてのご相談")}&body=${encodeURIComponent(
  "E-sone（Shanghai） Tim Wang 様\n\n中国市場進出・EC事業展開について相談したく、ご連絡いたしました。\n\n会社名：\nお名前：\nご連絡先：\nご相談内容：\n\nよろしくお願いいたします。"
)}`;

const proofPoints = [
  {
    label: "FULL BUSINESS SCENE",
    title: "ブランド全業務シーン対応",
    text: "市場参入、EC運営、広告、コンテンツ、CRM、データ分析まで、ブランド成長に必要な実務を横断して支援します。",
  },
  {
    label: "GMV GROWTH",
    title: "GMV成長を中心とした運営設計",
    text: "0→1の市場切入から成熟ブランドの全チャネル展開まで、売上成長に直結する運営体制を構築します。",
  },
  {
    label: "CERTIFIED TEAM",
    title: "Alibaba Marketing 五つ星サービスチーム",
    text: "プラットフォームルール、広告運用、消費者理解に精通した専門チームが、大型販促期から日常運営まで伴走します。",
  },
  {
    label: "EXECUTION NETWORK",
    title: "多拠点による実行体制",
    text: "上海本部を中心に、実行、倉庫物流、カスタマーサービス拠点と連携し、効率と品質の両立を図ります。",
  },
];

const expertise = [
  "中国EC市場戦略",
  "ブランド旗艦店運営",
  "デジタルマーケティング",
  "消費者データ分析",
  "SNSマーケティング",
  "越境ビジネス支援",
];

const esoneServices = [
  "EC Operation",
  "Digital Marketing",
  "Advertising",
  "Content",
  "Consumer Insight",
  "Data Analytics",
];

const locations = [
  "Shanghai Headquarters",
  "Shantou Execution Center",
  "Anhui Logistics Center",
  "Changsha Customer Service Center",
];

const marketProcess = [
  "Market Strategy",
  "EC Launch",
  "Digital Marketing",
  "Consumer Growth",
  "Data Optimization",
];

const channels = [
  "Tmall",
  "Tmall Global",
  "JD.com",
  "RED / Xiaohongshu",
  "Douyin EC",
  "WeChat Mini Program",
];

const stories = [
  {
    no: "01",
    brand: "GOLDWIN",
    category: "Japanese Outdoor Brand",
    text: "中国EC市場における0→1の事業構築を支援。",
    image: "https://www.goldwin-global.com/assets/feature/cactus-store/img/mv%40pc.jpg",
    logo: assetPath("/brand-logos/goldwin.png"),
    results: ["中国EC 0→1構築", "天猫旗艦店開設", "3ヶ月で月間GMV 100万元突破", "大型キャンペーン売上 前年比 +600%"],
  },
  {
    no: "02",
    brand: "RANDA",
    category: "Japanese Ladies Shoes Brand",
    text: "中国市場におけるブランド認知と販売成長を支援。",
    image: "https://wwwrandajp.ecbeing.biz/kikaku/abroad/26aw/newarrival-pc.jpg",
    logo: assetPath("/brand-logos/randa.png"),
    results: ["小紅書 × EC連携", "売上前年比 +35%", "広告効率改善"],
  },
  {
    no: "03",
    brand: "DENHAM",
    category: "Premium Denim Brand",
    text: "中国市場におけるEC・マーケティング成長を支援。",
    image: "https://images.ctfassets.net/jqqtl09n2ww8/7rOU2isNlDelIvTTu8hWRm/04746057987e008e373c32156e984ced/01-25-08-11-002-row1-1.jpg?fit=scale&fm=webp&q=75&w=2560",
    logo: assetPath("/brand-logos/denham.png"),
    results: ["GMV前年比 +30%", "広告予算前年比 +50%"],
  },
];

const brandLogos = [
  { name: "GOLDWIN", src: brandLogoData.goldwin },
  { name: "RANDA", src: brandLogoData.randa },
  { name: "DENHAM", src: brandLogoData.denham },
  { name: "Aesop", src: brandLogoData.aesop },
  { name: "DIESEL", src: brandLogoData.diesel },
  { name: "Maison Margiela", src: brandLogoData["maison-margiela"] },
  { name: "G/FORE", src: brandLogoData["g-fore"] },
  { name: "Tory Burch", src: brandLogoData["tory-burch"] },
  { name: "Versace", src: brandLogoData.versace },
  { name: "Marni", src: brandLogoData.marni },
  { name: "Global Work", src: brandLogoData["global-work"] },
  { name: "LILY", src: brandLogoData.lily },
  { name: "DJULA", src: brandLogoData.djula },
  { name: "BOY", src: brandLogoData.boy },
  { name: "UNICA", src: brandLogoData.unica },
  { name: "OUT CIRCUS", src: brandLogoData["out-circs"] },
  { name: "林清轩", src: brandLogoData["lin-qing-xuan"] },
  { name: "Polymaker", src: brandLogoData.polymaker },
];

const growthServices = [
  "Advertising Optimization",
  "Consumer Insight",
  "KOL / KOC Marketing",
  "SNS Operation",
  "Content Production",
  "Data Analytics",
];

const companyInfo = [
  { label: "Contact", value: "Tim Wang / CEO" },
  { label: "Legal Representative", value: "Tim Wang" },
  { label: "Company Name", value: "上海逸效电子商务有限公司" },
  { label: "English Name", value: "Shanghai E-Sone E-commerce Co., Ltd." },
  { label: "Established", value: "2021年8月" },
  { label: "Location", value: "Shanghai, China" },
  { label: "Address", value: "Room 912, Tongpu Building, No.1220 Tongpu Road, Putuo District, Shanghai, China" },
];

const coreServices = [
  {
    no: "01",
    title: "中国EC・Digital Marketing",
    label: "Current Core Service",
    text: "日本ブランドの中国市場進出、EC運営、広告、SNS、CRM、データ分析を統合して支援します。",
    href: "/ec",
  },
  {
    no: "02",
    title: "ACCIO TOKEN海外展開支援",
    label: "ACCIO WORK / AI Agent",
    text: "ACCIO WORKの販売、Skill・AIエージェント開発、TOKEN大口調達を組み合わせ、AI活用を事業実装へつなげます。",
    href: "/accio",
  },
  {
    no: "03",
    title: "中国サプライチェーン紹介",
    label: "Supply Chain Matching",
    text: "中国側の工場、商品開発、調達、物流ネットワークへの接続を支援します。詳細メニューは順次拡充予定です。",
    href: "/supply-chain",
  },
];

const accioFeatures = [
  {
    no: "01",
    title: "Agent Hub",
    label: "AI Business Team",
    text: "役割、利用モデル、業務範囲を定義したAIエージェントを作成・管理し、企業ごとの実務チームとして設計します。",
    image: "https://s.alicdn.com/@img/imgextra/i2/O1CN01xQsNJ81RwCZUXr8a2_!!6000000002175-2-tps-2224-1526.png",
  },
  {
    no: "02",
    title: "Automations",
    label: "Scheduled Execution",
    text: "レポート作成、競合監視、データ同期、定期チェックなどを、自然言語で設定したスケジュールに沿って実行します。",
    image: "https://s.alicdn.com/@img/imgextra/i3/O1CN01R33TGu1WljbFQvqYu_!!6000000002829-2-tps-2848-1946.png",
  },
  {
    no: "03",
    title: "Browser",
    label: "Web Operation",
    text: "Web調査、サイト確認、情報収集、フォーム操作など、ブラウザを必要とする業務を権限管理のもとで支援します。",
    image: "https://s.alicdn.com/@img/imgextra/i1/O1CN01TQvj3c1x1TDT7oEgD_!!6000000006383-2-tps-2716-1972.png",
  },
  {
    no: "04",
    title: "Connectors",
    label: "Business Apps",
    text: "Gmail、Google Drive、Slack、Notionなどの外部サービスと接続し、社内外の情報を横断した業務フローを構築します。",
    image: "https://s.alicdn.com/@img/imgextra/i2/O1CN01XIu8Aa1lcm5WNPZqs_!!6000000004840-2-tps-2668-1688.png",
  },
  {
    no: "05",
    title: "Skills",
    label: "Capability Extension",
    text: "標準Skillの導入に加え、企業固有の手順、判断基準、専門知識を組み込んだカスタムSkillを開発できます。",
    image: "https://s.alicdn.com/@img/imgextra/i2/O1CN014gpRnh1P94rNf7fIc_!!6000000001797-2-tps-2860-1946.png",
  },
  {
    no: "06",
    title: "Channels & Pairing",
    label: "Always Connected",
    text: "チャットチャネルや複数デバイスと連携し、オフィス内外からエージェントへ依頼できる継続的な業務環境を整えます。",
    image: "https://s.alicdn.com/@img/imgextra/i3/O1CN01JDJj4C1TMb0td5xt9_!!6000000002368-2-tps-3188-1762.png",
  },
];

const aiComparisons = [
  {
    name: "ACCIO WORK",
    type: "実行型AIワークスペース",
    fit: "複数のAIエージェントを企業実務に組み込みたいチーム",
    strengths: "Agent Hub / Automations / Browser / Connectors / Skills / Channels",
    note: "E-soneによる導入・開発・TOKEN調達支援",
    featured: true,
  },
  {
    name: "ChatGPT",
    type: "汎用AIアシスタント",
    fit: "調査、作成、分析、エージェント実行を幅広く進めたい組織",
    strengths: "対話 / コンテンツ生成 / Deep Research / Agent機能 / Apps",
    note: "個人からチームまで幅広い知識業務に対応",
  },
  {
    name: "Claude",
    type: "知識業務・長文分析",
    fit: "文書、リサーチ、開発で深い分析と連携性を重視する組織",
    strengths: "Research / Integrations / MCP / 文書・開発支援",
    note: "分析、制作、開発を中心としたコラボレーション",
  },
  {
    name: "Microsoft 365 Copilot",
    type: "Microsoft 365統合",
    fit: "Word、Excel、PowerPoint、Outlook、Teams中心の組織",
    strengths: "Work IQ / Microsoft 365 Apps / Copilot Studio / Agents",
    note: "既存のMicrosoft 365業務環境との統合に強み",
  },
];

const japanMarketStrengths = [
  {
    no: "01",
    title: "調達から取引までの一体化",
    text: "公式Alibaba.com Connectorと専用Sourcing Skillを通じ、サプライヤー探索、比較、一括問い合わせ、自動交渉、発注・支払いまでを一つの業務フローでつなげられます。",
  },
  {
    no: "02",
    title: "Alibaba.comの専門データ",
    text: "2億点超の商品とサプライヤー情報を活用した機会分析、企業確認、価格・MOQ・納期・認証の比較に対応。汎用AIとは異なる調達専門性が差別化要素です。",
  },
  {
    no: "03",
    title: "越境EC業務のプリセット化",
    text: "商品選定、Amazon売れ筋分析、問い合わせ、交渉、物流確認などの既成Skillを利用可能。日本市場固有の運用は、E-soneが専用Skill / Agentとして追加設計します。",
  },
  {
    no: "04",
    title: "日本語・JPY対応と導入窓口",
    text: "Accioは日本語とJPY表示に対応し、Alibaba.comのTrade AssuranceではJPY決済にも対応。E-soneが日本企業向けの導入・開発・運用窓口を担います。",
  },
];

const japanMarketCautions = [
  "APPI対応、データ保存地域、SLA、監査資料は、企業要件と利用プランに応じて契約前に個別確認が必要です。",
  "取引・支払い・物流機能は、Alibaba.comアカウント、対象地域、注文条件、利用バージョンにより提供範囲が異なります。",
  "楽天市場やAmazon.co.jpとの直接連携は標準搭載を前提とせず、必要に応じて専用Skill / Connectorを設計します。",
  "汎用的な調査・資料作成のみが目的の場合は、ChatGPT、Claude等も含め、業務単位で最適なAIを選定します。",
];

const roiDimensions = [
  {
    pillar: "安定",
    traditional: "収益成長",
    title: "新規販路開拓の確実性",
    text: "売上の大きさだけでなく、商品化、適合確認、初回販売、継続発注までの到達度を段階別に検証します。",
    proof: "商品化数 / 適合確認率 / 初回返品率 / 継続発注率",
  },
  {
    pillar: "安心",
    traditional: "コスト削減",
    title: "業務負荷の可視化と削減",
    text: "作業時間だけでなく、手作業工程、差し戻し、入力ミスを可視化し、社員が高付加価値業務へ集中できる状態を評価します。",
    proof: "手作業工程数 / 処理時間 / 誤り率 / 再配分できた工数",
  },
  {
    pillar: "安全",
    traditional: "リスク管理",
    title: "コンプライアンスリスクの低減",
    text: "関税、表示規制、知的財産、サプライヤー情報を確認し、人による最終承認と追跡可能な記録を残します。",
    proof: "確認項目数 / 法務確認時間 / 承認履歴 / 再発防止記録",
  },
];

const roiEvidenceLayers = [
  {
    no: "01",
    title: "日本同業の実証資料",
    text: "公開許諾を得た企業の導入前後データ、経営者インタビュー、書面証言など、第三者が確認できる資料を整備します。",
  },
  {
    no: "02",
    title: "導入効果シミュレーション",
    text: "品目、月間調達額、担当人数、現在の工程を入力し、保守・基準・上振れの三つの条件で回収期間を試算します。",
  },
  {
    no: "03",
    title: "小規模な検証と効果報告",
    text: "対象業務を限定して検証し、終了時に処理時間、精度、継続課題をまとめた効果検証レポートを提出する設計です。",
  },
  {
    no: "04",
    title: "第三者確認と監査資料",
    text: "法制度、情報管理、会計・税務上の利用可否など、企業審査で必要になる確認項目を案件ごとに整理します。",
  },
];

const roiTrialSteps = [
  { no: "01", phase: "認知", title: "セミナー / 個別相談", text: "越境ECとAI活用の対象業務を整理し、導入しない場合を含めて適合性を確認します。" },
  { no: "02", phase: "検証", title: "診断・30日間検証設計", text: "現状値と評価指標を先に合意し、提供条件を個別協議したうえで限定的な検証を行います。" },
  { no: "03", phase: "限定導入", title: "一部機能から開始", text: "サプライヤー検索、問い合わせ支援など、既存業務への影響が小さい範囲から開始します。" },
  { no: "04", phase: "展開", title: "KPIレビュー後に拡張", text: "実績に基づく推定と条件付きの実現可能性を確認し、対象部門と業務範囲を段階的に広げます。" },
];

const roiApprovalDocs = [
  "現状課題の定量分析",
  "主要AIツールとの比較",
  "初期費用・運用費用・回収期間",
  "情報管理・停止時対応・属人化対策",
];

const roiExternalChecks = [
  "JETRO・商工会議所等との連携可能性",
  "経済産業省 DX認定制度の適用可能性",
  "ISMAP / APPI観点の監査・説明資料",
  "日本国内の会計・税務専門家による確認",
];

const accioOffers = [
  "ACCIO WORK Sales",
  "Skill Development",
  "AI Agent Development",
  "Workflow Automation",
  "TOKEN Bulk Procurement",
  "Team Enablement",
];

const supplyMenus = [
  "Supplier Discovery",
  "Factory Matching",
  "Product Development",
  "Sample Coordination",
  "Quality Check",
  "Logistics Introduction",
];

export type SiteView = "home" | "ec" | "accio" | "supply" | "cases" | "company";

const subpageMeta = {
  ec: {
    index: "01",
    eyebrow: "CHINA EC & DIGITAL MARKETING",
    title: "中国市場で、ブランドを育てる。",
    lead: "市場戦略からEC運営、広告、SNS、データ分析まで。日本ブランドの中国事業を一貫して支援します。",
    image: assetPath("/hero-shanghai.png"),
  },
  accio: {
    index: "02",
    eyebrow: "ACCIO WORK & AI IMPLEMENTATION",
    title: "AIを、企業の実務へ。",
    lead: "ACCIO WORKの導入・販売、Skill / AIエージェント開発、TOKEN調達を日本企業向けに支援します。",
    image: "https://img.alicdn.com/imgextra/i2/O1CN01DCueiP1vZFDTgtNh8_!!6000000006186-2-tps-5080-2853.png",
  },
  supply: {
    index: "03",
    eyebrow: "CHINA SUPPLY CHAIN",
    title: "中国の供給力を、確かな接点へ。",
    lead: "工場探索、商品開発、サンプル、品質確認、物流まで、中国側の実行ネットワークをご紹介します。",
    image: assetPath("/hero-shanghai.png"),
  },
  cases: {
    index: "04",
    eyebrow: "BRAND SUCCESS STORIES",
    title: "成長の背景にある、実行の記録。",
    lead: "日本・グローバルブランドの中国市場参入、EC運営、マーケティング支援事例をご紹介します。",
    image: "https://www.goldwin-global.com/assets/feature/cactus-store/img/mv%40pc.jpg",
  },
  company: {
    index: "05",
    eyebrow: "ABOUT E-SONE（SHANGHAI）",
    title: "長期的な中国事業パートナーとして。",
    lead: "上海を拠点に、戦略設計から日々の実行まで、日本企業の中国市場展開に伴走します。",
    image: assetPath("/hero-shanghai.png"),
  },
} as const;

export function SitePage({ view = "home" }: { view?: SiteView }) {
  const meta = view === "home" ? null : subpageMeta[view];
  return (
    <main className={`site-view site-view-${view}`}>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="E-sone（Shanghai） ホーム">E-sone（Shanghai）</Link>
        <nav aria-label="メインナビゲーション">
          <Link className={view === "ec" ? "is-active" : undefined} href="/ec">EC</Link>
          <Link className={view === "accio" ? "is-active" : undefined} href="/accio">ACCIO</Link>
          <Link className={view === "supply" ? "is-active" : undefined} href="/supply-chain">Supply</Link>
          <Link className={view === "cases" ? "is-active" : undefined} href="/cases">Cases</Link>
          <Link className={view === "company" ? "is-active" : undefined} href="/company">Company</Link>
          <Link className="nav-contact" href="/company#contact">Contact</Link>
        </nav>
        <details className="mobile-menu">
          <summary>MENU</summary>
          <div>
            <Link href="/ec">EC・Digital Marketing</Link>
            <Link href="/accio">ACCIO WORK</Link>
            <Link href="/supply-chain">Supply Chain</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/company">Company / Contact</Link>
          </div>
        </details>
      </header>

      {meta && (
        <section className="subpage-hero" id="top">
          <div className="subpage-visual" style={{ backgroundImage: `url(${meta.image})` }} />
          <div className="subpage-shade" />
          <div className="subpage-copy">
            <p><span>{meta.index}</span>{meta.eyebrow}</p>
            <h1>{meta.title}</h1>
            <p className="subpage-lead">{meta.lead}</p>
            <Link href="/">← Home</Link>
          </div>
        </section>
      )}

      {view === "home" && (
      <>
      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="上海・陸家嘴のビジネススカイライン" style={{ backgroundImage: `url(${assetPath("/hero-shanghai.png")})` }} />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">E-sone（Shanghai）</p>
          <h1>中国市場に、<br />確かな一歩を。</h1>
          <p className="hero-lead">
            中国市場進出を成功へ導く<br />
            EC・AI・サプライチェーン連携パートナー
          </p>
          <p className="hero-en">China Growth Partner<br />for Global Business</p>
          <div className="hero-actions">
            <a className="button-primary" href={consultationMailto}>中国市場進出について相談する</a>
            <a className="button-secondary" href="#core">サービスを見る</a>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="E-sone（Shanghai）の実績データ">
        {metrics.map((item) => (
          <div className="metric-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="core-services section" id="core">
        <div className="section-label"><span>01</span><p>CORE SERVICES</p></div>
        <div className="core-heading">
          <p className="kicker gold">Three Business Domains</p>
          <h2>日本企業の中国展開を支える、<br />3つの事業領域</h2>
          <p>
            E-sone（Shanghai）は、既存の中国EC運営支援に加え、ACCIO WORKを軸としたAI活用支援、
            そして中国サプライチェーン紹介を組み合わせ、販売・業務・供給の三方向から海外展開を支援します。
          </p>
        </div>
        <div className="core-grid">
          {coreServices.map((item) => (
            <Link className="core-card" href={item.href} key={item.no}>
              <span>{item.no}</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-label"><span>02</span><p>POSITIONING</p></div>
        <div className="intro-grid">
          <p className="kicker">CHINA EC & DIGITAL MARKETING PARTNER</p>
          <h2>日本ブランドの、中国市場での持続的な成長を支える。</h2>
          <p className="intro-text">
            中国市場では、EC販売だけではなく、SNS、広告、物流、顧客管理、ブランドコミュニケーションを統合した戦略が必要です。
            E-sone（Shanghai）は、GMV成長を中心に据えたEC全チャネル運営、デジタルマーケティング、
            消費者データ分析を統合し、日本ブランドの中国市場展開を戦略設計から実行まで支援します。
          </p>
          <div className="proof-grid">
            {proofPoints.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      </>
      )}

      {view === "company" && (
      <>
      <section className="founder section" id="founder">
        <div className="section-label"><span>01</span><p>ABOUT</p></div>
        <div className="founder-grid">
          <div className="founder-copy">
            <p className="kicker gold">E-sone（Shanghai）について</p>
            <h2>上海を拠点に、中国ECの成長を支える実行チーム。</h2>
            <p>
              E-sone（Shanghai）は上海を拠点に、中国EC市場におけるブランド成長支援を専門としています。
              国内外ブランドの中国市場参入、EC事業構築、デジタルマーケティング、消費者データ分析まで、
              戦略設計から実行まで一貫して支援しています。大服飾、ラグジュアリー、FMCGなどの領域で培った知見をもとに、
              ブランドごとの成長段階に合わせた事業設計と運営改善を行います。
            </p>
            <div className="expertise-list" aria-label="専門領域">
              {expertise.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="founder-media" aria-label="E-sone（Shanghai）の人物写真">
            <div className="portrait-photo" role="img" aria-label="E-sone（Shanghai）創業者の正式ビジネスポートレート" style={{ backgroundImage: `url(${assetPath("/founder-portrait.png")})` }}>
              <strong>Founder Portrait</strong>
            </div>
            <div className="meeting-photo" role="img" aria-label="講演中のビジネスミーティング写真" style={{ backgroundImage: `url(${assetPath("/founder-speaking.jpg")})` }}>
              <span>講演 / Business Meeting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="esone" id="esone">
        <div className="section-label inverse"><span>02</span><p>E-SONE</p></div>
        <div className="esone-grid">
          <div>
            <p className="kicker gold">E-SONEについて</p>
            <h2>上海発のEC・デジタルマーケティングパートナー。</h2>
          </div>
          <div className="esone-copy">
            <p>
              海外ブランドおよび中国ブランドに対し、EC運営、マーケティング、広告、コンテンツ、
              消費者分析、データ分析を統合したサービスを提供しています。
              単一の流量獲得に偏らず、認知、興味、購買、継続までのタッチポイントを設計し、
              ブランドのライフサイクルに合わせた成長モデルを構築します。
            </p>
            <div className="credential">
              <strong>Alibaba Marketing Five-Star Service Partner</strong>
              <span>Officially certified performance marketing capability</span>
            </div>
            <div className="service-tags">
              {esoneServices.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
        <div className="location-band" aria-label="E-SONEの運営拠点">
          {locations.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      </>
      )}

      {view === "ec" && (
      <section className="market section" id="services">
        <div className="section-label"><span>01</span><p>EC SERVICE</p></div>
        <div className="market-head">
          <p className="kicker">日本ブランドの中国市場進出支援</p>
          <h2>EC、SNS、広告、物流、CRMをひとつの成長設計へ。</h2>
          <p>
            中国市場では、EC販売だけではなく、SNS、広告、物流、顧客管理、
            ブランドコミュニケーションを統合した戦略が必要です。
            E-SONEは日本ブランドの中国市場展開を、商品運営、会員運営、広告投資、SNS接点、物流・客服まで
            一つの成長サイクルとして設計し、戦略設計から運営までワンストップで支援します。
          </p>
        </div>
        <div className="market-layout">
          <ol className="process-list">
            {marketProcess.map((item) => <li key={item}>{item}</li>)}
          </ol>
          <div className="channel-list" aria-label="対応チャネル">
            {channels.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      )}

      {view === "cases" && (
      <section className="stories section" id="stories">
        <div className="section-label"><span>01</span><p>SUCCESS STORIES</p></div>
        <div className="stories-heading">
          <p className="kicker gold">Brand Success Stories</p>
          <h2>日本・グローバルブランドの中国市場成長を支援</h2>
        </div>
        <div className="story-list">
          {stories.map((item) => (
            <article className="story" key={item.brand}>
              <div
                className="story-visual"
                aria-label={`${item.brand}の公式ブランド画像`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span>{item.brand}</span>
                <small>Official Brand Visual</small>
              </div>
              <div className="story-copy">
                <span className="story-no">{item.no}</span>
                <div className="story-brand-logo">
                  <img src={item.logo} alt={`${item.brand} logo`} />
                </div>
                <p className="story-category">{item.category}</p>
                <h3>{item.brand}</h3>
                <p>{item.text}</p>
                <div className="result-list">
                  <span>成果</span>
                  {item.results.map((result) => <strong key={result}>{result}</strong>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      )}

      {(view === "home" || view === "cases") && (
      <section className={`brands section brands-${view}`}>
        <div className="section-label"><span>{view === "home" ? "03" : "02"}</span><p>BRANDS</p></div>
        <div className="brands-heading">
          <p className="kicker">Brands We Have Worked With</p>
          <h2>長期的なブランド成長を支える、パートナーシップの実績。</h2>
        </div>
        <div className="logo-wall" aria-label="提携・支援ブランドのロゴウォール">
          {(view === "home" ? brandLogos.slice(0, 12) : brandLogos).map((item) => (
            <div className="logo-tile" key={item.name}>
              <img src={item.src} alt={`${item.name} logo`} />
            </div>
          ))}
        </div>
        {view === "home" && (
          <Link className="brands-all-link" href="/cases">
            すべてのブランドを見る <span aria-hidden="true">→</span>
          </Link>
        )}
        <div className="brands-proof-note">
          <span>PROOF, NOT CLAIM.</span>
          <p>
            日本企業向けの提案では、ブランドロゴだけを実績の根拠とせず、
            公開許諾を得た導入前後データ、担当者証言、効果検証資料を段階的に整備します。
          </p>
        </div>
      </section>

      )}

      {view === "ec" && (
      <section className="data-growth">
        <div className="data-grid">
          <div>
            <p className="kicker gold">データドリブン型ブランド成長</p>
            <h2>データを、次の成長判断へ。</h2>
            <p>
              販売データ、広告データ、消費者データ、SNSデータを統合し、
              ブランド成長につながる意思決定を支援します。広告配信では、ターゲット分析、クリエイティブ検証、
              予算配分の最適化を継続し、獲得効率と投資対効果の改善を目指します。
            </p>
          </div>
          <div className="data-flow" aria-label="データドリブン型ブランド成長プロセス">
            {["DATA", "INSIGHT", "STRATEGY", "GROWTH"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="growth-services">
          {growthServices.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      )}

      {view === "accio" && (
      <>
      <section className="ai-section section" id="accio">
        <div className="section-label"><span>01</span><p>ACCIO TOKEN</p></div>
        <div className="accio-overview">
          <div className="ai-copy">
            <p className="kicker">ACCIO WORK海外展開支援</p>
            <h2>AIエージェントを、企業の実務と海外展開へ。</h2>
            <p>
              ACCIO WORKは、AIエージェント、Agent Hub、業務自動化、ブラウザ操作、外部サービス連携、
              Skill拡張を組み合わせ、企業の調査、営業、運用、分析業務を支援するAIワークスペースです。
              E-sone（Shanghai）は、日本企業および海外展開チームに向けて、ACCIO WORKの導入・販売、
              Skill / AIエージェント開発、TOKEN大口調達を支援します。
            </p>
            <div className="accio-offers">
              {accioOffers.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a className="roi-teaser" href="#accio-roi">
              <span>JAPAN ROI FRAMEWORK</span>
              <strong>安心・安全・安定を、稟議に通る証拠へ。</strong>
            </a>
            <a className="accio-official-link" href="https://www.accio.com/work" target="_blank" rel="noreferrer">
              ACCIO WORK 公式サイトを見る <span>↗</span>
            </a>
          </div>
          <figure className="accio-hero-visual">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01DCueiP1vZFDTgtNh8_!!6000000006186-2-tps-5080-2853.png"
              alt="ACCIO WORKのAI Business Team公式ビジュアル"
            />
            <figcaption>Official ACCIO WORK Visual</figcaption>
          </figure>
        </div>
        <nav className="accio-section-nav" aria-label="ACCIO WORKセクション内ナビゲーション">
          <a href="#accio"><span>01</span> Overview</a>
          <a href="#accio-compare"><span>02</span> Comparison</a>
          <a href="#accio-roi"><span>03</span> Japan ROI</a>
          <a href="#accio-features"><span>04</span> Features</a>
        </nav>
      </section>

      <section className="accio-comparison section" id="accio-compare">
        <div className="section-label"><span>02</span><p>COMPARISON</p></div>
        <div className="comparison-heading">
          <p className="kicker gold">AI Tool Positioning</p>
          <h2>導入目的で見る、主要AIツールとの違い。</h2>
          <p>
            どの製品が優れているかではなく、どの業務環境に適しているかが重要です。
            ACCIO WORKは、複数のAIエージェントと実行機能を一つの業務環境にまとめたい企業に適しています。
          </p>
        </div>
        <div className="comparison-layout">
          <div className="comparison-table" role="table" aria-label="ACCIO WORKと主要AIツールの比較">
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">PRODUCT</span>
              <span role="columnheader">POSITIONING</span>
              <span role="columnheader">BEST FOR</span>
              <span role="columnheader">KEY CAPABILITIES</span>
            </div>
            {aiComparisons.map((item) => (
              <div className={`comparison-row${item.featured ? " is-featured" : ""}`} role="row" key={item.name}>
                <div role="cell"><strong>{item.name}</strong><small>{item.note}</small></div>
                <p role="cell">{item.type}</p>
                <p role="cell">{item.fit}</p>
                <p role="cell">{item.strengths}</p>
              </div>
            ))}
          </div>
          <figure className="comparison-visual">
            <img
              src="https://s.alicdn.com/@img/imgextra/i1/O1CN01t0R4ty1P2fJaTso07_!!6000000001783-2-tps-2238-1424.png"
              alt="ACCIO WORKのAIエージェントチーム機能画面"
            />
            <figcaption>AI agents working as one business team.</figcaption>
          </figure>
        </div>
        <p className="comparison-note">
          ※ 各社の公開情報をもとに、代表的な用途と機能を一般的に整理しています。提供機能、利用条件、料金はプランや時期により変更される場合があります。
          <a href="https://www.accio.com/work/feature" target="_blank" rel="noreferrer">ACCIO WORK</a>
          <a href="https://openai.com/index/introducing-chatgpt-agent/" target="_blank" rel="noreferrer">ChatGPT</a>
          <a href="https://www.anthropic.com/news/integrations" target="_blank" rel="noreferrer">Claude</a>
          <a href="https://www.microsoft.com/microsoft-365/copilot/pricing/enterprise" target="_blank" rel="noreferrer">Microsoft 365 Copilot</a>
        </p>

        <div className="japan-market">
          <div className="japan-market-heading">
            <p className="kicker gold">ACCIO WORK IN JAPAN</p>
            <h3>日本市場での強みと、導入前の確認事項。</h3>
            <p>
              Manusなどの汎用型AIエージェントと比較した場合、ACCIO WORKの特徴は、
              Alibaba.com公式連携と調達・越境ECに特化した実行環境にあります。
            </p>
          </div>

          <div className="japan-market-layout">
            <div className="japan-strengths">
              {japanMarketStrengths.map((item) => (
                <article key={item.no}>
                  <span>{item.no}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="sourcing-visuals">
              <figure className="sourcing-visual sourcing-visual-main">
                <img
                  src="https://img.alicdn.com/imgextra/i4/O1CN01vD8pi823Q6EW092Eq_!!6000000007249-2-tps-1948-1288.png"
                  alt="ACCIO Sourcing Toolkitの専門Skill画面"
                />
                <figcaption>Sourcing Toolkit / Official Visual</figcaption>
              </figure>
              <figure className="sourcing-visual">
                <img
                  src="https://img.alicdn.com/imgextra/i1/O1CN01RGVOK51GSvVNjAZ37_!!6000000000622-2-tps-1341-950.png"
                  alt="ACCIO WORKによるサプライヤー自動交渉画面"
                />
                <figcaption>Auto Inquiry & Negotiation</figcaption>
              </figure>
              <figure className="sourcing-visual">
                <img
                  src="https://img.alicdn.com/imgextra/i4/O1CN01m4NHnA1xeOu93ZLhZ_!!6000000006468-2-tps-1380-1027.png"
                  alt="ACCIO WORKの発注・支払い連携画面"
                />
                <figcaption>Order & Payment</figcaption>
              </figure>
            </div>
          </div>

          <div className="japan-cautions">
            <p>導入前に確認すべき事項</p>
            <div>
              {japanMarketCautions.map((item, index) => (
                <article key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="japan-market-sources">
            公開情報：
            <a href="https://www.accio.com/work/doc?slug=help-accio-sourcing-toolkit" target="_blank" rel="noreferrer">ACCIO Sourcing Toolkit</a>
            <a href="https://ja.accio.com/about-us" target="_blank" rel="noreferrer">Accio 日本語サイト</a>
            <a href="https://activity.alibaba.com/page/5022d0e9.html" target="_blank" rel="noreferrer">Alibaba.com Trade Assurance</a>
          </p>
        </div>
      </section>

      <section className="roi-section section" id="accio-roi">
        <div className="section-label"><span>03</span><p>JAPAN ROI</p></div>
        <div className="roi-hero">
          <p className="kicker gold">ROI AS TRUST ARCHITECTURE</p>
          <h2>ROIを、稟議に通る<br />「安心材料」へ。</h2>
          <p>
            日本企業にとってROIは、抽象的な成長率ではありません。
            投資の安全性、効果の再現性、リスクの管理方法を、社内で説明・確認できることが重要です。
            ACCIO WORKの導入効果を、技術の先進性ではなく、経営判断に必要な証拠として設計します。
          </p>
          <div className="roi-formula" aria-label="日本企業向けROIの考え方">
            <span>LOCAL PROOF</span><b>×</b><span>COMPLIANCE</span><b>×</b><span>LOW-RISK VALIDATION</span><b>÷</b><span>UNCERTAINTY</span>
          </div>
        </div>

        <div className="roi-dimensions">
          {roiDimensions.map((item) => (
            <article key={item.pillar}>
              <div><strong>{item.pillar}</strong><span>{item.traditional}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <small>KPI設計例</small>
              <b>{item.proof}</b>
            </article>
          ))}
        </div>

        <div className="roi-evidence-heading">
          <p className="kicker">Four-Layer Evidence System</p>
          <h3>導入判断を支える、確認可能な証拠。</h3>
        </div>
        <div className="roi-evidence-layout">
          <div className="roi-evidence-list">
            {roiEvidenceLayers.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <div><h4>{item.title}</h4><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <aside className="roi-model-case">
            <div className="model-case-label"><span>SIMULATION EXAMPLE</span><b>実績値ではありません</b></div>
            <p>大阪府・寝具輸入企業A社を想定した表示形式例</p>
            <dl>
              <div><dt>問い合わせ応答</dt><dd>72h → 4h</dd></div>
              <div><dt>サプライヤー比較</dt><dd>6×</dd></div>
              <div><dt>適合工場候補</dt><dd>+3</dd></div>
              <div><dt>想定ROI</dt><dd>1 : 4.2</dd></div>
            </dl>
            <small>
              上記はシミュレーターの表示例です。実際の効果は企業条件、運用体制、対象品目により異なり、導入前の現状値確認と検証が必要です。
            </small>
          </aside>
        </div>

        <div className="roi-trial">
          <div className="roi-trial-heading">
            <p className="kicker gold">LOW-RISK ADOPTION</p>
            <h3>小さく検証し、合意を積み重ねる。</h3>
            <p>以下は日本企業向けの導入提案モデルです。無償期間、支援範囲、契約条件は個別協議となります。</p>
          </div>
          <div className="roi-trial-steps">
            {roiTrialSteps.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <small>{item.phase}</small>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="roi-approval">
          <div>
            <p className="kicker">Internal Approval Materials</p>
            <h3>社内説明に、そのまま使える資料へ。</h3>
            <p>
              AIの専門用語を増やすのではなく、現状、費用、回収期間、リスク対策を一つの稟議ストーリーとして整理します。
              「人員削減」ではなく、「社員が高付加価値業務へ集中できる環境整備」として説明します。
            </p>
          </div>
          <div className="roi-doc-list">
            {roiApprovalDocs.map((item, index) => <span key={item}>0{index + 1} / {item}</span>)}
          </div>
          <div className="roi-language-map">
            <span><b>Agent</b>自動支援機能</span>
            <span><b>Knowledge Base</b>社内知識ベース</span>
            <span><b>RAG / LLM</b>社内情報を活用する対話型支援</span>
          </div>
        </div>

        <div className="roi-external-checks">
          <div>
            <p className="kicker gold">EXTERNAL VERIFICATION</p>
            <h3>企業審査に必要な、外部証明を確認。</h3>
          </div>
          <div>
            {roiExternalChecks.map((item) => <span key={item}>{item}<small>確認・整備候補</small></span>)}
          </div>
        </div>

        <div className="roi-cta">
          <div><span>FREE INITIAL DIAGNOSIS</span><strong>現状業務をもとに、導入効果の検証項目を整理します。</strong></div>
          <a href={consultationMailto}>無料導入診断について相談する</a>
        </div>
      </section>

      <section className="accio-features-section section" id="accio-features">
        <div className="section-label"><span>04</span><p>PRODUCT FEATURES</p></div>
        <div className="features-heading">
          <p className="kicker">ACCIO WORK Product Capabilities</p>
          <h2>実務を動かす、ACCIO WORKの主要機能。</h2>
          <p>
            AIエージェントの設計から、定期実行、ブラウザ操作、外部サービス連携、Skill拡張まで。
            業務単位で組み合わせ、企業ごとの運用モデルへ落とし込みます。
          </p>
        </div>
        <div className="accio-product-grid">
          {accioFeatures.map((item) => (
            <article className="accio-product" key={item.title}>
              <div className="accio-product-image">
                <img src={item.image} alt={`${item.title}のACCIO WORK公式機能画面`} />
              </div>
              <div className="accio-product-copy">
                <span>{item.no} / {item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="accio-service-strip">
          <p>IMPLEMENTATION BY E-SONE</p>
          <strong>導入設計</strong><span>→</span><strong>Skill / Agent開発</strong><span>→</span><strong>運用定着</strong><span>→</span><strong>TOKEN調達</strong>
        </div>
      </section>

      </>
      )}

      {view === "supply" && (
      <section className="supply-section section" id="supply-chain">
        <div className="section-label"><span>01</span><p>SUPPLY CHAIN</p></div>
        <div className="supply-layout">
          <div>
            <p className="kicker gold">China Supply Chain Introduction</p>
            <h2>中国サプライチェーン紹介</h2>
            <p>
              中国側の工場、商品開発、調達、品質確認、物流パートナーへの接続を支援するサービスです。
              現段階ではメニューのみ掲載し、詳細内容は今後拡充します。
            </p>
          </div>
          <div className="supply-menu" aria-label="中国サプライチェーン紹介サービスメニュー">
            {supplyMenus.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      )}

      {view === "company" && (
      <section className="company-section section" id="company">
        <div className="section-label"><span>03</span><p>COMPANY</p></div>
        <div className="company-layout">
          <div className="company-copy">
            <p className="kicker gold">Company Profile</p>
            <h2>日本企業との協業に向けた、会社基本情報。</h2>
            <p>
              中国市場進出、EC運営、デジタルマーケティングに関する初回相談は、
              日本企業様専用窓口として Tim Wang が承ります。
            </p>
          </div>
          <div className="company-table" aria-label="会社基本情報">
            {companyInfo.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
        <div className="privacy-note">
          <p className="kicker">Privacy Policy</p>
          <h3>個人情報の取り扱いについて</h3>
          <p>
            お問い合わせ時にご提供いただく会社名、氏名、連絡先、ご相談内容は、
            ご回答、商談調整、提案資料作成および継続的なご連絡の目的で利用します。
            法令に基づく場合、または業務遂行上必要な委託先を除き、ご本人の同意なく第三者へ提供しません。
            開示、訂正、削除をご希望の場合は {contactEmail} までご連絡ください。
          </p>
        </div>
      </section>

      )}

      <section className="contact" id="contact">
        <div className="contact-inner">
          <p className="kicker gold">Let’s Connect</p>
          <h2>中国市場について、<br />まずはご相談ください。</h2>
          <p className="contact-lead">
            日本企業様の中国市場進出、EC事業展開、ブランド成長について
            お気軽にお問い合わせください。
          </p>
          <a className="contact-button" href={consultationMailto}>中国市場について相談する</a>
          <div className="contact-profile">
            <div>
              <strong>E-sone（Shanghai）</strong>
              <span>Tim Wang / CEO</span>
              <span>EC・Digital Marketing Partner</span>
              <span>Shanghai, China</span>
            </div>
            <dl>
              <div className="email-contact">
                <dt>Email</dt>
                <dd>
                  <a className="contact-email-link" href={consultationMailto}>
                    {contactEmail}<span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div><dt>Address</dt><dd>Room 912, Tongpu Building<br />No.1220 Tongpu Road, Putuo District<br />Shanghai, China</dd></div>
              <div className="wechat-contact">
                <dt>WeChat</dt>
                <dd>
                  <img src={assetPath("/wechat-qr.jpg")} alt="WeChat QR code for E-sone（Shanghai）" />
                  <span>QRコードから追加</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <footer>
          <a className="brand" href="#top">E-sone（Shanghai）</a>
          <span>© 2026 E-sone（Shanghai）. ALL RIGHTS RESERVED.</span>
          <a href="#top">PAGE TOP</a>
        </footer>
      </section>
    </main>
  );
}

export default function Home() {
  return <SitePage view="home" />;
}
