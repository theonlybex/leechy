import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { AIAssistant } from '@/components/AIAssistant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leechy - The rental marketplace for everyone',
  description: 'Rent anything, anywhere, anytime with Leechy - the ultimate rental marketplace.',
  keywords: ['rental', 'marketplace', 'rent', 'leechy'],
  authors: [{ name: 'Leechy Team' }],
  colorScheme: 'light dark',
  themeColor: '#1fa972',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link rel="icon" href="/LeechyLogo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/LeechyLogo.jpeg" />
      </head>
      <body className={`${inter.className} bg-gradient-to-r from-cyan-700 to-green-600 h-full`}>
        <div className="min-h-screen bg-gradient-to-r from-cyan-700 to-green-600">
          <Header />
          <main>{children}</main>
          <AIAssistant />
        </div>
      </body>
    </html>
  )
}
