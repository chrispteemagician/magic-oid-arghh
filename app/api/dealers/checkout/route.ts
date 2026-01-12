import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email, name, businessName, tier } = await req.json()
    if (!email || !name || !businessName || !tier) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    
    let priceId
    if (tier === 'tier1') priceId = process.env.STRIPE_TIER1_PRICE_ID
    else if (tier === 'tier2') priceId = process.env.STRIPE_TIER2_PRICE_ID
    else if (tier === 'regular') priceId = process.env.STRIPE_REGULAR_PRICE_ID
    else return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    
    if (!priceId) throw new Error('Price ID not configured')
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || req.headers.get('origin') || 'http://localhost:3000'
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${baseUrl}/dealers/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/dealers`,
      customer_email: email,
      metadata: { name, businessName, email, tier }
    })
    
    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
