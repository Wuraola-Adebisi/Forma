import type { ReactNode } from 'react'
import { BRAND, REPO_URL } from '../brand'
import { Mark } from '../Mark'
import { Link } from '../router'

const nav = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/about', label: 'About' },
]

export function SiteHeader({ path }: { path: string }) {
  return (
    <header className="wrap site-header">
      <Link to="/" className="brand" aria-label={`${BRAND} home`}><Mark />{BRAND}</Link>
      <nav className="site-nav" aria-label="Main">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} aria-current={path === n.to ? 'page' : undefined}>{n.label}</Link>
        ))}
      </nav>
      <Link to="/workspace" className="btn btn-primary btn-sm">Open planner</Link>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {BRAND}. Room planning for the furniture you already own.</p>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/how-it-works">How it works</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <a href={REPO_URL} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  )
}

export function Shell({ path, children }: { path: string; children: ReactNode }) {
  return (
    <div className="site">
      <SiteHeader path={path} />
      {children}
      <SiteFooter />
    </div>
  )
}

export function CtaBand({ title }: { title: string }) {
  return (
    <section className="wrap">
      <div className="cta-band on-dark">
        <h2>{title}</h2>
        <Link to="/workspace" className="btn btn-primary">Open the planner</Link>
      </div>
    </section>
  )
}
