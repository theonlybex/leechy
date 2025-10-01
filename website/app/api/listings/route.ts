import { NextResponse } from 'next/server'
import { listingCreateSchema } from '@/lib/schemas/listing'

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = listingCreateSchema.safeParse({
      ...json,
      // Coerce number if sent as string from form
      pricePerDayUsd:
        typeof json?.pricePerDayUsd === 'string'
          ? Number(json.pricePerDayUsd)
          : json?.pricePerDayUsd,
    })

    if (!parsed.success) {
      const issues = parsed.error.flatten().fieldErrors
      return NextResponse.json({ error: 'Validation failed', issues }, { status: 400 })
    }

    const data = parsed.data
    const created = {
      id: Math.random().toString(36).slice(2),
      ...data,
      createdAt: new Date().toISOString(),
      popularity: 0,
    }

    // TODO: Replace with real persistence (Firestore) later
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
}


