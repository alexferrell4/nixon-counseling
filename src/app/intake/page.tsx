import { Metadata } from 'next'
import { FileText, CheckCircle, Clock, Phone, ArrowRight, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Intake Forms | Nixon Counseling Services',
  description: 'Complete your intake forms online to get started with Nixon Counseling Services in Houston, TX.',
}

const steps = [
  {
    number: '01',
    title: 'Complete the Form',
    description: 'Fill out the intake form below with your information and the reason for seeking services.'
  },
  {
    number: '02',
    title: 'We Review Your Information',
    description: 'Our team will review your submission and determine the best services for your needs.'
  },
  {
    number: '03',
    title: 'Schedule Your Appointment',
    description: 'We&apos;ll contact you to schedule your initial appointment at a convenient time.'
  },
  {
    number: '04',
    title: 'Begin Your Journey',
    description: 'Meet with your counselor and start working toward your goals together.'
  }
]

export default function IntakePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Start Your Intake</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Taking the first step is often the hardest. Complete the form below to begin your journey toward healing and growth.
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
                  <span className="text-4xl font-bold text-secondary/20">{step.number}</span>
                  <h3 className="font-bold text-primary mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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

      {/* Intake Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-muted rounded-2xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <FileText size={28} className="text-secondary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary">Intake Form</h2>
                <p className="text-muted-foreground">Please fill out all required fields</p>
              </div>
            </div>

            <form className="space-y-6">
              {/* Client Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Who is this intake for? *
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="clientType" value="self" className="w-4 h-4 text-secondary" defaultChecked />
                    <span>Myself (Adult)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="clientType" value="child" className="w-4 h-4 text-secondary" />
                    <span>My Child</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="clientType" value="family" className="w-4 h-4 text-secondary" />
                    <span>Family</span>
                  </label>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    placeholder="(713) 555-0123"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dob" className="block text-sm font-semibold text-foreground mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="insurance" className="block text-sm font-semibold text-foreground mb-2">
                    Insurance Provider *
                  </label>
                  <select
                    id="insurance"
                    name="insurance"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors bg-white"
                  >
                    <option value="">Select insurance</option>
                    <option value="molina">Molina Healthcare of Texas</option>
                    <option value="superior">Superior HealthPlan</option>
                    <option value="selfpay">Self-Pay</option>
                    <option value="other">Other (will discuss)</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="individual">Physchosocial Rehabilitation (PSR)</option>
                  <option value="family">Adult Behavioral Health Services</option>
                  <option value="child">Child & Adolescent Services</option>
                  <option value="school">School Advocacy and IEP/504 Assistance</option>
                  <option value="iep">Mental Health Skills Training (MHS/TCM)</option>
                  <option value="assessment">Behavioral Health Assessment</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              {/* Reason for Visit */}
              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-foreground mb-2">
                  Briefly describe your reason for seeking services *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors resize-none"
                  placeholder="Please share what brings you to counseling today..."
                />
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Preferred Contact Method *
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="phone" className="w-4 h-4 text-secondary" defaultChecked />
                    <span>Phone Call</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="text" className="w-4 h-4 text-secondary" />
                    <span>Text Message</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="email" className="w-4 h-4 text-secondary" />
                    <span>Email</span>
                  </label>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">Privacy Notice</p>
                    <p>Your information is confidential and protected. We will only use it to contact you regarding your inquiry and provide services.</p>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="w-4 h-4 text-secondary mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I consent to Nixon Counseling Services contacting me regarding my inquiry. I understand that this form does not establish a client relationship. *
                  </span>
                </label>
              </div>

              {/* Submit */}
             <button
  type="submit"
  className="w-full bg-secondary hover:bg-secondary-light text-white py-4 rounded-xl font-bold text-lg transition-colors"
>
                Submit Intake Form
</button>
            </form>
          </div>

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
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Clock size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Response Time</h3>
              <p className="text-muted-foreground">We typically respond to intake forms within 1-2 business days.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">What to Bring</h3>
              <p className="text-muted-foreground">Please bring your insurance card and photo ID to your first appointment.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <FileText size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Additional Forms</h3>
              <p className="text-muted-foreground">We may send additional paperwork to complete before your first visit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
