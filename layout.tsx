import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Magic-Oid - Magic Effect Identification',
  description: 'AI-powered magic trick identification. By Chris P Tee.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
