import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const PROMPT = `You are MagicID, an expert in magic tricks. Analyze this image and identify the effect. Provide: 1) WHAT IT IS 2) HOW IT WORKS 3) SKILL LEVEL 4) WHERE TO LEARN 5) VALUE. Be enthusiastic.`

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json()
    if (!image) return NextResponse.json({ error: 'No image' }, { status: 400 })
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) throw new Error('GEMINI_API_KEY not set')
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const base64 = image.replace(/^data:image\/\w+;base64,/, '')
    const result = await model.generateContent([PROMPT, { inlineData: { data: base64, mimeType: 'image/jpeg' } }])
    const text = (await result.response).text()
    return NextResponse.json({ analysis: text })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
