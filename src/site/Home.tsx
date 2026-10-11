import { Link } from '../router'
import { CtaBand } from './Layout'
import HeroPlanner from './HeroPlanner'

const features = [
  {
    title: 'Drag, rotate and nudge',
    body: 'Move pieces with a mouse, a finger or the arrow keys. Positions snap to 5 cm, and pieces sit flush when you bring them close to a wall.',
  },
  {
    title: 'Fit checks as you go',
    body: 'Overlaps and pieces that reach past a wall are highlighted on the plan and listed under it. Pick one from the list to jump to it.',
  },
  {
    title: 'Layout suggestions',
    body: 'Describe what you want from the room and ask for an arrangement. It appears on your plan as dashed outlines, and nothing moves until you apply it.',
  },
  {
    title: 'Saved on your device',
    body: 'Save the plan in your browser or export it as a JSON file. Nothing leaves your device unless you ask for a suggestion.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="wrap hero">
        <div className="hero-copy">
          <h1>Try the layout before you lift anything.</h1>
          <p className="lede">
            NEXUS is a floor plan you can drag furniture around. Enter your room's measurements, add what you own, and see what fits.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="btn btn-primary btn-lg">Open the planner</Link>
            <Link to="/how-it-works" className="text-link">See how it works</Link>
          </div>
          <p className="hero-note">No account needed. Plans stay in your browser.</p>
        </div>
        <HeroPlanner />
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="lead">
            <h2>Everything is drawn from your measurements</h2>
            <p>The plan uses centimetres throughout, with rulers along the edges so you can read positions straight off the drawing.</p>
          </div>
          <ul className="rows">
            {features.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Measure the room, then start moving things around." />
    </main>
  )
}
