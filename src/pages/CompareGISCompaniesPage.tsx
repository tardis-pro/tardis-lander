import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
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
            A practical shortlist for teams evaluating geospatial engineering partners, with transparent strengths and fit notes.
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
                {company.name === "TARDIS Solutions" ? "Disclosure: this property is published by TARDIS Solutions." : "Reviewed by service fit, domain depth, and delivery model."}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
