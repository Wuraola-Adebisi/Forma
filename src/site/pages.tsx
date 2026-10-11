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
    title: 'Measure your room',
    body: 'Open the Room tab, name the space, and enter its width and length in centimetres. Start with the provided room layout or enter your own measurements.',
  },
  {
    title: 'Add the furniture',
    body: 'Choose the pieces you want to arrange, then edit each item’s name, width and depth to match your furniture. Catalogue measurements are starting points, so use your own measurements for a more accurate plan.',
  },
  {
    title: 'Arrange, then ask AI',
    body: 'Move and rotate pieces on the plan, or describe what you want to improve and ask NEXUS for a proposed arrangement. Preview the suggestion, check any flagged overlaps, and apply it only if it works for you.',
  },
  {
    title: 'Save your layout',
    body: 'Save the plan in your current browser, or use Print / Save PDF to keep a readable copy you can share. Plans are stored locally and do not automatically sync between devices.',
  },
]

export function HowItWorks() {
  return (
    <main>
      <PageHead title="From room measurements to a layout">
        Combine a measured floor plan with AI-generated ideas to explore arrangements for the room and furniture you actually have.
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
      <CtaBand title="Start with the room you have." />
    </main>
  )
}

const gaps = [
  ['Doors, windows and fixed features', 'These are not editable on the plan yet. Account for door swings, windows, radiators and other fixed features when measuring and reviewing your layout.'],
  ['Furniture measurements', 'Furniture is added and measured manually. Check each item’s real width and depth before relying on its placement.'],
  ['AI suggestions', 'AI-generated arrangements are proposals based on the room dimensions, furniture details and goal you provide. Review the positions carefully, and check real-world access and clearance before moving anything.'],
  ['Saving and sharing', 'Plans are stored in your current browser. Use Print / Save PDF to create a readable copy for sharing or safekeeping. To continue editing on another device, you will need to recreate the plan there.'],
  ['Clearance and building requirements', 'NEXUS flags overlaps and furniture outside the room. It does not verify walkway clearance, door access, accessibility requirements or building-code compliance. Review these before moving furniture.'],
]

export function About() {
  return (
    <main>
      <PageHead title="Make room for the way you live">
        NEXUS combines measured room planning with AI-assisted layout ideas, helping you think through a setup before you start moving furniture.
      </PageHead>
      <section className="wrap prose">
        <p>A piece of furniture can look like it will fit on the other side of the room and still leave too little space to move around. Finding that out after lifting and shifting everything is frustrating.</p>
        <p>Map your room, add the furniture you already own, and use AI to explore different arrangements around a specific goal, from making more floor space to creating a work corner. Each suggestion gives you a concrete option to review on your floor plan.</p>
        <p>AI can help you explore possibilities, but the quality of the plan still depends on accurate measurements. Account for doors, windows and other fixed features, and check real-world access and clearances before moving anything.</p>
      </section>
      <section className="wrap gaps">
        <h2>Before you move anything</h2>
        <dl>
          {gaps.map(([term, text]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <CtaBand title="Put your room measurements to work." />
    </main>
  )
}

const privacy = [
  ['Saved plans', 'When you press Save, your room dimensions and furniture layout are stored in this browser’s local storage. They are not attached to an account or automatically sent to NEXUS. Clearing this browser’s site data can remove saved plans.'],
  ['AI layout suggestions', 'When you request a layout suggestion, NEXUS sends your room dimensions, furniture details and positions, and the goal you enter to its layout service. The service sends that information to its AI provider to generate a proposal. Do not include sensitive or personal information in your goal text.'],
  ['Printed or saved copies', 'If you choose Print / Save PDF, your browser or operating system handles printing or creating the PDF. NEXUS does not upload that PDF. You control where you save it and who can access it.'],
  ['Accounts and service providers', 'You can use the planner without creating an account. The service is hosted by third-party providers, which may process technical data under their own privacy policies.'],
]

export function Privacy() {
  return (
    <main>
      <PageHead title="Your plan, your device">
        Understand what NEXUS stores locally and what is shared when you request an AI layout suggestion.
      </PageHead>
      <section className="wrap policy">
        {privacy.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export function NotFound() {
  return (
    <main>
      <PageHead title="We couldn’t find that page">
        Check the address or return to NEXUS to plan your room.
      </PageHead>
      <section className="wrap">
        <Link to="/" className="btn btn-dark">Back to NEXUS</Link>
      </section>
    </main>
  )
}
