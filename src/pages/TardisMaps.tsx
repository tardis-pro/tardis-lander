import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ContactForm from "@/components/ContactForm";
import { Map, Search, Layers, BarChart3, Factory, Building2, Truck, CreditCard, Sprout } from "lucide-react";

export default function TardisMaps() {
  const primaryContactHref = "#contact";

  useEffect(() => {
    document.title = "TARDIS Maps - Geo‑Intelligence at Planetary Scale | TARDIS Solutions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <Badge className="mb-4" variant="secondary">Product</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              TARDIS Maps - The Mapping Platform That Thinks Like a Database
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Instead of panning and zooming through billions of features, just search. TARDIS Maps treats your entire geospatial stack as a queryable index - find locations, analyze patterns, and run scenarios without writing SQL.
            </p>
            <div className="flex gap-3">
              <a href={primaryContactHref}><Button size="lg" className="btn-gradient">Talk to Us</Button></a>
              <a href="/#work"><Button size="lg" variant="outline">See More Work</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group card-hover">
              <CardHeader>
                <div className="relative w-fit mb-2">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md rounded-md" aria-hidden />
                  <Search className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                </div>
                <CardTitle>Search, Don't Scroll</CardTitle>
                <CardDescription>Type "coffee shops near parks in Seattle" and get ranked results instantly. Full-text + spatial queries without writing PostGIS code.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group card-hover">
              <CardHeader>
                <div className="relative w-fit mb-2">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-md rounded-md" aria-hidden />
                  <Layers className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                </div>
                <CardTitle>Live Satellite + Vector Layers</CardTitle>
                <CardDescription>Stream Sentinel-2, Landsat, and custom rasters in real-time. Overlay with OpenStreetMap, cadastral, or proprietary vector data.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group card-hover">
              <CardHeader>
                <div className="relative w-fit mb-2">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md rounded-md" aria-hidden />
                  <BarChart3 className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                </div>
                <CardTitle>Pre-Built Industry Modules</CardTitle>
                <CardDescription>Retail site selection, agricultural yield prediction, infrastructure risk modeling - templates you can customize instead of building from scratch.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group card-hover">
              <CardHeader>
                <div className="relative w-fit mb-2">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-md rounded-md" aria-hidden />
                  <Map className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                </div>
                <CardTitle>Built for Developers</CardTitle>
                <CardDescription>RESTful APIs, WebSocket streams, and embeddable widgets. Works with your existing PostGIS, DuckDB, or Snowflake stack.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-6">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Retail</Badge>
                </div>
                <CardTitle>Retail Expansion Planning</CardTitle>
                <CardDescription>Open stores where demand compounds.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>Footfall analytics</li>
                  <li>Demographic profiling</li>
                  <li>Competitor mapping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Distribution</Badge>
                </div>
                <CardTitle>Distribution Planning</CardTitle>
                <CardDescription>Find white‑space, analyze competitors, optimize channels.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>White‑space detection</li>
                  <li>Channel selection & retailer ID</li>
                  <li>Beat‑plan design & monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Banking</Badge>
                </div>
                <CardTitle>Risk Analytics for Banks</CardTitle>
                <CardDescription>Lend smarter with geospatial clarity.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>Credit‑risk mapping</li>
                  <li>Fraud hotspot detection</li>
                  <li>Disaster vulnerability models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Agriculture</Badge>
                </div>
                <CardTitle>Remote Sensing‑Based Agri Analytics</CardTitle>
                <CardDescription>AI‑powered crop intelligence.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>Crop identification</li>
                  <li>Health & soil‑quality monitoring</li>
                  <li>Land‑use & yield mapping</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Services</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[240px]">Category</TableHead>
                <TableHead>What We Deliver</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">GIS Data Management</TableCell>
                <TableCell>End‑to‑end spatial data pipelines - cleaning, versioning, and hosting for enterprise use.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GIS Data Processing</TableCell>
                <TableCell>Automated ETL workflows for raster, vector, and 3D datasets with cloud‑native scaling.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Application Development</TableCell>
                <TableCell>Full‑stack web & mobile GIS apps using MapLibre, Deck.gl, and Three.js.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Remote Sensing Services</TableCell>
                <TableCell>Satellite + drone imagery analysis for agriculture, forestry, and infrastructure.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Image Processing Services</TableCell>
                <TableCell>Feature extraction, orthomosaic correction, and ML‑based classification pipelines.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Search‑First */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient text-center">Why Search-First Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Traditional GIS Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Load all layers before you can interact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Pan and zoom to find what you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Write complex SQL for spatial queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Slow with billions of features</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">TARDIS Maps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Type what you want, get instant results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Full-text + spatial search in one query</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Natural language → ranked results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Sub-second response at any scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Talk to Us</h2>
          <p className="text-center text-muted-foreground mb-8">Tell us about your geospatial challenge. We typically respond within one business day.</p>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">TARDIS Maps</p>
            <p className="text-sm text-muted-foreground">Search-first geospatial intelligence platform.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={primaryContactHref}>
              <Button className="btn-gradient" aria-label="Book a scheduling call">Book a scheduling call</Button>
            </a>
            <a href="mailto:hello@tardis.digital">
              <Button variant="outline" aria-label="Email TARDIS Solutions">hello@tardis.digital</Button>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
