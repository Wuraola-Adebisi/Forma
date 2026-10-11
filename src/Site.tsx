import Workspace from './App'

const pages = [
  { href: '/', label: 'The concept' },
  { href: '/how-it-works', label: 'How to use it' },
  { href: '/about', label: 'Why NEXUS' },
]

function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <a className="site-brand" href="/" aria-label="NEXUS home">NEXUS<span>.</span></a>
      <p>A little more room to live<br />the way you want.</p>
      <a className="footer-cta" href="/workspace">Open planner <span>↗</span></a>
    </div>
    <div className="site-footer-bottom">
      <span>© {new Date().getFullYear()} NEXUS</span>
      <div><a href="/how-it-works">How it works</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="https://github.com/Wuraola-Adebisi/Forma" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <span>ROOM PLANNING, MADE PRACTICAL.</span>
    </div>
  </footer>
}

function SiteHeader({ active }: { active: string }) {
  return <header className="site-header">
    <a className="site-brand" href="/" aria-label="NEXUS home">NEXUS<span>.</span></a>
    <nav aria-label="Main navigation">{pages.map(p => <a key={p.href} className={active === p.href ? 'current' : ''} href={p.href}>{p.label}</a>)}</nav>
    <a className="site-header-cta" href="/workspace">Open planner <span>↗</span></a>
  </header>
}

function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-topline"><span>ROOM PLANNING TOOL / N° 001</span><span>DESIGNED TO MAKE SPACE</span></div>
      <div className="hero-title-block">
        <p className="hero-index-label">YOUR ROOM, RECONSIDERED.</p>
        <h1>MAKE<br/><span>SPACE.</span></h1>
        <div className="hero-summary"><p>Move the furniture on screen before you move it in real life. NEXUS turns your room measurements and the things you own into a plan you can actually test.</p><a className="hero-round-link" href="/workspace" aria-label="Open the room planner">↗</a></div>
      </div>
      <div className="hero-plan-panel">
        <div className="plan-panel-top"><span>LIVE STUDY / BEDROOM A</span><span>01—04</span></div>
        <div className="plan-diagram" aria-label="Top-down room layout illustration">
          <div className="plan-wall-label plan-wall-top">360 CM</div><div className="plan-wall-label plan-wall-left">420 CM</div>
          <div className="plan-grid"></div><div className="plan-rug"></div><div className="plan-bed"><i></i><b></b></div><div className="plan-desk"><i></i></div><div className="plan-chair"></div><div className="plan-wardrobe"></div><div className="plan-plant"><i></i><b></b></div>
          <span className="plan-tag">CURRENT LAYOUT</span>
        </div>
        <div className="plan-panel-bottom"><span><i></i> FURNITURE PLACEMENT</span><span>DRAG / ROTATE / REPEAT</span></div>
      </div>
      <div className="hero-bottomline"><span>LESS GUESSWORK. MORE GOOD ARRANGEMENTS.</span><a href="/how-it-works">SEE HOW IT WORKS <b>↗</b></a></div>
    </section>
    <section className="home-intro site-section">
      <div className="intro-stamp"><span>THE POINT</span><b>01</b><span>USE WHAT<br/>YOU HAVE.</span></div>
      <div className="intro-main"><p className="section-index">A DIFFERENT WAY TO THINK ABOUT YOUR ROOM</p><h2>Don't start<br/>with shopping.<br/><span>Start with space.</span></h2></div>
      <div className="intro-copy"><p>That bed could work better against another wall. The desk might belong near the window. Instead of guessing, map the room, place your furniture and see how the pieces fit together.</p><p>NEXUS is for the decisions that are easier to make when you can see them first.</p><a className="underlined-link" href="/workspace">Build a room plan <span>↗</span></a></div>
    </section>
    <section className="feature-section">
      <div className="feature-heading"><div><p className="section-index">THE TOOLKIT / 02</p><h2>Small moves.<br/><span>Different room.</span></h2></div><p>Practical tools for working out what your space can do, with the furniture already in it.</p></div>
      <div className="feature-grid">
        <article className="feature-card feature-pink"><span className="feature-number">01 / MOVE</span><div className="feature-illustration furniture-illustration"><i></i><b></b><span></span></div><div className="feature-copy"><h3>Rearrange without the heavy lifting</h3><p>Drag and rotate furniture on a floor plan. Try the obvious idea, then the one you weren't sure would work.</p></div><a className="feature-card-link" href="/workspace" aria-label="Try moving furniture">↗</a></article>
        <article className="feature-card feature-lime"><span className="feature-number">02 / MEASURE</span><div className="feature-illustration measure-illustration"><i>360</i><b>↔</b><span>420</span></div><div className="feature-copy"><h3>Know what fits</h3><p>Set room dimensions and furniture sizes. NEXUS flags overlaps and pieces that sit beyond the room boundary.</p></div><a className="feature-card-link" href="/how-it-works" aria-label="Learn how measurements work">↗</a></article>
        <article className="feature-card feature-lilac"><span className="feature-number">03 / RE-THINK</span><div className="feature-illustration idea-illustration"><i>WHAT IF</i><b>↗</b><span>ANOTHER ARRANGEMENT</span></div><div className="feature-copy"><h3>Consider another angle</h3><p>Describe what you need from the room and request an AI-assisted layout using the furniture you already have.</p></div><a className="feature-card-link" href="/workspace" aria-label="Get a layout suggestion">↗</a></article>
      </div>
    </section>
    <section className="home-bottom-cta"><div><p className="section-index">YOUR SPACE / YOUR DECISION</p><h2>See what<br/><span>could fit.</span></h2><p className="cta-description">Start with the room you have. Work towards the room you want.</p></div><div className="cta-action"><span>NO ACCOUNT REQUIRED</span><a className="site-button dark-button" href="/workspace">Open the planner <b>↗</b></a></div><span className="cta-serial">NEXUS / 2026</span></section>
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
