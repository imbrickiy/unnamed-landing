import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Jost as FontJost } from 'next/font/google'
import './globals.css'

const fontJost = FontJost({
  subsets: ['latin'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'UNNAMED',
  description: 'Landing page for UNNAMED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background antialiased bg-black overflow-x-hidden leading-[inherit] m-0',
          fontJost.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
