import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './Features.css'

const FEATURES = [
  {
    category: 'Infrastructure',
    items: [
      { title: 'Edge-native deploys', desc: 'Deploy to 37 regions simultaneously in under 4 seconds. Your users always hit the nearest node with sub-10ms cold starts.' },
      { title: 'Branch deployments', desc: 'Every PR gets its own isolated preview environment with a unique URL. Share with stakeholders before merging.' },
      { title: 'Zero-downtime deploys', desc: 'Rolling deployments ensure your app stays live through every update. Instant rollback with one command.' },
    ]
  },
  {
    category: 'Database',
    items: [
      { title: 'Managed Postgres', desc: 'Fully managed PostgreSQL with automatic backups, point-in-time recovery, and zero maintenance windows.' },
      { title: 'Database branching', desc: 'Create a copy of your database for each feature branch. Merge schema changes like code.' },
      { title: 'Read replicas', desc: 'Automatically route read queries to replicas across regions. Scale reads independently of writes.' },
    ]
  },
  {
    category: 'Auth & Security',
    items: [
      { title: 'Auth in 30 seconds', desc: 'Email, magic links, OAuth, SSO, and passkeys out of the box. One config file, zero glue code.' },
      { title: 'Row-level security', desc: 'Define access policies at the database row level. Your RLS policies travel with your schema.' },
      { title: 'Audit logs', desc: 'Every action, every change, timestamped and immutable. Export to your SIEM of choice.' },
    ]
  },
  {
    category: 'Observability',
    items: [
      { title: 'Unified logs', desc: 'Logs from every function, API route, and database query in one place. Filter by deploy, region, or user.' },
      { title: 'Session replay', desc: 'See exactly what your users experienced before an error. No extra SDK required.' },
      { title: 'Error budgets', desc: 'Set SLO targets and track error budgets automatically. Know when to pause shipping.' },
    ]
  },
]

export default function Features() {
  useEffect(() => { document.title = 'Features — Lyra' }, [])

  return (
    <>
      <Navbar />
      <main className="features-page">
        <div className="container">
          <div className="features-hero">
            <div className="section-eyebrow">// Features</div>
            <h1>Everything your team needs.<br />Nothing you don't.</h1>
            <p>Lyra bundles the infrastructure stack modern SaaS teams assemble from scratch — so you can focus on your product.</p>
            <Link to="/pricing" className="btn btn--primary btn--md">Start free trial</Link>
          </div>

          {FEATURES.map(group => (
            <div className="features-group" key={group.category}>
              <h2 className="features-category">{group.category}</h2>
              <div className="features-items">
                {group.items.map(item => (
                  <div className="features-item" key={item.title}>
                    <div className="features-item__icon" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
