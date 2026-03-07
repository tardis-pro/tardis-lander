import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    title: "TARDIS Maps vs Mapbox",
    href: "/compare/tardis-maps-vs-mapbox",
    description: "Search-first geospatial workflows versus tile-first SDK approach.",
    intent: "mapbox alternative",
  },
  {
    title: "Navratna vs CrewAI vs LangGraph",
    href: "/compare/navratna-vs-crewai-vs-langgraph",
    description: "Managed orchestration and delivery versus raw framework ownership.",
    intent: "multi-agent framework comparison",
  },
  {
    title: "Best GIS Development Companies",
    href: "/compare/best-gis-development-companies",
    description: "Shortlist and ranking criteria for teams choosing geospatial partners.",
    intent: "custom gis development company",
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
          <h1 className="text-5xl font-bold mb-6 text-gradient">Comparison guides for high-intent decisions.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Independent comparison pages for teams evaluating geospatial platforms, AI orchestration stacks,
            delivery partners, and pricing-fit options in India and global markets.
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
                  <Button variant="outline">Open comparison</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
