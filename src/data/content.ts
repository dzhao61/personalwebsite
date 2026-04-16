// ─── Personal Content ──────────────────────────────────────────────────────
// Single source of truth — every panel reads from this file.

export const bio = {
  name: "DANIEL ZHAO",
  ticker: "DZ <PORTFOLIO>",
  title: "CS Graduate Student  |  Ex-Investment Banking Analyst  |  Software Developer",
  location: "Sydney, NSW",
  email: "dzhao61@gmail.com",
  phone: "+61 416 325 821",
  github: "https://github.com/dzhao61",
  linkedin: "https://linkedin.com/in/daniel-zhao",
  resume: "/resume.pdf",
  summary:
    "Master of Computer Science student at the University of Sydney, specialising in Algorithms and Theory, " +
    "with previous experience in investment banking and private equity. Brings a background spanning finance, " +
    "computation, and analytical research, with a strong interest in markets, technology, and decision-making " +
    "under uncertainty. Experience at Moelis & Company provided exposure to complex M&A transactions, " +
    "valuation, strategic analysis, and high-stakes communication. Now focused on opportunities that combine " +
    "rigorous problem-solving, commercial thinking, and real-world impact, particularly across quantitative " +
    "finance, trading, and technology.",
  stats: [
    { label: "CURRENT",    value: "M.CS @ USYD"     },
    { label: "WAM",        value: "90.6 HD"          },
    { label: "YOE",  value: "4+"  },
  ],
};

// ─── Work Experience ────────────────────────────────────────────────────────

export type ExperienceType = "FULLTIME" | "INTERN" | "RESEARCH" | "CONTRACT";

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: ExperienceType;
  sector?: string;
  transactions?: string[];       // deal tombstones (Moelis-style)
  bullets: string[];             // responsibilities
}

export const experience: Experience[] = [
  {
    company: "Moelis & Company Australia",
    role: "Investment Banking Analyst, General Industrials",
    period: "Feb 2024 – Mar 2025",
    location: "Sydney, NSW",
    type: "FULLTIME",
    sector: "Industrial · Professional Services · Property Services",
    transactions: [
      "Advised Five V Capital on the divestment of The APP Group to Bureau Veritas",
      "Advised Allegro Funds on the divestment of Terrex Seismic to SAExploration",
      "Advised a NYSE-listed company on acquisition of an unlisted, workforce accommodation company",
      "Advised on strategic review and potential sale of a ~$400m ASX-listed Infrastructure Services company to an Asian party",
      "Supported Pacific Equity Partners' A$1.3bn acquisition of Johns Lyng Group (ASX:JLG)",
    ],
    bullets: [
      "Drafted key transaction materials including Information Memorandums, Management Presentations, IC Notes, and investor updates",
      "Prepared detailed valuation analyses incorporating precedent transactions, trading comparables, and DCF models including sensitivity and scenario testing to assess key value drivers",
      "Normalised company financials to reflect underlying performance, assess recurring earnings, and ensure comparability across bidders",
      "Conducted detailed industry and buyer research to identify, assess, and engage both strategic and PE acquirers across domestic and international markets",
      "Managed VDR setup and population, coordinated Q&A processes, and supported management and CFOs throughout due diligence",
      "Built and maintained three-statement financial models with client and bidder teams to analyse risks and transaction outcomes",
      "Assisted senior team members with process design, offer structures, and preparation of board and investment committee materials",
    ],
  },
  {
    company: "The Riverside Company",
    role: "Private Equity Undergraduate Analyst",
    period: "Mar 2023 – Nov 2023",
    location: "Melbourne, VIC",
    type: "INTERN",
    sector: "Consumers · Technology · Industrials · Professional Services",
    bullets: [
      "Analysed 15+ investment opportunities across Consumers, Technology, Industrials, and Professional Services sectors",
      "Performed technical analysis including transaction comparable, trading comparable, and discounted cash flow analysis",
      "Gained broad exposure to the private equity process through origination, company research, market research, competitor analysis, management calls, and expert calls",
    ],
  },
  {
    company: "Moelis & Company Australia",
    role: "Investment Banking Summer Analyst, General Industrials & Healthcare",
    period: "Dec 2022 – Feb 2023",
    location: "Melbourne, VIC",
    type: "INTERN",
    sector: "General Industrials · Healthcare",
    bullets: [
      "Assisted with live-deals and marketing throughout the internship including valuation, pitch decks, and industry research",
      "Intern Project: Constructed a take-private pitch for a Healthcare company using LBO, DCF, transaction comparable, and trading comparable analysis",
      "Performed intern project in a 45-minute presentation to the whole Melbourne office (7 junior + 5 senior bankers)",
    ],
  },
  {
    company: "K2 Medical Systems Ltd",
    role: "Software Developer",
    period: "Dec 2021 – Oct 2022",
    location: "Melbourne, VIC",
    type: "INTERN",
    sector: "Healthcare IT · Maternity Software",
    bullets: [
      "Designed and tested front-end UI elements for the Athena maternity software using SQL, Python, and XML",
      "Implemented engineering change requests to fix bugs and add new software features in collaboration with senior developers",
      "Participated in daily stand-ups and sprint planning, and prepared technical documentation to support future development and testing",
    ],
  },
  {
    company: "Constellation Software (TSX: CSU)",
    role: "Corporate Development Intern, Healthcare",
    period: "Jun 2021 – Nov 2021",
    location: "Melbourne, VIC",
    type: "INTERN",
    sector: "Healthcare · FinTech · Government · Defence Software",
    bullets: [
      "Generated 250+ new M&A leads by analysing M&A prospects based on the investment profile of Constellation Software",
      "Researched into the Healthcare, FinTech, Government, and Defence Software sectors for acquisition opportunities",
    ],
  },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export type ProjectStatus = "LIVE" | "WIP" | "ARCHIVED";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "LoL Multi-Odds Repricing",
    description:
      "Machine learning system for repricing multi-leg League of Legends betting odds using ensemble models and real-time data feeds.",
    stack: ["Python", "scikit-learn", "FastAPI", "PostgreSQL"],
    status: "LIVE",
    github: "https://github.com/dzhao61/lol-odds-repricing",
  },
  {
    name: "ClaudeMaxxing",
    description:
      "Tooling and prompts for maximising productivity with Claude AI — workflow automation and prompt engineering utilities.",
    stack: ["TypeScript", "Next.js", "Anthropic API"],
    status: "WIP",
    github: "https://github.com/dzhao61/claudemaxxing",
  },
  {
    name: "FastAPI Tutorial",
    description:
      "Comprehensive FastAPI tutorial series covering REST APIs, async operations, dependency injection, and production deployment.",
    stack: ["Python", "FastAPI", "Pydantic", "Docker"],
    status: "LIVE",
    github: "https://github.com/dzhao61/fastapi-tutorial",
  },
  {
    name: "Portfolio Terminal",
    description:
      "This Bloomberg Terminal-inspired portfolio site. Built with Next.js and Tailwind CSS, deployed to GitHub Pages.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    status: "LIVE",
    github: "https://github.com/dzhao61/dzhao61.github.io",
    demo: "https://dzhao61.github.io",
  },
];

// ─── Education ──────────────────────────────────────────────────────────────

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  extracurricular?: string[];
  coursework?: string[];
  thesis?: string;
}

export const education: Education[] = [
  {
    institution: "University of Sydney",
    degree: "M.CS.",
    field: "Computer Science — Algorithm and Theory",
    period: "Feb 2025 – Dec 2026",
    location: "Sydney, NSW",
    gpa: "90.6 WAM  (High Distinction)",
    thesis:
      "Extending the analytical null distributions for mutual information to address failures under skewed discrete variables",
    coursework: [
      "Computational Statistics",
      "Database Management Systems",
      "Parallel & Distributed Computing",
      "Randomised & Advanced Algorithms",
      "Discrete Optimisation",
      "Information Theory and Self-Organisation",
    ],
    extracurricular: [
      "Postgraduate Representative — Sydney Computing Society (SYNCS)",
    ],
  },
  {
    institution: "University of Melbourne",
    degree: "B.Com.",
    field: "Finance and Economics",
    period: "Feb 2021 – Dec 2023",
    location: "Melbourne, VIC",
    gpa: "82.5 WAM  (First Class Honours)",
    coursework: ["Mathematics and Computing track"],
    extracurricular: [
      "Treasurer — University Network for Investing and Trading (UNIT)",
      "Team Leader — 180 Degrees Consulting  (2× Best Project Award winner)",
    ],
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export const skills = {
  // Technical — from Additional Information + K2 + projects
  languages:   ["Python", "Java", "R", "C", "C++", "SQL", "TypeScript", "JavaScript", "XML", "Bash"],
  frameworks:  ["FastAPI", "Next.js", "React", "Pandas", "NumPy", "scikit-learn", "Pydantic", "Node.js"],
  tools:       ["Git", "Docker", "PostgreSQL", "Linux", "GitHub Actions", "MS Excel"],

  // Finance — derived from Moelis + Riverside work
  valuation:   ["DCF Analysis", "LBO Modelling", "Trading Comparables", "Precedent Transactions", "Three-Statement Models", "Sensitivity Analysis", "Scenario Analysis"],
  dealwork:    ["Information Memorandums", "Management Presentations", "IC Notes", "Investor Updates", "VDR Management", "Due Diligence", "Q&A Coordination", "Financial Normalisation"],
  domain:      ["M&A Advisory", "Private Equity", "Investment Banking", "Corporate Development", "Healthcare IT", "Quantitative Analysis"],
};

// ─── Ticker tape ────────────────────────────────────────────────────────────

export const tickerItems = [
  "M.CS @ UNIVERSITY OF SYDNEY  ·  90.6 WAM HIGH DISTINCTION",
  "EX MOELIS & COMPANY  ·  INVESTMENT BANKING ANALYST  ·  GENERAL INDUSTRIALS",
  "EX THE RIVERSIDE COMPANY  ·  PRIVATE EQUITY",
  "EX K2 MEDICAL SYSTEMS  ·  SOFTWARE DEVELOPER",
  "EX CONSTELLATION SOFTWARE (TSX: CSU)  ·  CORP DEV",
  "A$1.3BN  ·  PACIFIC EQUITY PARTNERS / JOHNS LYNG GROUP (ASX:JLG)",
  "250+ M&A LEADS GENERATED  ·  15+ DEALS ANALYSED",
  "PYTHON  ·  SQL  ·  C/C++  ·  JAVA  ·  R  ·  TYPESCRIPT",
  "LOCATION: SYDNEY, NSW  ·  OPEN TO OPPORTUNITIES",
  "INTERESTS: HIKING  ·  MOUNTAINEERING  ·  GOLF  ·  FORMULA 1",
];
