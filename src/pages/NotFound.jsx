import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function NotFound() {
  useEffect(() => { document.title = '404 — Lyra' }, [])

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8125rem', color: 'var(--teal-600)', marginBottom: 16 }}>// 404</div>
          <h1 style={{ fontSize: 'clamp(2rem,6vw,4rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>Page not found.</h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', marginBottom: 32 }}>This URL doesn't exist — or it shipped to the wrong region.</p>
          <Link to="/" className="btn btn--primary btn--md">Back to home</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
