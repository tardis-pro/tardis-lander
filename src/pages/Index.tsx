import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactForm from "@/components/ContactForm";
import Hyperspeed from "@/components/Hyperspeed";
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
  Lightbulb,
  HelpCircle
} from "lucide-react";

const Index = () => {
  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b h-screen flex items-center bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Hyperspeed />
        </div>
        <div className="relative container mx-auto px-6 py-24 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              We Build Software That Actually Works at Scale
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              TARDIS Solutions helps teams turn complex spatial data, AI workflows, and learning systems into production-ready products. We write the infrastructure so you can focus on your domain.
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
            <h2 className="text-4xl font-bold mb-4 text-gradient">Our Platform Stack</h2>
            <p className="text-xl text-muted-foreground">Production-ready infrastructure you can build on</p>
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
                  A search-first mapping platform that handles billions of geospatial features. Think "Google for maps" - query anything from satellite imagery to street-level POIs in milliseconds.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Full-text + spatial search across all layers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Real-time satellite and vector tile rendering
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Offline-capable with local PostGIS caching
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Deck.gl</Badge>
                  <Badge variant="outline">MapLibre</Badge>
                  <Badge variant="outline">PostGIS</Badge>
                  <Badge variant="outline">TiTiler</Badge>
                </div>
                <a href="https://maps.tardis.digital" target="_blank" rel="noopener noreferrer">
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-500/20 to-orange-500/20 blur-md" aria-hidden />
                    <Brain className="h-6 w-6 text-accent animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">AI Orchestration</Badge>
                </div>
                <CardTitle className="text-2xl">Navratna</CardTitle>
                <CardDescription className="text-base">
                  Multi-agent AI orchestration framework that coordinates specialized models to solve complex workflows. Instead of one monolithic AI, you get a team of focused agents working together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Directed agent graphs with feedback loops
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Context-aware routing between Claude, GPT, and local models
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Built-in memory and state management with Neo4j
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Cost optimization: route simple tasks to cheaper models
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">LangGraph</Badge>
                  <Badge variant="outline">Neo4j</Badge>
                  <Badge variant="outline">Claude</Badge>
                  <Badge variant="outline">Ollama</Badge>
                </div>
                <a href="https://github.com/tardis-pro/navratna" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="group/btn">
                    View on GitHub
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* EdTech Stack */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative p-2 rounded-lg bg-secondary/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/20 to-rose-500/20 blur-md" aria-hidden />
                    <BookOpen className="h-6 w-6 text-secondary-foreground animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">EdTech</Badge>
                </div>
                <CardTitle className="text-2xl">EdTech Platform</CardTitle>
                <CardDescription className="text-base">
                  Adaptive learning management system powered by semantic search. Content automatically reorganizes based on what students struggle with, not a pre-defined syllabus.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                    Vector embeddings for intelligent content recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                    Interactive 3D models and auto-graded assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                    Voice-enabled AI tutors with multi-language support
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">pgvector</Badge>
                  <Badge variant="outline">MindsDB</Badge>
                  <Badge variant="outline">Whisper</Badge>
                  <Badge variant="outline">GPT-4</Badge>
                </div>
                <a href="https://edtech.tardis.digital" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="group/btn">
                    Explore Platform
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* UAIP */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative p-2 rounded-lg bg-primary/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/20 to-rose-500/20 blur-md" aria-hidden />
                    <Cpu className="h-6 w-6 text-primary animate-float transition-transform group-hover:scale-110" />
                  </div>
                  <Badge variant="secondary">AI Infrastructure</Badge>
                </div>
                <CardTitle className="text-2xl">UAIP (Unified AI Platform)</CardTitle>
                <CardDescription className="text-base">
                  Production-ready AI infrastructure with auth, orchestration, memory, and observability. Deploy agents without rebuilding core services every time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Multi-tenant auth with role-based access control
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Distributed workflow orchestration and scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Built-in monitoring, tracing, and cost analytics
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Temporal</Badge>
                </div>
                <a href="https://code.tardis.digital" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="group/btn">
                    View Dev Flow UI
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">What We Build For You</h2>
            <p className="text-xl text-muted-foreground">Custom software engineering for teams that can't afford slow, generic solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Companies */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                For Businesses
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Geospatial Data Pipelines</h4>
                    <p className="text-muted-foreground text-sm">Turn raw satellite imagery and vector data into interactive maps. We handle the PostGIS complexity, tile generation, and real-time updates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Map className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Routing & Navigation Systems</h4>
                    <p className="text-muted-foreground text-sm">Custom routing engines for logistics, delivery, or field services. Works offline and scales to millions of routes per day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Learning Platforms</h4>
                    <p className="text-muted-foreground text-sm">Training systems that adapt to each learner. Semantic search finds gaps, AI tutors provide help, assessments track progress.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Multi-Agent AI Systems</h4>
                    <p className="text-muted-foreground text-sm">Orchestrate teams of specialized AI models. Route tasks to the best (and cheapest) model, with built-in memory and feedback loops.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Private AI Infrastructure</h4>
                    <p className="text-muted-foreground text-sm">Run LLMs on your hardware. No data leaves your network. We set up Ollama, fine-tune models, and build the APIs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Cities, NGOs & Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                For Public Sector & NGOs
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Layers className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Urban Digital Twins</h4>
                    <p className="text-muted-foreground text-sm">3D city models powered by real-time sensor data, satellite imagery, and citizen reports. Model scenarios before making policy decisions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Compliance & Reporting Tools</h4>
                    <p className="text-muted-foreground text-sm">Automate deforestation monitoring (EUDR), carbon credit verification, and supply chain transparency reporting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Open Data Platforms</h4>
                    <p className="text-muted-foreground text-sm">Publish geospatial data in standard formats (GeoPackage, COG, PMTiles) so other teams can build on your work.</p>
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
            <h2 className="text-4xl font-bold mb-8 text-gradient">How We Work</h2>
            <blockquote className="text-2xl font-light mb-8 text-foreground">
              "Build systems that improve with use, not code that ships once and rots."
            </blockquote>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Privacy-first</h4>
                <p className="text-sm text-muted-foreground">Run AI models on-premise. Your training data never touches our servers or third-party APIs.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Performance-obsessed</h4>
                <p className="text-sm text-muted-foreground">We cache aggressively, index properly, and profile everything. Sub-second response times aren't optional.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Pragmatic</h4>
                <p className="text-sm text-muted-foreground">PostgreSQL over MongoDB. Boring Python over shiny Rust. Proven tech that your team can maintain.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Open by default</h4>
                <p className="text-sm text-muted-foreground">We publish libraries, write docs, and contribute upstream. Proprietary lock-in wastes everyone's time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about working with TARDIS Solutions</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">What services does TARDIS Solutions provide?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We specialize in three core areas: <strong>GIS development</strong> (spatial databases, tile servers, routing engines, and digital twins), <strong>AI infrastructure</strong> (multi-agent orchestration, private LLM deployments, and workflow automation), and <strong>adaptive learning platforms</strong> (semantic search-powered EdTech and intelligent content systems). Everything we build is production-ready, performance-optimized, and designed for scale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">How do we start a project with you?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Fill out our contact form with a brief description of your challenge. We'll respond within one business day with clarifying questions, then send you a scoping document that outlines our approach, timeline, and cost estimate. If it looks good, we kick off with a technical discovery phase where we audit your existing systems and build a roadmap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">What industries do you work with?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We work with <strong>businesses</strong> (logistics, real estate, supply chain), <strong>public sector</strong> (urban planning, transportation, environmental monitoring), <strong>NGOs</strong> (conservation, humanitarian response), and <strong>education organizations</strong> (universities, corporate training, K-12 platforms). If you're dealing with spatial data, AI workflows, or learning systems at scale, we can help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Do you work with existing codebases or only greenfield projects?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Both. We can integrate with your existing stack (PostgreSQL, Redis, your API layer) or build from scratch. Most of our projects involve extending what you already have - adding a search layer to an existing map, migrating a monolithic AI service to multi-agent orchestration, or optimizing a slow geospatial pipeline. We're pragmatic: if something works, we keep it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Can you build offline-capable applications?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. Our mapping platform (TARDIS Maps) includes local PostGIS caching and offline tile rendering. For AI systems, we deploy models on-premise using Ollama and Docker so they run without internet access. We've built field data collection apps for remote areas with zero connectivity, syncing when they're back online.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">What tech stack do you use?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong>Backend:</strong> Python (FastAPI), PostgreSQL with PostGIS, Redis, Neo4j. <strong>Frontend:</strong> React, TypeScript, Tailwind CSS. <strong>Mapping:</strong> Deck.gl, MapLibre, TiTiler, PMTiles. <strong>AI:</strong> LangGraph, Claude, GPT-4, Ollama for local models. <strong>DevOps:</strong> Docker, Kubernetes, Temporal for workflow orchestration. We choose boring, proven tech over shiny frameworks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">How long does a typical project take?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Small integrations (adding a feature to an existing system) take 2-4 weeks. Mid-sized projects (new AI agent system, custom routing engine) take 2-3 months. Full platform builds (urban digital twin, multi-tenant EdTech platform) take 4-6 months. We ship iteratively, so you get working software every 2 weeks, not a big-bang delivery at the end.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Can you help with data privacy and compliance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. We build systems that run entirely on your infrastructure - no data leaves your network. For AI workloads, we deploy models locally using Ollama instead of sending prompts to third-party APIs. We've helped clients with GDPR compliance (EU), EUDR deforestation reporting, and HIPAA-compliant EdTech platforms. Privacy-first is part of how we work, not an add-on.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Do you provide ongoing maintenance and support?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, but we prefer to build systems your team can maintain. We document everything, write runbooks, and train your engineers during handoff. If you want ongoing support, we offer retainer agreements for bug fixes, performance tuning, and feature additions. We're also available for emergency on-call support if something breaks in production.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">What's your pricing model?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We charge fixed-price per milestone for scoped projects, or time-and-materials for ongoing development work. Small projects start around $15k-$30k. Mid-sized builds (2-3 months) range from $50k-$150k. Large platform projects start at $200k+. We send detailed estimates after the scoping call so there are no surprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Do you open-source your work?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  When possible, yes. Our multi-agent orchestration framework (Navratna) is public on GitHub. We contribute to upstream projects like PostGIS, MapLibre, and LangChain. For client work, we default to private repositories, but we can open-source reusable components if you approve it. We believe in building tools that outlive individual projects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">What makes TARDIS Solutions different from other dev shops?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We're specialists, not generalists. We don't build generic CRUD apps - we solve hard problems in geospatial computing, AI orchestration, and adaptive learning systems. We obsess over performance (sub-second query times, not "good enough"). We write infrastructure that improves with use instead of code that ships once and rots. And we only take on projects we're confident we can deliver, not whatever walks through the door.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
