import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">▲ Lyra</Link>
          <p className="footer__tagline">The opinionated platform for modern SaaS teams.</p>
          <div className="footer__social">
            <a href="https://twitter.com/lyra" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://github.com/lyra" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href="https://linkedin.com/company/lyra" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/changelog">Changelog</Link>
            <Link to="/docs">Roadmap</Link>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/about">Customers</Link>
            <Link to="/about">Careers</Link>
            <Link to="/about">Press</Link>
          </div>
          <div className="footer__col">
            <h4>Resources</h4>
            <Link to="/docs">Docs</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/docs">API</Link>
            <Link to="/docs">Status</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Lyra Systems, Inc.</span>
        <span>Built with care · v4.0.1</span>
      </div>
    </footer>
  )
}
