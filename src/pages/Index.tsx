import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import HeroThree from "@/components/HeroThree";
import { 
  Globe, 
  Brain, 
  Zap, 
  Code, 
  Map, 
  BookOpen, 
  Users, 
  Cpu, 
  Layers,
  Target,
  ArrowRight,
  Database,
  Settings,
  Rocket,
  Building,
  Lightbulb
} from "lucide-react";

const Index = () => {
  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <HeroThree keywords={["GIS","AI","EdTech","Routing","Digital Twins","MapLibre","Deck.gl","PostGIS"]} />
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              GIS Development, AI Engineering, and EdTech Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              TARDIS Solutions is a development company focused on performant GIS systems, AI platforms, and adaptive learning products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
              <a href="#contact">
                <Button size="lg" className="btn-gradient" aria-label="Get in touch">
                  <Users className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </a>
              <a href="#work" aria-label="See our work">
                <Button variant="outline" size="lg">
                  <Code className="mr-2 h-5 w-5" />
                  See Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">What We've Been Working On</h2>
            <p className="text-xl text-muted-foreground">Recent work in GIS, AI, and EdTech</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* TARDIS Maps */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative p-2 rounded-lg bg-primary/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md" aria-hidden />
                    <Map className="h-6 w-6 text-primary animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">GIS Engine</Badge>
                </div>
                <CardTitle className="text-2xl">TARDIS Maps</CardTitle>
                <CardDescription className="text-base">
                  A mapping engine we built because existing ones were too slow for what we needed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Real-time satellite overlays
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Urban digital twins
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Offline-first, hyper-performant
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Deck.gl</Badge>
                  <Badge variant="outline">MapLibre</Badge>
                  <Badge variant="outline">PostGIS</Badge>
                  <Badge variant="outline">TiTiler</Badge>
                </div>
                <a href="/maps">
                  <Button variant="ghost" className="group/btn" aria-label="Explore TARDIS Maps">
                    Explore TARDIS Maps
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Navratna */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative p-2 rounded-lg bg-accent/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-md" aria-hidden />
                    <Brain className="h-6 w-6 text-accent animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">AI OS</Badge>
                </div>
                <CardTitle className="text-2xl">Navratna</CardTitle>
                <CardDescription className="text-base">
                  The vision of a system that becomes an extension of a developer’s instincts—intuitively understands patterns, autonomously responds to needs, and operates at an “ultra” level beyond conventional tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Intuitively understands developer patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Autonomously responds to development needs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Functions at an “ultra” level beyond conventional tools
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Becomes an extension of the developer’s instincts; anticipates and enhances the process
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">LangGraph</Badge>
                  <Badge variant="outline">Neo4j</Badge>
                  <Badge variant="outline">Claude</Badge>
                  <Badge variant="outline">Ollama</Badge>
                </div>
                <Button variant="ghost" className="group/btn">
                  Logic Flow Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* EdTech Stack */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative p-2 rounded-lg bg-secondary/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md" aria-hidden />
                    <BookOpen className="h-6 w-6 text-secondary-foreground animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">EdTech</Badge>
                </div>
                <CardTitle className="text-2xl">EdTech Stack</CardTitle>
                <CardDescription className="text-base">
                  Learning tools that adapt to how people actually learn, not how we think they should
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                    Embedding-native curriculum builder
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                    3D models + interactive quizzes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                    AI tutor agents
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">pgvector</Badge>
                  <Badge variant="outline">MindsDB</Badge>
                  <Badge variant="outline">Whisper</Badge>
                  <Badge variant="outline">GPT</Badge>
                </div>
                <Button variant="ghost" className="group/btn">
                  Quiz Prototype
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* UAIP */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative p-2 rounded-lg bg-primary/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md" aria-hidden />
                    <Cpu className="h-6 w-6 text-primary animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">AI Platform</Badge>
                </div>
                <CardTitle className="text-2xl">UAIP</CardTitle>
                <CardDescription className="text-base">
                  The infrastructure that powers our AI projects (so we don't rebuild everything from scratch)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Auth, Orchestration, Memory
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Built-in security & observability
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Stateless scaling
                  </li>
                </ul>
                <Button variant="ghost" className="group/btn">
                  System Overview
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">GIS Development, AI Engineering, EdTech Solutions</h2>
            <p className="text-xl text-muted-foreground">We build custom software for teams solving complex, data-heavy problems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Companies */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                For Companies
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Custom GIS Pipelines</h4>
                    <p className="text-muted-foreground text-sm">Vector/raster tiles, EO models, MapLibre SDKs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Map className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Navigation & Routing Engines</h4>
                    <p className="text-muted-foreground text-sm">Valhalla, GraphHopper, offline-ready</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">AI-Embedded Learning Systems</h4>
                    <p className="text-muted-foreground text-sm">Custom GPT+EdTech stacks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Agent Infrastructure</h4>
                    <p className="text-muted-foreground text-sm">Multi-model feedback loops, LangGraph</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Local-first AI Assistants</h4>
                    <p className="text-muted-foreground text-sm">Claude mimicry, Ollama workflows</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Cities, NGOs & Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent" />
                For Cities, NGOs & Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Layers className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Digital Twins + Earth Data</h4>
                    <p className="text-muted-foreground text-sm">Land cover, flood modeling, InSAR</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Policy-Backed Compliance Tools</h4>
                    <p className="text-muted-foreground text-sm">EUDR, RWI, Carbon Markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Open-Source Civic Systems</h4>
                    <p className="text-muted-foreground text-sm">GeoPKG, interoperable data layers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">Philosophy</h2>
            <blockquote className="text-2xl font-light mb-8 text-muted-foreground italic">
              "We prefer building things that get better over time, not just work once."
            </blockquote>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Privacy matters</h4>
                <p className="text-sm text-muted-foreground">Your data should be yours</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Speed matters</h4>
                <p className="text-sm text-muted-foreground">Nobody likes waiting</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-secondary/10 rounded-full mb-3">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Simple is better</h4>
                <p className="text-sm text-muted-foreground">Complex problems, simple solutions</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Open by default</h4>
                <p className="text-sm text-muted-foreground">Share knowledge, not barriers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Frequently Asked Questions</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground">What services does TARDIS Solutions provide?</h3>
                <p>Custom GIS development (tiles, routing, digital twins), AI platforms and agent infrastructure, and adaptive EdTech tools.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">How do we start a project?</h3>
                <p>Share a short brief via the contact form. We reply within one business day with scope, approach, and timelines.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">What industries do you work with?</h3>
                <p>Companies, public sector teams, and mission-driven organizations working with maps, data, and learning systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Want to Work with TARDIS Solutions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always interested in meeting people working on interesting problems. Let's chat.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
