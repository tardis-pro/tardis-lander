export type OfferingFaq = {
  question: string;
  answer: string;
};

export type OfferingBlock = {
  title: string;
  description: string;
  points: string[];
};

export type OfferingPersona = {
  title: string;
  description: string;
};

export type OfferingStep = {
  dayLabel: string;
  title: string;
  detail: string;
};

export type OfferingObjection = {
  title: string;
  answer: string;
};

export type OfferingComparison = {
  path: string;
  tradeoff: string;
  fit: string;
};

export type OfferingRelated = {
  title: string;
  href: string;
  description: string;
};

export type OfferingContent = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroHeading: string;
  heroLead: string;
  problem: string[];
  solutionPreview: string;
  whatYouGet: OfferingBlock[];
  personas: OfferingPersona[];
  process: OfferingStep[];
  price: string;
  timeline: string;
  pricingLead: string;
  pricingIncludes: string[];
  guarantees: string[];
  objections: OfferingObjection[];
  comparisons: OfferingComparison[];
  faqs: OfferingFaq[];
  testimonial: {
    quote: string;
    author: string;
    company: string;
  };
  related: OfferingRelated[];
  seoKeywords: string[];
  serviceType: string;
};

const baseFaqs: OfferingFaq[] = [
  {
    question: "What's included in the 14-day timeline?",
    answer:
      "Days 1-2: discovery and risk mapping. Days 3-11: implementation and integration. Days 12-14: tests, runbooks, and handoff.",
  },
  {
    question: "What if we're not on AWS?",
    answer:
      "We work with GCP, Azure, DigitalOcean, Vercel, Railway, and self-hosted stacks. The playbook stays the same, tools adapt.",
  },
  {
    question: "Do we need engineers available?",
    answer:
      "Yes, 2-4 hours across two weeks for alignment, access, and transfer. We do not block your delivery roadmap.",
  },
];

export const offerings: Record<string, OfferingContent> = {
  "production-gravity": {
    slug: "production-gravity",
    name: "Production Gravity",
    shortName: "Production-ready infrastructure in 14 days",
    metaTitle: "Production Infrastructure for Startups | Tardis",
    metaDescription:
      "Production-ready infrastructure in 14 days, fixed price Rs 1.5L. No bloat, no scope creep, just decisive outcomes.",
    heroBadge: "Launch Offering",
    heroHeading: "Production Gravity: ship production-ready in two weeks, not two quarters.",
    heroLead:
      "You are close to launch, your stack still behaves like a prototype, and the team should be shipping features, not firefighting infra. We harden your platform fast and hand over full operational control.",
    problem: [
      "Most seed-stage teams postpone production hygiene until launch week, then lose days to avoidable outages.",
      "Hiring a full-time DevOps engineer is slow and expensive when you need outcomes now.",
      "Consulting engagements that begin with six-week assessments are misaligned with startup timelines.",
    ],
    solutionPreview:
      "Production Gravity gives you a decisive two-week sprint: cloud foundation, CI/CD, monitoring, security baselines, and a handoff your engineers can run on day one.",
    whatYouGet: [
      {
        title: "Infrastructure as Code foundation",
        description:
          "Your cloud setup codified, versioned, and reviewable from day one.",
        points: [
          "Terraform baseline modules",
          "Environment separation and secrets flow",
          "Reusable patterns your team can extend",
        ],
      },
      {
        title: "Delivery pipeline that does not drift",
        description:
          "Predictable deploys with quality gates and rollback readiness.",
        points: [
          "Build, test, deploy workflow",
          "Branch strategy and release controls",
          "Rollback and incident-safe deployment paths",
        ],
      },
      {
        title: "Observability and operations readiness",
        description:
          "You can detect, diagnose, and respond before users escalate.",
        points: [
          "Logs, metrics, alerts tied to SLO intent",
          "On-call runbook starter pack",
          "Core dashboards for founders and engineers",
        ],
      },
      {
        title: "Security baseline without friction",
        description:
          "Practical defaults that reduce risk while keeping velocity.",
        points: [
          "Identity and least privilege pass",
          "Dependency and image scanning baseline",
          "Backup and recovery sanity checks",
        ],
      },
    ],
    personas: [
      {
        title: "Seed founder with a launch date",
        description:
          "You need infrastructure that holds under real traffic before go-live.",
      },
      {
        title: "CTO with a small engineering team",
        description:
          "You want strong fundamentals without pulling engineers off product work.",
      },
      {
        title: "Team migrating from improvised setup",
        description:
          "Your platform works, but your reliability posture is fragile and undocumented.",
      },
      {
        title: "Founder replacing consulting drift",
        description:
          "You want fixed scope, fixed price, and a definitive operational result.",
      },
    ],
    process: [
      {
        dayLabel: "Days 1-2",
        title: "Discovery and architecture lock",
        detail:
          "Current-state audit, risk map, and implementation plan with explicit delivery boundaries.",
      },
      {
        dayLabel: "Days 3-6",
        title: "Foundation build",
        detail:
          "IaC setup, cloud hardening, network and identity baseline, environment orchestration.",
      },
      {
        dayLabel: "Days 7-11",
        title: "Pipeline and observability",
        detail:
          "CI/CD rollout, monitoring stack, alert routing, and deployment safety controls.",
      },
      {
        dayLabel: "Days 12-14",
        title: "Validation and handover",
        detail:
          "Load checks, failure drills, runbooks, team transfer session, and closeout.",
      },
    ],
    price: "Rs 1.5L",
    timeline: "14 days fixed",
    pricingLead:
      "One price, one timeline, one accountable outcome. Compare this to six weeks of engineering distraction and launch-week risk.",
    pricingIncludes: [
      "Everything required to become production-ready",
      "Implementation and documentation, not only recommendations",
      "Knowledge transfer included for your engineering team",
    ],
    guarantees: [
      "Fixed price, no surprise invoices",
      "No scope creep guarantee within agreed objective",
      "14-day delivery guarantee",
    ],
    objections: [
      {
        title: "Rs 1.5L feels high for a startup",
        answer:
          "It is lower than a single prolonged outage, and lower than the opportunity cost of pulling core engineers into emergency infrastructure work.",
      },
      {
        title: "Can we do this ourselves?",
        answer:
          "Yes. The question is timing and risk concentration. We compress months of operational setup into two focused weeks and leave your team with ownership.",
      },
      {
        title: "What if we need faster than 14 days?",
        answer:
          "For urgent launches we can run a 3-day emergency prep track focused on highest-risk controls, then complete full hardening immediately after launch.",
      },
    ],
    comparisons: [
      {
        path: "DIY with current team",
        tradeoff: "High context load and timeline drift while engineers pause feature delivery.",
        fit: "Works when launch pressure is low and infra risk is already controlled.",
      },
      {
        path: "Traditional consulting engagement",
        tradeoff: "Long assessment phases, variable billing, and slower execution cadence.",
        fit: "Works for larger orgs optimizing mature environments over months.",
      },
      {
        path: "Production Gravity",
        tradeoff: "Fixed two-week sprint with explicit scope and accountable outcomes.",
        fit: "Best for startup teams needing immediate production readiness before launch.",
      },
    ],
    faqs: [
      ...baseFaqs,
      {
        question: "What does production-ready mean in this engagement?",
        answer:
          "CI/CD, observability, alerting, security baseline, backup/recovery checks, and runbooks your team can execute without external dependency.",
      },
      {
        question: "Can you work with existing messy infrastructure?",
        answer:
          "Yes. Most engagements start from partial systems. We stabilize what should stay and replace what introduces reliability risk.",
      },
      {
        question: "What happens after day 14?",
        answer:
          "You keep full control of code and cloud resources. Optional support is available, but your team is not locked into us.",
      },
    ],
    testimonial: {
      quote:
        "Production Gravity saved us three weeks of engineering churn and launch day stayed calm.",
      author: "Founder",
      company: "B2B SaaS, Seed Stage",
    },
    related: [
      {
        title: "Failure-First Architecture",
        href: "/offerings/failure-first-architecture",
        description: "Built infra? Now make it fail gracefully and recover fast.",
      },
      {
        title: "Security Without The Theater",
        href: "/offerings/security-without-theater",
        description: "Layer practical security controls without slowing delivery.",
      },
    ],
    seoKeywords: [
      "infra setup for startups",
      "devops for early stage startups",
      "production infrastructure setup",
      "AWS setup for startup",
    ],
    serviceType: "Infrastructure Consulting",
  },
  "failure-first-architecture": {
    slug: "failure-first-architecture",
    name: "Failure-First Architecture",
    shortName: "Systems designed to fail well",
    metaTitle: "Failure-First Architecture: Systems That Survive | Tardis",
    metaDescription:
      "Design for failure, survive launch day. Infrastructure that fails well, recovers fast, and keeps users happy.",
    heroBadge: "Reliability Offering",
    heroHeading: "Failure-First Architecture: build systems that survive you.",
    heroLead:
      "Incidents are not edge cases. They are certainty. We design your architecture, telemetry, and response playbooks so failures degrade gracefully instead of becoming public incidents.",
    problem: [
      "Most startup stacks are built for happy paths and collapse under unpredictable load or dependencies.",
      "Monitoring without failure-mode design only tells you that you are already in trouble.",
      "Teams react heroically but repeatedly because incident handling is not codified.",
    ],
    solutionPreview:
      "Failure-First Architecture identifies top risk paths, then engineers defensive defaults: graceful degradation, recovery workflows, and response clarity.",
    whatYouGet: [
      {
        title: "Failure mode map",
        description:
          "Concrete inventory of where and how your system can fail under realistic pressure.",
        points: [
          "Dependency and bottleneck analysis",
          "Blast radius mapping",
          "Risk-ranked mitigation plan",
        ],
      },
      {
        title: "Graceful degradation design",
        description:
          "Users keep moving even when one subsystem fails.",
        points: [
          "Fallback behavior for core journeys",
          "Timeout, retry, and circuit-breaker strategy",
          "Load shedding and queueing policies",
        ],
      },
      {
        title: "Incident response operating model",
        description:
          "Fast coordination when every minute matters.",
        points: [
          "Severity matrix and ownership model",
          "Runbook-first response flow",
          "Post-incident review templates",
        ],
      },
      {
        title: "Reliability telemetry",
        description:
          "You can see leading indicators before revenue feels the impact.",
        points: [
          "SLO-oriented signal design",
          "Alert quality tuning",
          "Executive-visible uptime and recovery views",
        ],
      },
    ],
    personas: [
      {
        title: "Teams recovering from a bad incident",
        description:
          "You already paid the outage tax and want structural prevention, not heroic rituals.",
      },
      {
        title: "Startups approaching high-stakes launch",
        description:
          "You expect sudden load and cannot afford first-impression failure.",
      },
      {
        title: "CTOs with limited reliability bandwidth",
        description:
          "You need dependable patterns your team can run without a full SRE department.",
      },
      {
        title: "Engineering leaders scaling quickly",
        description:
          "You need reliability conventions before team size multiplies operational entropy.",
      },
    ],
    process: [
      {
        dayLabel: "Days 1-2",
        title: "Incident and architecture baseline",
        detail:
          "Failure history review, critical path mapping, and reliability objective alignment.",
      },
      {
        dayLabel: "Days 3-6",
        title: "Defensive architecture rollout",
        detail:
          "Fallback design, resilience patterns, and critical-path hardening implementation.",
      },
      {
        dayLabel: "Days 7-11",
        title: "Response and observability",
        detail:
          "Alert strategy, runbooks, incident command flow, and monitoring quality upgrade.",
      },
      {
        dayLabel: "Days 12-14",
        title: "Game day and handover",
        detail:
          "Controlled failure drills, recovery timing checks, and team readiness transfer.",
      },
    ],
    price: "Rs 1.5L",
    timeline: "14 days fixed",
    pricingLead:
      "Reliability is cheaper than downtime. You get a tested architecture posture and response model your team can execute under stress.",
    pricingIncludes: [
      "Failure-mode analysis and remediation implementation",
      "Runbooks and incident process templates",
      "Chaos-lite drills and recovery validation",
    ],
    guarantees: [
      "Fixed engagement with explicit outcomes",
      "No theater, only measurable resilience improvements",
      "Practical handover for startup-sized teams",
    ],
    objections: [
      {
        title: "Is this just chaos engineering?",
        answer:
          "No. We do practical, controlled resilience work tied to your architecture and incident realities, not random disruption for optics.",
      },
      {
        title: "Do we need mature SRE to use this?",
        answer:
          "No. This offering exists for teams that do not yet have a dedicated SRE function.",
      },
      {
        title: "Will this slow product velocity?",
        answer:
          "It prevents repeated incident interruptions and unplanned rewrites, which increases delivery predictability over time.",
      },
    ],
    comparisons: [
      {
        path: "Ad hoc incident fixes",
        tradeoff: "Temporary patches reduce immediate pain but preserve systemic fragility.",
        fit: "Only acceptable when incident impact is very low and non-critical.",
      },
      {
        path: "Full SRE team hiring",
        tradeoff: "Strong long-term move but expensive and slow for immediate reliability gaps.",
        fit: "Best for later-stage companies with sustained operational headcount plans.",
      },
      {
        path: "Failure-First Architecture",
        tradeoff: "Two-week reliability hardening with runbooks and controlled drills.",
        fit: "Best for startups that need outage prevention and recovery discipline now.",
      },
    ],
    faqs: [
      ...baseFaqs,
      {
        question: "What does failure-first mean in practice?",
        answer:
          "Designing user journeys, dependencies, and operations to fail safely, recover quickly, and avoid cascading outages.",
      },
      {
        question: "How do you test failures without breaking production?",
        answer:
          "We run controlled drills in safe environments, then introduce guarded production checks when risk is understood and bounded.",
      },
      {
        question: "Who is this not for?",
        answer:
          "Organizations with a mature reliability team and established incident discipline may need a narrower specialist engagement.",
      },
    ],
    testimonial: {
      quote:
        "The biggest change was confidence. We now know exactly what fails, how it fails, and what to do next.",
      author: "CTO",
      company: "Fintech, Series A",
    },
    related: [
      {
        title: "Production Gravity",
        href: "/offerings/production-gravity",
        description: "Establish production foundations before resilience optimization.",
      },
      {
        title: "Security Without The Theater",
        href: "/offerings/security-without-theater",
        description: "Integrate secure-by-default controls into your reliability posture.",
      },
    ],
    seoKeywords: [
      "chaos engineering for startups",
      "incident management for startups",
      "fault tolerant system design",
      "production outage prevention",
    ],
    serviceType: "Reliability Engineering",
  },
  "security-without-theater": {
    slug: "security-without-theater",
    name: "Security Without The Theater",
    shortName: "Security that enables shipping",
    metaTitle: "Security for Startups: No Theater, Just Results | Tardis",
    metaDescription:
      "Security that enables shipping. Practical controls, compliance readiness, and developer-friendly security in 14 days.",
    heroBadge: "Security Offering",
    heroHeading: "Security Without The Theater: security that ships, not security that blocks.",
    heroLead:
      "You need customer-trust answers, compliance readiness, and fewer security surprises, but you cannot freeze engineering velocity. We deliver practical controls your team can keep running.",
    problem: [
      "Many startup security audits produce long reports and little remediation.",
      "Compliance pressure arrives before teams have security operating habits.",
      "Heavy process can slow deployment without reducing actual risk.",
    ],
    solutionPreview:
      "This engagement closes high-priority gaps, automates guardrails, and leaves you with repeatable security workflows that fit startup speed.",
    whatYouGet: [
      {
        title: "Security baseline and threat review",
        description:
          "Focused assessment of real risks across app, infra, identity, and delivery flow.",
        points: [
          "Gap analysis with severity prioritization",
          "Threat-path walkthroughs for critical assets",
          "Action plan tied to launch and customer commitments",
        ],
      },
      {
        title: "DevSecOps controls in CI/CD",
        description:
          "Security checks become part of normal delivery, not a separate gatekeeper ritual.",
        points: [
          "Dependency and image scanning baseline",
          "Policy checks for critical misconfigurations",
          "Build fail rules for high-impact findings",
        ],
      },
      {
        title: "Compliance readiness foundation",
        description:
          "Answer enterprise due diligence with confidence.",
        points: [
          "SOC2-aligned control map starter",
          "Access and audit trail conventions",
          "Security response and disclosure templates",
        ],
      },
      {
        title: "Team security operating model",
        description:
          "Simple routines that keep posture strong after handoff.",
        points: [
          "Role clarity for security ownership",
          "Recurring review cadence",
          "Runbooks for common vulnerability classes",
        ],
      },
    ],
    personas: [
      {
        title: "Founders handling enterprise security questionnaires",
        description:
          "You need reliable answers without overpromising controls you do not operate.",
      },
      {
        title: "Engineering teams carrying security debt",
        description:
          "You want prioritized remediation and prevention, not an endless backlog.",
      },
      {
        title: "Startups preparing for SOC2 journey",
        description:
          "You need practical control foundations before formal audit phases.",
      },
      {
        title: "Product teams shipping quickly",
        description:
          "You want secure defaults embedded into delivery flow with minimal friction.",
      },
    ],
    process: [
      {
        dayLabel: "Days 1-2",
        title: "Risk and posture baseline",
        detail:
          "Security gap mapping, threat review, and immediate risk triage against business context.",
      },
      {
        dayLabel: "Days 3-6",
        title: "Control implementation",
        detail:
          "Identity, infrastructure, and code pipeline controls applied to highest-risk surfaces.",
      },
      {
        dayLabel: "Days 7-11",
        title: "Automation and policy",
        detail:
          "CI/CD checks, vulnerability management workflow, and security ownership model defined.",
      },
      {
        dayLabel: "Days 12-14",
        title: "Readiness handoff",
        detail:
          "Documentation pack, due-diligence response support, and team transfer workshop.",
      },
    ],
    price: "Rs 1.5L",
    timeline: "14 days fixed",
    pricingLead:
      "You get practical security outcomes in two weeks: reduced exposure, stronger customer confidence, and delivery-safe controls.",
    pricingIncludes: [
      "Priority vulnerability remediation and prevention setup",
      "Security controls integrated into engineering workflow",
      "Compliance-readiness documentation starter pack",
    ],
    guarantees: [
      "No checkbox theater, only actionable controls",
      "Security integrated with shipping velocity",
      "Fixed scope and transparent delivery plan",
    ],
    objections: [
      {
        title: "Will this slow down engineering?",
        answer:
          "No. We optimize for secure velocity by embedding controls directly into existing workflow rather than adding manual gates.",
      },
      {
        title: "Do we need a full-time security hire first?",
        answer:
          "Not for early-stage teams. This engagement establishes an 80 percent baseline using automation, ownership, and process discipline.",
      },
      {
        title: "Is this a replacement for formal audit?",
        answer:
          "It is preparation and hardening. We make you audit-ready faster by solving practical gaps first.",
      },
    ],
    comparisons: [
      {
        path: "Periodic external audits only",
        tradeoff: "Findings accumulate without integrated remediation in delivery flow.",
        fit: "Useful for checkpoints, insufficient for ongoing startup shipping pace.",
      },
      {
        path: "Hire dedicated security lead immediately",
        tradeoff: "Great long term, but expensive and often premature for seed teams.",
        fit: "Best when security complexity and customer demands already justify full role.",
      },
      {
        path: "Security Without The Theater",
        tradeoff: "Practical control implementation and CI/CD guardrails in 14 days.",
        fit: "Best for teams needing compliance-ready posture without slowing engineering.",
      },
    ],
    faqs: [
      ...baseFaqs,
      {
        question: "How is this different from a traditional security audit?",
        answer:
          "Traditional audits often stop at findings. We implement remediation, automation, and team process so posture improves immediately.",
      },
      {
        question: "Do you support SOC2 and GDPR-related preparation?",
        answer:
          "Yes. We align core controls and evidence habits needed for compliance journeys, then hand over repeatable operations.",
      },
      {
        question: "What happens after day 14?",
        answer:
          "You have documented controls, automated checks, and ownership rhythms. Optional support is available when needed.",
      },
    ],
    testimonial: {
      quote:
        "We stopped treating security like a blocker and started treating it like part of shipping quality.",
      author: "VP Engineering",
      company: "Health SaaS, Seed",
    },
    related: [
      {
        title: "Production Gravity",
        href: "/offerings/production-gravity",
        description: "Strengthen infrastructure fundamentals before scaling security scope.",
      },
      {
        title: "Failure-First Architecture",
        href: "/offerings/failure-first-architecture",
        description: "Pair security controls with resilience patterns and incident readiness.",
      },
    ],
    seoKeywords: [
      "security for early stage startups",
      "startup security audit",
      "devsecops for startups",
      "SOC2 for startups",
    ],
    serviceType: "Security Consulting",
  },
};

const expansionProcess: OfferingStep[] = [
  {
    dayLabel: "Days 1-2",
    title: "Question framing and scope lock",
    detail: "We lock the decision question, data boundaries, and measurable outputs so the sprint stays focused.",
  },
  {
    dayLabel: "Days 3-7",
    title: "Analysis and evidence pass",
    detail: "We run focused spatial and system analysis, rank evidence quality, and document confidence levels.",
  },
  {
    dayLabel: "Days 8-11",
    title: "Synthesis and recommendation",
    detail: "We convert findings into decision-ready outputs with clear tradeoffs and boundary conditions.",
  },
  {
    dayLabel: "Days 12-14",
    title: "Executive handoff",
    detail: "You receive final assets, methods, and a transfer session so your team can execute immediately.",
  },
];

const expansionOfferings: Record<string, OfferingContent> = {
  "platform-extraction": {
    slug: "platform-extraction",
    name: "Platform Extraction",
    shortName: "Make your accidental platform intentional",
    metaTitle: "Platform Extraction for Startups | Tardis",
    metaDescription:
      "Define platform boundaries before they constrain your team. Fixed 10-14 day engagement with clear contracts and ownership.",
    heroBadge: "Platform Offering",
    heroHeading: "Platform Extraction: define boundaries before your platform defines your bottlenecks.",
    heroLead:
      "Your internal tools are already becoming a platform. We help you define the right boundaries, contracts, and blast radius so growth does not slow delivery.",
    problem: [
      "Most internal platforms are accidental and undocumented, so only original authors can safely change them.",
      "Teams ship slower when every dependency change requires cross-org coordination.",
      "Unclear API, auth, and failure boundaries create hidden risk that compounds with headcount.",
    ],
    solutionPreview:
      "We run a focused boundary extraction sprint and deliver a practical platform charter your engineers can execute without external dependence.",
    whatYouGet: [
      {
        title: "Boundary and contract specification",
        description: "Make platform surface area explicit and governable.",
        points: [
          "API surface and dependency contracts",
          "Authentication trust boundaries",
          "Change protocol and ownership model",
        ],
      },
      {
        title: "Failure containment map",
        description: "Understand where incidents start and where they stop.",
        points: [
          "Failure cascade diagrams",
          "Blast radius limits",
          "Critical-path dependency ranking",
        ],
      },
      {
        title: "Actionable platform charter",
        description: "A clear operating document for scale-stage teams.",
        points: ["Architecture boundaries", "Interface governance", "Decision-ready recommendations"],
      },
    ],
    personas: [
      { title: "CTOs scaling platform teams", description: "You need enforceable boundaries before team count doubles." },
      { title: "Founders seeing delivery drag", description: "You want velocity without accidental coupling." },
      { title: "Engineering managers handling shared services", description: "You need predictable contracts between teams." },
      { title: "Product orgs with legacy internal tooling", description: "You need to stabilize what has already emerged." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead:
      "This is a one-time boundary extraction sprint that saves months of platform drift and misaligned implementation.",
    pricingIncludes: [
      "Platform boundary specification document",
      "Auth and API contract matrix",
      "Dependency and failure cascade analysis",
    ],
    guarantees: ["Fixed scope and timeline", "No tooling theater", "No retainer lock-in"],
    objections: [
      {
        title: "Is this platform engineering implementation?",
        answer: "No. We define boundaries and contracts so your team can implement with fewer reversals.",
      },
      {
        title: "Can this work before we have a dedicated platform team?",
        answer: "Yes. This is designed for startups that need clarity before specialized staffing.",
      },
      {
        title: "Will this force a rewrite?",
        answer: "No. We prioritize containment and migration-safe boundaries, not unnecessary rewrites.",
      },
    ],
    comparisons: [
      {
        path: "Keep implicit boundaries",
        tradeoff: "Fast in the short term, high coordination cost and incident risk later.",
        fit: "Only viable while team and product scope remain very small.",
      },
      {
        path: "Hire platform team immediately",
        tradeoff: "Strong long-term move but costly before boundary clarity exists.",
        fit: "Best for larger orgs with sustained platform roadmap and budget.",
      },
      {
        path: "Platform Extraction",
        tradeoff: "Short sprint to define platform intent and execution boundaries.",
        fit: "Best for startups entering scale with growing cross-team dependencies.",
      },
    ],
    faqs: [
      ...baseFaqs,
      {
        question: "What is the primary output?",
        answer: "A platform charter with explicit boundaries, contracts, failure containment, and ownership conventions.",
      },
      {
        question: "Do you select platform tools?",
        answer: "Only when required by boundary decisions. The core output is architectural clarity, not tool shopping.",
      },
      {
        question: "Will this help onboarding new teams?",
        answer: "Yes. Boundary clarity removes tribal knowledge dependencies and reduces change-risk coupling.",
      },
    ],
    testimonial: {
      quote: "This gave us platform clarity we should have defined a year earlier.",
      author: "CTO",
      company: "Developer Platform Startup",
    },
    related: [
      { title: "Scale Without Regret", href: "/offerings/scale-without-regret", description: "Plan growth-stage architecture decisions with fewer reversals." },
      { title: "Data Reality Check", href: "/offerings/data-reality-check", description: "Stabilize your data contracts before analytics debt compounds." },
    ],
    seoKeywords: ["platform extraction", "internal platform strategy", "engineering architecture boundaries", "startup platform design"],
    serviceType: "Platform Architecture Consulting",
  },
  "data-reality-check": {
    slug: "data-reality-check",
    name: "Data Reality Check",
    shortName: "Impose order before data entropy wins",
    metaTitle: "Data Reality Check for Startups | Tardis",
    metaDescription:
      "Map your data flows, retention, and schema realities before analytics debt becomes expensive. Fixed 10-14 day sprint.",
    heroBadge: "Data Offering",
    heroHeading: "Data Reality Check: turn your data swamp into decision-ready structure.",
    heroLead:
      "You are collecting more data every day, but confidence in what it means keeps dropping. We impose practical structure, ownership, and retention clarity.",
    problem: [
      "Schema drift and undocumented fields make analytics less reliable over time.",
      "Retention without policy creates compliance and storage risk.",
      "Teams mistake event volume for data quality, then struggle to answer basic questions.",
    ],
    solutionPreview: "We map data reality end-to-end and hand back a concrete data charter with sequenced decisions.",
    whatYouGet: [
      {
        title: "Data flow and ownership map",
        description: "Clarify how data moves, who owns it, and where entropy starts.",
        points: ["Collection to consumption flow", "Entity ownership", "Critical path bottlenecks"],
      },
      {
        title: "Retention and schema guardrails",
        description: "Keep what matters, document what exists, remove what hurts.",
        points: ["Retention schedule", "Schema documentation", "Deletion policy inputs"],
      },
      {
        title: "Data decision charter",
        description: "A practical sequence for remediation and operating discipline.",
        points: ["Capability gaps", "Debt register", "Prioritized implementation order"],
      },
    ],
    personas: [
      { title: "Founders preparing data-heavy roadmaps", description: "You need clarity before investing in analytics expansion." },
      { title: "Engineering teams with event sprawl", description: "You need to reduce ambiguity and integration waste." },
      { title: "Product leaders facing reporting conflicts", description: "You need one source of meaning, not dashboard debates." },
      { title: "Ops teams managing data costs", description: "You need retention discipline tied to business value." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "A short sprint now is cheaper than quarter-long cleanup programs when data volume multiplies.",
    pricingIncludes: ["Data inventory and flow diagrams", "Retention and schema policy draft", "Data debt and capability report"],
    guarantees: ["Fixed scope", "Actionable outputs", "No ongoing lock-in"],
    objections: [
      { title: "Is this a BI implementation?", answer: "No. This is structural clarity so BI tools do not amplify bad inputs." },
      { title: "Do we need a data team first?", answer: "No. This sprint is designed to help small teams avoid compounding mistakes." },
      { title: "Can we defer this?", answer: "You can, but cleanup cost grows non-linearly with event volume and dependency spread." },
    ],
    comparisons: [
      { path: "Keep collecting and postpone cleanup", tradeoff: "Fast now, expensive uncertainty later.", fit: "Only workable at very low data volume." },
      { path: "Hire large data team immediately", tradeoff: "Strong long-term move but expensive before baseline clarity.", fit: "Best for later-stage orgs with heavy data programs." },
      { path: "Data Reality Check", tradeoff: "Fast clarity sprint with concrete data decisions.", fit: "Best for startups before data debt hardens." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Do you rebuild our pipeline?", answer: "No. We define what must change and in what order so your team can execute cleanly." },
      { question: "Will we get schema docs?", answer: "Yes. Critical entity schema documentation is included in the final package." },
      { question: "Can this support compliance prep?", answer: "Yes. Retention and ownership clarity creates a stronger compliance baseline." },
    ],
    testimonial: {
      quote: "We finally had one agreed model for what our core metrics actually mean.",
      author: "Head of Product",
      company: "B2B SaaS",
    },
    related: [
      { title: "Scale Without Regret", href: "/offerings/scale-without-regret", description: "Align architecture decisions with realistic growth scenarios." },
      { title: "Platform Extraction", href: "/offerings/platform-extraction", description: "Define platform contracts that keep data dependencies healthy." },
    ],
    seoKeywords: ["data architecture for startups", "data schema governance", "data retention strategy", "startup analytics infrastructure"],
    serviceType: "Data Architecture Consulting",
  },
  "scale-without-regret": {
    slug: "scale-without-regret",
    name: "Scale Without Regret",
    shortName: "Architectural decisions for realistic scale",
    metaTitle: "Scale Without Regret | Startup Architecture Review | Tardis",
    metaDescription:
      "Evaluate growth constraints, cost trajectory, and migration windows before scale pain becomes roadmap paralysis.",
    heroBadge: "Architecture Offering",
    heroHeading: "Scale Without Regret: map the architecture you will need before pressure forces bad decisions.",
    heroLead:
      "Early architecture decisions compound. We identify hard limits, migration windows, and cost-risk tradeoffs so you can scale deliberately.",
    problem: [
      "Teams optimize for immediate shipping and defer irreversible architecture decisions.",
      "Infrastructure cost curves are often unknown until growth makes change expensive.",
      "Scale incidents and emergency rewrites consume roadmap bandwidth at the worst time.",
    ],
    solutionPreview: "You get a calibrated scale model, refactor priorities, and a risk-ranked decision framework.",
    whatYouGet: [
      {
        title: "Constraint and failure model",
        description: "Know where your system bends first and where it breaks.",
        points: ["Growth bottlenecks", "Single-point failures", "Org-coupling risk"],
      },
      {
        title: "Cost and migration trajectory",
        description: "See tradeoffs across 10x, 50x, and 100x demand.",
        points: ["Cost path projection", "Migration windows", "Risk-ranked sequences"],
      },
      {
        title: "Decision framework",
        description: "A practical guide to which changes are urgent, optional, or deferrable.",
        points: ["Refactor roadmap", "Capacity forecast", "Board-ready rationale"],
      },
    ],
    personas: [
      { title: "Founders entering growth phase", description: "You need predictable scale choices before demand spikes." },
      { title: "CTOs balancing speed and debt", description: "You need a defensible sequence for architectural changes." },
      { title: "Engineering leaders planning capacity", description: "You need scale forecasts tied to real constraints." },
      { title: "Product orgs facing infra uncertainty", description: "You need confidence on what to build now versus later." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "This sprint prevents expensive emergency rewrites and protects product velocity under scale pressure.",
    pricingIncludes: ["Architecture scale model", "Migration risk matrix", "18-month decision framework"],
    guarantees: ["Fixed scope", "No generic advice", "Decision-focused outputs"],
    objections: [
      { title: "Is this only for very large companies?", answer: "No. It is most valuable before scale pain hardens into expensive constraints." },
      { title: "Do we need full re-architecture?", answer: "Usually no. We prioritize high-leverage changes with the best risk-to-effort ratio." },
      { title: "Can this wait until later?", answer: "The later you wait, the fewer safe migration windows remain." },
    ],
    comparisons: [
      { path: "Reactive scale fixes", tradeoff: "Short-term relief, long-term fragility.", fit: "Only tolerable where downtime impact is low." },
      { path: "Hire infra team and explore for months", tradeoff: "Comprehensive but slower and more expensive early on.", fit: "Best for large organizations with broad scope." },
      { path: "Scale Without Regret", tradeoff: "Focused strategic analysis with clear next actions.", fit: "Best for startups navigating upcoming scale transitions." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Do you provide cost projections?", answer: "Yes. We model realistic cost trajectories tied to growth scenarios and architecture choices." },
      { question: "Will this include migration sequence guidance?", answer: "Yes. You get risk-ranked migration paths and decision windows." },
      { question: "Is this suitable pre-PMF?", answer: "Usually no. This is most useful for teams with repeatable demand signals." },
    ],
    testimonial: {
      quote: "We avoided an expensive rewrite by changing sequence, not ambition.",
      author: "Founder",
      company: "Marketplace Startup",
    },
    related: [
      { title: "Production Gravity", href: "/offerings/production-gravity", description: "Implement reliable production foundations in two weeks." },
      { title: "Platform Extraction", href: "/offerings/platform-extraction", description: "Define boundaries that keep your architecture evolvable." },
    ],
    seoKeywords: ["startup scale architecture", "technical debt strategy", "infrastructure migration planning", "scale readiness assessment"],
    serviceType: "Architecture Strategy",
  },
  "truth-on-the-map": {
    slug: "truth-on-the-map",
    name: "Truth on the Map",
    shortName: "Verify map data against ground reality",
    metaTitle: "Truth on the Map | Spatial Data Verification | Tardis",
    metaDescription:
      "Verify map data accuracy against imagery and reference controls before costly planning, compliance, and asset decisions.",
    heroBadge: "Spatial Verification",
    heroHeading: "Truth on the Map: validate what your maps say before decisions depend on them.",
    heroLead:
      "Maps decay as reality changes. We verify your spatial layers against trusted references and document where error risk is operationally significant.",
    problem: [
      "Spatial layers drift from ground conditions over time.",
      "Critical decisions are often made on outdated or misaligned map data.",
      "Unchecked discrepancy risk turns into legal, regulatory, and execution delays.",
    ],
    solutionPreview: "You get a verified accuracy inventory and a prioritized discrepancy report tied to decision impact.",
    whatYouGet: [
      {
        title: "Accuracy verification package",
        description: "Measure what is right, wrong, and uncertain in your spatial data.",
        points: ["Layer inventory", "Reference comparison", "Feature-level discrepancy logging"],
      },
      {
        title: "Impact-prioritized findings",
        description: "Focus correction effort where risk is highest.",
        points: ["Critical error ranking", "Decision-impact notes", "Correction recommendations"],
      },
      {
        title: "Spatial reference confidence",
        description: "Confirm the integrity of coordinate and boundary assumptions.",
        points: ["Spatial reference checks", "Alignment validation", "Handoff-ready report"],
      },
    ],
    personas: [
      { title: "Asset-heavy operators", description: "You need map confidence before field execution." },
      { title: "Planning teams", description: "You need validated spatial inputs before approving spend." },
      { title: "Compliance stakeholders", description: "You need evidence-backed spatial records for reporting." },
      { title: "Geo-enabled product teams", description: "You need data trust before scaling map-dependent features." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "This engagement gives a practical truth baseline so map errors stop driving expensive downstream mistakes.",
    pricingIncludes: ["Accuracy assessment", "Discrepancy and impact report", "Correction recommendation set"],
    guarantees: ["Single focused scope", "Evidence-backed outputs", "No software lock-in"],
    objections: [
      { title: "Do you fix all map data?", answer: "No. We identify and prioritize what should be corrected first." },
      { title: "Is this a legal boundary opinion?", answer: "No. It is a spatial evidence assessment for operational decision support." },
      { title: "Can this run on existing datasets?", answer: "Yes. We work with your current layers and reference sources." },
    ],
    comparisons: [
      { path: "Assume existing map data is accurate", tradeoff: "Fast but high hidden risk.", fit: "Only acceptable for low-impact use cases." },
      { path: "Full resurvey program", tradeoff: "Most comprehensive but costly and slower.", fit: "Best for legal-grade ground surveys across large portfolios." },
      { path: "Truth on the Map", tradeoff: "Targeted verification and prioritized action plan.", fit: "Best for teams needing confidence quickly." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Will we get confidence levels?", answer: "Yes. Findings include confidence notes and evidence ranking for each major discrepancy." },
      { question: "Do you need fresh field surveys?", answer: "Usually no. We use existing references and remote validation methods first." },
      { question: "Can this support investor or board decisions?", answer: "Yes. The final report is structured for decision clarity, not just technical detail." },
    ],
    testimonial: {
      quote: "We stopped debating map truth and started making decisions from verified evidence.",
      author: "COO",
      company: "Infrastructure Operator",
    },
    related: [
      { title: "Spatial Feasibility Test", href: "/offerings/spatial-feasibility-test", description: "Use verified map reality to evaluate site viability." },
      { title: "Boundaries, Truth & Disputes", href: "/offerings/boundaries-truth-disputes", description: "Investigate boundary conflicts with evidence chains." },
    ],
    seoKeywords: ["spatial data verification", "map accuracy assessment", "gis discrepancy analysis", "ground truth validation"],
    serviceType: "Spatial Data Assurance",
  },
  "maps-that-executives-understand": {
    slug: "maps-that-executives-understand",
    name: "Maps That Executives Understand",
    shortName: "Executive-ready spatial communication assets",
    metaTitle: "Maps That Executives Understand | Tardis",
    metaDescription:
      "Convert technical geospatial outputs into executive decision maps with clear narrative, hierarchy, and action relevance.",
    heroBadge: "Executive Communication",
    heroHeading: "Maps That Executives Understand: make spatial insight decision-ready.",
    heroLead:
      "Leadership decisions need clarity, not layer overload. We convert technical map outputs into executive communication assets that drive action.",
    problem: [
      "Technical maps are often too dense for executive interpretation.",
      "Weak visual hierarchy hides decision-critical signals.",
      "Board and investment discussions lose momentum when map narratives are unclear.",
    ],
    solutionPreview:
      "We produce static executive map packs and supporting one-pagers designed for boardrooms, strategy reviews, and investment committees.",
    whatYouGet: [
      {
        title: "Executive map narrative",
        description: "Turn data-heavy layers into decision-focused visual stories.",
        points: ["Insight framing", "Narrative ordering", "Decision-callout annotations"],
      },
      {
        title: "Visual hierarchy redesign",
        description: "Make the important signal obvious at first glance.",
        points: ["Legend simplification", "Annotation clarity", "Presentation-ready composition"],
      },
      {
        title: "Collateral package",
        description: "Static assets for presentation, briefing, and reports.",
        points: ["Slide format", "One-pager format", "Report insertion format"],
      },
    ],
    personas: [
      { title: "Strategy and investment leaders", description: "You need map outputs that support fast, accurate decisions." },
      { title: "GIS teams briefing executives", description: "You need communication artifacts beyond technical cartography." },
      { title: "Operations leadership", description: "You need location intelligence that clearly maps to business action." },
      { title: "Public-sector program teams", description: "You need board and committee-ready spatial communication." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "This sprint converts spatial complexity into executive clarity that accelerates alignment and decision speed.",
    pricingIncludes: ["Executive insight workshop", "Map communication redesign", "Multi-format collateral package"],
    guarantees: ["Fixed scope", "Decision-first design", "No platform build detour"],
    objections: [
      { title: "Is this dashboard development?", answer: "No. This is static executive communication, not software implementation." },
      { title: "Do we need new data collection?", answer: "Usually no. We work with your existing datasets and findings." },
      { title: "Will technical rigor be lost?", answer: "No. We preserve evidence integrity while improving communication clarity." },
    ],
    comparisons: [
      { path: "Present technical maps directly", tradeoff: "High detail, low executive comprehension.", fit: "Only works with deeply technical audiences." },
      { path: "Build custom dashboard first", tradeoff: "Useful long term, slower to executive-ready output.", fit: "Best when continuous self-serve exploration is required." },
      { path: "Maps That Executives Understand", tradeoff: "Fast conversion to decision-grade communication assets.", fit: "Best for high-stakes leadership reviews." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "What formats are delivered?", answer: "Presentation slides, one-page briefs, and report-ready static exports." },
      { question: "Can this be used for board decks?", answer: "Yes. The outputs are designed for executive and board communication contexts." },
      { question: "Do you provide narrative guidance?", answer: "Yes. We define the message hierarchy and key decision callouts." },
    ],
    testimonial: {
      quote: "For the first time, leadership understood the map story in one pass.",
      author: "Head of Strategy",
      company: "Urban Analytics Team",
    },
    related: [
      { title: "Spatial Risk & Exposure Map", href: "/offerings/spatial-risk-exposure", description: "Map specific asset risks and severity by location." },
      { title: "Truth on the Map", href: "/offerings/truth-on-the-map", description: "Verify the data quality behind executive visuals." },
    ],
    seoKeywords: ["executive map design", "geospatial storytelling", "board-ready maps", "spatial decision communication"],
    serviceType: "Executive GIS Communication",
  },
  "boundaries-truth-disputes": {
    slug: "boundaries-truth-disputes",
    name: "Boundaries, Truth & Disputes",
    shortName: "Boundary evidence analysis for dispute clarity",
    metaTitle: "Boundaries, Truth & Disputes | Tardis",
    metaDescription:
      "Investigate boundary conflicts with record maps, survey references, and imagery-backed evidence chains.",
    heroBadge: "Boundary Evidence",
    heroHeading: "Boundaries, Truth & Disputes: replace boundary confusion with evidence.",
    heroLead:
      "Most boundary conflicts begin as information conflicts. We build evidence chains that show where records align, where they conflict, and where confidence is strongest.",
    problem: [
      "Boundary records often conflict across maps, surveys, and local references.",
      "Transactions and projects stall when evidence quality is unclear.",
      "Dispute costs escalate when teams argue from assumptions instead of ranked evidence.",
    ],
    solutionPreview:
      "We perform remote boundary evidence analysis and deliver a documented recommendation with confidence markers.",
    whatYouGet: [
      {
        title: "Evidence chain compilation",
        description: "Cross-reference records, surveys, and imagery to establish traceable facts.",
        points: ["Record map analysis", "Survey cross-checking", "Imagery and control point comparison"],
      },
      {
        title: "Conflict and confidence mapping",
        description: "See where boundaries agree, diverge, and remain uncertain.",
        points: ["Conflict identification", "Evidence ranking", "Confidence-level annotation"],
      },
      {
        title: "Decision support report",
        description: "A practical boundary recommendation for negotiation and planning.",
        points: ["Boundary recommendation", "Reference appendix", "Dispute-readiness summary"],
      },
    ],
    personas: [
      { title: "Asset acquisition teams", description: "You need boundary clarity before committing capital." },
      { title: "Infrastructure developers", description: "You need evidence before mobilization and approvals." },
      { title: "Land program managers", description: "You need objective analysis before escalation." },
      { title: "Legal-adjacent operations teams", description: "You need technical evidence to support counsel strategy." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "This engagement clarifies boundary facts quickly so disputes are handled from evidence instead of assumption.",
    pricingIncludes: ["Boundary evidence report", "Conflict map and confidence ranking", "Recommendation package"],
    guarantees: ["Fixed scope", "Evidence-first method", "No legal lock-in"],
    objections: [
      { title: "Is this legal representation?", answer: "No. We provide technical spatial evidence, not legal services." },
      { title: "Do you perform field marking?", answer: "No. This is remote analysis using available records and imagery." },
      { title: "Can this help settlement discussions?", answer: "Yes. It provides a shared evidence baseline for negotiation context." },
    ],
    comparisons: [
      { path: "Proceed without boundary evidence", tradeoff: "Fast but high legal and execution risk.", fit: "Only acceptable for low-stakes contexts." },
      { path: "Immediate full legal escalation", tradeoff: "Thorough but often slower and costlier before technical clarity.", fit: "Best when dispute is already in active litigation." },
      { path: "Boundaries, Truth & Disputes", tradeoff: "Rapid technical evidence synthesis to de-risk next steps.", fit: "Best before legal and capital commitments escalate." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Do you provide court testimony?", answer: "No. This offering is analysis only and does not include expert testimony." },
      { question: "Can this be used alongside legal counsel?", answer: "Yes. Many teams use this report as technical input for legal strategy." },
      { question: "What data do you need to begin?", answer: "Any available record maps, survey docs, and known boundary references." },
    ],
    testimonial: {
      quote: "We moved from argument to evidence in less than two weeks.",
      author: "Land Program Lead",
      company: "Energy Infrastructure",
    },
    related: [
      { title: "Truth on the Map", href: "/offerings/truth-on-the-map", description: "Validate broader layer accuracy before boundary decisions." },
      { title: "Spatial Feasibility Test", href: "/offerings/spatial-feasibility-test", description: "Evaluate site viability once boundary confidence is established." },
    ],
    seoKeywords: ["boundary dispute analysis", "land boundary evidence", "survey map conflict", "gis boundary verification"],
    serviceType: "Boundary Evidence Analysis",
  },
  "spatial-risk-exposure": {
    slug: "spatial-risk-exposure",
    name: "Spatial Risk & Exposure Map",
    shortName: "Map asset risk and severity by location",
    metaTitle: "Spatial Risk & Exposure Map | Tardis",
    metaDescription: "Map hazard exposure across your asset footprint and prioritize interventions by risk severity.",
    heroBadge: "Risk Mapping",
    heroHeading: "Spatial Risk & Exposure Map: know where your risks are before they become losses.",
    heroLead:
      "Risk is location-dependent. We map your assets against hazard domains and deliver a prioritized exposure view you can act on.",
    problem: [
      "Risk is often tracked abstractly instead of location by location.",
      "Generic risk maps are too coarse for portfolio-level decisions.",
      "Without severity ranking, mitigation budgets are hard to prioritize.",
    ],
    solutionPreview: "We deliver a targeted spatial risk register with asset-level exposure and executive recommendations.",
    whatYouGet: [
      {
        title: "Asset and hazard integration",
        description: "Map your footprint against relevant hazard layers.",
        points: ["Asset classification", "Hazard overlays", "Exposure quantification"],
      },
      {
        title: "Risk prioritization",
        description: "Rank what matters most first.",
        points: ["Severity scoring", "Location ranking", "Intervention priority matrix"],
      },
      {
        title: "Executive map outputs",
        description: "Communicate risk clearly to operations and leadership.",
        points: ["Annotated risk maps", "Executive summary", "Action recommendations"],
      },
    ],
    personas: [
      { title: "Asset portfolio managers", description: "You need location-specific risk visibility." },
      { title: "Insurance and resilience teams", description: "You need better hazard context for mitigation planning." },
      { title: "Operations leadership", description: "You need to prioritize interventions by exposure severity." },
      { title: "Infrastructure investors", description: "You need clearer spatial risk signals before allocation." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "Get a portfolio-wide exposure view and a risk-priority map that informs immediate mitigation decisions.",
    pricingIncludes: ["Asset-hazard overlay analysis", "Risk priority matrix", "Executive risk map package"],
    guarantees: ["Fixed scope", "Portfolio-focused output", "No platform lock-in"],
    objections: [
      { title: "Is this real-time risk monitoring?", answer: "No. It is a high-quality point-in-time exposure assessment." },
      { title: "Do you provide insurance pricing?", answer: "No. We inform risk discussions, we do not underwrite." },
      { title: "Can this include climate and seismic hazards?", answer: "Yes. We include hazard domains relevant to your assets and objectives." },
    ],
    comparisons: [
      { path: "Generic regional hazard maps", tradeoff: "Broad context, low asset-level relevance.", fit: "Useful for high-level orientation only." },
      { path: "Build full risk platform", tradeoff: "Powerful but slower and higher upfront investment.", fit: "Best for teams needing continuous monitoring infrastructure." },
      { path: "Spatial Risk & Exposure Map", tradeoff: "Fast asset-level exposure analysis and prioritization.", fit: "Best for immediate portfolio decisions." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Do you need a complete asset inventory?", answer: "Yes. Asset location quality directly improves assessment confidence." },
      { question: "Can this guide capex prioritization?", answer: "Yes. The severity ranking is designed to support funding and intervention sequencing." },
      { question: "Will this include mitigation actions?", answer: "Yes, at recommendation level, not full implementation." },
    ],
    testimonial: {
      quote: "We finally had one risk map that operations and leadership both trusted.",
      author: "Risk Director",
      company: "Logistics Network",
    },
    related: [
      { title: "Maps That Executives Understand", href: "/offerings/maps-that-executives-understand", description: "Translate risk outputs into leadership-ready communication." },
      { title: "Satellite Signal Extraction", href: "/offerings/satellite-signal-extraction", description: "Add remote-sensing evidence to emerging risk signals." },
    ],
    seoKeywords: ["spatial risk mapping", "asset exposure analysis", "hazard overlay mapping", "climate risk geospatial"],
    serviceType: "Spatial Risk Analytics",
  },
  "satellite-signal-extraction": {
    slug: "satellite-signal-extraction",
    name: "Satellite Signal Extraction",
    shortName: "Turn satellite pixels into decisions",
    metaTitle: "Satellite Signal Extraction | Tardis",
    metaDescription:
      "Extract actionable insights from satellite imagery with change detection, land cover classification, and targeted analysis.",
    heroBadge: "Remote Sensing",
    heroHeading: "Satellite Signal Extraction: find signal in the pixels your team already pays for.",
    heroLead:
      "Imagery is abundant, insight is not. We convert raw satellite data into interpreted findings tied to your decision question.",
    problem: [
      "Teams buy satellite data but struggle to translate pixels into actionable intelligence.",
      "Analysts spend weeks on work that can be structured and accelerated.",
      "Data delivery without interpretation creates low-confidence decisions.",
    ],
    solutionPreview: "We produce a focused analysis report with annotated evidence, quantified change, and method transparency.",
    whatYouGet: [
      {
        title: "Targeted remote-sensing analysis",
        description: "Answer a specific spatial question with the right imagery stack.",
        points: ["Change detection", "Land-cover classification", "Activity pattern analysis"],
      },
      {
        title: "Quantified findings",
        description: "Measure extent, trend, and magnitude with practical confidence.",
        points: ["Area and rate metrics", "Date-window comparisons", "Evidence overlays"],
      },
      {
        title: "Decision-ready report",
        description: "Interpretation first, data dump never.",
        points: ["Annotated imagery", "Method notes", "Recommendation summary"],
      },
    ],
    personas: [
      { title: "Environmental and infrastructure teams", description: "You need rapid visibility into what changed and where." },
      { title: "Land and operations managers", description: "You need reliable remote evidence before field mobilization." },
      { title: "Risk and compliance teams", description: "You need interpreted imagery for reporting and triage." },
      { title: "Strategy teams using EO datasets", description: "You need faster extraction from existing satellite subscriptions." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "A focused extraction sprint that turns imagery spend into direct operational insight.",
    pricingIncludes: ["Imagery analysis", "Quantified change outputs", "Annotated and interpreted report"],
    guarantees: ["Single focused scope", "Actionable outputs", "No subscription lock-in"],
    objections: [
      { title: "Do you provide continuous monitoring?", answer: "No. This is a one-time extraction engagement." },
      { title: "Will we get raw data files?", answer: "Primary output is interpreted findings; supporting references can be included where needed." },
      { title: "Can this support multiple AOIs?", answer: "Yes, within fixed scope and agreed priority ordering." },
    ],
    comparisons: [
      { path: "Raw imagery review in-house", tradeoff: "Flexible but slow and expertise-heavy.", fit: "Works when internal remote-sensing capacity is strong." },
      { path: "Long-term monitoring platform", tradeoff: "Powerful for continuous ops but larger upfront commitment.", fit: "Best for ongoing surveillance use cases." },
      { path: "Satellite Signal Extraction", tradeoff: "Fast, high-confidence one-time insight extraction.", fit: "Best for decision-critical analysis windows." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Which imagery providers do you use?", answer: "We use the sources best aligned to your use case, including commercial and public datasets." },
      { question: "Can this include methodology notes for validation?", answer: "Yes. Method transparency is included in the final report." },
      { question: "Do we need a clear question first?", answer: "Yes. A precise question improves extraction quality and delivery speed." },
    ],
    testimonial: {
      quote: "What took us weeks of manual review became a clear answer in days.",
      author: "Program Manager",
      company: "Environmental Intelligence Team",
    },
    related: [
      { title: "Spatial Risk & Exposure Map", href: "/offerings/spatial-risk-exposure", description: "Convert extracted signals into asset-level risk priorities." },
      { title: "Spatial Feasibility Test", href: "/offerings/spatial-feasibility-test", description: "Apply imagery-derived evidence to site viability decisions." },
    ],
    seoKeywords: ["satellite imagery analysis", "change detection services", "remote sensing consulting", "land cover classification"],
    serviceType: "Remote Sensing Analysis",
  },
  "spatial-feasibility-test": {
    slug: "spatial-feasibility-test",
    name: "Spatial Feasibility Test",
    shortName: "Go/no-go analysis for specific sites",
    metaTitle: "Spatial Feasibility Test | Site Viability Analysis | Tardis",
    metaDescription:
      "Run a decision-grade go/no-go spatial feasibility assessment before site acquisition, development, or allocation.",
    heroBadge: "Site Viability",
    heroHeading: "Spatial Feasibility Test: determine if a site is viable before commitment.",
    heroLead:
      "Every site looks workable at first glance. We test physical constraints, overlays, and adjacency conflicts before you lock capital and timeline.",
    problem: [
      "Map-level optimism often hides topographic, access, and overlay constraints.",
      "Post-acquisition surprises create expensive remediation and delay.",
      "Teams need a binary go/no-go answer, not another vague report.",
    ],
    solutionPreview: "We deliver a constraint-ranked feasibility score and recommendation for one specific site per engagement.",
    whatYouGet: [
      {
        title: "Constraint discovery",
        description: "Surface hidden blockers early.",
        points: ["Topography analysis", "Access and utility proximity", "Regulatory overlays"],
      },
      {
        title: "Conflict and impact review",
        description: "Identify where intended use and site reality diverge.",
        points: ["Adjacent use conflicts", "Environmental constraints", "Impact severity notes"],
      },
      {
        title: "Go/no-go recommendation",
        description: "Decision-grade output with confidence context.",
        points: ["Feasibility score", "Constraint register", "Action recommendation"],
      },
    ],
    personas: [
      { title: "Developers evaluating candidate sites", description: "You need feasibility confidence before transaction steps." },
      { title: "Investment teams", description: "You need risk-aware site signals before allocation." },
      { title: "Operations planners", description: "You need physical viability clarity before rollout." },
      { title: "Infrastructure programs", description: "You need to avoid late-stage location reversals." },
    ],
    process: expansionProcess,
    price: "Rs 1.5L",
    timeline: "10-14 days fixed",
    pricingLead: "This sprint saves downstream cost by resolving site viability questions before irreversible commitments.",
    pricingIncludes: ["Constraint analysis", "Overlay and conflict review", "Go/no-go feasibility report"],
    guarantees: ["Fixed scope", "Site-specific output", "Decision-ready recommendation"],
    objections: [
      { title: "Is this an EIA?", answer: "No. We identify constraints; formal environmental impact studies are separate." },
      { title: "Can this include multiple sites?", answer: "Primary scope is one site. Multiple sites can be phased." },
      { title: "Do you handle legal title checks?", answer: "No. This is spatial feasibility, not legal ownership verification." },
    ],
    comparisons: [
      { path: "Proceed with light desktop screening", tradeoff: "Faster upfront, higher surprise risk later.", fit: "Only suitable for low-stakes exploratory decisions." },
      { path: "Run full multi-month due diligence first", tradeoff: "Comprehensive but slower and expensive before viability signal.", fit: "Best after go/no-go confidence is already strong." },
      { path: "Spatial Feasibility Test", tradeoff: "Focused early viability decision with ranked constraints.", fit: "Best before acquisition or deployment commitment." },
    ],
    faqs: [
      ...baseFaqs,
      { question: "Do you assess market demand?", answer: "No. This offering is physical and spatial feasibility only." },
      { question: "Can this be used before board approval?", answer: "Yes. It is designed to support early high-stakes decision gates." },
      { question: "What if the site is not viable?", answer: "You receive documented reasons and practical alternatives for next evaluation steps." },
    ],
    testimonial: {
      quote: "It saved us from a site that would have delayed delivery by months.",
      author: "Project Director",
      company: "Industrial Development Group",
    },
    related: [
      { title: "Truth on the Map", href: "/offerings/truth-on-the-map", description: "Validate layer reliability before feasibility analysis." },
      { title: "Satellite Signal Extraction", href: "/offerings/satellite-signal-extraction", description: "Add targeted remote-sensing evidence to site assessment." },
    ],
    seoKeywords: ["site feasibility analysis", "spatial site selection", "location viability assessment", "geospatial due diligence"],
    serviceType: "Spatial Feasibility Consulting",
  },
};

Object.assign(offerings, expansionOfferings);

export const offeringList = Object.values(offerings);
