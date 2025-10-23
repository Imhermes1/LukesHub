import { Lexend } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: "Luke Fornieri | Founder of FORNIERI & Lumora Labs",
  description: "Luke Fornieri's hub - connecting real estate excellence with innovative app development. Explore FORNIERI Real Estate and Lumora Labs.",
}

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lexend.className}>
      <body>{children}</body>
    </html>
  )
}
