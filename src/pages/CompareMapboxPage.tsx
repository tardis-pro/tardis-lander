import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CompareMapboxPage() {
  useEffect(() => {
    document.title = "TARDIS Maps vs Mapbox (2026) | TARDIS Solutions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Comparison</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">TARDIS Maps vs Mapbox: search-first GIS vs tile-first APIs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Choose this path if your team is deciding between a map-rendering toolkit and a search-first spatial system that can shorten analysis time and reduce custom query work.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Quick comparison</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Capability</TableHead>
                <TableHead>TARDIS Maps</TableHead>
                <TableHead>Mapbox</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Core approach</TableCell>
                <TableCell>Search-first spatial engine</TableCell>
                <TableCell>Tile rendering and SDK platform</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Natural language queries</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Not native</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Offline support</TableCell>
                <TableCell>PostGIS-local workflows</TableCell>
                <TableCell>Limited SDK-based support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Deployment model</TableCell>
                <TableCell>Cloud and on-prem options</TableCell>
                <TableCell>Managed APIs, enterprise options</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Delivery model</TableCell>
                <TableCell>Platform plus engineering support</TableCell>
                <TableCell>Developer self-integration</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="py-16 border-t text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What this comparison really comes down to</h2>
          <p className="text-muted-foreground mb-6">
            If you mainly need beautiful maps and mature SDKs, Mapbox can be the cleaner fit. If your bottleneck is finding, ranking, and operationalizing spatial data fast, TARDIS Maps is built for that decision surface.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/maps">
              <Button className="btn-gradient">Explore TARDIS Maps</Button>
            </a>
            <a href="/compare">
              <Button variant="outline">Back to Compare</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
