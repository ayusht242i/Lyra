import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './Home.css'

const LOGOS = ['NORTHPINE','CARAWAY','HALO LABS','FRAMEWAVE','OCTOBYTE','SUNDIAL']

const FEATURES = [
  {
    eyebrow: 'Edge-native',
    title: 'Deploy to 37 regions in under 4 seconds.',
    body: 'Cold-starts measured in milliseconds, not minutes. Your users load from the node closest to them, always.',
  },
  {
    eyebrow: 'Typed end-to-end',
    title: 'One schema, zero drift.',
    body: 'From database to UI: autocomplete every property your team ever touches. Ship without the guesswork.',
  },
  {
    eyebrow: 'Built-in observability',
    title: 'Logs, metrics, traces, and replay.',
    body: 'Wired up the moment your first request lands. No agents to install. No dashboards to configure.',
  },
]

const PLATFORM_TABS = [
  {
    id: 'database',
    label: 'Database',
    title: 'Postgres, batteries included',
    body: 'Branching, point-in-time restore, and read replicas without thinking about clusters.',
    code: `db.user.findMany({\n  where: { plan: "pro" },\n  include: { team: true }\n})`,
  },
  {
    id: 'auth',
    label: 'Auth',
    title: 'Auth in 30 seconds',
    body: 'Email, magic links, SSO, and passkeys with one config file.',
    code: `lyra.auth.signIn({\n  provider: "passkey",\n  email\n})`,
  },
  {
    id: 'storage',
    label: 'Storage',
    title: 'Object storage at the edge',
    body: 'Signed URLs, image transforms, and per-row policies.',
    code: `lyra.storage\n  .from("avatars")\n  .upload(file, { policy: "row" })`,
  },
  {
    id: 'functions',
    label: 'Functions',
    title: 'Run code anywhere',
    body: 'Same runtime in dev, preview, and prod. Stream responses, schedule cron.',
    code: `export default async (req) => {\n  return Response.json({ ok: true })\n}`,
  },
  {
    id: 'insights',
    label: 'Insights',
    title: 'Know what shipped',
    body: 'Per-deploy diffs, error budgets, and session replay tied to the commit.',
    code: `lyra logs --deploy 4a91f --tail`,
  },
]

const FAQS = [
  { q: "Is there a free trial?", a: "Yes — 14 days, no credit card required. Full Pro access from day one." },
  { q: "Can I switch plans later?", a: "Anytime. Upgrades apply immediately; downgrades apply at cycle end." },
  { q: "What counts as a \u201crequest\u201d?", a: "Any HTTP request hitting your Lyra functions or API routes. Static assets and health checks are excluded." },
  { q: "Where is my data stored?", a: "Data is stored in your chosen region. We support AWS, GCP, and Azure zones." },
  { q: "Do you have a self-hosted option?", a: "Yes. Lyra Enterprise supports self-hosted deployments with dedicated support." },
  { q: "Do you offer discounts for startups or non-profits?", a: "Yes. Apply via our startup program — approved orgs get 50% off Pro for the first year." },
  { q: "How do I cancel?", a: "Settings → Billing → Cancel. Done in two clicks. No retention flow, no call required." },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        {q}
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  )
}

export default function Home() {
  const [tab, setTab] = useState('database')
  const active = PLATFORM_TABS.find(t => t.id === tab)

  useEffect(() => {
    document.title = 'Lyra — Ship faster, sleep better'
  }, [])

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__badge">v4.0 — Now shipping</div>
        <h1 className="hero__h1">Ship faster.<br />Sleep better.</h1>
        <p className="hero__sub">
          The opinionated platform for modern SaaS teams. Build, launch, and scale without
          the busywork — backed by infrastructure that just works.
        </p>
        <div className="hero__ctas">
          <Link to="/pricing" className="btn btn--primary btn--lg">Start free trial</Link>
          <Link to="/features" className="btn btn--ghost btn--lg">See features</Link>
        </div>
        <p className="hero__trust">Trusted by 3,000+ teams</p>

        <div className="hero__terminal" aria-hidden="true">
          <div className="terminal__bar">
            <span /><span /><span />
            <code className="terminal__title">~/lyra/deploy</code>
          </div>
          <pre className="terminal__body">
{`$ lyra deploy --prod
✓ Build complete in 1.2s
✓ Deployed to 37 regions
✓ Cold-start: 8ms
  → https://app.lyra.dev`}
          </pre>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="logos">
        <div className="logos__track" aria-hidden="true">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span key={i} className="logos__item">{l}</span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section features" id="features">
        <div className="container">
          <div className="section-eyebrow">// What you get</div>
          <h2 className="section-h2">Less plumbing. More shipping.</h2>
          <div className="features__grid">
            {FEATURES.map(f => (
              <div className="feature-card" key={f.eyebrow}>
                <div className="feature-card__eyebrow">{f.eyebrow}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__body">{f.body}</p>
                <Link to="/features" className="feature-card__link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM TABS ── */}
      <section className="section platform">
        <div className="container">
          <div className="section-eyebrow">// Platform</div>
          <h2 className="section-h2">Every piece, one platform.</h2>

          <div className="platform__tabs" role="tablist">
            {PLATFORM_TABS.map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`platform__tab${tab === t.id ? ' platform__tab--active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="platform__panel" role="tabpanel">
            <div className="platform__info">
              <h3>{active.title}</h3>
              <p>{active.body}</p>
              <Link to="/features" className="btn btn--outline btn--md" style={{marginTop:20}}>Learn more</Link>
            </div>
            <pre className="platform__code"><code>{active.code}</code></pre>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq" id="faq">
        <div className="container faq__inner">
          <div className="section-eyebrow">// FAQ</div>
          <h2 className="section-h2">Frequently asked questions</h2>
          <div className="faq__list">
            {FAQS.map(item => <FAQItem key={item.q} {...item} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Stop reinventing the wheel.<br />Start shipping the product.</h2>
          <p>Free for 14 days. No credit card. No demo call. Just the platform.</p>
          <Link to="/pricing" className="btn btn--primary btn--lg">Start free →</Link>
        </div>
      </section>

      <Footer />

      <a href="#top" className="back-top" aria-label="Back to top">↑</a>
    </>
  )
}
