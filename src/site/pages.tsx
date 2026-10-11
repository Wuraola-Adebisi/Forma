import { Link } from '../router'
import { CtaBand } from './Layout'

function PageHead({ title, children }: { title: string; children: string }) {
  return (
    <header className="wrap page-head">
      <h1>{title}</h1>
      <p>{children}</p>
    </header>
  )
}

const steps = [
  {
    title: 'Set up the room',
    body: 'Open the Room tab, name the room and enter its width and length in centimetres. The planner starts with a sample bedroom that you can edit or reset.',
  },
  {
    title: 'Add your furniture',
    body: 'Pick pieces from the Furniture tab, then change each one\'s name and size to match the real thing. Catalogue sizes are only a starting point.',
  },
  {
    title: 'Arrange and check',
    body: 'Drag pieces around the plan. Overlaps and pieces outside the walls are flagged straight away. If you want a second idea, ask for a suggested layout and preview it before you apply it.',
  },
  {
    title: 'Save or export',
    body: 'Save the plan in this browser, or export a JSON copy to keep elsewhere. Saved plans do not sync between devices.',
  },
]

export function HowItWorks() {
  return (
    <main>
      <PageHead title="Four steps from tape measure to plan">
        You need the width and length of the room, and rough sizes for the furniture you plan to use.
      </PageHead>
      <section className="wrap">
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no" aria-hidden="true">{i + 1}</span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <div className="spacer" />
      <CtaBand title="Your room is the brief." />
    </main>
  )
}

const gaps = [
  ['Doors and windows', 'They cannot be placed on the plan yet, so keep entrances clear by eye.'],
  ['Room photos', 'Furniture is entered by hand. The planner does not read photos.'],
  ['Accounts and sync', 'Plans live in your browser. Export a file to move one to another device.'],
  ['Building rules', 'Checks cover overlaps and walls only. They do not confirm walkway widths or building code compliance.'],
]

export function About() {
  return (
    <main>
      <PageHead title="It is hard to picture a new layout from inside the old one">
        NEXUS gives you a drawing to experiment on, so you can test an arrangement before you shift anything heavy.
      </PageHead>
      <section className="wrap prose">
        <p>Most rearranging happens in your head first and in your back second. A bed that looks like it fits against the other wall might block the wardrobe door, and you only find out once it has been moved.</p>
        <p>NEXUS keeps that experiment on screen. You enter the room and the furniture you already own, and the plan shows what fits, what overlaps and how much floor is left.</p>
        <p>It is an early version, and the list below says what it does not do yet.</p>
      </section>
      <section className="wrap gaps">
        <h2>What it does not do yet</h2>
        <dl>
          {gaps.map(([term, text]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <CtaBand title="Open the planner and try your own room." />
    </main>
  )
}

const privacy = [
  ['Saved plans', 'When you press Save, the room dimensions and furniture are stored in this browser\'s local storage. They stay on this device and are not tied to an account. Clearing your browser data removes them.'],
  ['Layout suggestions', 'When you ask for a suggestion, NEXUS sends the room dimensions, furniture sizes and positions, and the goal you typed to its layout service. That service passes them to an AI provider to produce the proposal. Leave personal details out of the goal text.'],
  ['Exports', 'Exporting downloads a JSON file to your device. Where it goes after that is up to you.'],
  ['Accounts and tracking', 'The planner needs no account. This page does not cover logs kept by the hosting provider, which follow that provider\'s own policies.'],
]

export function Privacy() {
  return (
    <main>
      <PageHead title="How NEXUS handles your plan">
        A plain summary of what is stored, what is sent and where it goes.
      </PageHead>
      <section className="wrap policy">
        {privacy.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
        <p className="fine-print">This describes the current early version and will change as the product does.</p>
      </section>
    </main>
  )
}

export function NotFound() {
  return (
    <main>
      <PageHead title="That page does not exist">
        The link may be out of date or mistyped.
      </PageHead>
      <section className="wrap">
        <Link to="/" className="btn btn-dark">Back to the home page</Link>
      </section>
    </main>
  )
}
