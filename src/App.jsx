import {
  AlertTriangle,
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CircleCheck,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  FileStack,
  FolderArchive,
  LockKeyhole,
  MessageSquareText,
  Network,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Table2,
  Wrench,
} from 'lucide-react';
import React from 'react';

const A = `${import.meta.env.BASE_URL}brand-assets/`;

const tags = ['硬件 + OS', '自研底座', '本地部署', '岗位交付'];

const centaurOsFeatures = [
  {
    title: '本地记忆库',
    text: '资料、客户、规则、任务记录，全部留在企业本地。',
    icon: BrainCircuit,
  },
  {
    title: '通用 IM 接口',
    text: '接入企微、飞书、钉钉，让任务从原有聊天入口进入。',
    icon: MessageSquareText,
  },
  {
    title: 'Agent 兼容层',
    text: '兼容 OpenClaw、Hermes、DeerFlow 等主流 Agent 引擎。',
    icon: Network,
  },
  {
    title: '员工 Builder',
    text: '基于 OS 能力，封装岗位、工具、权限和流程。',
    icon: Wrench,
  },
];

const painPoints = [
  ['会说', '不会做', '能回答问题，但不能稳定接任务、跑流程。', MessageSquareText],
  ['有工具', '没入口', '资料、消息、系统分散，AI 接不进真实工作。', FileStack],
  ['能执行', '难管理', '过程、依据、权限、确认节点都缺少统一管理。', AlertTriangle],
  ['想上云', '不放心', '客户资料和经营数据，需要本地优先。', LockKeyhole],
];

const inputs = [
  ['企微', MessageSquareText],
  ['飞书', BriefcaseBusiness],
  ['本地文件', FolderArchive],
  ['Excel', Table2],
  ['合同', FileCheck2],
  ['业务系统', ReceiptText],
];

const processing = ['理解任务', '读取记忆', '调用工具', '执行流程', '等待确认', '留下记录'];
const outputs = ['自动处理', '主动提醒', '异常上报', '结果留痕'];

const capabilities = [
  {
    title: '任务引擎',
    icon: Bot,
    text: '把一句话变成可执行步骤。',
    sample: '已拆解 3 步 / 1 项待确认',
  },
  {
    title: '企业记忆',
    icon: FileStack,
    text: '记住资料、客户、规则和历史任务。',
    sample: '已匹配客户档案 / 规则命中',
  },
  {
    title: '工具连接',
    icon: Sparkles,
    text: '连接消息、文件、表格和业务系统。',
    sample: '已读取文件 / 已生成待发送消息',
  },
  {
    title: '人工确认',
    icon: ShieldCheck,
    text: '关键动作先确认，再执行。',
    sample: '高风险动作 / 等待主管确认',
  },
  {
    title: '岗位封装',
    icon: ClipboardCheck,
    text: '把能力封装成一个个 AI 员工。',
    sample: '资料整理员 / 跟进员 / 日报员',
  },
];

const landingScenarios = ['资料归档', '客户跟进', '票据初审', '缺失提醒', '老板日报', '过程留痕'];

const saasRows = [
  ['交付对象', '软件功能', 'AI 员工'],
  ['使用方式', '人登录系统', 'AI 接任务'],
  ['数据位置', '云端为主', '本地优先'],
  ['工作入口', '菜单操作', '现有流程'],
  ['管理方式', '看结果', '看过程 + 证据'],
];

const delivery = ['选一个岗位', '接入资料源', '连接工具', '跑通流程', '人工确认', '持续优化'];

function SectionHeader({ eyebrow, title, highlight, suffix = '', children, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        <span>{title}</span>
        {highlight && <em>{highlight}</em>}
        {suffix && <span>{suffix}</span>}
      </h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <Hero />
      <Hardware />
      <CentaurOS />
      <Problems />
      <Workflow />
      <Roles />
      <TaxScenario />
      <Comparison />
      <Delivery />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <nav className="nav">
        <a className="brand" href="#top" aria-label="半人马 AI 首页">
          <img src={`${A}centaur-logo.png`} alt="半人马 AI 官方 Logo" />
          <span>
            <strong>半人马 AI</strong>
            <small>Centaur AI</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#hardware">硬件</a>
          <a href="#centaur-os">Centaur OS</a>
          <a href="#workflow">如何工作</a>
          <a href="#roles">核心能力</a>
          <a href="#finance">落地案例</a>
        </div>
        <a className="nav-cta" href="#demo">预约演示</a>
      </nav>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="line" />
            硬件 + Centaur OS 一体化输出
          </div>
          <h1>
            AI 员工，<em>上岗干活</em>
          </h1>
          <p className="hero-lead">
            我们交付一台本地 AI 数字员工主机，内置自研 Centaur OS。
          </p>
          <p className="hero-sublead">
            从企业记忆、IM 接入、Agent 引擎到数字员工 Builder，一套系统完成。
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#demo">
              预约演示 <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="#workflow">
              看它如何工作
            </a>
          </div>
          <div className="tag-row">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="半人马 AI 数字员工工作流主视觉">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img className="hero-centaur" src={`${A}centaur-hero.png`} alt="半人马 AI 官方半人马形象" />
          <div className="carbon-silicon carbon">
            <span>人类主管</span>
            判断 / 沟通 / 负责
          </div>
          <div className="carbon-silicon silicon">
            <span>AI 员工</span>
            记忆 / 识别 / 执行
          </div>
        </div>
      </div>
    </section>
  );
}

function Hardware() {
  return (
    <section className="section hardware-section" id="hardware">
      <SectionHeader eyebrow="Hardware" title="两台设备，" highlight="一套 OS">
        硬件负责本地运行，Centaur OS 负责数字员工上岗。
      </SectionHeader>
      <div className="hardware-grid">
        <article className="hardware-card edge">
          <div className="hardware-copy">
            <span className="product-tag">单人版</span>
            <h3>CentaurAI Edge</h3>
            <p>适合老板、主管或单个岗位先用起来。</p>
            <ul>
              <li><Check size={16} />单个 AI 员工上岗</li>
              <li><Check size={16} />本地资料接入</li>
              <li><Check size={16} />任务记录与留痕</li>
            </ul>
          </div>
          <img src={`${A}centaur-edge.png`} alt="CentaurAI Edge 单人版设备" />
        </article>

        <article className="hardware-card pro">
          <div className="hardware-copy">
            <span className="product-tag">团队版</span>
            <h3>CentaurAI Pro</h3>
            <p>适合团队部署多名 AI 员工，接入更多流程。</p>
            <ul>
              <li><Check size={16} />多 AI 岗位协同</li>
              <li><Check size={16} />工具调用与流程编排</li>
              <li><Check size={16} />权限确认与审计记录</li>
            </ul>
          </div>
          <img src={`${A}centaur-pro.png`} alt="CentaurAI Pro 团队版设备" />
        </article>
      </div>
    </section>
  );
}

function CentaurOS() {
  return (
    <section className="section os-section" id="centaur-os">
      <div className="os-shell">
        <div className="os-copy">
          <span className="eyebrow">Centaur OS</span>
          <h2 className="os-title">
            <span>Centaur OS</span>
            <em>数字员工底座</em>
          </h2>
          <p>
            本地 AI 主机上的操作系统，统一管理记忆、接口、Agent 引擎和权限。
          </p>
          <p>
            Builder 运行在 OS 之上，把岗位、工具和流程封装成企业自己的 AI 员工。
          </p>
          <div className="os-pipeline" aria-label="Centaur OS 从底层操作系统到数字员工 Builder 的能力链路">
            <span>硬件主机</span>
            <ArrowRight size={16} />
            <span>Centaur OS</span>
            <ArrowRight size={16} />
            <span>Builder</span>
            <ArrowRight size={16} />
            <span>专属数字员工</span>
          </div>
        </div>

        <div className="os-panel">
          <div className="os-core-card">
            <div>
              <Cpu size={28} />
              <strong>Centaur OS</strong>
            </div>
            <small>Local Digital Employee Operating System</small>
          </div>
          <div className="os-feature-grid">
            {centaurOsFeatures.map(({ title, text, icon: Icon }) => (
              <article className="os-feature-card" key={title}>
                <Icon size={21} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="section problem-section">
      <div className="why-panel">
        <div className="why-copy">
          <span className="eyebrow">Why Centaur AI</span>
          <h2>
            AI 不缺能力，<em>缺入口</em>
          </h2>
          <p>
            企业真正需要的不是更多聊天框，而是一个能把 AI 接进流程、权限和数据里的本地底座。
          </p>
        </div>

        <div className="why-list">
          {painPoints.map(([before, after, text, Icon], index) => (
            <article className="why-row" key={before}>
              <div className="why-index">0{index + 1}</div>
              <div className="why-icon">
                <Icon size={20} />
              </div>
              <div className="why-text">
                <h3>
                  <span>{before}</span>
                  <ArrowRight size={16} />
                  <em>{after}</em>
                </h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="section workflow-section" id="workflow">
      <SectionHeader eyebrow="How It Works" title="不换系统，" highlight="接上流程" align="center">
        从现有资料和工具进入，关键动作由人确认。
      </SectionHeader>
      <div className="workflow-map">
        <div className="flow-column">
          <span className="flow-label">输入</span>
          <div className="node-grid">
            {inputs.map(([label, Icon]) => (
              <div className="flow-node" key={label}>
                <Icon size={18} />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="flow-bridge">
          <div className="flow-lines" />
          <ArrowRight size={22} />
        </div>
        <div className="machine-core">
          <img src={`${A}centaur-pro.png`} alt="半人马 AI 数字员工底层系统处理企业资料流" />
          <h3>数字员工底座</h3>
          <p>本地 AI 执行中枢</p>
        </div>
        <div className="flow-bridge">
          <div className="flow-lines" />
          <ArrowRight size={22} />
        </div>
        <div className="flow-column wide">
          <span className="flow-label">处理与输出</span>
          <div className="process-strip">
            {processing.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="output-list">
            {outputs.map((item) => (
              <div key={item}>
                <CircleCheck size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className="section roles-section" id="roles">
      <SectionHeader eyebrow="Capabilities" title="从回答，" highlight="到执行">
        五个能力，组成数字员工底座。
      </SectionHeader>
      <div className="role-grid">
        {capabilities.map(({ title, icon: Icon, text, sample }) => (
          <article className="role-card" key={title}>
            <div className="role-head">
              <div className="role-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
            </div>
            <p>{text}</p>
            <div className="mini-ui">
              <span className="mini-dot" />
              <strong>能力输出</strong>
              <small>{sample}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TaxScenario() {
  return (
    <section className="section tax-section" id="finance">
      <div className="tax-layout">
        <div>
          <SectionHeader eyebrow="Case" title="首批落地：" highlight="财税行业">
            高频资料、客户跟进、风险提醒，已经跑通。
          </SectionHeader>
          <div className="scenario-grid">
            {landingScenarios.map((item) => (
              <div className="scenario-item" key={item}>
                <Check size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="office-scene" aria-label="财税行业落地案例和资料流动示意">
          <div className="scene-top">
            <div>
              <span>首批行业样板</span>
              <strong>财税场景已落地</strong>
            </div>
            <ShieldCheck size={24} />
          </div>
          <div className="scene-body">
            <div className="file-stack">
              <span>资料</span>
              <span>合同</span>
              <span>Excel</span>
              <span>客户沟通</span>
            </div>
            <div className="data-stream">
              <i />
              <i />
              <i />
            </div>
            <img src={`${A}centaur-edge.png`} alt="财税行业中的半人马 AI 数字员工主机" />
          </div>
          <div className="scene-footer">
            <div><Sparkles size={16} />资料流自动处理</div>
            <div><AlertTriangle size={16} />关键事项人工确认</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="section comparison-section">
      <SectionHeader eyebrow="Difference" title="不是软件，" highlight="是员工" align="center">
        软件等人操作，数字员工主动接任务。
      </SectionHeader>
      <div className="comparison-table">
        <div className="table-head">
          <span>对比项</span>
          <strong>传统 SaaS</strong>
          <strong>半人马 AI 数字员工系统</strong>
        </div>
        {saasRows.map(([label, saas, centaur]) => (
          <div className="table-row" key={label}>
            <span>{label}</span>
            <p>{saas}</p>
            <p><Check size={16} />{centaur}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="section delivery-section">
      <SectionHeader eyebrow="Delivery" title="先上岗位，" highlight="再扩队伍">
        从高频重复工作开始，跑通后继续扩展。
      </SectionHeader>
      <div className="delivery-track">
        {delivery.map((step, index) => (
          <div className="delivery-step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="demo">
      <div className="cta-card">
        <div>
          <span className="eyebrow">Start</span>
          <h2>让第一个 <em>AI 员工</em> 上岗</h2>
          <p>
            看看半人马 AI 如何把任务、资料、工具和人工确认接成一个可执行流程。
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="mailto:hello@centaur.ai?subject=预约半人马 AI 数字员工系统演示">
              预约演示 <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="#roles">
              查看核心能力
            </a>
          </div>
        </div>
        <div className="cta-visual">
          <img src={`${A}centaur-hero.png`} alt="半人马 AI 数字员工上岗" />
          <div>
            <Bot size={18} />
            候选岗位：资料整理员、客户跟进员、经营日报员
          </div>
        </div>
      </div>
      <footer>
        <div className="brand small">
          <img src={`${A}centaur-logo.png`} alt="半人马 AI Logo" />
          <span>
            <strong>半人马 AI</strong>
            <small>AI 数字员工底层系统</small>
          </span>
        </div>
        <p>人负责判断与关系，AI 负责记忆与执行。</p>
      </footer>
    </section>
  );
}

export default App;
