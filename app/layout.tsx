import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IlaajAI - Your AI-Powered Health Companion',
  description: 'Get instant health advice in Urdu or English. Chat with AI, send photos, record voice notes, and find nearby doctors. Trusted by 10,000+ patients in Pakistan.',
  keywords: 'AI doctor, medical assistant, health advice, Pakistan, Urdu, telemedicine, first aid, doctor finder, health tech',
  authors: [{ name: 'IlaajAI Team' }],
  openGraph: {
    title: 'IlaajAI - Your AI-Powered Health Companion',
    description: 'Get instant health advice in Urdu or English. Chat with AI, send photos, record voice notes, and find nearby doctors.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IlaajAI - Your AI-Powered Health Companion',
    description: 'Get instant health advice in Urdu or English. Chat with AI, send photos, record voice notes, and find nearby doctors.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
