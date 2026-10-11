import type { VercelRequest, VercelResponse } from '@vercel/node'

type Furniture = { id: string; name: string; width: number; depth: number; x: number; y: number; rotation: number }
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'AI planning is not configured yet. Add OPENAI_API_KEY to the server environment.' })
  const { room, furniture, goal, constraints } = req.body ?? {}
  if (!room || !Array.isArray(furniture) || !goal?.trim()) return res.status(400).json({ error: 'Add room dimensions, furniture, and a goal before requesting a layout.' })
  if (furniture.length > 30 || goal.length > 1200) return res.status(400).json({ error: 'Keep the inventory under 30 items and the goal under 1,200 characters.' })
  const prompt = `You are NEXUS, a practical spatial-planning assistant. Propose a furniture arrangement for a rectangular room. Return JSON only: {"name":string,"summary":string,"tradeoffs":string[],"placements":[{"furnitureId":string,"x":number,"y":number,"rotation":0|90|180|270}]}. Coordinates x/y are centimetres from the top-left inside corner. Use only supplied IDs and include every item exactly once. Never change dimensions. Keep items inside the room and avoid overlaps. x/y refer to the top-left of the rotated bounding box. Respect the goal and fixed constraints; explain unavoidable trade-offs. Room cm: ${JSON.stringify(room)}. Constraints: ${JSON.stringify(constraints ?? [])}. Furniture cm: ${JSON.stringify(furniture.map((f: Furniture) => ({ id:f.id,name:f.name,width:f.width,depth:f.depth,x:f.x,y:f.y,rotation:f.rotation })))}. User goal: ${goal}`
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', { method:'POST', headers:{ Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json' }, body:JSON.stringify({ model:process.env.OPENAI_MODEL || 'gpt-4.1-mini',temperature:0.3,response_format:{type:'json_object'},messages:[{role:'system',content:'Return one valid JSON object. Be a careful spatial planner, not an image generator.'},{role:'user',content:prompt}] }) })
    if (!response.ok) { console.error('AI provider error',response.status,(await response.text()).slice(0,400)); return res.status(502).json({error:'Forma could not generate a layout right now. Check the AI provider configuration and try again.'}) }
    const data = await response.json(); const raw = data.choices?.[0]?.message?.content
    if (!raw) return res.status(502).json({error:'The layout service returned an empty proposal. Try again.'})
    const result = JSON.parse(raw)
    const ids = new Set(furniture.map((f: Furniture) => f.id))
    const placements = Array.isArray(result.placements) ? result.placements.filter((p: any) => ids.has(p.furnitureId) && Number.isFinite(p.x) && Number.isFinite(p.y) && [0,90,180,270].includes(p.rotation)) : []
    if (placements.length !== furniture.length || new Set(placements.map((p: any) => p.furnitureId)).size !== furniture.length) return res.status(502).json({error:'The layout service returned inconsistent placements. Try again.'})
    return res.status(200).json({...result,placements})
  } catch (error) { console.error('Layout suggestion error',error); return res.status(500).json({error:'Something went wrong while generating the layout. Please try again.'}) }
}