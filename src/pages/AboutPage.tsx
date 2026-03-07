import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About TARDIS Solutions | GIS, AI, and Engineering Team";
  }, []);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TARDIS Solutions",
    url: "https://tardis.digital/",
    logo: "https://tardis.digital/favicon.ico",
    foundingDate: "2023",
    sameAs: [
      "https://github.com/tardis-pro",
      "https://in.linkedin.com/company/tardis-digital",
      "https://twitter.com/tardisdev",
    ],
  };

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">About</Badge>
          <h1 className="text-5xl font-bold text-gradient mb-6">We build production systems for teams solving hard problems.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            TARDIS Solutions is a focused engineering studio for geospatial intelligence, AI orchestration, and adaptive learning platforms.
            Our team works with founders and technical leads that need reliable software in tight timelines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Operational Clarity</CardTitle>
                <CardDescription>Architectures that teams can run without hidden tribal knowledge.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Privacy-First Delivery</CardTitle>
                <CardDescription>On-prem and controlled deployments for sensitive data workloads.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Measurable Outcomes</CardTitle>
                <CardDescription>Every sprint ties engineering work to shipping and reliability metrics.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Team and Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Geospatial Engineering</CardTitle>
                <CardDescription>PostGIS, MapLibre, Deck.gl, TiTiler, PMTiles, and remote sensing workflows.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">From data ingestion to map APIs, we optimize for low latency and decision-grade outputs.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Infrastructure</CardTitle>
                <CardDescription>Multi-agent graphs, memory systems, model routing, and local inference with Ollama.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">We help teams ship AI systems with predictable costs and safer operational boundaries.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 border-t" id="contact">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Talk to the team</h2>
          <p className="text-muted-foreground mb-6">If you are planning a GIS, AI, or platform reliability initiative, we can scope it quickly.</p>
          <a href="mailto:hello@tardis.digital">
            <Button className="btn-gradient">hello@tardis.digital</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
