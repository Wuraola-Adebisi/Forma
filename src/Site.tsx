import Workspace from './App'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About Forma' },
]

function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <a className="site-brand" href="/" aria-label="Forma home">forma<span>.</span></a>
      <p>A little more room to live<br />the way you want.</p>
      <a className="footer-cta" href="/workspace">Open the room editor <span>↗</span></a>
    </div>
    <div className="site-footer-bottom">
      <span>© {new Date().getFullYear()} Forma</span>
      <div><a href="/how-it-works">How it works</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="https://github.com/Wuraola-Adebisi/Forma" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <span>Make space for what matters.</span>
    </div>
  </footer>
}

function SiteHeader({ active }: { active: string }) {
  return <header className="site-header">
    <a className="site-brand" href="/" aria-label="Forma home">forma<span>.</span></a>
    <nav aria-label="Main navigation">{pages.map(p => <a key={p.href} className={active === p.href ? 'current' : ''} href={p.href}>{p.label}</a>)}</nav>
    <a className="site-header-cta" href="/workspace">Try Forma <span>↗</span></a>
  </header>
}

function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-copy">
        <span className="site-kicker"><i /> A ROOM PLANNER WITH ROOM TO PLAY</span>
        <h1>Your room.<br /><em>Your rules.</em></h1>
        <p>Move the furniture. Try a new layout. See what your space could feel like before you lift a single thing.</p>
        <div className="hero-actions"><a className="site-button" href="/workspace">Start rearranging <span>↗</span></a><a className="text-link" href="/how-it-works">See how it works <span>↓</span></a></div>
        <div className="hero-note"><span className="note-mark">01</span><span>No account needed. Start with the room you have.</span></div>
      </div>
      <div className="hero-art" aria-label="Illustrated room layout preview">
        <div className="art-label art-label-top">ROOM STUDY / 001</div>
        <div className="art-room">
          <div className="art-rug"></div><div className="art-bed"><span></span><i></i><b></b></div>
          <div className="art-desk"><span></span></div><div className="art-chair"></div><div className="art-plant"><i></i><i></i><i></i><b></b></div>
          <div className="art-side-table"></div><div className="art-sun"></div>
        </div>
        <div className="art-label art-label-bottom"><span>360 × 420 CM</span><span>MAKE IT YOURS ↗</span></div>
        <div className="art-sticker">MOVE<br />THINGS<br /><b>AROUND!</b></div>
      </div>
    </section>
    <section className="home-marquee"><span>LESS GUESSING</span><i>✳</i><span>MORE TRYING</span><i>✳</i><span>YOUR SPACE, REIMAGINED</span><i>✳</i><span>LESS GUESSING</span></section>
    <section className="home-intro site-section">
      <div className="section-aside"><span>01 / THE IDEA</span><span>GOOD SPACES ARE MADE</span><span>ONE DECISION AT A TIME.</span></div>
      <div><h2>Before you move<br />the heavy stuff.</h2><p>That sofa might fit better by the window. The desk could work on the other wall. Instead of guessing and rearranging everything twice, try it out on a floor plan first.</p><a className="underlined-link" href="/workspace">Give your room a reshuffle <span>↗</span></a></div>
    </section>
    <section className="feature-section">
      <div className="feature-heading"><span>02 / MADE FOR REAL ROOMS</span><h2>Small changes.<br /><em>Whole new feeling.</em></h2></div>
      <div className="feature-grid">
        <article className="feature-card feature-pink"><span className="feature-number">01</span><div className="feature-illustration furniture-illustration"><i></i><b></b><span></span></div><h3>Move it around</h3><p>Drag furniture around your floor plan, rotate pieces, and test positions until the room starts to work.</p></article>
        <article className="feature-card feature-lime"><span className="feature-number">02</span><div className="feature-illustration measure-illustration"><i>360</i><b>↔</b><span>420</span></div><h3>Work with your space</h3><p>Set your room dimensions and furniture measurements. See the footprint before you commit to a layout.</p></article>
        <article className="feature-card feature-lilac"><span className="feature-number">03</span><div className="feature-illustration idea-illustration"><i>WHAT IF?</i><b>↗</b><span>TRY A NEW PLAN</span></div><h3>Get another point of view</h3><p>Ask for an AI-assisted arrangement based on the pieces you have and what you want your room to do better.</p></article>
      </div>
    </section>
    <section className="home-bottom-cta"><div><span className="site-kicker">YOUR ROOM IS READY WHEN YOU ARE</span><h2>Let’s make space<br /><em>for better living.</em></h2></div><a className="site-button dark-button" href="/workspace">Open the room editor <span>↗</span></a><span className="cta-doodle">f.</span></section>
  </>
}

function HowItWorks() {
  return <main className="info-page">
    <section className="info-hero"><span className="site-kicker"><i /> HOW IT WORKS</span><h1>From “what if?”<br /><em>to a real plan.</em></h1><p>Forma helps you explore your room in a few simple steps. No interior-design degree required.</p><a className="site-button" href="/workspace">Try it for yourself <span>↗</span></a></section>
    <section className="steps-list">
      <article><span>01</span><div><h2>Set up your room</h2><p>Give your room a name and enter its width and length. Forma starts with a sample bedroom you can adjust or clear out.</p></div><b>↘</b></article>
      <article><span>02</span><div><h2>Add what you own</h2><p>Choose furniture from the catalog, then edit positions and rotate pieces. The plan uses centimetres and flags furniture that overlaps or sits outside the room.</p></div><b>↘</b></article>
      <article><span>03</span><div><h2>Try a different arrangement</h2><p>Move pieces yourself or describe your goal to request an AI-assisted layout. Review the suggestion before applying it to your plan.</p></div><b>↘</b></article>
      <article><span>04</span><div><h2>Save it or take it with you</h2><p>Save your current plan in this browser or export a JSON copy. Your saved browser data does not automatically sync to other devices.</p></div><b>↗</b></article>
    </section>
    <section className="info-callout"><span>READY TO START?</span><h2>Your room is the brief.</h2><a className="site-button dark-button" href="/workspace">Make a floor plan <span>↗</span></a></section>
  </main>
}

function About() {
  return <main className="info-page">
    <section className="info-hero about-hero"><span className="site-kicker"><i /> A NOTE ABOUT FORMA</span><h1>Good design starts<br /><em>with what you have.</em></h1><p>Forma is a hands-on room planning tool for people who want to make their space work a little harder without starting from scratch.</p></section>
    <section className="about-columns"><div><span>THE BELIEF</span><h2>Your home doesn't need a makeover to feel different.</h2></div><div><p>Sometimes the answer is a better furniture arrangement, a clearer walkway, or finally finding a place for the desk. But it's hard to picture a new layout while you're standing in the middle of the old one.</p><p>Forma gives you a simple floor plan to experiment with before you start lifting, shifting, or buying anything. Bring the furniture you already own, test the possibilities, and decide what works for your life.</p><p>It's an evolving MVP. The focus is on practical room planning first: clear measurements, direct manipulation, and suggestions that help you consider another option.</p><a className="underlined-link" href="/workspace">Explore your room <span>↗</span></a></div></section>
  </main>
}

function Privacy() {
  return <main className="info-page privacy-page">
    <section className="info-hero"><span className="site-kicker"><i /> THE IMPORTANT DETAILS</span><h1>Your space is yours.<br /><em>So is your plan.</em></h1><p>A plain-language overview of how Forma handles your room plan.</p></section>
    <section className="privacy-content">
      <article><h2>Room plans and browser storage</h2><p>Forma can save your room dimensions and furniture arrangement in local storage in the browser you are using. This is stored on that device and browser profile; it is not an account-based cloud sync service. Clearing browser data or losing access to the device may remove the saved plan.</p></article>
      <article><h2>AI-assisted suggestions</h2><p>When you request an AI layout, Forma sends the room dimensions, furniture measurements and positions, and the goal you wrote to the layout API so it can generate a suggestion. Do not include sensitive personal information in the prompt. The request is processed by the configured AI provider.</p></article>
      <article><h2>Exporting your plan</h2><p>If you export your layout, Forma downloads a JSON file to your device. You choose where to keep or share that file.</p></article>
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
