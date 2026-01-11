'use client'

import { useState } from 'react'

export default function DealersPage() {
  const [selectedTier, setSelectedTier] = useState<'tier1' | 'tier2' | 'regular' | null>(null)
  const [formData, setFormData] = useState({ email: '', name: '', businessName: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTier) { setError('Select a tier first'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/dealers/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, tier: selectedTier })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      window.location.href = data.url
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  const price = selectedTier === 'tier1' ? '£97' : selectedTier === 'tier2' ? '£174' : '£295'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">🎩 Become a Founder Dealer</h1>
          <p className="text-xl text-blue-100">One membership. Every -Oid. Entire Kudos family.</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-6">⏰ FOUNDER TIERS - Limited Spots</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button onClick={() => setSelectedTier('tier1')} className={`bg-white rounded-xl p-6 text-center hover:scale-105 transition ${selectedTier === 'tier1' ? 'ring-4 ring-purple-600' : ''}`}>
              <p className="text-sm text-gray-600 mb-2">First 50</p>
              <p className="text-4xl font-bold text-purple-900 mb-2">£97/year</p>
              <p className="text-sm text-gray-700">Ends Jan 31</p>
            </button>
            <button onClick={() => setSelectedTier('tier2')} className={`bg-white rounded-xl p-6 text-center hover:scale-105 transition ${selectedTier === 'tier2' ? 'ring-4 ring-purple-600' : ''}`}>
              <p className="text-sm text-gray-600 mb-2">Next 50</p>
              <p className="text-4xl font-bold text-purple-900 mb-2">£174/year</p>
              <p className="text-sm text-gray-700">Through Feb</p>
            </button>
            <button onClick={() => setSelectedTier('regular')} className={`bg-white rounded-xl p-6 text-center hover:scale-105 transition ${selectedTier === 'regular' ? 'ring-4 ring-purple-600' : ''}`}>
              <p className="text-sm text-gray-600 mb-2">After That</p>
              <p className="text-4xl font-bold text-purple-900 mb-2">£295/year</p>
              <p className="text-sm text-gray-700">Regular price</p>
            </button>
          </div>
          <p className="text-center mt-4 text-purple-900 font-semibold">⚡ Lock in founder price FOREVER</p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">A Message From Chris P Tee 💚</h3>
          <p className="text-gray-700 mb-4"><strong>Thank you.</strong> For 30 years, the magic community has been my home. Now I can finally be fully myself – and I want to give back everything I've learned.</p>
          <p className="text-gray-700 mb-4">This isn't just a dealer program. <strong>This is us building something together.</strong> Where dealers, teachers, and students protect the art, share skills, and help each other grow.</p>
          <p className="text-gray-700 mb-4">The £97 you invest isn't just apps – it's <strong>funding workshops, lectures, and jam sessions that make magic accessible to everyone.</strong></p>
          <p className="text-purple-700 italic">"World domination through kindness." - Chris P Tee</p>
        </div>

        {selectedTier && (
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Complete Your {price}/year Signup</h3>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-3 border rounded-lg" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-4 py-3 border rounded-lg" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Business Name *</label>
                <input type="text" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} required className="w-full px-4 py-3 border rounded-lg" placeholder="Magic Shop Ltd" />
              </div>
              {error && <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg p-4">{error}</div>}
              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg disabled:opacity-50 text-lg">
                {loading ? 'Processing...' : `Pay ${price}/year - Become a Founder Dealer`}
              </button>
            </form>
          </div>
        )}

        <div className="text-center"><a href="/" className="text-blue-100 hover:text-white underline">← Back</a></div>
      </div>
    </div>
  )
}
