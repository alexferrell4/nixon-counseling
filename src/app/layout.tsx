import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Nixon Counseling Services | Behavioral Health in Houston, TX',
  description: 'Compassionate behavioral health services for adults, children, and families in Houston, Texas. Individual therapy, family counseling, school-based services, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

