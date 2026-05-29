import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary min-h-[600px]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart size={16} className="text-secondary-light" />
              <span className="text-sm font-medium">Serving the Houston Community</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Compassionate Care.
              <br />
              <span className="text-secondary-light">Stronger Minds.</span>
              <br />
              Brighter Futures.
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed max-w-xl">
              Professional behavioral health services for adults, children, adolescents, and families. 
              You don't have to face it alone — we're here to help.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Appointment
              </Link>

              <Link
                href="/intake"
                className="border-2 border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Start Intake
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-3">We accept:</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">Molina Healthcare</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">Superior HealthPlan</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">Self-Pay Options</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-3xl">
              <img
                src="/hero.jpg"
                alt="Supportive family counseling session"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
