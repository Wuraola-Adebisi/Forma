import { useEffect } from 'react'
import { BRAND } from './brand'
import Planner from './planner/Planner'
import { usePath } from './router'
import { Shell } from './site/Layout'
import Home from './site/Home'
import { About, HowItWorks, NotFound, Privacy } from './site/pages'

const titles: Record<string, string> = {
  '/': `${BRAND}: try the layout before you lift anything`,
  '/how-it-works': `How it works | ${BRAND}`,
  '/about': `About | ${BRAND}`,
  '/privacy': `Privacy | ${BRAND}`,
  '/workspace': `Planner | ${BRAND}`,
}

export default function App() {
  const path = usePath()

  useEffect(() => {
    document.title = titles[path] ?? `Page not found | ${BRAND}`
  }, [path])

  if (path === '/workspace') return <Planner />

  const page =
    path === '/' ? <Home /> :
    path === '/how-it-works' ? <HowItWorks /> :
    path === '/about' ? <About /> :
    path === '/privacy' ? <Privacy /> :
    <NotFound />

  return <Shell path={path}>{page}</Shell>
}
