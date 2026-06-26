import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/pricing',  label: 'Pricing'  },
    { to: '/docs',     label: 'Docs'     },
    { to: '/changelog',label: 'Changelog'},
    { to: '/about',    label: 'About'    },
  ]

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">▲</span> Lyra
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link${location.pathname === l.to ? ' navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/pricing" className="btn btn--ghost btn--sm">Sign in</Link>
          <Link to="/pricing" className="btn btn--primary btn--sm">Get started</Link>
        </div>

        <button
          className="navbar__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="navbar__mobile-link">{l.label}</Link>
          ))}
          <div className="navbar__mobile-actions">
            <Link to="/pricing" className="btn btn--ghost btn--sm">Sign in</Link>
            <Link to="/pricing" className="btn btn--primary btn--sm">Get started</Link>
          </div>
        </div>
      )}
    </header>
  )
}
