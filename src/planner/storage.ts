import { LEGACY_STORAGE_KEYS, STORAGE_KEY } from '../brand'
import { KINDS } from './catalog'
import { MAX_ROOM, MIN_ROOM, clamp } from './geometry'
import type { Item, Room } from './types'

export type SavedPlan = { room: Room; items: Item[] }

const ROTATIONS = [0, 90, 180, 270]
const num = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v)

function parseItem(v: any): Item | null {
  if (!v || typeof v.id !== 'string' || typeof v.name !== 'string') return null
  if (!KINDS.includes(v.kind) || !ROTATIONS.includes(v.rotation)) return null
  if (![v.width, v.depth, v.x, v.y].every(num) || v.width <= 0 || v.depth <= 0) return null
  return { id: v.id, kind: v.kind, name: v.name.slice(0, 40), width: v.width, depth: v.depth, x: v.x, y: v.y, rotation: v.rotation }
}

function parsePlan(raw: string | null): SavedPlan | null {
  if (!raw) return null
  const data = JSON.parse(raw)
  const r = data?.room
  if (!r || typeof r.name !== 'string' || !num(r.width) || !num(r.depth)) return null
  if (!Array.isArray(data.items) || data.items.length > 60) return null
  const items: Item[] = []
  for (const entry of data.items) {
    const item = parseItem(entry)
    if (!item) return null
    items.push(item)
  }
  if (new Set(items.map((i) => i.id)).size !== items.length) return null
  return {
    room: { name: r.name.slice(0, 60), width: clamp(r.width, MIN_ROOM, MAX_ROOM), depth: clamp(r.depth, MIN_ROOM, MAX_ROOM) },
    items,
  }
}

export function loadPlan(): SavedPlan | null {
  try {
    for (const key of [STORAGE_KEY, ...LEGACY_STORAGE_KEYS]) {
      const plan = parsePlan(localStorage.getItem(key))
      if (plan) return plan
    }
  } catch {
    /* Corrupt or unavailable storage: start from the sample room. */
  }
  return null
}

export function savePlan(plan: SavedPlan) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
}
