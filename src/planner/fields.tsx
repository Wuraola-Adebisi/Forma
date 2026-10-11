import { useEffect, useState } from 'react'
import { clamp } from './geometry'

type NumberFieldProps = {
  label: string
  value: number
  min: number
  max: number
  unit?: string
  onCommit: (n: number) => void
}

/** Keeps a text draft while typing and only applies a clamped value on blur or Enter. */
export function NumberField({ label, value, min, max, unit, onCommit }: NumberFieldProps) {
  const [draft, setDraft] = useState(String(value))
  useEffect(() => setDraft(String(value)), [value])

  const commit = () => {
    const n = Number(draft)
    if (!draft.trim() || !Number.isFinite(n)) return setDraft(String(value))
    const next = Math.round(clamp(n, min, max))
    setDraft(String(next))
    if (next !== value) onCommit(next)
  }

  return (
    <label className="field">
      <span>{label}{unit ? <small>{unit}</small> : null}</span>
      <input
        inputMode="numeric"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
      />
    </label>
  )
}

type TextFieldProps = { label: string; value: string; maxLength?: number; onCommit: (s: string) => void }

export function TextField({ label, value, maxLength = 40, onCommit }: TextFieldProps) {
  const [draft, setDraft] = useState(value)
  useEffect(() => setDraft(value), [value])

  const commit = () => {
    const next = draft.trim()
    if (!next) return setDraft(value)
    if (next !== value) onCommit(next)
  }

  return (
    <label className="field">
      <span>{label}</span>
      <input
        value={draft}
        maxLength={maxLength}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
      />
    </label>
  )
}
