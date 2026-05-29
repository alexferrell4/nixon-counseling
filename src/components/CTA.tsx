import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Your Mental Health Matters
        </h2>

        <p className="text-xl text-white/90 mb-4 font-serif italic">
          Let Us Walk This Journey With You.
        </p>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Everyone deserves the opportunity to live a healthier, happier life. 
          Take the first step today — we're here to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            Contact Us Today
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:713-419-2653"
            className="flex items-center gap-2 text-white hover:text-secondary-light font-semibold transition-colors px-6 py-4"
          >
            <Phone size={20} />
            713-419-2653
          </a>
        </div>

      </div>
    </section>
  )
}
