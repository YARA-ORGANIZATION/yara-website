import type { Metadata } from "next";
import { ArrowRight, Check, Plus } from "lucide-react";
import { ArrowLink, ButtonLink, Section, SectionHeading, cx } from "@/components/ui";

export const metadata: Metadata = {
  title: "YARA 2031: Building Stronger Research Pathways",
  description:
    "YARA’s five-year strategy, 2027–2031: developing research talent across Africa and building stronger routes from research to policy, innovation and commercialisation.",
  alternates: { canonical: "/strategy" },
};

type Opportunity = {
  n: string;
  name: string;
  lead: string;
  body: string[];
  areasIntro?: string;
  areas?: { title: string; body: string }[];
  after?: string[];
  href: string;
};

const opportunities: Opportunity[] = [
  {
    n: "01",
    name: "African Research Talent",
    lead: "Africa’s future research capacity depends on who gets the opportunity to become a researcher.",
    body: [
      "Across the continent, promising students and early-career researchers do not encounter serious research opportunities on equal terms. Access to sustained mentorship, research experience, data, laboratories, technical tools and pathways into advanced study remains uneven.",
      "YARA will build a longer research pathway that begins earlier.",
      "We will create opportunities for emerging researchers to encounter research, build strong foundations, pursue original work with experienced mentors and continue into postgraduate study, independent research and research careers.",
      "Our goal is not simply to train more people. It is to increase the number of African researchers capable of pursuing difficult questions over time and producing work that meets a high standard of evidence.",
    ],
    href: "/programmes",
  },
  {
    n: "02",
    name: "Artificial Intelligence",
    lead: "Africa needs the capacity to build, study, govern and apply artificial intelligence on its own terms.",
    body: [
      "AI is changing scientific research, health, climate analysis, public institutions, education, industry and economic activity.",
      "Yet useful AI depends on more than access to models. It requires researchers, representative data, evaluation methods, technical expertise, governance and the ability to determine whether systems actually work in the environments where they are deployed.",
    ],
    areasIntro: "YARA will build AI research capacity around three areas:",
    areas: [
      {
        title: "AI Foundations",
        body: "Locally representative datasets, benchmarks, model evaluation, data stewardship and methods that can perform where data, compute or other resources are constrained.",
      },
      {
        title: "Applied AI",
        body: "Research that applies AI to science, health, climate, agriculture, public systems, industry and other consequential African problems.",
      },
      {
        title: "Governance & Safety",
        body: "Research on accountability, privacy, bias, standards, evaluation, responsible deployment, safety and the institutional capacity required to govern increasingly capable systems.",
      },
    ],
    after: [
      "AI will also strengthen work across YARA’s other research areas. Climate researchers can use machine learning, Earth observation and forecasting. Public-health researchers can work with diagnostics, surveillance, health data and decision-support systems.",
    ],
    href: "/research/artificial-intelligence",
  },
  {
    n: "03",
    name: "Climate",
    lead: "Africa needs deeper local evidence to understand a changing climate and determine what responses work.",
    body: [
      "Climate change is altering weather patterns, food systems, water, coastlines, ecosystems, infrastructure and livelihoods.",
      "Understanding those changes requires more African researchers with access to data, methods, field sites, modelling capability and institutions capable of using the evidence they produce.",
    ],
    areasIntro: "YARA will concentrate its climate work in three areas:",
    areas: [
      {
        title: "Climate Intelligence",
        body: "Observation, forecasting, modelling, geospatial research and risk analysis that improve understanding of what is changing and where risks are emerging.",
      },
      {
        title: "Adaptation & Resilience",
        body: "Research into how communities, cities, infrastructure and institutions respond to climate risk, with particular attention to which interventions work in practice.",
      },
      {
        title: "Food, Water & Nature",
        body: "Research on agriculture, food security, freshwater systems, oceans, coasts, biodiversity and the natural systems on which livelihoods and economic activity depend.",
      },
    ],
    href: "/research/climate",
  },
  {
    n: "04",
    name: "Public Health",
    lead: "Stronger health systems require stronger evidence about the people and environments they serve.",
    body: [
      "Africa’s health challenges are shaped not only by disease, but by environmental exposure, prevention, diagnostics, access to care and the ability of health systems to respond.",
    ],
    areasIntro: "YARA will build research capability across three areas:",
    areas: [
      {
        title: "Disease & Prevention",
        body: "Infectious and non-communicable disease, maternal and child health, outbreaks, epidemiology, surveillance and prevention.",
      },
      {
        title: "Environmental Health",
        body: "Lead and other toxins, pollution, heat, water, occupational exposure and the growing relationship between climate and health.",
      },
      {
        title: "Health Systems",
        body: "Service delivery, implementation, diagnostics, workforce, digital health, AI-enabled health tools and the institutional resilience required to turn evidence into better care.",
      },
    ],
    href: "/research/public-health",
  },
  {
    n: "05",
    name: "From Research to Application",
    lead: "Producing research is only one part of the pathway.",
    body: [
      "Research can advance what is known. It can also change a policy, improve an institutional decision, guide the development of a technology, solve an industry problem or become the basis for a new product or venture.",
      "Those outcomes do not happen automatically.",
      "YARA will build stronger connections between researchers and the universities, public institutions, companies, funders, technical experts and communities capable of using, testing, extending and applying their work.",
      "For research with further potential, YARA also intends to create an environment in which projects can continue developing after the initial research phase, moving towards prototypes, programmes, technologies, products and commercial applications.",
    ],
    href: "/about#beyond-publication",
  },
];

const stages = [
  { title: "Exposure", body: "Promising researchers encounter serious research early." },
  {
    title: "Research Training & Mentorship",
    body: "They develop the methods, judgement and research habits required to conduct credible work.",
  },
  {
    title: "Original Research",
    body: "They pursue an original question with sustained guidance and produce a serious research output.",
  },
];

const pathways = [
  { title: "Academic Pathways", body: "Publication, further inquiry, postgraduate study and continued research." },
  {
    title: "Policy & Institutional Pathways",
    body: "Evidence briefs, institutional partnerships, policy engagement and implementation.",
  },
  { title: "Industry Pathways", body: "Applied research, R&D collaboration, technical validation and industry use." },
  {
    title: "Innovation & Commercialisation",
    body: "Prototypes, programmes, technologies, products, incubation and venture development.",
  },
];

const capabilities = [
  {
    title: "African Data",
    body: [
      "YARA will support the creation, documentation and responsible stewardship of datasets and benchmarks grounded in African contexts.",
      "Over time, this can develop into a YARA African Data Commons, bringing together datasets, documentation, research tools and governance frameworks that researchers can use and extend.",
      "The objective is not simply to make more data public. It is to improve the availability and quality of African data for credible research, while respecting privacy, research ethics, ownership and appropriate access.",
    ],
  },
  {
    title: "AI & Computational Research",
    body: [
      "YARA will build shared capability in machine learning, computational methods, research engineering, model evaluation and access to compute.",
      "This capability will support researchers working directly on AI as well as researchers using computational methods in climate, public health and other fields.",
    ],
  },
  {
    title: "Research Methods & Governance",
    body: [
      "High-quality research depends on sound methods and trusted systems.",
      "YARA will strengthen capability in research design, statistics, research ethics, data governance, reproducibility, publication and responsible research practice.",
    ],
  },
  {
    title: "Mentorship & Research Networks",
    body: [
      "Mentorship will remain core to the YARA model.",
      "We will build a wider network of African and diaspora researchers, universities, laboratories and research institutions capable of supervising work, opening research opportunities and supporting researchers as their careers develop.",
    ],
  },
];

const impactRoutes = [
  {
    title: "Publication & Further Research",
    body: "Researchers will receive support to strengthen manuscripts, pursue publication, present their work and develop the next questions that emerge from their research.",
  },
  {
    title: "Policy & Institutions",
    body: "YARA will connect relevant research to policymakers, public institutions and organisations capable of using evidence in decisions, programmes and implementation.",
  },
  {
    title: "Industry & Applied Research",
    body: "Researchers will have opportunities to work with companies and technical organisations on research questions, data, R&D challenges and applications with practical relevance.",
  },
  {
    title: "Incubation & Commercialisation",
    body: "Selected research with strong potential for further development will receive continued support to test ideas, build prototypes, validate applications and explore commercial pathways.",
  },
];

const targets = [
  { n: "300", label: "researchers completing intensive YARA research programmes" },
  { n: "3,000+", label: "emerging researchers reached through research, methods and AI-capacity programmes" },
  { n: "1,500+", label: "researchers receiving meaningful training in AI-enabled and computational research" },
  { n: "200+", label: "original research projects supported across artificial intelligence, climate and public health" },
  { n: "50+", label: "peer-reviewed publications or equivalent major scholarly outputs" },
  { n: "25+", label: "African datasets, benchmarks or reusable research tools developed" },
  {
    n: "30+",
    label: "documented cases of YARA-supported research reaching policy, institutions, industry or practical application",
  },
  { n: "25+", label: "research projects receiving structured continuation, translation or incubation support" },
  {
    n: "5–10",
    label: "technologies, products, ventures or substantial commercial applications emerging from YARA-supported research",
  },
  { n: "20+", label: "African countries represented across YARA programmes and research networks" },
  { n: "150+", label: "active mentors, research supervisors and technical experts" },
  { n: "1", label: "permanent YARA Research & Innovation Centre established" },
];

const depth = [
  {
    theme: "Artificial Intelligence",
    areas: [
      { title: "AI Foundations", body: "African data, benchmarks, model evaluation, compute-aware methods and research infrastructure." },
      { title: "Applied AI", body: "AI for science, health, climate, agriculture, education, public systems and industry." },
      {
        title: "Governance & Safety",
        body: "Accountability, privacy, bias, standards, safety, institutional governance and responsible use.",
      },
    ],
  },
  {
    theme: "Climate",
    areas: [
      { title: "Climate Intelligence", body: "Observation, data, modelling, forecasting and climate-risk analysis." },
      {
        title: "Adaptation & Resilience",
        body: "Research into communities, cities, infrastructure, institutions and what adaptation measures work.",
      },
      { title: "Food, Water & Nature", body: "Agriculture, food systems, water, oceans, coasts, biodiversity and ecosystems." },
    ],
  },
  {
    theme: "Public Health",
    areas: [
      {
        title: "Disease & Prevention",
        body: "Epidemiology, surveillance, prevention, infectious disease, non-communicable disease and population health.",
      },
      {
        title: "Environmental Health",
        body: "Pollution, lead and other toxins, heat, water, occupational exposure and climate-related health risks.",
      },
      {
        title: "Health Systems",
        body: "Implementation, service delivery, diagnostics, workforce, digital health, AI-enabled health and institutional resilience.",
      },
    ],
  },
];

const crossThemes = [
  {
    title: "AI × Climate",
    body: "Forecasting, Earth observation, agricultural intelligence, climate modelling and environmental decision systems.",
  },
  {
    title: "AI × Public Health",
    body: "Diagnostics, surveillance, health data, decision support, digital health and research acceleration.",
  },
  {
    title: "Climate × Public Health",
    body: "Heat, infectious disease, food security, water, air quality and environmental exposure.",
  },
];

const centre = [
  {
    title: "Research Studios",
    body: "Flexible working environments for fellows, research teams, visiting researchers and collaborative projects.",
  },
  {
    title: "AI & Data Lab",
    body: "Shared compute, data infrastructure, research engineering and technical support for computational research.",
  },
  {
    title: "Research Incubator",
    body: "Space and support for selected projects progressing towards prototypes, technologies, products and ventures.",
  },
  {
    title: "Convening Spaces",
    body: "Rooms for seminars, policy sessions, workshops, visiting researchers, research presentations and smaller institutional gatherings.",
  },
  { title: "Research Support", body: "Methods, writing, ethics, data, grants, publication and research-translation support." },
];

const takePart = [
  {
    title: "Explore our research",
    body: "Discover the questions YARA researchers are pursuing across artificial intelligence, climate and public health.",
    cta: "Explore Research",
    href: "/research",
  },
  {
    title: "Join YARA",
    body: "Find current fellowships, research programmes and opportunities to work with YARA.",
    cta: "See Opportunities",
    href: "/opportunities",
  },
  {
    title: "Partner with YARA",
    body: "Work with us across research, data, mentorship, policy, industry, technology and research application.",
    cta: "Partner with us",
    href: "/get-involved/partner",
  },
  {
    title: "Donate",
    body: "Support researchers, research programmes, datasets, infrastructure and the pathways that allow promising work to go further.",
    cta: "Donate",
    href: "/donate",
  },
];

const financing = [
  "Multi-year philanthropic support",
  "Research grants",
  "Institutional partnerships",
  "Corporate research collaboration",
  "Capital for research translation",
];

function ReadMore({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <details className="group mt-4">
      <summary
        className={cx(
          "inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium [&::-webkit-details-marker]:hidden",
          tone === "dark" ? "text-lime" : "text-forest",
        )}
      >
        <Plus aria-hidden className="size-4 transition-transform group-open:rotate-45" />
        <span className="group-open:hidden">Read more</span>
        <span className="hidden group-open:inline">Show less</span>
      </summary>
      <div className={cx("mt-3 space-y-3 text-sm leading-relaxed", tone === "dark" ? "text-white/80" : "text-ink/75")}>
        {children}
      </div>
    </details>
  );
}

function Badge({ n }: { n: string | number }) {
  return (
    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-lime text-sm font-semibold text-forest-deep">
      {n}
    </span>
  );
}

export default function StrategyPage() {
  return (
    <>
      <header className="bg-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold tracking-[0.14em] text-forest-deep uppercase">
              YARA 2031
            </span>
            <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-forest sm:text-5xl md:text-6xl">
              Building Stronger Research Pathways
            </h1>
            <p className="mt-4 text-2xl font-light text-ink italic">Our five-year strategy, 2027–2031</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
              YARA was founded around a simple idea: Africa needs stronger pathways through which promising researchers
              can develop rigorous work and carry that work further.
            </p>
          </div>
          <div className="space-y-4 text-ink/80 lg:pt-16">
            <p className="leading-relaxed">
              Over the next five years, we will build those pathways by developing research talent across Africa,
              sustaining focused work in artificial intelligence, climate and public health, building the data and
              technical capabilities those fields require, creating stronger routes from research to policy, innovation
              and commercialisation, and mobilising the partnerships and capital required to sustain this work across
              the continent.
            </p>
            <p className="leading-relaxed">
              Our ambition is for more African researchers to produce rigorous, locally grounded work, and for more of
              that work to contribute to better decisions, stronger institutions, new technologies and economic
              opportunity across Africa.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/research">Explore Research</ButtonLink>
              <ButtonLink href="/opportunities" variant="lime">
                See Opportunities
              </ButtonLink>
            </div>
          </div>
        </div>
      </header>

      {/* FIVE OPPORTUNITIES */}
      <Section tone="forest" labelledBy="opportunities">
        <SectionHeading
          id="opportunities"
          tone="light"
          eyebrow="Five opportunities shaping our next five years"
          title="Five Strategic Opportunities"
          className="mb-10"
        />
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o) => (
            <li
              key={o.n}
              id={`opportunity-${o.n}`}
              className="flex flex-col rounded-[var(--radius-card)] bg-white p-6 text-ink"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-forest/60">{o.n}</span>
                <ArrowRight aria-hidden className="size-4 -rotate-45 text-forest/50" />
              </div>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-forest">{o.name}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{o.lead}</p>
              {o.areas && (
                <ul className="mt-4 space-y-1.5 text-sm">
                  {o.areas.map((a) => (
                    <li key={a.title} className="flex gap-2">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-forest" />
                      {a.title}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex-1">
                <ReadMore>
                  {o.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {o.areasIntro && <p>{o.areasIntro}</p>}
                  {o.areas?.map((a) => (
                    <p key={a.title}>
                      <strong className="font-medium text-ink">{a.title}.</strong> {a.body}
                    </p>
                  ))}
                  {o.after?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </ReadMore>
              </div>
              <ArrowLink href={o.href} className="mt-5 text-sm text-forest">
                Our response<span className="sr-only">: {o.name}</span>
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* THEORY OF CHANGE */}
      <Section tone="lime" labelledBy="theory">
        <SectionHeading
          id="theory"
          eyebrow="Our theory of change"
          title="Theory of Change"
          intro="YARA’s work follows a simple progression."
          className="mb-10 [&_h2]:text-forest-deep"
        />
        <ol className="grid gap-3 rounded-[var(--radius-panel)] bg-white p-5 md:p-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1.2fr_auto_1fr] lg:items-center">
          {stages.map((st, i) => (
            <li key={st.title} className="contents">
              <div className="rounded-[var(--radius-card)] bg-cream p-5">
                <span className="text-xs font-semibold tracking-[0.12em] text-forest/60 uppercase">Step {i + 1}</span>
                <h3 className="mt-2 font-medium text-forest">{st.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{st.body}</p>
              </div>
              <ArrowRight aria-hidden className="mx-auto size-5 rotate-90 text-forest lg:rotate-0" />
            </li>
          ))}
          <li className="contents">
            <div className="rounded-[var(--radius-card)] bg-lime-soft p-4">
              <h3 className="text-xs font-semibold tracking-[0.12em] text-forest uppercase">Pathways</h3>
              <ul className="mt-2 space-y-2">
                {pathways.map((pw) => (
                  <li key={pw.title} className="rounded-lg bg-white p-2.5">
                    <p className="text-sm font-medium text-forest">{pw.title}</p>
                    <p className="text-xs leading-snug text-ink/70">{pw.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <ArrowRight aria-hidden className="mx-auto size-5 rotate-90 text-forest lg:rotate-0" />
          </li>
          <li className="rounded-[var(--radius-card)] bg-forest p-5 text-white">
            <h3 className="font-medium text-lime">Longer-term Change</h3>
            <p className="mt-1 text-sm leading-relaxed text-white/85">
              More African researchers are able to sustain serious research careers, and more African research
              contributes to knowledge, decisions, technologies, institutions and solutions.
            </p>
          </li>
        </ol>
      </Section>

      {/* HOW YARA IS GROWING */}
      <Section labelledBy="capability">
        <SectionHeading
          id="capability"
          eyebrow="How YARA is growing"
          title="Building more capability"
          intro="The next five years will require YARA to build capabilities that strengthen researchers and research across all three priority areas."
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <li key={c.title} className="flex flex-col rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line">
              <Badge n={i + 1} />
              <h3 className="mt-4 text-lg font-medium tracking-tight text-forest">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{c.body[0]}</p>
              {c.body.length > 1 && (
                <ReadMore>
                  {c.body.slice(1).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </ReadMore>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <SectionHeading
            title="Taking our impact further"
            intro={
              <>
                <p>YARA’s work should not stop when a research project is completed.</p>
                <p className="mt-2">
                  Over the next five years, we will build stronger routes through which good research can continue.
                </p>
              </>
            }
            className="mb-10"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactRoutes.map((r, i) => (
              <li key={r.title} className="rounded-[var(--radius-card)] bg-forest p-6 text-white">
                <Badge n={i + 1} />
                <h3 className="mt-4 text-lg font-medium tracking-tight text-lime">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{r.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/85">
            During this period, YARA intends to establish a Research Incubator and a Research &amp; Translation Fund to
            provide selected projects with continuation funding, technical support, partnerships and access to the
            expertise required for their next stage.
          </p>
        </div>

        <div className="mt-20 grid gap-8 rounded-[var(--radius-panel)] bg-white p-8 ring-1 ring-line md:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 className="text-balance text-2xl font-medium leading-tight tracking-tight text-forest md:text-3xl">
            Building the capacity to carry both forward
          </h2>
          <div className="space-y-4 leading-relaxed text-ink/85">
            <p>Growing YARA’s research and its reach requires an institution capable of sustaining them.</p>
            <p>Over the next five years, YARA will strengthen the people, systems and partnerships behind the work.</p>
            <p>
              That means building a full-time research and programme team, stronger research governance, ethics and data
              systems, IP and commercialisation frameworks, research and industry partnerships, financial management,
              fundraising capability and long-term institutional funding.
            </p>
            <p>
              It also means investing in the digital, computational and physical infrastructure researchers need to work
              well.
            </p>
          </div>
        </div>
      </Section>

      {/* TARGETS */}
      <Section tone="lime" labelledBy="targets">
        <SectionHeading
          id="targets"
          eyebrow="Our ambitions"
          title="What We Intend to Build by 2031"
          className="mb-10 [&_h2]:text-forest-deep"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map((t) => (
            <li key={t.label} className="rounded-[var(--radius-card)] bg-white p-6">
              <p className="text-4xl font-medium tracking-tight text-forest">{t.n}</p>
              <p className="mt-2 text-sm leading-snug text-ink/75">{t.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* RESEARCH DEPTH */}
      <Section labelledBy="depth">
        <SectionHeading
          id="depth"
          eyebrow="Our research agenda"
          title="Building Research Depth"
          intro="YARA’s research agenda will remain concentrated in three areas where stronger African research capacity can materially improve knowledge, decisions and institutions."
          className="mb-10"
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {depth.map((d) => (
            <li key={d.theme} className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <h3 className="text-xl font-medium tracking-tight text-forest">{d.theme}</h3>
              <ul className="mt-4 space-y-4">
                {d.areas.map((a) => (
                  <li key={a.title} className="flex gap-3">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-forest" />
                    <div>
                      <p className="font-medium text-ink">{a.title}</p>
                      <p className="text-sm leading-relaxed text-ink/70">{a.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-[var(--radius-panel)] bg-lime-soft p-8 md:p-10">
          <h3 className="text-2xl font-medium tracking-tight text-forest">Working across themes</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
            These areas should not operate as silos. Some of the most important research questions sit between them.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {crossThemes.map((c) => (
              <li key={c.title} className="rounded-[var(--radius-card)] bg-white p-5">
                <h4 className="font-medium text-forest">{c.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{c.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl leading-relaxed text-ink/80">
            Across all three areas, YARA’s task remains consistent: develop researchers, produce locally grounded
            evidence and create stronger pathways through which that evidence can be used.
          </p>
        </div>
      </Section>

      {/* HOME FOR THE WORK */}
      <Section tone="forest" labelledBy="home">
        <SectionHeading
          id="home"
          tone="light"
          eyebrow="A home for the work"
          title="Building a permanent home for African research talent."
          intro={
            <>
              <p>By 2031, YARA aims to establish a permanent YARA Research &amp; Innovation Centre in Accra.</p>
              <p className="mt-2">
                The Centre would give researchers, programmes and partnerships a physical home while connecting YARA’s
                Pan-African network to a permanent institutional base. It would include:
              </p>
            </>
          }
          className="mb-10"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {centre.map((c, i) => (
            <li key={c.title} className="rounded-[var(--radius-card)] bg-lime p-6 text-forest-deep">
              <span className="text-2xl font-medium">{i + 1}</span>
              <h3 className="mt-3 font-medium">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-deep/80">{c.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl leading-relaxed text-white/80">
          YARA does not need to own every specialised laboratory or research facility. Partnerships with universities,
          hospitals, research institutes, public agencies and industry can extend the infrastructure available to YARA
          researchers across Africa.
        </p>
      </Section>

      {/* FINANCING + LOOKING AHEAD */}
      <Section tone="white" labelledBy="financing">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="financing" eyebrow="Financing the next five years" title="Sustainable Financing" />
            <p className="mt-5 leading-relaxed text-ink/85">
              The ambition of this strategy will require more than annual programme grants. YARA will work towards a
              diversified financing base that combines:
            </p>
            <ul className="mt-5 space-y-2.5">
              {financing.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span aria-hidden className="flex size-6 items-center justify-center rounded-full bg-lime text-forest">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-ink/85">
              A dedicated YARA Research &amp; Translation Fund will provide resources for promising research to continue
              beyond its initial project cycle, including follow-on research, data collection, policy pilots,
              prototypes, validation and incubation.
            </p>
            <p className="mt-4 leading-relaxed text-ink/85">
              The final five-year capital target will be set through the financial model that accompanies this
              strategy.
            </p>
          </div>
          <div className="rounded-[var(--radius-panel)] bg-cream p-8 md:p-10">
            <SectionHeading eyebrow="Looking ahead" className="mb-5" />
            <div className="space-y-4 leading-relaxed text-ink/85">
              <p>YARA is still at the beginning of its institutional journey.</p>
              <p>
                The next five years are about building the capabilities that allow a promising research programme to
                become a durable African research institution.
              </p>
              <p>
                By 2031, we want YARA to be identifying research talent across the continent, supporting substantial
                work in artificial intelligence, climate and public health, strengthening the datasets and technical
                capabilities available to African researchers, and creating credible pathways through which research
                can reach publication, policy, industry, innovation and commercialisation.
              </p>
              <p>
                We want researchers to have somewhere to pursue important questions, somewhere for strong work to
                continue growing, and stronger connections to the institutions capable of taking that work further.
              </p>
              <p className="font-medium text-forest">That is the institution YARA intends to build.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* TAKE PART */}
      <Section labelledBy="take-part">
        <SectionHeading id="take-part" eyebrow="Take part" title="Take Part in YARA" className="mb-10" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {takePart.map((t, i) => (
            <li
              key={t.title}
              className={cx(
                "flex flex-col rounded-[var(--radius-card)] p-7",
                i % 2 ? "bg-lime text-forest-deep" : "bg-white ring-1 ring-line",
              )}
            >
              <h3 className="text-xl font-medium tracking-tight text-forest">{t.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed opacity-80">{t.body}</p>
              <ArrowLink href={t.href} className="mt-6 text-forest">
                {t.cta}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
