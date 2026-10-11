import Workspace from './App'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About NEXUS' },
]

function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <a className="site-brand" href="/" aria-label="NEXUS home">NEXUS<span>.</span></a>
      <p>A little more room to live<br />the way you want.</p>
      <a className="footer-cta" href="/workspace">Open the room editor <span>↗</span></a>
    </div>
    <div className="site-footer-bottom">
      <span>© {new Date().getFullYear()} NEXUS</span>
      <div><a href="/how-it-works">How it works</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="https://github.com/Wuraola-Adebisi/Forma" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <span>Bring your room together.</span>
    </div>
  </footer>
}

function SiteHeader({ active }: { active: string }) {
  return <header className="site-header">
    <a className="site-brand" href="/" aria-label="NEXUS home">NEXUS<span>.</span></a>
    <nav aria-label="Main navigation">{pages.map(p => <a key={p.href} className={active === p.href ? 'current' : ''} href={p.href}>{p.label}</a>)}</nav>
    <a className="site-header-cta" href="/workspace">Try NEXUS <span>↗</span></a>
  </header>
}

function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-copy">
        <span className="site-kicker"><i /> ROOM PLANNING, WITHOUT THE GUESSWORK</span>
        <h1>Make room<br />for <em>better.</em></h1>
        <p>A room can feel completely different without buying a single thing. Map your space, move the furniture you own, and find an arrangement that works for real life.</p>
        <div className="hero-actions"><a className="site-button" href="/workspace">Plan my room <span>↗</span></a><a className="text-link" href="/how-it-works">How it works <span>↗</span></a></div>
        <div className="hero-note"><span className="note-mark">01</span><span>Start with your dimensions. Make the space yours.</span></div>
      </div>
      <div className="hero-art" aria-label="Illustrated top-down room plan">
        <div className="art-board-head"><span>FIELD NOTE / N° 01</span><span>BEDROOM STUDY</span></div>
        <div className="art-room">
          <div className="art-rug"></div><div className="art-bed"><span></span><i></i><b></b></div>
          <div className="art-desk"><span></span></div><div className="art-chair"></div><div className="art-plant"><i></i><i></i><i></i><b></b></div>
          <div className="art-side-table"></div><div className="art-sun"></div>
          <span className="art-measure measure-top">360 cm</span><span className="art-measure measure-side">420 cm</span>
        </div>
        <div className="art-board-foot"><span><i></i> FURNITURE STUDY</span><span>01 — TRY A NEW ARRANGEMENT</span></div>
        <div className="art-sticker">KEEP<br />WHAT<br /><b>WORKS.</b></div>
      </div>
      <div className="hero-index">N / 001<br/>A MORE THOUGHTFUL ROOM</div>
    </section>
    <section className="home-intro site-section">
      <div className="section-aside"><span>THE NEXUS METHOD</span><span>MEASURE. MOVE.</span><span>MAKE IT WORK.</span></div>
      <div className="intro-main"><span className="section-index">01 / START WITH WHAT YOU HAVE</span><h2>Before you move<br />a thing, <em>see it.</em></h2><p>That sofa might fit better on the opposite wall. The desk could open up the whole room. NEXUS gives you a simple floor plan to try those ideas before you start lifting, shifting or spending.</p><a className="underlined-link" href="/workspace">Build your room plan <span>↗</span></a></div>
      <div className="intro-side-note"><span>LESS BUYING.</span><span>MORE REARRANGING.</span><span>BETTER LIVING.</span></div>
    </section>
    <section className="feature-section">
      <div className="feature-heading"><div><span>02 / A PRACTICAL TOOLKIT</span><h2>A few good moves<br /><em>can change everything.</em></h2></div><p>One room. Your furniture. More ways to make it work.</p></div>
      <div className="feature-grid">
        <article className="feature-card feature-pink"><span className="feature-number">01</span><div className="feature-illustration furniture-illustration"><i></i><b></b><span></span></div><div className="feature-copy"><h3>Try it before you lift it</h3><p>Drag furniture around your floor plan, rotate pieces and compare arrangements without moving anything in the room.</p></div><span className="feature-arrow">↗</span></article>
        <article className="feature-card feature-lime"><span className="feature-number">02</span><div className="feature-illustration measure-illustration"><i>360</i><b>↔</b><span>420</span></div><div className="feature-copy"><h3>Make the measurements count</h3><p>Work with room dimensions and furniture footprints to see what fits, what overlaps and where you have space.</p></div><span className="feature-arrow">↗</span></article>
        <article className="feature-card feature-lilac"><span className="feature-number">03</span><div className="feature-illustration idea-illustration"><i>WHAT IF?</i><b>↗</b><span>ANOTHER ANGLE</span></div><div className="feature-copy"><h3>Get a fresh perspective</h3><p>Ask for an AI-assisted layout based on the furniture you have and the way you want the room to work.</p></div><span className="feature-arrow">↗</span></article>
      </div>
    </section>
    <section className="home-bottom-cta"><div><span className="site-kicker">03 / YOUR SPACE, YOUR CALL</span><h2>Start with the room.<br /><em>Find your way.</em></h2><p>No account. No shopping list. Just a better way to explore your space.</p></div><a className="site-button dark-button" href="/workspace">Open the room planner <span>↗</span></a><span className="cta-serial">NEXUS<br/>ROOM TOOLS<br/>EST. 2026</span></section>
  </>
}

function HowItWorks() {
  return <main className="info-page">
    <section className="info-hero"><span className="site-kicker"><i /> HOW IT WORKS</span><h1>From “what if?”<br /><em>to a real plan.</em></h1><p>NEXUS helps you connect room dimensions, furniture and fresh layout ideas in a few simple steps. No interior-design degree required.</p><a className="site-button" href="/workspace">Try it for yourself <span>↗</span></a></section>
    <section className="steps-list">
      <article><span>01</span><div><h2>Set up your room</h2><p>Give your room a name and enter its width and length. NEXUS starts with a sample bedroom you can adjust or clear out.</p></div><b>↘</b></article>
      <article><span>02</span><div><h2>Add what you own</h2><p>Choose furniture from the catalog, then edit positions and rotate pieces. The plan uses centimetres and flags furniture that overlaps or sits outside the room.</p></div><b>↘</b></article>
      <article><span>03</span><div><h2>Try a different arrangement</h2><p>Move pieces yourself or describe your goal to request an AI-assisted layout. Review the suggestion before applying it to your plan.</p></div><b>↘</b></article>
      <article><span>04</span><div><h2>Save it or take it with you</h2><p>Save your current plan in this browser or export a JSON copy. Your saved browser data does not automatically sync to other devices.</p></div><b>↗</b></article>
    </section>
    <section className="info-callout"><span>READY TO START?</span><h2>Your room is the brief.</h2><a className="site-button dark-button" href="/workspace">Make a floor plan <span>↗</span></a></section>
  </main>
}

function About() {
  return <main className="info-page">
    <section className="info-hero about-hero"><span className="site-kicker"><i /> A NOTE ABOUT NEXUS</span><h1>Good design starts<br /><em>with what you have.</em></h1><p>NEXUS is a hands-on room planning tool that brings your room dimensions, furniture and layout ideas into one place, so you can work with what you already have.</p></section>
    <section className="about-columns"><div><span>THE BELIEF</span><h2>Your home doesn't need a makeover to feel different.</h2></div><div><p>Sometimes the answer is a better furniture arrangement, a clearer walkway, or finally finding a place for the desk. But it's hard to picture a new layout while you're standing in the middle of the old one.</p><p>NEXUS gives you a simple floor plan to experiment with before you start lifting, shifting, or buying anything. Bring the furniture you already own, test the possibilities, and decide what works for your life.</p><p>It's an evolving MVP. The focus is on practical room planning first: clear measurements, direct manipulation, and suggestions that help you consider another option.</p><a className="underlined-link" href="/workspace">Explore your room <span>↗</span></a></div></section>
  </main>
}

function Privacy() {
  return <main className="info-page privacy-page">
    <section className="info-hero"><span className="site-kicker"><i /> THE IMPORTANT DETAILS</span><h1>Your space is yours.<br /><em>So is your plan.</em></h1><p>A plain-language overview of how NEXUS handles your room plan.</p></section>
    <section className="privacy-content">
      <article><h2>Room plans and browser storage</h2><p>NEXUS can save your room dimensions and furniture arrangement in local storage in the browser you are using. This is stored on that device and browser profile; it is not an account-based cloud sync service. Clearing browser data or losing access to the device may remove the saved plan.</p></article>
      <article><h2>AI-assisted suggestions</h2><p>When you request an AI layout, NEXUS sends the room dimensions, furniture measurements and positions, and the goal you wrote to the layout API so it can generate a suggestion. Do not include sensitive personal information in the prompt. The request is processed by the configured AI provider.</p></article>
      <article><h2>Exporting your plan</h2><p>If you export your layout, NEXUS downloads a JSON file to your device. You choose where to keep or share that file.</p></article>
      <article><h2>Accounts and tracking</h2><p>The current MVP does not require an account to use the room editor. This page does not make claims about hosting-provider logs or infrastructure-level processing, which may be governed by those providers' own policies.</p></article>
      <p className="privacy-updated">This page describes the current MVP behaviour and should be reviewed as the product changes.</p>
    </section>
  </main>
}

export default function Site() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/workspace') return <Workspace />
  const active = path === '/how-it-works' || path === '/about' ? path : '/'
  return <div className="public-site"><SiteHeader active={active} />{path === '/how-it-works' ? <HowItWorks /> : path === '/about' ? <About /> : path === '/privacy' ? <Privacy /> : <Home />}<SiteFooter /></div>
}
