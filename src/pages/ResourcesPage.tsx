import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ecosystemLinks = [
  { name: "pronit.in", url: "https://pronit.in", description: "Founder profile and long-form technical writing." },
  { name: "work.pronit.in", url: "https://work.pronit.in", description: "Public work archive and project snapshots." },
  { name: "leads.pronit.in", url: "https://leads.pronit.in", description: "Lead qualification workspace and templates." },
  { name: "dreams.pronit.in", url: "https://dreams.pronit.in", description: "Research and concept explorations." },
  { name: "mirror.pronit.in", url: "https://mirror.pronit.in", description: "Mirrored resources and references." },
];

export default function ResourcesPage() {
  useEffect(() => {
    document.title = "Resources | TARDIS Solutions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Resources</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">Reference hubs, tools, and ecosystem properties.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            This page consolidates product docs, open-source assets, and external properties that support implementation, research,
            and high-intent decision workflows across GIS, AI, and adaptive learning programs.
          </p>
        </div>
      </section>

      <section className="py-16 border-b">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-6">
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle>Paid Campaign Intelligence</CardTitle>
              <CardDescription>How we translate paid keyword signals into organic content priorities.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                We monitor competitor ad themes for terms such as <strong>GIS system pricing</strong>, <strong>AI tool demo</strong>,
                and <strong>learning platform cost</strong> to identify proven commercial-intent demand.
              </p>
              <p>
                Those high-conversion terms get reflected in our pricing, comparison, and offering pages so search traffic maps to
                clear buyer actions instead of generic informational copy.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle>Authoritative Content Roadmap</CardTitle>
              <CardDescription>Publishing themes that build trust with technical and business decision-makers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                We prioritize case studies and practical guides around <strong>AI in learning</strong>, geospatial analytics,
                and privacy-first AI deployment to reinforce reliability and long-term support positioning.
              </p>
              <p>
                Each content cluster links back to solution pages with transparent commercial language so prospects can evaluate fit quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Featured Products and Repositories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Scribe</CardTitle>
                <CardDescription>Open tooling for writing, transformation, and document pipelines.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Scribe is an actively evolving project for high-throughput content workflows, deterministic formatting, and pipeline automation.
                  It is designed to integrate with structured content systems and technical publishing flows.
                </p>
                <a href="https://github.com/tardis-pro/scribe" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Open scribe repository</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>TARDIS Music</CardTitle>
                <CardDescription>Media and audio property in the wider TARDIS ecosystem.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  music.tardis.digital hosts experiments, releases, and sonic assets tied to TARDIS initiatives. It extends our
                  ecosystem footprint across media while maintaining the same engineering-first publishing discipline.
                </p>
                <a href="https://music.tardis.digital" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Visit music.tardis.digital</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Backlink Network</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ecosystemLinks.map((item) => (
              <Card key={item.url} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                    {item.url}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
