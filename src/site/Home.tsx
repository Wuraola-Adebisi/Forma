import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from '../router'
import { CtaBand } from './Layout'
import HeroPlanner from './HeroPlanner'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

const features = [
  {
    number: '01',
    title: 'Work with real measurements',
    body: 'Set the room dimensions, enter the width and depth of your furniture, and arrange each piece on a scaled floor plan.',
  },
  {
    number: '02',
    title: 'See problems before moving',
    body: 'NEXUS flags furniture that overlaps or extends beyond the room, helping you catch basic fit issues while the furniture is still where it is.',
  },
  {
    number: '03',
    title: 'Try a different point of view',
    body: 'Ask for a layout that makes more floor space, creates a work corner or improves the flow. Compare the suggestion with your current plan before applying it.',
  },
]

const moments = [
  { title: 'A room refresh', body: 'Rearrange what you already own before committing to a new setup.' },
  { title: 'A new piece of furniture', body: 'Check the footprint against your room before bringing it home.' },
  { title: 'A move or a new home', body: 'Work out where the larger pieces might go before moving day.' },
]

export default function Home() {
  return (
    <main>
      <section className="wrap hero">
        <div className="hero-copy">
          <p className="eyebrow">A little planning. A lot less lifting.</p>
          <h1>Try the layout before you lift anything.</h1>
          <p className="lede">
            Build a measured plan of your room, place the furniture you own, and explore arrangements before you start moving things around.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="btn btn-primary btn-lg">Plan my room</Link>
            <Link to="/how-it-works" className="text-link">See how it works</Link>
          </div>
        </div>
        <HeroPlanner />
      </section>

      <Reveal>
        <section className="section">
          <div className="wrap split">
            <div className="lead">
              <p className="eyebrow">Make the space make sense</p>
              <h2>Good room layouts start with what actually fits.</h2>
              <p>Room inspiration can show you what looks good. A measured floor plan helps you work out what works in your own space, with your own furniture.</p>
            </div>
            <ul className="rows">
              {features.map((f) => (
                <li key={f.number}>
                  <span className="feature-number">{f.number}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="ai-section">
          <div className="wrap ai-grid">
            <div className="ai-copy">
              <p className="eyebrow">Planning, with a little help</p>
              <h2>Bring AI into the layout, not just the conversation.</h2>
              <p>Tell NEXUS what you want from the room. It uses your room dimensions, furniture details and goal to suggest another arrangement, so you have a concrete plan to consider instead of starting from scratch.</p>
              <p>You stay in control: review the proposed positions, check for overlaps and decide whether to apply them. The suggestion is a starting point, not a substitute for measuring your space or checking access and clearances.</p>
              <Link to="/workspace" className="btn btn-primary">Explore a layout</Link>
            </div>
            <div className="ai-card" aria-label="Example of a layout goal and suggested outcome">
              <div className="ai-card-top"><span className="ai-pulse" /> LAYOUT GOAL</div>
              <p className="ai-prompt">“Make more room to move and give me a comfortable work corner.”</p>
              <div className="ai-divider" />
              <div className="ai-result-label">YOUR NEXT ARRANGEMENT</div>
              <div className="ai-result">
                <span className="ai-result-mark">01</span>
                <div><strong>Open up the centre</strong><p>Move larger pieces towards the walls where the room dimensions allow.</p></div>
              </div>
              <div className="ai-result">
                <span className="ai-result-mark">02</span>
                <div><strong>Group work furniture</strong><p>Place the desk and chair together to make a dedicated work area.</p></div>
              </div>
              <p className="ai-card-foot">Illustrative goals. Suggestions depend on your room and furniture.</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section moments-section">
          <div className="wrap">
            <div className="moments-heading">
              <p className="eyebrow">Useful before the heavy lifting</p>
              <h2>For the changes you are thinking about.</h2>
            </div>
            <div className="moment-grid">
              {moments.map((moment, i) => (
                <article className="moment-card" key={moment.title}>
                  <span className="moment-index">0{i + 1}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <CtaBand title="Start with your room. See what could work." />
      </Reveal>
    </main>
  )
}
