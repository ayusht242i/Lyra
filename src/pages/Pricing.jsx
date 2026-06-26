import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './Pricing.css'

const CURRENCIES = {
  USD: { symbol: '$', rates: { starter: 10, pro: 39, enterprise: 149 } },
  EUR: { symbol: '€', rates: { starter: 9,  pro: 36, enterprise: 139 } },
  INR: { symbol: '₹', rates: { starter: 840, pro: 3250, enterprise: 12500 } },
}
const ANNUAL_DISCOUNT = 0.20

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For solo builders.',
    features: ['1 project','10k requests / mo','Community support','1 GB storage'],
    cta: 'Start free',
    ctaTo: '/pricing',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing teams.',
    features: ['Unlimited projects','1M requests / mo','Priority support','100 GB storage','Branch deploys'],
    cta: 'Start free trial',
    ctaTo: '/pricing',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For scaling orgs.',
    features: ['Unlimited everything','SSO + SAML','Dedicated support','Custom SLAs','Audit logs'],
    cta: 'Contact sales',
    ctaTo: '/pricing',
  },
]

function price(plan, currency, annual) {
  const base = CURRENCIES[currency].rates[plan]
  const monthly = annual ? base * (1 - ANNUAL_DISCOUNT) : base
  return { monthly: monthly.toFixed(0), annual: (monthly * 12).toFixed(0) }
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [currency, setCurrency] = useState('USD')

  useEffect(() => { document.title = 'Pricing — Lyra' }, [])

  const sym = CURRENCIES[currency].symbol

  return (
    <>
      <Navbar />
      <main className="pricing-page">
        <div className="container">
          <div className="pricing-hero">
            <div className="section-eyebrow">// Pricing</div>
            <h1>Honest pricing.</h1>
            <p>Pick a plan, change anytime, cancel in two clicks.</p>
          </div>

          <div className="pricing-controls">
            <div className="billing-toggle">
              <button
                className={`billing-btn${!annual ? ' billing-btn--active' : ''}`}
                onClick={() => setAnnual(false)}
              >Monthly</button>
              <button
                className={`billing-btn${annual ? ' billing-btn--active' : ''}`}
                onClick={() => setAnnual(true)}
              >Annual <span className="discount-badge">−20%</span></button>
            </div>

            <select
              className="currency-select"
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              aria-label="Currency"
            >
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="INR">INR ₹</option>
            </select>
          </div>

          <div className="plans-grid">
            {PLANS.map(plan => {
              const p = price(plan.id, currency, annual)
              return (
                <div className={`plan-card${plan.popular ? ' plan-card--popular' : ''}`} key={plan.id}>
                  {plan.popular && <div className="plan-badge">Most Popular</div>}
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-tagline">{plan.tagline}</div>
                  <div className="plan-price">
                    <span className="plan-sym">{sym}</span>
                    <span className="plan-amount">{p.monthly}</span>
                    <span className="plan-period">/mo</span>
                  </div>
                  {annual && (
                    <div className="plan-annual">billed annually ({sym}{p.annual} / year)</div>
                  )}
                  <ul className="plan-features">
                    {plan.features.map(f => (
                      <li key={f}><span className="check">✓</span>{f}</li>
                    ))}
                  </ul>
                  <Link
                    to={plan.ctaTo}
                    className={`btn btn--md ${plan.popular ? 'btn--primary' : 'btn--outline'}`}
                    style={{width:'100%', marginTop:'auto'}}
                  >
                    {plan.cta}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="pricing-footnote">
            All plans include a 14-day free trial. No credit card required.
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
