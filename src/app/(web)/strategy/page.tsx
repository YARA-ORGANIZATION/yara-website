import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/Art";
import { ArrowLink, Eyebrow, PageHero, Prose, Section, SectionHeading, cx } from "@/components/ui";

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

function MiniCard({ title, body, tone = "white" }: { title: string; body: string; tone?: "white" | "lime" | "forest" }) {
  const tones = {
    white: "bg-white ring-1 ring-line text-ink",
    lime: "bg-lime text-forest-deep",
    forest: "bg-forest text-white",
  };
  return (
    <li className={cx("rounded-[var(--radius-card)] p-6", tones[tone])}>
      <h4 className={cx("text-lg font-medium tracking-tight", tone === "white" && "text-forest", tone === "forest" && "text-lime")}>
        {title}
      </h4>
      <p className={cx("mt-2 leading-relaxed", tone === "forest" ? "text-white/80" : "opacity-85")}>{body}</p>
    </li>
  );
}

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="YARA 2031"
        aside={<Photo src="/images/brand/leaf-map.jpg" alt="A map of the world made of green leaves" className="hidden aspect-[16/9] lg:block" priority />}
        title={
          <>
            Building Stronger Research Pathways
            <span className="mt-4 block text-2xl font-light text-ink italic md:text-3xl">
              Our five-year strategy, 2027–2031
            </span>
          </>
        }
        lede={
          <>
            <p>
              YARA was founded around a simple idea: Africa needs stronger pathways through which promising researchers
              can develop rigorous work and carry that work further.
            </p>
            <p className="text-base md:text-lg">
              Over the next five years, we will build those pathways by developing research talent across Africa,
              sustaining focused work in artificial intelligence, climate and public health, building the data and
              technical capabilities those fields require, creating stronger routes from research to policy, innovation
              and commercialisation, and mobilising the partnerships and capital required to sustain this work across
              the continent.
            </p>
            <p className="text-base md:text-lg">
              Our ambition is for more African researchers to produce rigorous, locally grounded work, and for more of
              that work to contribute to better decisions, stronger institutions, new technologies and economic
              opportunity across Africa.
            </p>
          </>
        }
      />

      {/* FIVE OPPORTUNITIES */}
      <Section tone="forest" labelledBy="opportunities">
        <SectionHeading
          id="opportunities"
          tone="light"
          eyebrow="Five opportunities shaping our next five years"
          title="Five strategic opportunities"
        />
        <nav aria-label="Opportunities" className="mt-10 flex flex-wrap gap-2">
          {opportunities.map((o) => (
            <a
              key={o.n}
              href={`#opportunity-${o.n}`}
              className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/85 transition-colors hover:border-lime hover:text-lime"
            >
              {o.n} {o.name}
            </a>
          ))}
        </nav>
      </Section>

      {opportunities.map((o, i) => (
        <Section
          key={o.n}
          id={`opportunity-${o.n}`}
          tone={i % 2 === 0 ? "cream" : "white"}
          labelledBy={`opp-${o.n}`}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-6xl font-medium tracking-tight text-lime [-webkit-text-stroke:1.5px_var(--color-forest)] md:text-7xl">
                {o.n}
              </p>
              <h2 id={`opp-${o.n}`} className="mt-4 text-sm font-semibold tracking-[0.14em] text-forest uppercase">
                {o.name}
              </h2>
              <p className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
                {o.lead}
              </p>
            </div>
            <div>
              <Prose>
                {o.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {o.areasIntro && <p>{o.areasIntro}</p>}
              </Prose>
              {o.areas && (
                <ul className="mt-6 grid gap-4 md:grid-cols-3">
                  {o.areas.map((a) => (
                    <MiniCard key={a.title} {...a} tone="lime" />
                  ))}
                </ul>
              )}
              {o.after && (
                <Prose className="mt-6">
                  {o.after.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </Prose>
              )}
              <ArrowLink href={o.href} className="mt-8 text-forest">
                Our response<span className="sr-only">: {o.name}</span>
              </ArrowLink>
            </div>
          </div>
        </Section>
      ))}

      {/* THEORY OF CHANGE */}
      <Section tone="lime" labelledBy="theory">
        <SectionHeading
          id="theory"
          eyebrow="Our theory of change"
          title="YARA’s work follows a simple progression."
          className="[&_h2]:text-forest-deep"
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {stages.map((s, i) => (
            <li key={s.title} className="relative rounded-[var(--radius-card)] bg-cream p-6">
              <span className="text-sm font-medium text-forest/60">Step {i + 1}</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight text-forest">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{s.body}</p>
              {i < stages.length - 1 && (
                <ArrowRight aria-hidden className="absolute top-1/2 -right-4 z-10 hidden size-6 -translate-y-1/2 text-forest md:block" />
              )}
            </li>
          ))}
        </ol>
        <h3 className="mt-12 text-sm font-semibold tracking-[0.14em] text-forest-deep uppercase">Pathways</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((p) => (
            <MiniCard key={p.title} {...p} tone="forest" />
          ))}
        </ul>
        <div className="mt-4 rounded-[var(--radius-card)] bg-forest-deep p-7 text-white">
          <h3 className="text-xl font-medium tracking-tight text-lime">Longer-term Change</h3>
          <p className="mt-2 max-w-3xl text-lg leading-relaxed text-white/85">
            More African researchers are able to sustain serious research careers, and more African research contributes
            to knowledge, decisions, technologies, institutions and solutions.
          </p>
        </div>
      </Section>

      {/* HOW YARA IS GROWING */}
      <Section labelledBy="capability">
        <SectionHeading
          id="capability"
          eyebrow="How YARA is growing"
          title="Building more capability"
          intro="The next five years will require YARA to build capabilities that strengthen researchers and research across all three priority areas."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map((c) => (
            <li key={c.title} className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <h3 className="text-xl font-medium tracking-tight text-forest">{c.title}</h3>
              <div className="mt-3 space-y-3 leading-relaxed text-ink/80">
                {c.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="further">
        <SectionHeading
          id="further"
          title="Taking our impact further"
          intro={
            <>
              <p>YARA’s work should not stop when a research project is completed.</p>
              <p className="mt-3">Over the next five years, we will build stronger routes through which good research can continue.</p>
            </>
          }
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactRoutes.map((r) => (
            <MiniCard key={r.title} {...r} tone="lime" />
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/85">
          During this period, YARA intends to establish a Research Incubator and a Research &amp; Translation Fund to
          provide selected projects with continuation funding, technical support, partnerships and access to the
          expertise required for their next stage.
        </p>
      </Section>

      <Section labelledBy="capacity">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <h2 id="capacity" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest md:text-4xl">
            Building the capacity to carry both forward
          </h2>
          <Prose>
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
          </Prose>
        </div>
      </Section>

      {/* TARGETS */}
      <Section tone="forest" labelledBy="targets">
        <SectionHeading id="targets" tone="light" title="What we intend to build by 2031" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map((t) => (
            <li key={t.label} className="bg-forest p-6">
              <p className="text-4xl font-medium tracking-tight text-lime md:text-5xl">{t.n}</p>
              <p className="mt-3 leading-snug text-white/80">{t.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* RESEARCH DEPTH */}
      <Section labelledBy="depth">
        <SectionHeading
          id="depth"
          title="Building research depth"
          intro="YARA’s research agenda will remain concentrated in three areas where stronger African research capacity can materially improve knowledge, decisions and institutions."
        />
        <div className="mt-12 space-y-10">
          {depth.map((d) => (
            <div key={d.theme}>
              <h3 className="text-2xl font-medium tracking-tight text-forest">{d.theme}</h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-3">
                {d.areas.map((a) => (
                  <MiniCard key={a.title} {...a} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-[var(--radius-panel)] bg-forest p-8 text-white md:p-12">
          <h3 className="text-3xl font-medium tracking-tight text-lime">Working across themes</h3>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            These areas should not operate as silos. Some of the most important research questions sit between them.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {crossThemes.map((c) => (
              <MiniCard key={c.title} {...c} tone="lime" />
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85">
            Across all three areas, YARA’s task remains consistent: develop researchers, produce locally grounded
            evidence and create stronger pathways through which that evidence can be used.
          </p>
        </div>
      </Section>

      {/* HOME FOR THE WORK */}
      <Section tone="lime" labelledBy="home">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-4 text-forest-deep">A home for the work</Eyebrow>
            <h2 id="home" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest-deep md:text-5xl">
              Building a permanent home for African research talent.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-forest-deep/85">
              By 2031, YARA aims to establish a permanent YARA Research &amp; Innovation Centre in Accra.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-forest-deep/85">
              The Centre would give researchers, programmes and partnerships a physical home while connecting YARA’s
              Pan-African network to a permanent institutional base.
            </p>
          </div>
          <div>
            <p className="font-medium text-forest-deep">It would include:</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {centre.map((c) => (
                <li key={c.title} className="rounded-[var(--radius-card)] bg-cream p-6">
                  <h3 className="text-lg font-medium tracking-tight text-forest">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/80">{c.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-forest-deep/85">
              YARA does not need to own every specialised laboratory or research facility. Partnerships with
              universities, hospitals, research institutes, public agencies and industry can extend the infrastructure
              available to YARA researchers across Africa.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="financing">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-4">Financing the next five years</Eyebrow>
            <h2 id="financing" className="sr-only">
              Financing the next five years
            </h2>
            <Prose>
              <p>The ambition of this strategy will require more than annual programme grants.</p>
              <p>
                YARA will work towards a diversified financing base that combines multi-year philanthropic support,
                research grants, institutional partnerships, corporate research collaboration and capital for research
                translation.
              </p>
              <p>
                A dedicated YARA Research &amp; Translation Fund will provide resources for promising research to
                continue beyond its initial project cycle, including follow-on research, data collection, policy pilots,
                prototypes, validation and incubation.
              </p>
              <p>The final five-year capital target will be set through the financial model that accompanies this strategy.</p>
            </Prose>
          </div>
          <div>
            <Eyebrow className="mb-4">Looking ahead</Eyebrow>
            <Prose>
              <p>YARA is still at the beginning of its institutional journey.</p>
              <p>
                The next five years are about building the capabilities that allow a promising research programme to
                become a durable African research institution.
              </p>
              <p>
                By 2031, we want YARA to be identifying research talent across the continent, supporting substantial work
                in artificial intelligence, climate and public health, strengthening the datasets and technical
                capabilities available to African researchers, and creating credible pathways through which research can
                reach publication, policy, industry, innovation and commercialisation.
              </p>
              <p>
                We want researchers to have somewhere to pursue important questions, somewhere for strong work to
                continue growing, and stronger connections to the institutions capable of taking that work further.
              </p>
              <p className="font-medium text-forest">That is the institution YARA intends to build.</p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section tone="forest" labelledBy="take-part">
        <SectionHeading id="take-part" tone="light" eyebrow="Take part" title="Take part" className="[&_h2]:sr-only" />
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {takePart.map((t) => (
            <li key={t.title} className="flex flex-col rounded-[var(--radius-card)] bg-cream p-7 text-ink">
              <h3 className="text-xl font-medium tracking-tight text-forest">{t.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/80">{t.body}</p>
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
