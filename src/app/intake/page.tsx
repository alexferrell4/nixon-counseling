import { Metadata } from 'next'
import {
  FileText,
  CheckCircle,
  Clock,
  Phone,
  ArrowRight,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Intake Forms | Nixon Counseling Services',
  description:
    'Complete your intake forms online to get started with Nixon Counseling Services in Houston, TX.',
}

const steps = [
  {
    number: '01',
    title: 'Complete the Form',
    description:
      'Fill out the intake form below with your information and the reason for seeking services.',
  },
  {
    number: '02',
    title: 'We Review Your Information',
    description:
      'Our team will review your submission and determine the best services for your needs.',
  },
  {
    number: '03',
    title: 'Schedule Your Appointment',
    description:
      "We'll contact you to schedule your initial appointment at a convenient time.",
  },
  {
    number: '04',
    title: 'Begin Your Journey',
    description:
      'Meet with your counselor and start working toward your goals together.',
  },
]

export default function IntakePage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Start Your Intake
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Taking the first step is often the hardest. Complete the form below
            to begin your journey toward healing and growth.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary">
              The Intake Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <span className="text-4xl font-bold text-secondary/20">
                    {step.number}
                  </span>
                  <h3 className="font-bold text-primary mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-secondary/30" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form (JOTFORM EMBED) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-muted rounded-2xl p-8 lg:p-12">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <FileText size={28} className="text-secondary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary">
                  Intake Form
                </h2>
                <p className="text-muted-foreground">
                  Please complete the secure intake form below
                </p>
              </div>
            </div>

            {/* Jotform Embed */}
            <div className="w-full h-[900px] rounded-xl overflow-hidden">
              <iframe
                src="https://form.jotform.com/261485937261061"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Prefer to speak with someone directly?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:713-419-2653"
            className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            <Phone size={20} />
            Call 713-419-2653
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-secondary font-semibold hover:text-secondary-light transition-colors"
          >
            Visit Contact Page
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* What to Expect */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Clock size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                We typically respond to intake forms within 1-2 business days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">
                What to Bring
              </h3>
              <p className="text-muted-foreground">
                Please bring your insurance card and photo ID to your first appointment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <FileText size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">
                Additional Forms
              </h3>
              <p className="text-muted-foreground">
                We may send additional paperwork to complete before your first visit.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}