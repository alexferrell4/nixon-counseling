import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're here to help. Reach out today to schedule an appointment or learn more about our services.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are here to support adults, children, and families through compassionate behavioral health services. 
                  Don't hesitate to reach out — your mental health matters.
                </p>
              </div>

              <div className="space-y-4">
                <a href="tel:713-419-2653" className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-secondary/10 transition-colors group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Phone size={22} className="text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-primary">713-419-2653</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={22} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-primary">3719 Lynnfield St.<br />Houston, TX 77016</p>
                  </div>
                </div>

                <a href="mailto:info@nixoncounseling.com" className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-secondary/10 transition-colors group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Mail size={22} className="text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-primary">tpersley.nixoncounseling@gmail.com </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock size={22} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-semibold text-primary">Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
              </div>

              {/* Insurance info */}
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="font-semibold text-primary mb-3">Accepted Insurance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Molina Healthcare of Texas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Superior HealthPlan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Self-Pay Options Available
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  Other insurances will be accepted at a later date.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(713) 555-0000"
                        className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">Service Interested In</label>
                    <select
                      id="service"
                      className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all bg-white"
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">How Can We Help?</label>
                    <textarea
                      id="message"
                      placeholder="Tell us a bit about what you're looking for..."
                      rows={5}
                      className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
