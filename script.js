/* ═══════════════════════════════════════════════════════════════
   Wentao Mou — Personal Site | Antigravity-style JS
   ═══════════════════════════════════════════════════════════════ */

/* ─── Content data ─────────────────────────────────────────── */
const content = {
  zh: {
    ui: {
      title: "牟文韬 | 个人网站",
      langLabel: "EN",
      nav: { about: "关于", experience: "经历", research: "研究", skills: "技能", contact: "联系" },
    },
    footer: {
      tagline: "把想法推进到可以验证的状态。",
      resume: "英文简历",
      resumeZh: "中文简历",
    },
    hero: {
      kicker: "Georgia Tech · AI Engineering · Quantitative Systems",
      titleLine1: "把模型、系统",
      titleLine2: "与信号做成真实产品。",
      ctaPrimary: "联系我",
      ctaSecondary: "查看简历",
    },
    about: {
      label: "About",
      title: "我偏好既智能、又可度量、还能真正落地的系统。",
      copy: "很多项目从模型开始，但真正决定体验的往往是后面的系统设计。除了算法本身，我也会关注工作流编排、响应时延、数据质量、可解释结果，以及系统最终支撑的业务决策。",
    },
    focus: {
      label: "Focus Areas",
      items: [
        { title: "AI Engineering", copy: "围绕 LangChain、异步工作流、流式生成与工具调用，做过面向真实业务的匹配与抽取系统。" },
        { title: "Applied Research", copy: "做过神经机器翻译、半监督文本分类、图像生成和医学数据建模，把论文方法推进到可复现实验结果。" },
        { title: "Quantitative Thinking", copy: "用因子研究、随机森林、梯度提升、LSTM 与组合优化处理市场信号与决策问题。" },
      ],
    },
    metrics: {
      label: "Selected Signals",
      items: [
        { value: "4 / 70", title: "本科专业排名", detail: "东北大学物联网工程" },
        { value: "108 / 335", title: "TOEFL / GRE", detail: "英语与量化能力" },
        { value: "F1 0.72", title: "OSHA 文本分类", detail: "YAKE + BERTopic" },
        { value: "95%", title: "糖尿病检测准确率", detail: "SMOTE + Random Forest" },
      ],
    },
    experience: {
      label: "Experience",
      title: "我的经历分布在真实业务、研究实验和系统实现之间。",
      items: [
        {
          date: "2024.09 – 2024.10", place: "Chengdu, China",
          role: "AI 开发实习生", org: "中国移动通信集团有限公司",
          bullets: [
            "构建基于 LangChain 的简历与岗位自动匹配流程，把聊天模型、提示词模板和业务筛选逻辑接入同一条链路。",
            "设计异步 API、并行检索与流式 token 工作流，降低处理时延并提升交互体验。",
          ],
        },
        {
          date: "2024.06 – 2024.08", place: "Shenyang, China",
          role: "科研助理", org: "小牛翻译 NiuTrans",
          bullets: [
            "研究 GPT、BERT 等神经机器翻译方法，关注低资源语言对、语言歧义和长尾问题。",
            "通过数据增强、回译与清洗提升多语言翻译准确率和 BLEU 指标，并复现前沿翻译论文。",
          ],
        },
        {
          date: "2022.12 – 2023.02", place: "Chengdu, China",
          role: "华为云解决方案实习生", org: "华为",
          bullets: [
            "参与数据库产品、查询优化、时序可视化、SQL 与存储引擎相关开发。",
            "协助多云环境运维、监控与应急响应方案设计，兼顾稳定性、交付质量和成本控制。",
          ],
        },
        {
          date: "2022.10 – 2022.12", place: "Chongqing, China",
          role: "量化投资实习生", org: "申万宏源证券",
          bullets: [
            "提取 Wind 市场数据并构建多类投资因子，使用随机森林与梯度提升评估预测有效性。",
            "以 LSTM 输出为信号，结合均值-方差优化确定组合权重，把模型预测转化为可执行策略。",
          ],
        },
        {
          date: "2021.07 – 2021.09", place: "Chengdu, China",
          role: "信息系统与管理实习生", org: "普华永道 PwC",
          bullets: [
            "为医院客户开发综合在线信息系统，覆盖诊疗、药品物流、人员管理、统计分析和动态数据可视化。",
            "使用 HTML/CSS、Java、JavaScript 与 SQL 完成网站功能和数据库基础设施搭建。",
          ],
        },
      ],
    },
    research: {
      label: "Research",
      title: "把论文方法变成可复现结果。",
      items: [
        {
          date: "2024.09",
          name: "基于 YAKE 与 BERTopic 的施工安全报告半监督分类",
          subtitle: "关键词抽取、主题建模与 OSHA 数据集",
          summary: "集成 YAKE 关键词抽取与 BERTopic Transformer 表征，在完整 OSHA 数据集上达到 F1 = 0.72，优于传统 LDA 与部分监督方法。",
        },
        {
          date: "2023.10",
          name: "结合 SMOTE 与随机森林的糖尿病检测",
          subtitle: "类别平衡与医学预测",
          summary: "将合成少数类过采样与随机森林结合，显著提升敏感性与特异性，预测准确率达到 95%。",
        },
        {
          date: "2023.08",
          name: "用于增强图像生成的改进 CycleGAN",
          subtitle: "自注意力、U-Net 与生成质量优化",
          summary: "在 CycleGAN 中加入额外卷积层、自注意力机制和 U-Net 结构，更好捕捉细节，提升图像重建与生成质量。",
        },
      ],
    },
    education: {
      label: "Education",
      title: "学术路径从物联网工程走向计算与量化金融。",
      items: [
        {
          degree: "计算科学与工程硕士 + 定量与计算金融硕士",
          school: "Georgia Institute of Technology",
          meta: "2025.09 – 2027.06 · GPA 3.75 / 4.00",
          copy: "目前在佐治亚理工学院继续深造，训练方向同时覆盖计算建模、数值方法与量化金融。",
        },
        {
          degree: "物联网工程学士",
          school: "东北大学",
          meta: "2021.09 – 2025.06 · GPA 4.11 / 5.00 · Rank 4 / 70",
          copy: "核心课程包括机器学习、软件工程、计算机网络、算法设计与分析、数据结构、C++、Java 与数据库。",
        },
      ],
    },
    beyond: {
      label: "Beyond",
      title: "除了代码和实验，我也长期参与线下志愿协调。",
      copy: "自 2022 年起，我在刘哲鑫爱心团队担任志愿者协调负责人，并在 2023 与 2024 年暑期前往新疆和西藏参与社区支持与文化交流。",
    },
    skills: {
      label: "Skills",
      title: "工具栈覆盖编程、机器学习、量化分析与语言能力。",
      groups: [
        { label: "Programming", items: ["Python", "Java", "SQL", "C", "C++", "R"] },
        { label: "ML / AI", items: ["LangChain", "BERTopic", "YAKE", "Random Forest", "Gradient Boosting", "LSTM", "SMOTE", "CycleGAN"] },
        { label: "Systems / Product", items: ["Async APIs", "Streaming UX", "Tool Calling", "SQL Engines", "Time-Series Viz", "Cloud Ops"] },
        { label: "Languages", items: ["English", "Mandarin", "Tibetan", "TOEFL 108", "GRE 335"] },
      ],
    },
    contact: {
      label: "Contact",
      title: "如果你在做 AI 产品、研究型工程或量化系统，我们来聊聊。",
      copy: "无论是研究合作、技术讨论，还是下一段工程挑战，我都乐于继续把想法推进到可以验证、可以落地的状态。",
      ctaPrimary: "发送邮件",
      ctaSecondary: "查看英文简历",
      ctaTertiary: "查看中文简历",
    },
  },

  en: {
    ui: {
      title: "Wentao Mou | Personal Website",
      langLabel: "中文",
      nav: { about: "About", experience: "Experience", research: "Research", skills: "Skills", contact: "Contact" },
    },
    footer: {
      tagline: "Pushing ideas toward something verifiable.",
      resume: "English Resume",
      resumeZh: "Chinese Resume",
    },
    hero: {
      kicker: "Georgia Tech · AI Engineering · Quantitative Systems",
      titleLine1: "Build models, systems,",
      titleLine2: "and signals.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View resume",
    },
    about: {
      label: "About",
      title: "I like systems that are intelligent, measurable, and actually useful.",
      copy: "Many projects start with a model, but the real quality usually comes from the system built around it. Beyond algorithms, I care about orchestration, latency, data quality, interpretable outputs, and the decisions a system eventually supports.",
    },
    focus: {
      label: "Focus Areas",
      items: [
        { title: "AI Engineering", copy: "Built real workflow-oriented systems with LangChain, async orchestration, streaming generation, and tool calling." },
        { title: "Applied Research", copy: "Worked on neural machine translation, semi-supervised text classification, image generation, and medical prediction." },
        { title: "Quantitative Thinking", copy: "Used factor research, Random Forest, Gradient Boosting, LSTM, and portfolio optimization to reason about signals." },
      ],
    },
    metrics: {
      label: "Selected Signals",
      items: [
        { value: "4 / 70", title: "Undergraduate rank", detail: "Internet of Things Engineering" },
        { value: "108 / 335", title: "TOEFL / GRE", detail: "Language and quantitative readiness" },
        { value: "F1 0.72", title: "OSHA report classification", detail: "YAKE + BERTopic" },
        { value: "95%", title: "Diabetes detection accuracy", detail: "SMOTE + Random Forest" },
      ],
    },
    experience: {
      label: "Experience",
      title: "My work spans real products, research experiments, and system implementation.",
      items: [
        {
          date: "Sep 2024 – Oct 2024", place: "Chengdu, China",
          role: "AI Developer Intern", org: "China Mobile Communications Group",
          bullets: [
            "Built LangChain-based resume-to-job matching workflows connecting chat models, prompt templates, and business logic in one pipeline.",
            "Designed async APIs, parallel retrieval, and streaming token workflows to reduce latency and improve interaction quality.",
          ],
        },
        {
          date: "Jun 2024 – Aug 2024", place: "Shenyang, China",
          role: "Research Assistant", org: "NiuTrans",
          bullets: [
            "Worked on neural machine translation with GPT- and BERT-style methods, focusing on low-resource language pairs and long-tail cases.",
            "Improved translation quality and BLEU scores through data augmentation, back-translation, data cleaning, and paper reproduction.",
          ],
        },
        {
          date: "Dec 2022 – Feb 2023", place: "Chengdu, China",
          role: "Huawei Cloud Solutions Intern", org: "Huawei",
          bullets: [
            "Contributed to database products, query optimization, time-series visualization, SQL, and storage-engine work.",
            "Supported multi-cloud operations, monitoring, and emergency response planning with attention to reliability and cost.",
          ],
        },
        {
          date: "Oct 2022 – Dec 2022", place: "Chongqing, China",
          role: "Quantitative Investment Intern", org: "Shenwan Hongyuan Securities",
          bullets: [
            "Extracted Wind market data, built stock factors, and evaluated predictive effectiveness using Random Forest and Gradient Boosting.",
            "Turned LSTM forecasts into portfolio weights through mean-variance optimization, connecting model output with strategy design.",
          ],
        },
        {
          date: "Jul 2021 – Sep 2021", place: "Chengdu, China",
          role: "Information System and Management Intern", org: "PwC",
          bullets: [
            "Built a comprehensive hospital information system covering diagnosis management, logistics, staff admin, analytics, and data visualization.",
            "Used HTML/CSS, Java, JavaScript, and SQL to implement the site architecture, business functions, and database infrastructure.",
          ],
        },
      ],
    },
    research: {
      label: "Research",
      title: "Turning paper ideas into reproducible results.",
      items: [
        {
          date: "Sep 2024",
          name: "Semi-Supervised Classification of Construction Safety Reports Using YAKE and BERTopic",
          subtitle: "Keyword extraction, topic modeling, and the OSHA dataset",
          summary: "Integrated YAKE keyword extraction with BERTopic transformer representations and achieved F1 = 0.72 on the full OSHA dataset, outperforming traditional LDA and some supervised baselines.",
        },
        {
          date: "Oct 2023",
          name: "Diabetes Detection Combining SMOTE and Random Forest",
          subtitle: "Class balancing and medical prediction",
          summary: "Combined Synthetic Minority Over-sampling Technique with Random Forest to improve sensitivity and specificity, reaching 95% prediction accuracy.",
        },
        {
          date: "Aug 2023",
          name: "Advanced CycleGAN for Enhanced Image Generation",
          subtitle: "Self-attention, U-Net, and image quality improvement",
          summary: "Added extra convolutional layers, self-attention, and U-Net structures to better capture detail and improve reconstruction and generation quality.",
        },
      ],
    },
    education: {
      label: "Education",
      title: "My academic path moves from IoT engineering to computation and quantitative finance.",
      items: [
        {
          degree: "M.S. in Computational Science and Engineering + M.S. in Quantitative and Computational Finance",
          school: "Georgia Institute of Technology",
          meta: "Sep 2025 – Jun 2027 · GPA 3.75 / 4.00",
          copy: "Graduate study centered on computational modeling, numerical methods, and quantitative finance.",
        },
        {
          degree: "BEng in Internet of Things Engineering",
          school: "Northeastern University",
          meta: "Sep 2021 – Jun 2025 · GPA 4.11 / 5.00 · Rank 4 / 70",
          copy: "Core coursework included machine learning, software engineering, computer networks, algorithm design, data structures, C++, Java, and databases.",
        },
      ],
    },
    beyond: {
      label: "Beyond",
      title: "Outside code and experiments, I stay involved in volunteer coordination on the ground.",
      copy: "Since 2022, I have served as a volunteer coordination lead with the Liu Zhexin Love Team, including summer community-support and cultural-exchange trips to Xinjiang and Tibet in 2023 and 2024.",
    },
    skills: {
      label: "Skills",
      title: "My stack spans programming, machine learning, quantitative analysis, and languages.",
      groups: [
        { label: "Programming", items: ["Python", "Java", "SQL", "C", "C++", "R"] },
        { label: "ML / AI", items: ["LangChain", "BERTopic", "YAKE", "Random Forest", "Gradient Boosting", "LSTM", "SMOTE", "CycleGAN"] },
        { label: "Systems / Product", items: ["Async APIs", "Streaming UX", "Tool Calling", "SQL Engines", "Time-Series Viz", "Cloud Ops"] },
        { label: "Languages", items: ["English", "Mandarin", "Tibetan", "TOEFL 108", "GRE 335"] },
      ],
    },
    contact: {
      label: "Contact",
      title: "If you are building AI products, research-heavy systems, or quantitative tools, let's talk.",
      copy: "Whether it is a research collaboration, an engineering discussion, or the next technical challenge, I like pushing ideas toward something that can be verified and shipped.",
      ctaPrimary: "Send email",
      ctaSecondary: "Open English resume",
      ctaTertiary: "Open Chinese resume",
    },
  },
};

/* ─── State ────────────────────────────────────────────────── */
const state = { lang: "zh" };

/* ─── DOM refs ─────────────────────────────────────────────── */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const focusGrid = $("#focus-grid");
const metricsGrid = $("#metrics-grid");
const experienceList = $("#experience-list");
const researchList = $("#research-list");
const educationList = $("#education-list");
const skillsGroups = $("#skills-groups");
const langToggle = $("#lang-toggle");
const keyNodes = $$("[data-key]");
const navNodes = $$("[data-nav]");

/* ─── Utils ────────────────────────────────────────────────── */
function get(obj, path) {
  return path.split(".").reduce((acc, k) => acc?.[k], obj);
}

/* ─── Renderers ─────────────────────────────────────────────── */
function renderFocus(items) {
  focusGrid.innerHTML = items.map((item, i) => `
    <article class="focus-card">
      <div class="focus-index">0${i + 1}</div>
      <h3 class="focus-title">${item.title}</h3>
      <p class="focus-copy">${item.copy}</p>
    </article>
  `).join("");
}

function renderMetrics(items) {
  metricsGrid.innerHTML = items.map(item => `
    <article class="metric-card">
      <p class="metric-value">${item.value}</p>
      <p class="metric-title">${item.title}</p>
      <span class="metric-detail">${item.detail}</span>
    </article>
  `).join("");
}

function renderExperience(items) {
  experienceList.innerHTML = items.map(item => `
    <article class="timeline-item">
      <div class="timeline-meta">
        <p class="timeline-date">${item.date}</p>
        <p class="timeline-place">${item.place}</p>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-org">${item.org}</p>
        <ul class="timeline-bullets">
          ${item.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");
}

function renderResearch(items) {
  researchList.innerHTML = items.map(item => `
    <article class="project-item">
      <div class="timeline-meta">
        <p class="timeline-date">${item.date}</p>
      </div>
      <div>
        <h3 class="project-name">${item.name}</h3>
        <p class="project-subtitle">${item.subtitle}</p>
        <p class="project-summary">${item.summary}</p>
      </div>
    </article>
  `).join("");
}

function renderEducation(items) {
  educationList.innerHTML = items.map(item => `
    <article class="edu-card">
      <h3 class="edu-degree">${item.degree}</h3>
      <p class="edu-school">${item.school}</p>
      <p class="edu-meta">${item.meta}</p>
      <p class="edu-copy">${item.copy}</p>
    </article>
  `).join("");
}

function renderSkills(groups) {
  skillsGroups.innerHTML = groups.map(group => `
    <article class="skill-group-card">
      <p class="skill-group-label">${group.label}</p>
      <div class="skill-tags">
        ${group.items.map(t => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

/* ─── Language system ───────────────────────────────────────── */
function setLanguage(lang) {
  state.lang = lang;
  const dict = content[lang];

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = lang;
  document.title = dict.ui.title;

  // Static key nodes
  keyNodes.forEach(node => {
    const val = get(dict, node.dataset.key);
    if (typeof val === "string") node.textContent = val;
  });

  // Nav labels
  navNodes.forEach(node => {
    const val = dict.ui.nav[node.dataset.nav];
    if (val) node.textContent = val;
  });

  // Lang toggle label
  $('[data-ui="langLabel"]').textContent = dict.ui.langLabel;

  // Dynamic renders
  renderFocus(dict.focus.items);
  renderMetrics(dict.metrics.items);
  renderExperience(dict.experience.items);
  renderResearch(dict.research.items);
  renderEducation(dict.education.items);
  renderSkills(dict.skills.groups);
}

/* ─── Header scroll behavior ────────────────────────────────── */
function setupHeader() {
  const header = $("#site-header");
  // Wrap children in header-inner
  const inner = document.createElement("div");
  inner.className = "header-inner";
  while (header.firstChild) inner.appendChild(header.firstChild);
  header.appendChild(inner);

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ─── Active nav highlight ──────────────────────────────────── */
function setupNavHighlight() {
  const sections = $$("section[id]");
  const navMap = new Map(
    Array.from(navNodes).map(n => [n.getAttribute("href")?.slice(1), n])
  );

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        const link = navMap.get(e.target.id);
        if (link) link.classList.toggle("is-active", e.isIntersecting);
      });
    },
    { threshold: 0.3, rootMargin: "-8% 0px -45% 0px" }
  );

  sections.forEach(s => io.observe(s));
}

/* ─── Scroll reveal ─────────────────────────────────────────── */
function setupReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const items = $$(".reveal");
  items.forEach(el => el.classList.add("reveal-pending"));

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach(el => io.observe(el));
}

/* ─── 樱花粒子系统 Cherry Blossom Particle System ─────────────── */
/* Two layers:
   1. BlossomFlower — full sakura flower that blooms open, then
      petals drift away (花朵绽放 effect)
   2. FallingPetal  — individual petals swirling/falling across
      the whole screen like spring snowfall
*/
function setupConfetti() {
  const canvas = $("#confetti-canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();

  // ── Cherry blossom color palette ──────────────────────────────
  const PETAL_COLORS = [
    "#FFB7C5", // classic sakura pink
    "#FFC0CB", // light pink
    "#FF9BAE", // warm mid pink
    "#FFAFC5", // soft rose
    "#FFD1DC", // pale blush
    "#FF85A1", // deeper pink
    "#FFF0F3", // near-white blush
    "#FFCCD5", // cotton candy
  ];
  const CORE_COLORS = [
    "#FF6B9D", // deep pink center
    "#FF85A1",
    "#FFAFC5",
  ];

  function pickPetal() { return PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]; }
  function pickCore() { return CORE_COLORS[Math.floor(Math.random() * CORE_COLORS.length)]; }

  // ── Draw a single sakura petal (heart-like ellipse) ───────────
  // Centered at (0,0), pointing upward, size = r.
  function drawPetal(ctx, r, petalColor, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = petalColor;
    ctx.strokeStyle = petalColor.replace("FF", "CC"); // slightly darker stroke
    ctx.lineWidth = 0.5;

    // Each petal: two bezier arcs forming a rounded-tip shape
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(r * 0.6, -r * 0.3, r * 0.8, -r * 1.2, 0, -r * 1.6);
    ctx.bezierCurveTo(-r * 0.8, -r * 1.2, -r * 0.6, -r * 0.3, 0, 0);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // ── Draw full 5-petal sakura flower ───────────────────────────
  function drawFlower(cx, cy, r, rot, petalColor, coreColor, alpha) {
    if (alpha < 0.01) return;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);

    for (let i = 0; i < 5; i++) {
      ctx.save();
      ctx.rotate((Math.PI * 2 / 5) * i);
      drawPetal(ctx, r, petalColor, alpha);
      ctx.restore();
    }

    // Center stamens — tiny circle
    ctx.globalAlpha = alpha;
    ctx.fillStyle = coreColor;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /* ── BlossomFlower ─────────────────────────────────────────────
     A full flower that:
       Phase A (0–25%): blooms — petals grow from r=0 to full r
       Phase B (25–65%): holds full bloom, gently sways/floats
       Phase C (65–100%): petals drift apart and fade (花瓣飘散)
  ─────────────────────────────────────────────────────────────── */
  class BlossomFlower {
    constructor() { this.init(); }

    init() {
      this.x = 80 + Math.random() * (W - 160);
      this.y = 60 + Math.random() * (H - 120);
      this.maxR = 14 + Math.random() * 18;      // full bloom radius
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpd = (Math.random() - 0.5) * 0.006;
      this.drift = { x: (Math.random() - 0.5) * 0.3, y: -0.15 - Math.random() * 0.2 };
      this.pColor = pickPetal();
      this.cColor = pickCore();
      this.life = Math.floor(Math.random() * 800); // stagger so they don't all sync
      this.maxLife = 600 + Math.random() * 900;
    }

    update() {
      this.life++;
      this.rot += this.rotSpd;
      const t = this.life / this.maxLife;
      // Gentle float while alive
      if (t > 0.25) {
        this.x += this.drift.x;
        this.y += this.drift.y;
      }
      if (this.life > this.maxLife) this.init();
    }

    draw() {
      const t = this.life / this.maxLife;

      let r, alpha;
      if (t < 0.25) {
        // Bloom phase: ease-out scale up
        const ease = 1 - Math.pow(1 - t / 0.25, 3);
        r = this.maxR * ease;
        alpha = ease;
      } else if (t < 0.65) {
        // Hold phase: full bloom, subtle pulse
        const pulse = 1 + 0.05 * Math.sin(this.life * 0.08);
        r = this.maxR * pulse;
        alpha = 0.85 + 0.15 * Math.sin(this.life * 0.05);
      } else {
        // Scatter phase: petals drift and fade
        const fade = 1 - (t - 0.65) / 0.35;
        r = this.maxR * (1 + (1 - fade) * 0.4);
        alpha = fade * 0.9;
      }

      drawFlower(this.x, this.y, r, this.rot, this.pColor, this.cColor, alpha);
    }
  }

  /* ── FallingPetal ──────────────────────────────────────────────
     Individual petals that drift and spin across the full screen,
     like cherry blossom snowfall (落英缤纷).
  ─────────────────────────────────────────────────────────────── */
  class FallingPetal {
    constructor() { this.init(true); }

    init(initial = false) {
      this.x = Math.random() * (W + 100) - 50;
      this.y = initial ? Math.random() * H : -20;
      this.r = 4 + Math.random() * 9;
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpd = (Math.random() - 0.5) * 0.05;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = 0.5 + Math.random() * 1.0;
      this.swayA = 0.3 + Math.random() * 0.5;  // sway amplitude
      this.swayF = 0.01 + Math.random() * 0.02; // sway frequency
      this.swayT = Math.random() * Math.PI * 2;  // phase offset
      this.color = pickPetal();
      this.alpha = 0.5 + Math.random() * 0.45;
    }

    update() {
      this.swayT += this.swayF;
      this.x += this.vx + Math.sin(this.swayT) * this.swayA;
      this.y += this.vy;
      this.rot += this.rotSpd;
      if (this.y > H + 30) this.init();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      drawPetal(ctx, this.r, this.color, this.alpha);
      ctx.restore();
    }
  }

  // 18 blooming flowers + 80 falling petals for lush but not overwhelming effect
  const flowers = Array.from({ length: 18 }, () => new BlossomFlower());
  const petals = Array.from({ length: 80 }, () => new FallingPetal());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => { p.update(); p.draw(); });
    flowers.forEach(f => { f.update(); f.draw(); });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => { resize(); }, { passive: true });
}

/* ─── Language toggle setup ─────────────────────────────────── */
function setupLangToggle() {
  langToggle?.addEventListener("click", () => {
    setLanguage(state.lang === "zh" ? "en" : "zh");
  });
}

/* ─── Bootstrap ─────────────────────────────────────────────── */
setLanguage(state.lang);
setupHeader();
setupLangToggle();
setupNavHighlight();
setupReveal();
setupConfetti();
