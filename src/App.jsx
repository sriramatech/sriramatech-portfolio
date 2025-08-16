import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Cloud, ShieldCheck, Server, Layers, Brain, WrenchIcon as Wrench, Sparkles, BadgeCheck, FileDown, Award, ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

// --- Editable profile data ---
const PROFILE = {
  name: "Srirama Chandra Murthy Kuchibhotla",
  title: "Senior Cloud Architect | Azure • DevOps • Security",
  tagline: "I help enterprises design, secure, and scale Azure workloads—fast and reliably.",
  location: "Hyderabad, India",
  email: "contact@sriramatech.com",
  phone: "+91-XXXXXXXXXX",
  links: {
    linkedin: "https://www.linkedin.com/in/your-linkedin/",
    github: "https://github.com/sriramatech",
  },
  resumeUrl: "/Srirama-Cloud-Architect-Resume.pdf", // place your PDF at public root
};

const STATS = [
  { label: "Total Experience", value: "14+ yrs" },
  { label: "Azure Projects", value: "45+" },
  { label: "Migrations Delivered", value: "30+" },
  { label: "Uptime on Critical Apps", value: ">99.95%" },
];

const SKILLS = [
  { icon: <Cloud className="h-6 w-6" />, title: "Azure Architecture", desc: "Landing zones, Well-Architected reviews, cost optimization." },
  { icon: <Server className="h-6 w-6" />, title: "Windows & VMware", desc: "10 yrs Windows/VMware admin, hybrid designs, modernization." },
  { icon: <Layers className="h-6 w-6" />, title: "DevOps & IaC", desc: "Azure DevOps, GitHub, Terraform, CI/CD, release governance." },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Security & Compliance", desc: "Defender for Cloud/Endpoint, Sentinel, Zero Trust patterns." },
  { icon: <Wrench className="h-6 w-6" />, title: "Operations & SRE", desc: "Observability, incident response, automation at scale." },
  { icon: <Brain className="h-6 w-6" />, title: "AI for Cloud", desc: "Pragmatic GenAI integrations for ops efficiency & insights." },
];

const CERTS = [
  { code: "AZ-305", name: "Microsoft Azure Solutions Architect Expert" },
  { code: "AZ-400", name: "DevOps Engineer Expert" },
];

const SERVICES = [
  {
    title: "Cloud Strategy & Architecture",
    bullets: [
      "Greenfield landing zones & hub-spoke",
      "Cost, performance & resiliency trade-off",
      "Migration roadmaps (rehost → refactor)"
    ],
  },
  {
    title: "Secure Migrations (Prod-safe)",
    bullets: [
      "CrowdStrike → Microsoft Defender for Endpoint transitions",
      "Zero-downtime cutovers on Ubuntu/Windows",
      "Security baseline & hardening as code"
    ],
  },
  {
    title: "DevOps Acceleration",
    bullets: [
      "Azure Pipelines/GitHub Actions CI/CD",
      "Terraform modules & policy as code",
      "Release governance, auditability"
    ],
  },
  {
    title: "Observability & SRE",
    bullets: [
      "End‑to‑end logging/metrics/tracing",
      "Error budgets & SLOs",
      "Incident runbooks & automation"
    ],
  },
];

const CASE_STUDIES = [
  {
    industry: "FinTech",
    title: "Payments platform to Azure with >99.95% uptime",
    outcome: [
      "Lift-and-improve migration from VMware to Azure",
      "Savings of 28% via right-sizing & Reserved Instances",
      "Blue/Green CI/CD with rollback under 2 minutes",
    ],
  },
  {
    industry: "Healthcare",
    title: "Defender for Endpoint rollout across 1.5k nodes",
    outcome: [
      "Phased migration from CrowdStrike without outages",
      "MITRE ATT&CK mapping in Sentinel for detections",
      "Mean Time to Detect improved by 41%",
    ],
  },
  {
    industry: "Retail",
    title: "Observability revamp for peak season",
    outcome: [
      "Unified logs/metrics with Azure Monitor + Grafana",
      "Proactive scaling backed by SLO error budgets",
      "P1 incidents reduced from 7/month to 1/month",
    ],
  },
];

const CONTACT_CTA = {
  headline: "Hiring for a Senior Cloud role (₹50 LPA+)?",
  sub: "Let's discuss your roadmap and de‑risk the next quarter in one discovery call.",
};

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 md:px-8 py-16 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-2">
      <Sparkles className="h-7 w-7" /> {title}
    </h2>
    {children}
  </section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl">sriramatech<span className="text-blue-600">.com</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#case-studies" className="hover:text-blue-600">Case Studies</a>
            <a href="#certs" className="hover:text-blue-600">Certifications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2"><FileDown className="h-4 w-4"/>Resume</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {PROFILE.name}
            </motion.h1>
            <p className="mt-3 text-lg text-slate-700">{PROFILE.title}</p>
            <p className="mt-2 text-slate-600">{PROFILE.tagline}</p>
            <p className="mt-1 text-slate-500 text-sm">{PROFILE.teluguTagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-blue-50 transition"><Mail className="h-4 w-4"/>{PROFILE.email}</a>
              <span className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2"><Phone className="h-4 w-4"/>{PROFILE.phone}</span>
              <span className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2"><MapPin className="h-4 w-4"/>{PROFILE.location}</span>
            </div>

            <div className="mt-4 flex gap-4">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Linkedin className="h-5 w-5"/> LinkedIn</a>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Github className="h-5 w-5"/> GitHub</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((s, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-sm text-slate-600">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 blur-3xl opacity-30 bg-gradient-to-tr from-blue-300 to-emerald-300 rounded-full" />
            <Card className="relative rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-blue-600"/> What I deliver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <p>• Production-safe migrations and platform builds that stand up to audits.</p>
                <p>• Predictable delivery with IaC, CI/CD, and policy guardrails.</p>
                <p>• Security by default: Defender, Sentinel, and Zero Trust patterns.</p>
                <p>• Cost control and performance you can measure.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Core Expertise">
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-1">{s.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services for Your Team">
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((svc, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle>{svc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-slate-700 space-y-2">
                  {svc.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience Snapshot">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl lg:col-span-2">
            <CardHeader>
              <CardTitle>14+ years building and running on Azure & VMware</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>10 years in Windows/VMware Administration → 4 years in Azure Cloud—now focused on platform architecture, security, and DevOps at scale.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Enterprise landing zones, network segmentation, policy-as-code</li>
                <li>AKS, App Service, Functions, API Management, Event-driven patterns</li>
                <li>Defender for Cloud/Endpoint, Sentinel, identity hardening</li>
                <li>Azure DevOps/GitHub Actions, Terraform modules, release governance</li>
                <li>Observability with Azure Monitor, Log Analytics, Grafana</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Award className="h-5 w-5"/> Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {CERTS.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BadgeCheck className="h-5 w-5 text-blue-600 mt-0.5"/>
                    <div>
                      <div className="font-semibold">{c.code}</div>
                      <div className="text-slate-600 text-sm">{c.name}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" title="Selected Case Studies">
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{cs.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs uppercase tracking-wide text-slate-500">{cs.industry}</div>
                <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
                  {cs.outcome.map((o, j) => (
                    <li key={j}>{o}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section id="contact" title="Let’s Work Together">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card className="rounded-2xl md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold">{CONTACT_CTA.headline}</h3>
              <p className="text-slate-600 mt-2">{CONTACT_CTA.sub}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href={`mailto:${PROFILE.email}?subject=Senior%20Cloud%20Role%20Opportunity&body=Hi%20Srirama,%20we'd%20like%20to%20discuss%20a%20role%20with%20you.`} className="inline-flex items-center gap-2"><Mail className="h-5 w-5"/> Email me</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Linkedin className="h-5 w-5"/> Connect on LinkedIn</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a className="flex items-center justify-between p-3 rounded-xl border hover:bg-slate-50" href="#services">
                <span>Service catalog</span>
                <ChevronRight className="h-4 w-4"/>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl border hover:bg-slate-50" href="#case-studies">
                <span>Case studies</span>
                <ChevronRight className="h-4 w-4"/>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl border hover:bg-slate-50" href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                <span>Download resume</span>
                <ChevronRight className="h-4 w-4"/>
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 text-sm text-slate-600 grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">© {new Date().getFullYear()} Srirama Chandra Murthy</div>
            <div>Available for Senior Cloud roles (₹50 LPA+). Hyderabad • Remote-friendly.</div>
          </div>
          <div className="flex gap-4 md:justify-end">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Github className="h-4 w-4"/> GitHub</a>
            <a href="mailto:contact@sriramatech.com" className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4"/> Email</a>
          </div>
        </div>
      </footer>

      {/* SEO: Open Graph + Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: PROFILE.name,
            jobTitle: "Senior Cloud Architect",
            email: PROFILE.email,
            telephone: PROFILE.phone,
            url: "https://sriramatech.com",
            sameAs: [PROFILE.links.linkedin, PROFILE.links.github],
            worksFor: { "@type": "Organization", name: "Open to opportunities" },
            address: { "@type": "PostalAddress", addressLocality: PROFILE.location },
          }),
        }}
      />
      <meta property="og:title" content="Srirama – Senior Cloud Architect" />
      <meta property="og:description" content="Azure • DevOps • Security | I help enterprises design, secure, and scale Azure workloads." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sriramatech.com" />
    </div>
  );
}
