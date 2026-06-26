import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './Changelog.css'

const ENTRIES = [
  {
    version: 'v4.0.1',
    date: 'June 2026',
    type: 'patch',
    changes: [
      'Fixed edge case in passkey auth on Safari 17.4',
      'Improved cold-start times by 12% on eu-west-1',
      'CLI: lyra logs --tail now works offline with buffering',
    ],
  },
  {
    version: 'v4.0',
    date: 'May 2026',
    type: 'major',
    changes: [
      'Shipped branch deployments: every PR gets a full isolated environment',
      'New Insights dashboard with per-deploy diffs and session replay',
      'Passkey authentication now generally available',
      'Storage image transforms now run at the edge in all 37 regions',
      'CLI rewrite in Rust — 5× faster',
    ],
  },
  {
    version: 'v3.8',
    date: 'March 2026',
    type: 'minor',
    changes: [
      'Read replicas now auto-scale based on query load',
      'Added SAML 2.0 support for enterprise SSO',
      'Database branching beta: create a copy of your DB per feature branch',
      'New region: ap-southeast-3 (Jakarta)',
    ],
  },
  {
    version: 'v3.7',
    date: 'January 2026',
    type: 'minor',
    changes: [
      'Error budgets: set SLO targets and track burn rate automatically',
      'Functions runtime updated to Node 22',
      'Startup program launched — 50% off Pro for qualifying orgs',
    ],
  },
]

const TYPE_COLORS = {
  major: { bg: '#fff0f0', color: '#c53030', label: 'Major' },
  minor: { bg: '#ebf8ff', color: '#2b6cb0', label: 'Minor' },
  patch: { bg: '#f0fff4', color: '#276749', label: 'Patch' },
}

export default function Changelog() {
  useEffect(() => { document.title = 'Changelog — Lyra' }, [])

  return (
    <>
      <Navbar />
      <main className="changelog-page">
        <div className="container">
          <div className="changelog-hero">
            <div className="section-eyebrow">// Changelog</div>
            <h1>What's new in Lyra</h1>
            <p>Every release, documented. Follow the RSS feed for updates.</p>
          </div>

          <div className="changelog-list">
            {ENTRIES.map(e => {
              const t = TYPE_COLORS[e.type]
              return (
                <div className="changelog-entry" key={e.version}>
                  <div className="changelog-meta">
                    <span className="changelog-version">{e.version}</span>
                    <span className="changelog-date">{e.date}</span>
                    <span className="changelog-type" style={{ background: t.bg, color: t.color }}>
                      {t.label}
                    </span>
                  </div>
                  <ul className="changelog-changes">
                    {e.changes.map(c => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
