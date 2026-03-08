import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
          <h1 className="text-5xl font-bold mb-6 text-gradient">Case studies for teams that need proof before they buy.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Review how we approach rollout pressure, performance bottlenecks, AI cost control, and platform reliability when the work has to hold up in production.
          </p>
        </div>
      </section>

      <section className="py-16 border-b">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="card-hover">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">How to read these</Badge>
              <CardTitle>What these case studies are meant to answer</CardTitle>
              <CardDescription>
                Can this team solve hard technical problems, reduce risk, and hand over systems that keep working after launch?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                Each example pairs a concrete engineering challenge with the operational outcome it unlocked, so you can judge fit without decoding generic agency language.
              </p>
              <p>
                The emphasis is on systems that survive real usage: better reliability, lower waste, stronger rollout confidence, and clearer ownership after handoff.
              </p>
            </CardContent>
          </Card>
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
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Outcome</p>
                <p className="mt-2 text-sm text-muted-foreground">{study.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 border-t text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Want to pressure-test your own delivery plan?</h2>
          <p className="text-muted-foreground mb-6">
            If these examples look close to your situation, compare options next or send us the system you need to stabilize, launch, or scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/pricing">
              <Button className="btn-gradient">See Pricing and Scope Options</Button>
            </a>
            <a href="/compare">
              <Button variant="outline">Compare Options</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
