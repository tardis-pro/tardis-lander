import { useEffect, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrencyForLocale, getUserLocale } from "@/lib/pricing";

export default function PricingPage() {
  useEffect(() => {
    document.title = "Pricing | TARDIS Solutions";
  }, []);

  const userLocale = useMemo(() => getUserLocale(), []);
  const productionGravityPrice = useMemo(
    () => `${formatCurrencyForLocale(150000, "INR", userLocale)} fixed`,
    [userLocale]
  );

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">Clear pricing models for teams that need delivery certainty.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We use fixed-scope sprint pricing and milestone pricing across custom geospatial AI solutions,
            AI-powered GIS learning platforms, and adaptive analytics products. The goal is to keep decisions fast,
            budgets predictable, and commercial planning clear for teams in India and global markets.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Engagement</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead>Pricing Signal</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Production Gravity</TableCell>
                <TableCell>14 days</TableCell>
                <TableCell>{productionGravityPrice}</TableCell>
                <TableCell>Launch-ready infrastructure sprint</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Failure-First Architecture</TableCell>
                <TableCell>14 days</TableCell>
                <TableCell>Fixed-scope sprint</TableCell>
                <TableCell>Reliability hardening under load</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Security Without Theater</TableCell>
                <TableCell>14 days</TableCell>
                <TableCell>Fixed-scope sprint</TableCell>
                <TableCell>Practical DevSecOps with delivery velocity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Custom Platform Builds</TableCell>
                <TableCell>2-6 months</TableCell>
                <TableCell>Milestone based</TableCell>
                <TableCell>GIS, AI orchestration, and adaptive learning products</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>What is always included</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Architecture decisions, implementation, documentation, and handover with your engineering team.</CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>What changes price</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Data complexity, compliance requirements, and integration depth across existing systems.</CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>How we estimate</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Short scoping call, AI tool demo review, technical assumptions document, then fixed milestone map before kickoff.</CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-t text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Need an estimate for your scope?</h2>
          <p className="text-muted-foreground mb-6">Share your context and constraints and we will respond with a realistic delivery plan.</p>
          <a href="mailto:hello@tardis.digital?subject=Pricing%20Inquiry">
            <Button className="btn-gradient">Request Pricing</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
