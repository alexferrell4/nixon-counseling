import { Metadata } from 'next'
import { Heart, Users, Award, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Nixon Counseling Services',
  description: 'Learn about Nixon Counseling Services and our mission to provide compassionate behavioral health care in Houston, TX.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">About Nixon Counseling</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Dedicated to supporting the emotional well-being and personal growth of individuals and families in the Houston community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                Hope. Healing. Growth. Together We Can.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Nixon Counseling Services, we believe that everyone deserves the opportunity to live a healthier, happier life. Our team of dedicated professionals provides compassionate, professional behavioral health services to support individuals and families on their journey to wellness.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We understand that seeking help can be challenging, which is why we've created a safe, respectful, and supportive environment where you can feel comfortable sharing your struggles and working toward your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-muted p-8 rounded-2xl">
                <img 
                  src="/about-family.jpg" 
                  alt="Family counseling session"
                  className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              What Guides Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'We approach every client with empathy, understanding, and genuine care for their well-being.'
              },
              {
                icon: Users,
                title: 'Inclusivity',
                description: 'We welcome and serve all individuals and families regardless of background or circumstances.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We are committed to providing the highest quality of care through continuous learning and improvement.'
              },
              {
                icon: Clock,
                title: 'Dedication',
                description: 'We are dedicated to walking alongside our clients every step of their journey to wellness.'
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <value.icon size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary/5 p-8 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Why Families Choose Us</h3>
                <div className="space-y-4">
                  {[
                    'Licensed and experienced behavioral health professionals',
                    'Services for adults, children, adolescents, and families',
                    'School-based services and IEP/504 assistance',
                    'We accept Molina Healthcare and Superior HealthPlan',
                    'Self-pay options available',
                    'Convenient Houston location'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Commitment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                You Don't Have to Face It Alone
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We understand that reaching out for help takes courage. Our team is here to provide a judgment-free space where you can explore your feelings, develop coping strategies, and work toward meaningful change.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're dealing with anxiety, depression, family challenges, or helping your child navigate emotional difficulties, we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:713-419-2653"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Call 713-419-2653
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
