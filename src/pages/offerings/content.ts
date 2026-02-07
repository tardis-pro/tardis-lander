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

export const offeringList = Object.values(offerings);
