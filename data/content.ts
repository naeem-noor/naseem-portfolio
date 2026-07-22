// All content below is sourced directly from Naseem Hussain Awan's CV / LinkedIn export.
// No dates, figures, achievements, or credentials are invented — edit this file to update
// the site; components should not contain hardcoded copy.

export const profile = {
  name: "Naseem Hussain Awan",
  role: "Planning Engineer",
  tagline: "Hospitality & High-Rise Projects Professional",
  location: "Lahore, Punjab, Pakistan",
  email: "n.hussainawan7@outlook.com",
  phone: "0304-9795529",
  linkedin: "https://www.linkedin.com/in/naseemhussain-awan",
  currentCompany: "Zameen Developments",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Planning Engineer — Project Controls",
  headline: ["Structured plans.", "Controlled schedules.", "Measurable progress."],
  lede: "I own project schedules for high-rise residential, commercial, and hospitality developments — from baseline in Primavera P6 through earned value tracking, look-ahead programming, and executive reporting to handover.",
  meta: [
    { label: "Lahore, Punjab, Pakistan" },
    { label: "Currently at Zameen Developments" },
  ],
};

export const intro = {
  statementLead:
    "Planning Engineer specializing in project controls for high-rise residential, commercial, and hospitality developments.",
  statementSecondary:
    "I translate complex project data into decisions — maintaining schedule integrity across multi-project portfolios, catching variance early, and supporting recovery planning when programmes come under pressure.",
  body: "I own baseline schedules in Primavera P6 and drive delivery through earned value tracking, look-ahead programming, cash flow analysis, and executive-level progress reporting. I report directly to project leadership and build the deliverables that inform their decisions.",
  facts: [
    { term: "Current Role", detail: "Planning Engineer, Zameen Developments" },
    { term: "Based In", detail: "Lahore, Punjab, Pakistan" },
    { term: "Education", detail: "B.Sc Civil Engineering, UET Taxila" },
    { term: "Core System", detail: "Primavera P6 · Primavera Risk Analysis" },
  ],
};

export type ExpertiseGroup = {
  index: string;
  title: string;
  items: { label: string; tag: string }[];
};

export const expertiseGroups: ExpertiseGroup[] = [
  {
    index: "01",
    title: "Planning & Scheduling",
    items: [
      { label: "Primavera P6", tag: "Baseline / Live" },
      { label: "Look-Ahead Programming", tag: "Monthly" },
      { label: "Recovery Scheduling", tag: "Resequencing" },
    ],
  },
  {
    index: "02",
    title: "Project Controls",
    items: [
      { label: "Earned Value Management", tag: "SPI / CPI" },
      { label: "DPR & MPR Reporting", tag: "Daily / Monthly" },
      { label: "Document Control Register", tag: "DCR" },
    ],
  },
  {
    index: "03",
    title: "Risk Management",
    items: [
      { label: "Primavera Risk Analysis", tag: "Certified" },
      { label: "Risk Identification Techniques", tag: "Portfolio-wide" },
      { label: "Monte Carlo Simulations", tag: "Schedule Risk" },
    ],
  },
  {
    index: "04",
    title: "Commercial & Cost",
    items: [
      { label: "Cash Flow & Cost Control", tag: "CFR Reviews" },
      { label: "BOQ & Cost Estimation", tag: "Budgeting" },
      { label: "Delay & EOT Claims", tag: "Analysis" },
    ],
  },
  {
    index: "05",
    title: "Coordination",
    items: [
      { label: "Cross-Functional Alignment", tag: "Sales / Procurement" },
      { label: "Design Coordination", tag: "J7 Group" },
      { label: "Site Coordination", tag: "On-Site Teams" },
    ],
  },
  {
    index: "06",
    title: "Reporting",
    items: [
      { label: "Power BI", tag: "Dashboards" },
      { label: "Executive Progress Reporting", tag: "Leadership" },
      { label: "Microsoft Suite", tag: "Documentation" },
    ],
  },
];

export type ExperienceStat = { value: string; label: string };

export type ExperienceItem = {
  current: boolean;
  dateRange: string;
  company: string;
  role: string;
  location: string;
  description: string;
  stats?: ExperienceStat[];
  bullets: string[];
  tools: string[];
};

export const experience: ExperienceItem[] = [
  {
    current: true,
    dateRange: "August 2024 — Present · 2 Years",
    company: "Zameen Developments",
    role: "Planning Engineer",
    location: "Lahore",
    description:
      "Planning and delivering a multi-city portfolio of high-rise residential, commercial, and multipurpose developments across Lahore, Multan, and Islamabad. I own the schedule from inception to handover and run the operating rhythm around it — keeping construction, sales, procurement, and leadership aligned to a single plan.",
    stats: [
      { value: "7", label: "Active Projects" },
      { value: "~5.4M sft", label: "Portfolio Area" },
      { value: "~PKR 51B", label: "Budget at Completion" },
      { value: "3", label: "Delivered to Handover" },
    ],
    bullets: [
      "Own baseline P6 schedules across the active portfolio and track earned-value performance (SPI/CPI) live, giving leadership early visibility on critical-path health and slippage.",
      "Issue monthly look-ahead programs to construction teams to sequence near-term execution against the baseline.",
      "Run monthly cash-flow-requirement (CFR) reviews with Sales, aligning sales targets to project funding needs derived directly from the schedule.",
      "Build and track procurement plans with Supply Chain, Logistics, and Procurement to protect long-lead and milestone-critical deliveries.",
    ],
    tools: ["Primavera P6", "Primavera Risk Analysis", "Power BI", "Microsoft Suite"],
  },
  {
    current: false,
    dateRange: "August 2022 — August 2024 · 2 Years 1 Month",
    company: "J7 Group",
    role: "Planning Engineer",
    location: "J7 Emporium, B-17 Multi Gardens, Islamabad",
    description:
      "Drove planning, cost, and design control across a portfolio of international brand hospitality high-rises — from early design coordination through construction monitoring on site.",
    bullets: [
      "Developed and maintained project schedules covering timelines, milestones, and execution strategies, tracking delivery through structured monitoring and control against performance metrics.",
      "Prepared and maintained recovery schedules, resequencing timelines to absorb unforeseen challenges and minimize delay.",
      "Managed cash flow forecasting to keep funding and resources aligned to project phasing, and owned budgeting and BOQ including cost estimation, expense control, and bar bending schedules.",
      "Produced Daily and Monthly Progress Reports (DPR/MPR) and maintained the Document Control Register (DCR) for stakeholder reporting and traceability.",
      "Led and coordinated the design team, aligning design intent with project requirements and brand standards, and managed the hotel design inventory across the project lifecycle.",
      "Oversaw site management and coordination, working with on-site teams to hold schedule and quality standards.",
    ],
    tools: ["Primavera P6", "AutoCAD", "Microsoft Suite"],
  },
];

export const education = [
  {
    field: "Civil Engineering",
    institution: "University of Engineering and Technology, Taxila",
    detail: "Bachelor of Science (B.Sc), Civil Engineering",
  },
  {
    field: "Pre-Engineering",
    institution: "Army Public School — APSACS, Kharian Cantt",
    detail: "Intermediate, Pre-Engineering",
  },
];

export type ProjectSpec = { value: string; label: string };
export type ProjectMetric = { label: string; value: string; width: number; variant?: "bronze" | "steel" };

export type FeaturedProject = {
  tag: string;
  name: string;
  location: string;
  description: string;
  image: string;
  officialWebsite: string;
  specs: ProjectSpec[];
  metrics: ProjectMetric[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "J7 Emporium",
    tag: "Flagship Development",
    location: "Islamabad, Pakistan",
    description:
      "A premium lifestyle destination in B-17 Islamabad, offering luxury apartments, a mega mall, smart parking, and Pakistan's first-ever Skywalk experience.",

    image: "/Images/J7 Emporium.webp",

    officialWebsite: "https://j7emporium.com/",

    specs: [
      {
        value: "1.5M+",
        label: "Sq. Ft. Development",
      },
      {
        value: "P6",
        label: "Schedule Control",
      },
    ],

    metrics: [
      {
        label: "Planning Control",
        value: "92%",
        width: 92,
      },
      {
        label: "Schedule Tracking",
        value: "88%",
        width: 88,
        variant: "steel",
      },
    ],
  },
  {
    tag: "Active · G+37 Multipurpose",
    name: "Zameen Vault",
    location: "CBD, Lahore",
    description:
      "Multipurpose high-rise development under full schedule ownership from inception, with earned-value tracking and cross-functional coordination across construction, sales, and procurement.",
    image: "/Images/ZameenVault.jpg",
    officialWebsite: "https://zameendevelopments.com/zameen-vault",
    specs: [
      { value: "~1.79M sft", label: "Built-Up Area" },
      { value: "PKR 18B", label: "Budget at Completion" },
      { value: "G+37", label: "Configuration" },
    ],
    metrics: [
      { label: "Baseline → Handover", value: "", width: 62, variant: "bronze" },
      { label: "SPI", value: "0.98", width: 78, variant: "steel" },
      { label: "CPI", value: "1.02", width: 84, variant: "bronze" },
    ],
  },
  {
    tag: "Active · Podium + Three Towers",
    name: "Downtown Romanza",
    location: "Multan",
    description:
      "G+4 podium rising into three towers of 17, 12, and 15 storeys — scheduled and tracked as a single integrated programme across podium and tower sequencing.",
    image: "/Images/downtown_rumanza.jpeg",
    officialWebsite: "https://zameendevelopments.com/downtown-romanza",
    specs: [
      { value: "~1.61M sft", label: "Built-Up Area" },
      { value: "PKR 14B", label: "Budget at Completion" },
      { value: "17/12/15", label: "Tower Storeys" },
    ],
    metrics: [
      { label: "Baseline → Handover", value: "", width: 48, variant: "bronze" },
      { label: "SPI", value: "1.00", width: 70, variant: "steel" },
      { label: "CPI", value: "0.99", width: 66, variant: "bronze" },
    ],
  },
  {
    tag: "Active · G+33, 4 Basements",
    name: "Zameen ARX",
    location: "CBD, Lahore",
    description:
      "Multipurpose high-rise with four basement levels, driven from project inception under full Primavera P6 control alongside monthly look-ahead programming.",
    image: "/Images/ZameenArx.jpg",
    officialWebsite: "https://zameendevelopments.com/zameen-arx",
    specs: [
      { value: "PKR 10B", label: "Budget at Completion" },
      { value: "G+33", label: "Configuration" },
      { value: "4", label: "Basement Levels" },
    ],
    metrics: [
      { label: "Baseline → Handover", value: "", width: 34, variant: "bronze" },
      { label: "SPI", value: "1.01", width: 74, variant: "steel" },
      { label: "CPI", value: "1.00", width: 72, variant: "bronze" },
    ],
  },
];

export const handoverProjects = {
  heading: "Delivered to Handover",
  combinedArea: "~603,000 sft combined",
  items: ["Zameen Aurum", "Mall 35, Rawalpindi", "Zameen Quadrangle"],
};

export const hospitalityPortfolio = {
  heading: "Hospitality Portfolio — J7 Group",
  description:
    "International brand high-rises planned and cost-controlled from design coordination through construction monitoring.",
  brands: ["Radisson Blu", "Radisson", "Rotana", "Golden Tulip", "Royal Swiss"],
};

export type WorkflowNode = { index: string; title: string; description: string };

export const workflow: WorkflowNode[] = [
  { index: "01", title: "Planning", description: "Baseline schedules built in Primavera P6 from project inception." },
  { index: "02", title: "Scheduling", description: "Monthly look-ahead programs sequence near-term execution." },
  { index: "03", title: "Monitoring", description: "DPR/MPR reporting and earned value tracked against baseline." },
  { index: "04", title: "Risk", description: "Primavera Risk Analysis and Monte Carlo simulation on schedule risk." },
  { index: "05", title: "Execution", description: "Recovery scheduling and cross-functional alignment when needed." },
  { index: "06", title: "Progress", description: "Executive reporting turns schedule data into leadership decisions." },
];

export type Credential = { title: string; issuer: string };

export const credentials: Credential[] = [
  { title: "Registered Engineer", issuer: "Pakistan Engineering Council" },
  { title: "Google Project Management: Professional (GPMP)", issuer: "Google" },
  { title: "Risk Management Using Primavera Risk Analysis", issuer: "Primavera Risk Analysis" },
  { title: "Construction Project Management (CPM)", issuer: "Professional Certification" },
  { title: "Project Management Institute — Membership", issuer: "PMI" },
];

export const languages = [
  { name: "Punjabi", level: "Native or Bilingual" },
  { name: "English", level: "Full Professional" },
  { name: "Urdu", level: "Full Professional" },
];

export type PhilosophyItem = { index: string; title: string; description: string };

export const philosophy: PhilosophyItem[] = [
  {
    index: "01",
    title: "Planning Before Execution",
    description:
      "A baseline is only useful if it is set before work starts — every programme begins with a schedule the whole project can be built against.",
  },
  {
    index: "02",
    title: "Visibility of Progress",
    description: "Leadership makes better decisions when they can see schedule health in real time, not at month-end.",
  },
  {
    index: "03",
    title: "Managing Uncertainty",
    description: "Risk is identified and modelled early, so it is managed rather than discovered on site.",
  },
  {
    index: "04",
    title: "Coordination",
    description: "A schedule only holds if construction, sales, and procurement are reading from the same plan.",
  },
  {
    index: "05",
    title: "Risk Awareness",
    description: "Recovery planning starts the moment variance appears — not after it becomes delay.",
  },
  {
    index: "06",
    title: "Structured Delivery",
    description: "Every project phase is planned, tracked, and reported the same disciplined way, from inception to handover.",
  },
];

export const contact = {
  eyebrow: "Connect",
  statementPrefix: "Building a portfolio and need the",
  statementAccent: "schedule owned",
  statementSuffix: "end to end?",
  sub: "Open to conversations on planning, project controls, and schedule leadership for high-rise and hospitality developments.",
};
