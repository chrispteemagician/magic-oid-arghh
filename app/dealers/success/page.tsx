'use client'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md text-center">
        <div className="text-6xl mb-4">🎩✨</div>
        <h1 className="text-3xl font-bold text-white mb-4">Welcome, Founder Dealer!</h1>
        <p className="text-purple-200 mb-6">Payment successful! You're now a Magic-Oid Founder Dealer.</p>
        <p className="text-purple-300 text-sm mb-6">We'll email you within 24 hours with your dealer setup.</p>
        <a href="/" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold">Back to Magic-Oid</a>
      </div>
    </div>
  )
}
