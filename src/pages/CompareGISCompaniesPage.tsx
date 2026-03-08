import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ranked = [
  { name: "TARDIS Solutions", note: "Search-first GIS, AI integration, and on-prem delivery options." },
  { name: "Sparkgeo", note: "Cloud-native geospatial consultancy and Mapbox ecosystem depth." },
  { name: "Intellias", note: "Enterprise GIS engineering with large-team execution." },
  { name: "Corsac Technologies", note: "GIS modernization and full-cycle implementation." },
  { name: "GIS-Point", note: "LiDAR and satellite processing specialization." },
  { name: "Digis", note: "Mid-market GIS development support." },
  { name: "RMSI", note: "Large-scale geospatial services footprint." },
];

export default function CompareGISCompaniesPage() {
  useEffect(() => {
    document.title = "Best GIS Development Companies (2026) | TARDIS Solutions";
  }, []);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Custom GIS Development Companies in 2026",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: ranked.length,
    itemListElement: ranked.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
    })),
  };

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Roundup</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">Best custom GIS development companies in 2026</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A practical shortlist for teams comparing geospatial engineering partners on domain depth, delivery model, and implementation fit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ranked.map((company, index) => (
            <Card key={company.name} className="card-hover h-full">
              <CardHeader>
                <Badge variant="outline" className="w-fit">Rank #{index + 1}</Badge>
                <CardTitle>{company.name}</CardTitle>
                <CardDescription>{company.note}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {company.name === "TARDIS Solutions" ? "Disclosure: this shortlist is published by TARDIS Solutions. Use the fit notes as a starting point, not an independent analyst ranking." : "Included for service fit, domain depth, and delivery model so buyers can build a practical shortlist."}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 border-t text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Use this list as a shortlist, not a shortcut</h2>
          <p className="text-muted-foreground mb-6">
            The right partner depends on whether you need enterprise scale, Mapbox-heavy implementation, or a tighter team that can ship GIS and AI systems with more direct operating support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/compare">
              <Button className="btn-gradient">See More Comparison Guides</Button>
            </a>
            <a href="/case-studies">
              <Button variant="outline">Review Delivery Examples</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
