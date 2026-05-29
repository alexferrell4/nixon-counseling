import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Values from '@/components/Values'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Mission Statement */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Hope. Healing. Growth.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nixon Counseling Services provides compassionate, professional behavioral health services 
            to support the emotional well-being and personal growth of individuals and families 
            throughout the Houston community. We believe that everyone deserves access to quality 
            mental health care in a safe, supportive environment.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      <Values />

      <Services />

      <CTA />
    </main>
  )
}
