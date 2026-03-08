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
          <h1 className="text-5xl font-bold mb-6 text-gradient">Resources for buyers doing technical diligence.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Use this page to inspect the repos, references, and decision-support material behind our recommendations before you scope a project with us.
          </p>
        </div>
      </section>

      <section className="py-16 border-b">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-6">
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle>Start with the decision you need to make</CardTitle>
              <CardDescription>Use the right page for pricing clarity, vendor comparison, or delivery proof.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                If you are still comparing options, go to <strong>Compare</strong>. If you need budget context, go to <strong>Pricing</strong>. If you want to see how we work under real engineering pressure, start with <strong>Case Studies</strong>.
              </p>
              <p>
                This resource page exists to reduce guesswork before a discovery call. You should leave with a clearer view of fit, implementation risk, and next steps.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle>Inspect how we think, not just what we promise</CardTitle>
              <CardDescription>Browse working repos and ecosystem properties that show our technical depth in public.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Technical buyers usually want more than polished claims. They want proof that a team publishes, builds, and maintains real systems.
              </p>
              <p>
                The links below give you a practical way to inspect open tooling, founder writing, and supporting properties before you decide whether to talk to us.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Products, repositories, and working references</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Scribe</CardTitle>
                <CardDescription>Open tooling for structured writing, transformation, and document workflows.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Scribe is a good example of how we turn repeatable workflow pain into maintainable tooling. It shows the kind of systems thinking we bring to internal platforms and publishing automation.
                </p>
                <a href="https://github.com/tardis-pro/scribe" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Review the Repository</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Work Archive</CardTitle>
                <CardDescription>A public archive of projects, build notes, and implementation snapshots across the TARDIS ecosystem.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  work.pronit.in is a better diligence surface for technical buyers because it shows how ideas turn into shipped artifacts, documented experiments, and public implementation trails.
                </p>
                <a href="https://work.pronit.in" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Browse the Work Archive</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Founder and ecosystem references</h2>
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

      <section className="py-16 border-t text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Need help turning research into a scoped next step?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have reviewed the materials and want a practical recommendation, start with pricing, compare your options, or send us your current constraints.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/pricing">
              <Button className="btn-gradient">See Pricing</Button>
            </a>
            <a href="/compare">
              <Button variant="outline">Open Compare Guides</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
