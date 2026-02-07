import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { OfferingContent } from "./content";

type AnalyticsValue = string | number | boolean;

type AnalyticsPayload = {
  event: string;
  [key: string]: AnalyticsValue;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsPayload[];
    gtag?: (command: "event", eventName: string, params?: Record<string, AnalyticsValue>) => void;
  }
}

const DOMAIN = "https://tardis.digital";

function sendAnalyticsEvent(event: string, params: Record<string, AnalyticsValue> = {}) {
  const payload: AnalyticsPayload = { event, ...params };
  if (window.dataLayer) {
    window.dataLayer.push(payload);
  }
  if (window.gtag) {
    window.gtag("event", event, params);
  }
}

function upsertMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector(`meta[${attr}='${key}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

type Props = {
  offering: OfferingContent;
};

export default function OfferingPage({ offering }: Props) {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showMobileNudge, setShowMobileNudge] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startTime = useRef<number>(Date.now());
  const sentScrollThresholds = useRef<Set<number>>(new Set());

  const pageUrl = `${DOMAIN}/offerings/${offering.slug}`;
  const primaryCtaHref = "#offering-footer";

  const heroGradientClass = useMemo(() => {
    if (offering.slug === "production-gravity") {
      return "bg-gradient-to-br from-sky-500/15 via-primary/10 to-indigo-500/10";
    }
    if (offering.slug === "failure-first-architecture") {
      return "bg-gradient-to-br from-amber-500/15 via-primary/10 to-orange-500/10";
    }
    return "bg-gradient-to-br from-emerald-500/15 via-primary/10 to-cyan-500/10";
  }, [offering.slug]);

  const organizationSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Tardis",
      url: DOMAIN,
      logo: `${DOMAIN}/favicon.ico`,
      description: "Fast, decisive infrastructure, reliability, and security outcomes for early-stage startups.",
      foundingDate: "2023",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      sameAs: ["https://twitter.com/tardisdev", "https://linkedin.com/company/tardisdev"],
    }),
    []
  );

  const serviceSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: offering.name,
      description: offering.heroLead,
      provider: {
        "@type": "Organization",
        name: "Tardis",
      },
      areaServed: "Worldwide",
      serviceType: offering.serviceType,
      offers: {
        "@type": "Offer",
        price: "150000",
        priceCurrency: "INR",
      },
      keywords: offering.seoKeywords.join(", "),
      url: pageUrl,
    }),
    [offering, pageUrl]
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: offering.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    [offering.faqs]
  );

  const breadcrumbSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: DOMAIN,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Offerings",
          item: `${DOMAIN}/#work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: offering.name,
          item: pageUrl,
        },
      ],
    }),
    [offering.name, pageUrl]
  );

  useEffect(() => {
    document.title = offering.metaTitle;
    upsertMetaTag("name", "description", offering.metaDescription);
    upsertMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large");
    upsertMetaTag("property", "og:title", offering.metaTitle);
    upsertMetaTag("property", "og:description", offering.metaDescription);
    upsertMetaTag("property", "og:type", "website");
    upsertMetaTag("property", "og:site_name", "Tardis");
    upsertMetaTag("property", "og:url", pageUrl);
    upsertMetaTag("property", "og:image", `${DOMAIN}/placeholder.svg`);
    upsertMetaTag("name", "twitter:title", offering.metaTitle);
    upsertMetaTag("name", "twitter:description", offering.metaDescription);
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:image", `${DOMAIN}/placeholder.svg`);
    upsertMetaTag("name", "keywords", offering.seoKeywords.join(", "));
    upsertCanonical(pageUrl);
  }, [offering.metaDescription, offering.metaTitle, offering.seoKeywords, pageUrl]);

  useEffect(() => {
    if (!showMobileNudge) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowMobileNudge(false);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showMobileNudge]);

  useEffect(() => {
    sendAnalyticsEvent("page_view", { page: pageUrl, service: offering.slug });

    const pageViewKey = "tardis_page_views";
    const currentCount = Number(window.sessionStorage.getItem(pageViewKey) ?? "0");
    window.sessionStorage.setItem(pageViewKey, String(currentCount + 1));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollRange <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / scrollRange) * 100);
      [50, 75, 100].forEach((threshold) => {
        if (depth >= threshold && !sentScrollThresholds.current.has(threshold)) {
          sentScrollThresholds.current.add(threshold);
          sendAnalyticsEvent(`scroll_${threshold}%`, { page: pageUrl, service: offering.slug });
        }
      });

      if (isMobile && depth >= 70 && !showMobileNudge) {
        setShowMobileNudge(true);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (isMobile) {
        return;
      }

      if (event.clientY > 0) {
        return;
      }

      const alreadyShown = window.sessionStorage.getItem("tardis_exit_intent_shown") === "1";
      const pageViews = Number(window.sessionStorage.getItem("tardis_page_views") ?? "0");
      const elapsedMs = Date.now() - startTime.current;

      if (alreadyShown || pageViews >= 3 || elapsedMs >= 120000) {
        return;
      }

      sendAnalyticsEvent("exit_intent_trigger", { page: pageUrl, service: offering.slug });
      window.sessionStorage.setItem("tardis_exit_intent_shown", "1");
      setShowExitIntent(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile, offering.slug, pageUrl, showMobileNudge]);

  const onPrimaryCtaClick = (location: string) => {
    sendAnalyticsEvent("cta_click_primary", { page: pageUrl, service: offering.slug, location });
  };

  const onSecondaryCtaClick = (location: string) => {
    sendAnalyticsEvent("cta_click_secondary", { page: pageUrl, service: offering.slug, location });
  };

  return (
    <main role="main" className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <a
        href="#offering-content"
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>

      <section className="relative overflow-hidden border-b">
        <div className={`absolute inset-0 ${heroGradientClass}`} aria-hidden />
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-5">
              {offering.heroBadge}
            </Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">{offering.heroHeading}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{offering.heroLead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={primaryCtaHref} onClick={() => onPrimaryCtaClick("hero")}> 
                <Button size="lg" className="btn-gradient min-h-11 min-w-44" aria-label="Book your free discovery call">
                  Book Your Free Discovery Call
                </Button>
              </a>
              <a
                href="mailto:hello@tardis.digital?subject=Send%20the%20Startup%20Infrastructure%20Checklist"
                onClick={() => onSecondaryCtaClick("hero")}
              >
                <Button size="lg" variant="outline" className="min-h-11 min-w-44" aria-label="Download startup infrastructure checklist">
                  Download Free Checklist
                </Button>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {offering.seoKeywords.slice(0, 4).map((keyword) => (
                <Badge key={keyword} variant="outline" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offering-content" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Why this matters now</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {offering.problem.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl">What you get in 14 days</CardTitle>
                <CardDescription className="text-base">{offering.solutionPreview}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {offering.whatYouGet.slice(0, 3).map((item) => (
                  <div key={item.title} className="rounded-md border bg-muted/50 p-4">
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">What You Get</h2>
            <p className="mt-3 text-muted-foreground">Clear deliverables, not advisory theater.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {offering.whatYouGet.map((item) => (
              <Card key={item.title} className="card-hover h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <a href={primaryCtaHref} onClick={() => onPrimaryCtaClick("mid_page")}> 
              <Button size="lg" className="btn-gradient min-h-11" aria-label="Start your 14 day transformation">
                Start Your 14-Day Transformation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Who's This For</h2>
            <p className="mt-3 text-muted-foreground">Built for early-stage teams with real shipping pressure.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {offering.personas.map((persona) => (
              <Card key={persona.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{persona.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mt-3 text-muted-foreground">One focused sprint. Defined milestones. No drift.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {offering.process.map((step) => (
              <Card key={step.title} className="h-full border-primary/20">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {step.dayLabel}
                  </Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-4xl border-primary/40 shadow-lg">
            <CardHeader>
              <Badge className="w-fit">{offering.name}</Badge>
              <CardTitle className="text-4xl">{offering.price}</CardTitle>
              <CardDescription className="text-base">{offering.timeline}</CardDescription>
              <p className="text-sm text-muted-foreground">{offering.pricingLead}</p>
            </CardHeader>
            <CardContent className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-3 font-semibold">Included</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {offering.pricingIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 font-semibold">Trust Signals</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {offering.guarantees.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Common Objections, Straight Answers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offering.objections.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Choose Your Path</h2>
            <p className="mt-3 text-muted-foreground">Tradeoffs made explicit so you can decide with eyes open.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offering.comparisons.map((item) => (
              <Card key={item.path} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.path}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Tradeoff:</span> {item.tradeoff}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Best fit:</span> {item.fit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <a href={primaryCtaHref} onClick={() => onPrimaryCtaClick("comparison")}> 
              <Button size="lg" className="btn-gradient min-h-11" aria-label="See if you are a fit">
                See If You're a Fit
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">FAQ</h2>
            <Accordion
              type="single"
              collapsible
              onValueChange={(value) => {
                if (!value) {
                  return;
                }

                const index = Number(value.replace("faq-", ""));
                const item = offering.faqs[index];
                if (!item) {
                  return;
                }

                sendAnalyticsEvent("faq_expand", {
                  page: pageUrl,
                  service: offering.slug,
                  question: item.question,
                });
              }}
            >
              {offering.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-4xl border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Trusted by early-stage teams that need speed and certainty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground">"{offering.testimonial.quote}"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                - {offering.testimonial.author}, {offering.testimonial.company}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline">Founder-led teams</Badge>
                <Badge variant="outline">2-10 engineers</Badge>
                <Badge variant="outline">Seed to Series A</Badge>
                <Badge variant="outline">Launch-critical timelines</Badge>
              </div>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Trusted by early-stage founders at</p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-md border bg-background px-3 py-2 text-center text-xs text-muted-foreground">Stealth Fintech</div>
                  <div className="rounded-md border bg-background px-3 py-2 text-center text-xs text-muted-foreground">B2B Commerce</div>
                  <div className="rounded-md border bg-background px-3 py-2 text-center text-xs text-muted-foreground">Health Platform</div>
                  <div className="rounded-md border bg-background px-3 py-2 text-center text-xs text-muted-foreground">DevTools SaaS</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold md:text-4xl">Related Services</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {offering.related.map((item) => (
              <Card key={item.href} className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={item.href}>
                    <Button variant="ghost" className="group">
                      Explore service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to move in 14 days?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            If your launch window is tight, this is the fastest way to reduce risk without losing product velocity.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={primaryCtaHref} onClick={() => onPrimaryCtaClick("final")}> 
              <Button size="lg" className="btn-gradient min-h-11 min-w-44" aria-label="Book your free discovery call">
                Book Your Free Discovery Call
              </Button>
            </a>
            <a
              href="mailto:hello@tardis.digital?subject=Get%20the%20Infrastructure%20Decision%20Guide"
              onClick={() => onSecondaryCtaClick("final")}
            >
              <Button size="lg" variant="outline" className="min-h-11 min-w-44" aria-label="Get infrastructure decision guide">
                Get the Decision Guide
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer id="offering-footer" className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">{offering.name}</p>
            <p className="text-sm text-muted-foreground">Fixed-scope delivery with decision-ready outcomes.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={primaryCtaHref} onClick={() => onPrimaryCtaClick("footer")}>
              <Button className="btn-gradient" aria-label="Book a scheduling call">Book a scheduling call</Button>
            </a>
            <a href="mailto:hello@tardis.digital" onClick={() => onSecondaryCtaClick("footer")}>
              <Button variant="outline" aria-label="Email Tardis">hello@tardis.digital</Button>
            </a>
          </div>
        </div>
      </footer>

      {showExitIntent ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <Card className="w-full max-w-lg">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">Leaving already?</CardTitle>
                <CardDescription className="text-sm">
                  No discount gimmicks. Just useful resources if you're still evaluating infrastructure decisions.
                </CardDescription>
              </div>
              <button
                type="button"
                onClick={() => setShowExitIntent(false)}
                className="rounded-md p-1 text-muted-foreground hover:bg-muted"
                aria-label="Close exit intent dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="mailto:hello@tardis.digital?subject=Send%20the%20Startup%20Infrastructure%20Checklist"
                onClick={() => {
                  sendAnalyticsEvent("exit_intent_convert", { page: pageUrl, service: offering.slug, option: "checklist" });
                  setShowExitIntent(false);
                }}
              >
                <Button className="w-full">Download the Infrastructure Checklist</Button>
              </a>
              <a
                href="mailto:hello@tardis.digital?subject=Subscribe%20for%20Monthly%20Insights"
                onClick={() => {
                  sendAnalyticsEvent("exit_intent_convert", { page: pageUrl, service: offering.slug, option: "newsletter" });
                  setShowExitIntent(false);
                }}
              >
                <Button className="w-full" variant="outline">
                  Subscribe for monthly insights
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {showMobileNudge ? (
        <div className="fixed inset-x-3 bottom-3 z-40 rounded-md border bg-background/95 p-3 shadow-lg backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">Still here? Compare this offering against your current setup.</p>
            <div className="flex items-center gap-2">
              <a href={primaryCtaHref} onClick={() => onPrimaryCtaClick("mobile_nudge")}>
                <Button size="sm">Talk to us</Button>
              </a>
              <button
                type="button"
                onClick={() => setShowMobileNudge(false)}
                className="rounded-md p-1 text-muted-foreground hover:bg-muted"
                aria-label="Dismiss mobile prompt"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
