import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './Docs.css'

const DOCS_SECTIONS = [
  {
    title: 'Getting Started',
    links: ['Quick start', 'Installation', 'Your first deploy', 'Project structure', 'Environment variables'],
  },
  {
    title: 'Database',
    links: ['Connecting', 'Schema migrations', 'Branching', 'Read replicas', 'Backups & restore'],
  },
  {
    title: 'Authentication',
    links: ['Overview', 'Email & password', 'Magic links', 'OAuth providers', 'SSO / SAML', 'Passkeys'],
  },
  {
    title: 'Functions',
    links: ['Writing functions', 'Streaming responses', 'Scheduled jobs (cron)', 'Environment', 'Limits'],
  },
  {
    title: 'Storage',
    links: ['Buckets', 'Uploading files', 'Signed URLs', 'Image transforms', 'Policies'],
  },
  {
    title: 'Observability',
    links: ['Logs', 'Metrics', 'Traces', 'Session replay', 'Error budgets', 'Alerts'],
  },
]

export default function Docs() {
  useEffect(() => { document.title = 'Docs — Lyra' }, [])

  return (
    <>
      <Navbar />
      <main className="docs-page">
        <div className="container">
          <div className="docs-hero">
            <div className="section-eyebrow">// Documentation</div>
            <h1>Lyra Docs</h1>
            <p>Everything you need to build, deploy, and scale on Lyra.</p>
            <div className="docs-search">
              <input type="search" placeholder="Search docs…" aria-label="Search documentation" />
            </div>
          </div>

          <div className="docs-grid">
            {DOCS_SECTIONS.map(s => (
              <div className="docs-card" key={s.title}>
                <h2>{s.title}</h2>
                <ul>
                  {s.links.map(l => (
                    <li key={l}><a href="#">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="docs-quickstart">
            <h2>Quick start</h2>
            <pre className="platform__code" style={{marginTop:16}}>
              <code>{`npm install -g lyra-cli
lyra login
lyra init my-app
cd my-app
lyra dev`}
              </code>
            </pre>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
