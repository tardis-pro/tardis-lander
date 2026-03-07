import { useEffect } from "react";

const glossary = [
  {
    question: "What is search-first mapping?",
    answer:
      "Search-first mapping is a geospatial approach where users query spatial data with natural language instead of manually panning across layers. The system treats geospatial datasets as a ranked search index, returning spatially relevant results quickly across vector, raster, and satellite sources.",
  },
  {
    question: "What is failure-first architecture?",
    answer:
      "Failure-first architecture is a design method that builds detection, isolation, and recovery paths before adding product features. Teams define safe degradation behavior first, which lowers launch risk and ensures systems recover gracefully under load, dependency failures, and partial outages.",
  },
  {
    question: "What does production-ready mean for startups?",
    answer:
      "Production-ready means a system can run reliably with observability, alerting, deployment controls, rollback plans, and incident runbooks. For startup teams, production readiness also includes cost guardrails, operational documentation, and ownership transfer so features can ship without repeated infrastructure emergencies.",
  },
  {
    question: "What is multi-agent AI orchestration?",
    answer:
      "Multi-agent AI orchestration coordinates specialized agents that each handle a narrow task, then routes outputs through a shared workflow. This approach improves quality and cost control because simple tasks can use smaller models while complex reasoning is escalated to stronger models.",
  },
  {
    question: "What is an adaptive learning platform?",
    answer:
      "An adaptive learning platform adjusts recommendations, pacing, and support based on each learner's progress. Instead of a fixed syllabus sequence, the system uses semantic context and performance signals to surface the next most useful content and feedback loops for retention.",
  },
  {
    question: "What is the difference between GIS and mapping?",
    answer:
      "Mapping focuses on visualizing location data, while GIS includes analysis workflows for modeling, querying, and decision support. A map is an output interface. GIS is the broader system that manages geospatial data pipelines, transformations, and spatial intelligence operations.",
  },
  {
    question: "Can GIS systems work offline?",
    answer:
      "Yes. GIS systems can run offline when they include local data stores, tile caches, and sync mechanisms for delayed connectivity. Field teams often use offline-ready geospatial applications with periodic synchronization to central infrastructure once network access returns.",
  },
  {
    question: "What is a production infrastructure sprint?",
    answer:
      "A production infrastructure sprint is a fixed-time engagement focused on deploying essential platform controls, such as IaC, CI/CD, monitoring, backup checks, and security baselines. The objective is operational readiness within a short timeline rather than open-ended consulting.",
  },
];

export default function GlossaryPage() {
  useEffect(() => {
    document.title = "Glossary | GIS, AI, and Platform Definitions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Glossary and Definitions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Definitions for core terms in geospatial systems, AI orchestration, and startup platform engineering.
            This page is designed for direct-answer readability and citation by search and AI engines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          {glossary.map((item) => (
            <article key={item.question} className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-bold mb-3">{item.question}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
