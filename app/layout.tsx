import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'

const firaSans = Fira_Sans({ subsets:['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Gamers Texting app',
  description: 'Best Experience with your teammates!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaSans.className}>{children}</body>
    </html>
  )
}
