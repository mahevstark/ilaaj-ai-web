import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ilaaj AI - AI-Powered Health & Nutrition Tracking',
  description: 'Track your health, nutrition, and fitness goals with AI-powered insights. The all-in-one health tracking app for real life.',
  keywords: 'health tracking, nutrition, fitness, AI, wellness, calorie tracking, health goals',
  authors: [{ name: 'Ilaaj AI Team' }],
  openGraph: {
    title: 'Ilaaj AI - AI-Powered Health & Nutrition Tracking',
    description: 'Track your health, nutrition, and fitness goals with AI-powered insights.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ilaaj AI - AI-Powered Health & Nutrition Tracking',
    description: 'Track your health, nutrition, and fitness goals with AI-powered insights.',
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
