export type Kind = 'bed' | 'sofa' | 'desk' | 'wardrobe' | 'chair' | 'table' | 'plant' | 'dresser'
export type Rotation = 0 | 90 | 180 | 270

export type Item = {
  id: string
  kind: Kind
  name: string
  width: number
  depth: number
  x: number
  y: number
  rotation: Rotation
}

export type Room = { name: string; width: number; depth: number }
export type Placement = { furnitureId: string; x: number; y: number; rotation: Rotation }
export type Issue = { message: string; ids: string[] }

export type Proposal = {
  name: string
  summary: string
  tradeoffs: string[]
  items: Item[]
  issues: Issue[]
  base: string
}
