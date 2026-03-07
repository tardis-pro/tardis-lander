import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const studies = [
  {
    title: "National Field Mapping Rollout",
    sector: "Geospatial Operations",
    challenge: "A distributed field team needed reliable offline geospatial workflows across low-connectivity regions.",
    outcome: "Delivered indexed local caches and sync pipelines that cut map query latency and reduced field sync failures.",
  },
  {
    title: "AI Workflow Cost Stabilization",
    sector: "AI Infrastructure",
    challenge: "A startup's single-model pipeline was expensive and unstable during usage spikes.",
    outcome: "Introduced multi-agent routing and memory boundaries, reducing wasteful high-cost model calls while improving reliability.",
  },
  {
    title: "Adaptive Learning Platform Hardening",
    sector: "EdTech",
    challenge: "A learning platform needed robust recommendation quality and better release confidence.",
    outcome: "Implemented semantic retrieval tuning, production monitoring, and staged releases for safer iteration.",
  },
];

export default function CaseStudiesPage() {
  useEffect(() => {
    document.title = "Case Studies | TARDIS Solutions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Case Studies</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">Delivery stories from real engineering constraints.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Representative examples of how TARDIS Solutions approaches GIS performance, AI orchestration, and platform reliability.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {studies.map((study) => (
            <Card key={study.title} className="card-hover h-full">
              <CardHeader>
                <Badge variant="outline" className="w-fit">{study.sector}</Badge>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.challenge}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{study.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
