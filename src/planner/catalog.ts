import type { Item, Kind, Room } from './types'

export type CatalogEntry = { kind: Kind; name: string; width: number; depth: number }

export const KINDS: Kind[] = ['bed', 'sofa', 'desk', 'wardrobe', 'chair', 'table', 'plant', 'dresser']

export const CATALOG: CatalogEntry[] = [
  { kind: 'bed', name: 'Bed', width: 200, depth: 150 },
  { kind: 'sofa', name: 'Sofa', width: 180, depth: 82 },
  { kind: 'desk', name: 'Desk', width: 120, depth: 60 },
  { kind: 'wardrobe', name: 'Wardrobe', width: 140, depth: 60 },
  { kind: 'chair', name: 'Chair', width: 52, depth: 52 },
  { kind: 'table', name: 'Side table', width: 55, depth: 55 },
  { kind: 'dresser', name: 'Dresser', width: 100, depth: 45 },
  { kind: 'plant', name: 'Plant', width: 34, depth: 34 },
]

export const PALETTE: Record<Kind, string> = {
  bed: '#aebcd6',
  sofa: '#bccbb3',
  desk: '#dcc79f',
  wardrobe: '#c9c2b6',
  chair: '#dcb0b8',
  table: '#dcc79f',
  plant: '#9dc096',
  dresser: '#bdb0cf',
}

export const SAMPLE_ROOM: Room = { name: 'My bedroom', width: 360, depth: 420 }

export const sampleItems = (): Item[] => [
  { id: 'bed-1', kind: 'bed', name: 'Double bed', width: 200, depth: 150, x: 20, y: 25, rotation: 0 },
  { id: 'wardrobe-1', kind: 'wardrobe', name: 'Wardrobe', width: 120, depth: 60, x: 230, y: 25, rotation: 0 },
  { id: 'desk-1', kind: 'desk', name: 'Work desk', width: 120, depth: 60, x: 20, y: 250, rotation: 0 },
  { id: 'chair-1', kind: 'chair', name: 'Chair', width: 52, depth: 52, x: 55, y: 315, rotation: 0 },
  { id: 'plant-1', kind: 'plant', name: 'Plant', width: 34, depth: 34, x: 295, y: 345, rotation: 0 },
]

export const uid = () => `item-${Math.random().toString(36).slice(2, 9)}`
