import { Link } from '../router'
import { CtaBand } from './Layout'
import HeroPlanner from './HeroPlanner'

const features = [
  {
    title: 'Arrange furniture your way',
    body: 'Move, rotate and fine-tune each piece with a mouse, a finger or the arrow keys. Positions snap to 5 cm for more precise placement.',
  },
  {
    title: 'Spot fit issues early',
    body: 'See when furniture overlaps or extends beyond the room. Select an issue to locate the piece and adjust your layout.',
  },
  {
    title: 'Explore another arrangement',
    body: 'Describe what you want to improve and get a layout suggestion. Preview the proposed positions before deciding whether to apply them.',
  },
  {
    title: 'Keep your plan close',
    body: 'Save your layout in this browser or export a copy for your records. Your room plan stays on your device unless you request an AI suggestion.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="wrap hero">
        <div className="hero-copy">
          <h1>Try the layout before you lift anything.</h1>
          <p className="lede">
            Plan your room around the furniture you already own. Enter your measurements, arrange each piece, and see where things fit before you start moving.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="btn btn-primary btn-lg">Plan my room</Link>
            <Link to="/how-it-works" className="text-link">How it works</Link>
          </div>
          <p className="hero-note">Free to use. No account needed. Your plan stays in this browser.</p>
        </div>
        <HeroPlanner />
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="lead">
            <h2>Make the measurements work for you</h2>
            <p>Build a room plan to scale in centimetres. Use the rulers and furniture measurements to make more informed decisions before rearranging your space.</p>
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

      <CtaBand title="A better layout starts with a few measurements." />
    </main>
  )
}
