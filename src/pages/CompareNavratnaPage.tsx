import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CompareNavratnaPage() {
  useEffect(() => {
    document.title = "Navratna vs CrewAI vs LangGraph (2026) | TARDIS Solutions";
  }, []);

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="relative container mx-auto px-6 py-20">
          <Badge variant="secondary" className="mb-4">Comparison</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gradient">Navratna vs CrewAI vs LangGraph</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            CrewAI and LangGraph are strong frameworks when teams can own deep platform engineering.
            Navratna positions as a managed orchestration path for teams that need delivery velocity and operational support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Framework and delivery comparison</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Capability</TableHead>
                <TableHead>Navratna</TableHead>
                <TableHead>CrewAI</TableHead>
                <TableHead>LangGraph</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Type</TableCell>
                <TableCell>Managed platform + services</TableCell>
                <TableCell>Open-source framework</TableCell>
                <TableCell>Open-source framework</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Setup ownership</TableCell>
                <TableCell>Delivered with team support</TableCell>
                <TableCell>Internal engineering ownership</TableCell>
                <TableCell>Internal engineering ownership</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Model routing</TableCell>
                <TableCell>Cost-aware routing baked in</TableCell>
                <TableCell>Manual strategy</TableCell>
                <TableCell>Manual strategy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">On-prem options</TableCell>
                <TableCell>Ollama-supported pathways</TableCell>
                <TableCell>Custom setup required</TableCell>
                <TableCell>Custom setup required</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Best fit</TableCell>
                <TableCell>Teams needing rapid production outcomes</TableCell>
                <TableCell>AI teams with orchestration depth</TableCell>
                <TableCell>Complex stateful graph workflows</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
