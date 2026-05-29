import Link from 'next/link'
import { Phone, MapPin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Heart size={20} className="text-secondary-light" />
              </div>
              <span className="text-xl font-bold">Nixon Counseling Services</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Compassionate behavioral health services for adults, children, and families in the Houston community.
            </p>
            <p className="text-sm text-white/50 italic">
              Hope. Healing. Growth. Together We Can.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:713-419-2653" className="flex items-center gap-3 text-white/80 hover:text-secondary-light transition-colors">
                <Phone size={18} />
                713-419-2653
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>3719 Lynnfield St.<br />Houston, TX 77016</span>
              </div>
              <a href="mailto:info@nixoncounseling.com" className="flex items-center gap-3 text-white/80 hover:text-secondary-light transition-colors">
                <Mail size={18} />
                tpersley.nixoncounseling@gmail.com 
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/80 hover:text-secondary-light transition-colors">Home</Link>
              <Link href="/about" className="text-white/80 hover:text-secondary-light transition-colors">About Us</Link>
              <Link href="/services" className="text-white/80 hover:text-secondary-light transition-colors">Services</Link>
              <Link href="/intake" className="text-white/80 hover:text-secondary-light transition-colors">Intake Forms</Link>
              <Link href="/contact" className="text-white/80 hover:text-secondary-light transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="flex flex-col gap-2 text-white/80">
              <span>Individual Therapy</span>
              <span>Family Therapy</span>
              <span>Child & Adolescent Counseling</span>
              <span>School-Based Services</span>
              <span>Case Management</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Nixon Counseling Services. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
