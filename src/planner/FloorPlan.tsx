import { useRef, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react'
import { PALETTE } from './catalog'
import { footprint, placeItem } from './geometry'
import type { Item, Room } from './types'

/**
 * All sizes are in centimetres. `u` is a drawing unit that scales with the room
 * so that text, walls and ticks keep the same visual weight in a 2 m or a 10 m room.
 */
export function planGeometry(room: Room) {
  const u = Math.max(room.width, room.depth) / 36
  const lead = u * 3.1
  const tail = u * 1.1
  return {
    u,
    wall: u * 0.3,
    ox: lead,
    oy: lead,
    vw: room.width + lead + tail,
    vh: room.depth + lead + tail,
  }
}
type Geometry = ReturnType<typeof planGeometry>

type Props = {
  room: Room
  items: Item[]
  label: string
  width?: number
  selectedId?: string | null
  flagged?: ReadonlySet<string>
  ghost?: Item[] | null
  grid?: boolean
  measures?: boolean
  settle?: boolean
  onSelect?: (id: string | null) => void
  onDragStart?: (id: string) => void
  onMove?: (id: string, x: number, y: number) => void
  onDragEnd?: (moved: boolean) => void
  onNudge?: (id: string, x: number, y: number) => void
  onRotate?: (id: string) => void
  onRemove?: (id: string) => void
}

function Ruler({ axis, length, g }: { axis: 'x' | 'y'; length: number; g: Geometry }) {
  const { u, ox, oy, wall } = g
  const origin = axis === 'x' ? ox : oy
  const base = (axis === 'x' ? oy : ox) - wall - u * 0.3
  const labelAt = base - u * 1.12
  let minor = ''
  let major = ''
  const marks: number[] = []

  for (let t = 0; t <= length; t += 10) {
    const is100 = t % 100 === 0
    const len = is100 ? u * 0.9 : t % 50 === 0 ? u * 0.62 : u * 0.34
    const p = origin + t
    const seg = axis === 'x' ? `M${p} ${base}v${-len}` : `M${base} ${p}h${-len}`
    if (is100) major += seg
    else minor += seg
    if (is100 && length - t >= 40) marks.push(t)
  }
  const end = origin + length
  major += axis === 'x' ? `M${end} ${base}v${-u * 0.9}` : `M${base} ${end}h${-u * 0.9}`

  return (
    <g className="plan-ruler" fontSize={u * 0.8}>
      <path d={minor} className="tick tick-minor" />
      <path d={major} className="tick tick-major" />
      {marks.map((t) =>
        axis === 'x' ? (
          <text key={t} x={origin + t + u * 0.18} y={labelAt}>{t}</text>
        ) : (
          <text key={t} transform={`translate(${labelAt} ${origin + t + u * 0.18}) rotate(-90)`} textAnchor="end">{t}</text>
        ),
      )}
      {axis === 'x' ? (
        <text x={end - u * 0.18} y={labelAt} textAnchor="end" className="ruler-total">{length}</text>
      ) : (
        <text transform={`translate(${labelAt} ${end - u * 0.18}) rotate(-90)`} className="ruler-total">{length}</text>
      )}
    </g>
  )
}

/** Top-down symbol for each kind of furniture, drawn in the piece's own unrotated space. */
function Shape({ item, flagged }: { item: Item; flagged: boolean }) {
  const { width: w, depth: d, kind } = item
  const r = Math.min(4, w / 6, d / 6)
  let detail = null

  if (kind === 'bed') {
    const ph = Math.min(34, d * 0.22)
    detail = (
      <>
        <rect x={5} y={5} width={w / 2 - 7.5} height={ph} rx={3} className="plan-pillow" />
        <rect x={w / 2 + 2.5} y={5} width={w / 2 - 7.5} height={ph} rx={3} className="plan-pillow" />
        <path d={`M0 ${d * 0.42}H${w}`} className="plan-detail" />
      </>
    )
  } else if (kind === 'sofa') {
    detail = (
      <>
        <rect width={w} height={d * 0.3} rx={r} className="plan-detail" />
        <path d={`M${w * 0.08} ${d * 0.3}V${d}M${w * 0.92} ${d * 0.3}V${d}`} className="plan-detail" />
      </>
    )
  } else if (kind === 'desk') {
    detail = (
      <>
        <rect x={4} y={4} width={w - 8} height={d - 8} rx={2} className="plan-detail" />
        <rect x={w / 2 - 14} y={7} width={28} height={4} rx={1} className="plan-pillow" />
      </>
    )
  } else if (kind === 'wardrobe') {
    detail = (
      <>
        <path d={`M${w / 2} 3V${d - 3}`} className="plan-detail" />
        <circle cx={w / 2 - 5} cy={d / 2} r={1.8} className="plan-dot" />
        <circle cx={w / 2 + 5} cy={d / 2} r={1.8} className="plan-dot" />
      </>
    )
  } else if (kind === 'chair') {
    detail = (
      <>
        <rect x={w * 0.14} y={d * 0.3} width={w * 0.72} height={d * 0.58} rx={8} className="plan-detail" />
        <path d={`M${w * 0.16} ${d * 0.16}H${w * 0.84}`} className="plan-detail plan-back" />
      </>
    )
  } else if (kind === 'table') {
    detail = <circle cx={w / 2} cy={d / 2} r={Math.min(w, d) * 0.32} className="plan-detail" />
  } else if (kind === 'plant') {
    detail = (
      <>
        <circle cx={w / 2} cy={d / 2} r={Math.min(w, d) * 0.42} className="plan-leaf" />
        <circle cx={w / 2} cy={d / 2} r={Math.min(w, d) * 0.16} className="plan-leaf-core" />
      </>
    )
  } else if (kind === 'dresser') {
    detail = (
      <path d={`M6 ${d / 3}H${w - 6}M6 ${(d * 2) / 3}H${w - 6}`} className="plan-detail" />
    )
  }

  return (
    <>
      <rect width={w} height={d} rx={r} className="plan-body" style={{ fill: PALETTE[kind] }} />
      {detail}
      {flagged ? <rect width={w} height={d} rx={r} className="plan-flag" /> : null}
    </>
  )
}

export default function FloorPlan({
  room, items, label, width, selectedId = null, flagged, ghost = null,
  grid = true, measures = true, settle = false,
  onSelect, onDragStart, onMove, onDragEnd, onNudge, onRotate, onRemove,
}: Props) {
  const g = planGeometry(room)
  const { u, ox, oy, wall } = g
  const svgRef = useRef<SVGSVGElement>(null)
  const drag = useRef<{ id: string; dx: number; dy: number; moved: boolean } | null>(null)
  const interactive = Boolean(onMove)
  const fs = u * 0.8

  const toRoom = (e: { clientX: number; clientY: number }) => {
    const el = svgRef.current
    const ctm = el?.getScreenCTM()
    if (!el || !ctm) return null
    const pt = el.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const p = pt.matrixTransform(ctm.inverse())
    return { x: p.x - ox, y: p.y - oy }
  }

  const down = (e: PointerEvent<SVGGElement>, it: Item) => {
    if (!interactive) return
    e.stopPropagation()
    onSelect?.(it.id)
    const p = toRoom(e)
    if (!p) return
    drag.current = { id: it.id, dx: p.x - it.x, dy: p.y - it.y, moved: false }
    e.currentTarget.setPointerCapture(e.pointerId)
    onDragStart?.(it.id)
  }

  const move = (e: PointerEvent<SVGGElement>, it: Item) => {
    const d = drag.current
    if (!d || d.id !== it.id) return
    const p = toRoom(e)
    if (!p) return
    const next = placeItem(it, p.x - d.dx, p.y - d.dy, room)
    if (next.x !== it.x || next.y !== it.y) {
      d.moved = true
      onMove?.(it.id, next.x, next.y)
    }
  }

  const up = (e: PointerEvent<SVGGElement>) => {
    const d = drag.current
    if (!d) return
    drag.current = null
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    onDragEnd?.(d.moved)
  }

  const key = (e: KeyboardEvent<SVGGElement>, it: Item) => {
    if (!interactive || e.ctrlKey || e.metaKey || e.altKey) return
    const step = e.shiftKey ? 25 : 5
    const nudge = (dx: number, dy: number) => {
      e.preventDefault()
      const p = placeItem(it, it.x + dx, it.y + dy, room, false)
      onNudge?.(it.id, p.x, p.y)
    }
    switch (e.key) {
      case 'ArrowLeft': return nudge(-step, 0)
      case 'ArrowRight': return nudge(step, 0)
      case 'ArrowUp': return nudge(0, -step)
      case 'ArrowDown': return nudge(0, step)
      case 'r':
      case 'R':
        e.preventDefault()
        return onRotate?.(it.id)
      case 'Delete':
      case 'Backspace':
        if (onRemove) {
          e.preventDefault()
          onRemove(it.id)
        }
        return
      case 'Escape':
        return onSelect?.(null)
    }
  }

  let gridMinor = ''
  let gridMajor = ''
  for (let x = 50; x < room.width; x += 50) {
    const seg = `M${ox + x} ${oy}v${room.depth}`
    if (x % 100 === 0) gridMajor += seg
    else gridMinor += seg
  }
  for (let y = 50; y < room.depth; y += 50) {
    const seg = `M${ox} ${oy + y}h${room.width}`
    if (y % 100 === 0) gridMajor += seg
    else gridMinor += seg
  }

  const selected = items.find((i) => i.id === selectedId) ?? null
  const movedIds = new Set<string>()
  for (const gi of ghost ?? []) {
    const cur = items.find((i) => i.id === gi.id)
    if (cur && (cur.x !== gi.x || cur.y !== gi.y || cur.rotation !== gi.rotation)) movedIds.add(gi.id)
  }
  const style = width ? { width, height: (width * g.vh) / g.vw } : undefined

  return (
    <svg
      ref={svgRef}
      className="plan"
      viewBox={`0 0 ${g.vw} ${g.vh}`}
      style={style}
      role="group"
      aria-label={label}
    >
      <rect width={g.vw} height={g.vh} className="plan-bg" onPointerDown={() => onSelect?.(null)} />

      <Ruler axis="x" length={room.width} g={g} />
      <Ruler axis="y" length={room.depth} g={g} />

      <rect x={ox - wall} y={oy - wall} width={room.width + wall * 2} height={room.depth + wall * 2} className="plan-wall" />
      <rect x={ox} y={oy} width={room.width} height={room.depth} className="plan-floor" onPointerDown={() => onSelect?.(null)} />
      {grid ? (
        <g className="plan-grid" pointerEvents="none">
          <path d={gridMinor} className="grid-minor" />
          <path d={gridMajor} className="grid-major" />
        </g>
      ) : null}

      {items.map((item, index) => {
        const f = footprint(item)
        const isSelected = item.id === selectedId
        const labelFits = f.w >= item.name.length * fs * 0.56 + u && f.d >= fs * 2
        const dimsBelow = item.y + f.d + u * 2.2 <= room.depth
        return (
          <g
            key={item.id}
            className={movedIds.has(item.id) ? 'plan-item plan-fading' : 'plan-item'}
            transform={`translate(${ox + item.x} ${oy + item.y})`}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isSelected : undefined}
            aria-label={`${item.name}, ${item.width} by ${item.depth} centimetres. Arrow keys move it, R rotates it.`}
            style={interactive ? { touchAction: 'none', cursor: 'grab' } : undefined}
            onPointerDown={(e) => down(e, item)}
            onPointerMove={(e) => move(e, item)}
            onPointerUp={up}
            onPointerCancel={up}
            onFocus={() => interactive && onSelect?.(item.id)}
            onKeyDown={(e) => key(e, item)}
          >
            <g className={settle ? 'settle' : undefined} style={settle ? ({ '--i': index } as CSSProperties) : undefined}>
              {isSelected ? (
                <rect x={-u * 0.35} y={-u * 0.35} width={f.w + u * 0.7} height={f.d + u * 0.7} rx={u * 0.3} className="plan-halo" />
              ) : null}
              <g transform={`translate(${f.w / 2} ${f.d / 2}) rotate(${item.rotation}) translate(${-item.width / 2} ${-item.depth / 2})`}>
                <Shape item={item} flagged={Boolean(flagged?.has(item.id))} />
              </g>
              <rect x={-u * 0.35} y={-u * 0.35} width={f.w + u * 0.7} height={f.d + u * 0.7} rx={u * 0.3} className="plan-focus" />
              {labelFits ? (
                <text x={f.w / 2} y={f.d / 2 + fs * 0.34} textAnchor="middle" fontSize={fs} className="plan-label">{item.name}</text>
              ) : null}
              {isSelected && measures ? (
                <text x={f.w / 2} y={dimsBelow ? f.d + u * 1.15 : -u * 0.7} textAnchor="middle" fontSize={fs} className="plan-dims">
                  {item.width} × {item.depth} cm
                </text>
              ) : null}
            </g>
          </g>
        )
      })}

      {selected && measures && interactive ? (() => {
        const f = footprint(selected)
        const cx = selected.x + f.w / 2
        const cy = selected.y + f.d / 2
        return (
          <g className="plan-guides" pointerEvents="none" fontSize={fs}>
            {selected.x > 0 ? (
              <>
                <path d={`M${ox} ${oy + cy}H${ox + selected.x}`} className="guide" />
                <text x={ox + selected.x / 2} y={oy + cy - u * 0.3} textAnchor="middle">{selected.x}</text>
              </>
            ) : null}
            {selected.y > 0 ? (
              <>
                <path d={`M${ox + cx} ${oy}V${oy + selected.y}`} className="guide" />
                <text x={ox + cx + u * 0.3} y={oy + selected.y / 2 + fs * 0.34}>{selected.y}</text>
              </>
            ) : null}
          </g>
        )
      })() : null}

      {ghost ? (
        <g className="plan-ghosts" pointerEvents="none">
          {ghost.filter((gi) => movedIds.has(gi.id)).map((gi) => {
            const f = footprint(gi)
            const current = items.find((i) => i.id === gi.id)
            const cf = current ? footprint(current) : f
            return (
              <g key={gi.id}>
                {current ? (
                  <path d={`M${ox + current.x + cf.w / 2} ${oy + current.y + cf.d / 2}L${ox + gi.x + f.w / 2} ${oy + gi.y + f.d / 2}`} className="ghost-link" />
                ) : null}
                <g transform={`translate(${ox + gi.x} ${oy + gi.y})`}>
                  <rect width={f.w} height={f.d} rx={Math.min(4, f.w / 6, f.d / 6)} className="ghost-body" />
                  {f.w >= gi.name.length * fs * 0.56 + u && f.d >= fs * 2 ? (
                    <text x={f.w / 2} y={f.d / 2 + fs * 0.34} textAnchor="middle" fontSize={fs} className="ghost-label">{gi.name}</text>
                  ) : null}
                </g>
              </g>
            )
          })}
        </g>
      ) : null}
    </svg>
  )
}
