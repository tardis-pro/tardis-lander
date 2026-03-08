import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    title: "TARDIS Maps vs Mapbox",
    href: "/compare/tardis-maps-vs-mapbox",
    description: "Search-first geospatial workflows versus tile-first SDK approach.",
    intent: "Platform choice",
  },
  {
    title: "Navratna vs CrewAI vs LangGraph",
    href: "/compare/navratna-vs-crewai-vs-langgraph",
    description: "Managed orchestration and delivery versus raw framework ownership.",
    intent: "Build vs. support",
  },
  {
    title: "Best GIS Development Companies",
    href: "/compare/best-gis-development-companies",
    description: "Shortlist and ranking criteria for teams choosing geospatial partners.",
    intent: "Partner selection",
  },
];

export default function CompareIndexPage() {
  useEffect(() => {
    document.title = "Compare | TARDIS Solutions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Compare</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">Compare your options before you commit engineering time.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Use these guides to compare platforms, frameworks, and engineering partners on rollout speed, ownership, delivery risk, and production fit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <Card key={item.href} className="card-hover h-full">
              <CardHeader>
                <Badge variant="outline" className="w-fit">{item.intent}</Badge>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={item.href}>
                  <Button variant="outline">Read the Comparison</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 border-t text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Need a recommendation based on your stack and timeline?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If the tradeoffs are still unclear, start with pricing or bring us your current architecture and deadline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/pricing">
              <Button className="btn-gradient">See Pricing</Button>
            </a>
            <a href="/case-studies">
              <Button variant="outline">Review Case Studies</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
