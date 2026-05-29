'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <p className="hidden sm:block">Hope. Healing. Growth. Together We Can.</p>
          <a href="tel:713-419-2653" className="flex items-center gap-2 font-medium hover:text-secondary-light transition-colors">
            <Phone size={14} />
            713-419-2653
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C8.5 2 6 4 6 7c0 2 1 3.5 2.5 4.5C7 12 6 13 6 14.5c0 2 1.5 3.5 3.5 3.5.5 0 1-.1 1.5-.3V22h2v-4.3c.5.2 1 .3 1.5.3 2 0 3.5-1.5 3.5-3.5 0-1.5-1-2.5-2.5-3C17 11 18 9.5 18 7.5 18 4 15.5 2 12 2z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-primary">Nixon Counseling Services</span>
              <span className="hidden sm:block text-xs text-muted-foreground">Behavioral Health Services</span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-secondary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-secondary font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-secondary font-medium transition-colors">
              Services
            </Link>
            <Link href="/intake" className="text-foreground hover:text-secondary font-medium transition-colors">
              Intake
            </Link>
            <Link 
              href="/contact" 
              className="bg-secondary hover:bg-secondary-light text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile button */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-1 animate-in slide-in-from-top-2">
            <Link href="/" className="py-3 px-4 hover:bg-muted rounded-lg transition-colors" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="py-3 px-4 hover:bg-muted rounded-lg transition-colors" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" className="py-3 px-4 hover:bg-muted rounded-lg transition-colors" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/intake" className="py-3 px-4 hover:bg-muted rounded-lg transition-colors" onClick={() => setOpen(false)}>Intake</Link>
            <Link href="/contact" className="mt-2 bg-secondary text-white text-center py-3 rounded-lg font-semibold" onClick={() => setOpen(false)}>Contact Us</Link>
          </div>
        )}
      </nav>
    </>
  )
}
