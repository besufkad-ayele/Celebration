import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Celebration - Made with love for Saron T.',
  description: 'A beautiful celebration website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white selection:bg-pink-500/30 selection:text-pink-200">
        {children}
      </body>
    </html>
  )
}
