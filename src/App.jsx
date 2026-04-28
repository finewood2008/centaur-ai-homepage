import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Cpu,
  Factory,
  Handshake,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import React from 'react';

const A = `${import.meta.env.BASE_URL}brand-assets/`;

const valueCards = [
  {
    icon: TrendingUp,
    eyebrow: '标准版 · 即买即用',
    title: 'AI营销获客工作站',
    highlight: '帮你赚钱',
    text: ['标准产品，即买即用。', '一台机器就是一个 AI 营销团队：AI 内容生产、全渠道获客、客户洞察、销售辅助。', '让企业每天多一个销售入口。'],
    tags: ['标准版', '即买即用'],
  },
  {
    icon: ArrowDown,
    eyebrow: '定制版 · 按需交付',
    title: 'AI数字员工定制工作站',
    highlight: '帮你省钱',
    text: ['按行业定制，按需交付。', '替代一个真实岗位的人工成本：财税智能体、外贸跟单员、客服机器人、内容运营专员。', '让企业少养一个人，多一个机器员工。'],
    tags: ['定制版', '按需交付'],
  },
];

const architecture = [
  {
    layer: '应用层',
    title: 'AI营销获客 · AI财税 · AI外贸',
    desc: '跑在上面的场景，按需配置',
    point: '赚钱靠这一层',
    icon: Rocket,
  },
  {
    layer: 'CentaurOS',
    title: 'QeeClaw 底座 + AI Agent 框架',
    desc: '软硬件深度整合的 AI 操作系统',
    point: '护城河靠这一层',
    icon: Cpu,
    featured: true,
  },
  {
    layer: '硬件平台',
    title: '统一设计 · 插电即用',
    desc: '自有工厂 · 稳定交付',
    point: '差异化靠这一层',
    icon: Factory,
  },
];

const team = [
  ['产品与 AI 工程', '负责 Agent 框架、工作流与企业场景封装。'],
  ['硬件与供应链', '负责工作站设计、生产、交付与稳定运行。'],
  ['行业交付团队', '把 AI 能力落到营销、财税、外贸等真实岗位。'],
];

const partners = ['硬件制造', '渠道代理', '行业服务商', '投资机构'];

function App() {
  return (
    <main className="site-shell">
      <Hero />
      <Category />
      <Values />
      <Architecture />
      <Team />
      <Partners />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="半人马 AI 首页">
          <img src={`${A}centaur-logo.png`} alt="半人马 AI Logo" />
          <span>
            <strong>半人马 AI</strong>
            <small>Centaur AI</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#category">新品类</a>
          <a href="#values">产品</a>
          <a href="#architecture">架构</a>
          <a href="#team">团队</a>
          <a href="#contact">联系</a>
        </div>
        <a className="nav-cta" href="#contact">联系我们</a>
      </nav>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">AI Agent Workstation</span>
          <h1>把 <em>AI Agent</em> 装进一台工作站</h1>
          <p className="hero-lead">
            插电即用。不开电脑，不配服务器，不养 AI 团队。
            <br />
            一台工作站就是一个企业的 AI 生产力中心。
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#values">
              了解产品 <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="#contact">联系我们</a>
          </div>
        </div>

        <div className="hero-product" aria-label="AI Agent 工作站产品图">
          <div className="product-glow" />
          <img src={`${A}centaur-pro.png`} alt="半人马 AI Agent 工作站" />
          <div className="product-badge top">
            <Cpu size={17} />
            内置 CentaurOS
          </div>
          <div className="product-badge bottom">
            <Sparkles size={17} />
            插电即用
          </div>
        </div>
      </div>
    </section>
  );
}

function Category() {
  return (
    <section className="section category" id="category">
      <span className="eyebrow center">一个新品类</span>
      <h2>
        企业需要一台 <em>AI Agent 工作站</em>
      </h2>
      <p className="big-copy">
        以前，设计师用设计工作站，影视人用剪辑工作站。
        <br />
        现在，每个企业都需要一个 AI Agent 工作站。
      </p>
      <p className="muted-copy">
        中小企业不需要懂模型、不需要买服务器、不需要招 AI 团队。
        他们只需要一台插电即用的设备，就能拥有真正落地的 AI 生产力。
      </p>
    </section>
  );
}

function Values() {
  return (
    <section className="section values" id="values">
      <SectionTitle eyebrow="Two Products" title="两个方向，" highlight="一个目标">
        要么帮企业赚钱，要么帮企业省钱。
      </SectionTitle>
      <div className="value-grid">
        {valueCards.map(({ icon: Icon, eyebrow, title, highlight, text, tags }) => (
          <article className="value-card" key={title}>
            <div className="value-icon"><Icon size={26} /></div>
            <span className="card-eyebrow">{eyebrow}</span>
            <h3>{title} <em>{highlight}</em></h3>
            <div className="card-text">
              {text.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className="card-tags">
              {tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="text-link" href="#contact">了解详情 <ArrowRight size={16} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="architecture-section" id="architecture">
      <div className="section architecture-inner">
        <SectionTitle eyebrow="Product Architecture" title="三层架构，" highlight="一层壁垒" align="center">
          应用层负责赚钱，CentaurOS 负责护城河，硬件负责差异化。
        </SectionTitle>
        <div className="stack">
          {architecture.map(({ layer, title, desc, point, icon: Icon, featured }) => (
            <article className={`stack-layer ${featured ? 'featured' : ''}`} key={layer}>
              <div className="stack-icon"><Icon size={24} /></div>
              <div>
                <span>{layer}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <strong>{point}</strong>
            </article>
          ))}
        </div>
        <p className="architecture-summary">
          纯软件公司抄不了，传统硬件公司做不来。
        </p>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team" id="team">
      <SectionTitle eyebrow="Team" title="软硬结合，" highlight="才能交付">
        我们同时做系统、硬件和行业落地。
      </SectionTitle>
      <div className="team-grid">
        {team.map(([title, text]) => (
          <article className="team-card" key={title}>
            <Users size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section partners">
      <SectionTitle eyebrow="Partners" title="寻找一起做大的" highlight="合作伙伴" align="center">
        渠道、行业、硬件、资本，都可以一起把 AI Agent 工作站推向企业。
      </SectionTitle>
      <div className="partner-row">
        {partners.map((item) => (
          <div className="partner-pill" key={item}>
            <Handshake size={18} />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={`${A}centaur-logo.png`} alt="半人马 AI Logo" />
          <div>
            <strong>半人马 AI</strong>
            <p>让每个企业拥有一台 AI Agent 工作站</p>
          </div>
        </div>
        <div className="footer-contact">
          <span>联系我们</span>
          <p>合作咨询 / 投资交流</p>
          <a href="mailto:hello@centaur-ai.com"><Mail size={16} /> hello@centaur-ai.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 半人马 AI</span>
        <span><ShieldCheck size={15} /> Hardware + CentaurOS</span>
      </div>
    </footer>
  );
}

function SectionTitle({ eyebrow, title, highlight, children, align = 'left' }) {
  return (
    <div className={`section-title ${align === 'center' ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}<em>{highlight}</em></h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export default App;
