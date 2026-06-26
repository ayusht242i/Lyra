import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './About.css'

export default function About() {
  useEffect(() => { document.title = 'About — Lyra' }, [])

  return (
    <>
      <Navbar />
      <main className="about-page">
        <div className="container">
          <div className="about-hero">
            <div className="section-eyebrow">// About</div>
            <h1>We're building the platform we always wanted.</h1>
            <p>
              Lyra started in 2021 when two engineers got tired of wiring together the same five services
              for every new project. We decided to build the opinionated infrastructure layer that just works —
              so teams can focus on their product instead of their platform.
            </p>
          </div>

          <div className="about-stats">
            {[
              { n: '3,000+', label: 'Teams building on Lyra' },
              { n: '37',     label: 'Global edge regions' },
              { n: '99.99%', label: 'Uptime SLA' },
              { n: '4s',     label: 'Average deploy time' },
            ].map(s => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat__n">{s.n}</span>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <h2>Want to join us?</h2>
            <p>We're hiring across engineering, design, and go-to-market. Remote-first, async-friendly.</p>
            <Link to="/about" className="btn btn--primary btn--md">View open roles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
