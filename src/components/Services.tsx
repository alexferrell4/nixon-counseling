import { 
  Heart, 
  Users, 
  GraduationCap, 
  ClipboardList, 
  Brain, 
  Shield,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Heart,
    title: 'Physchosocial Rehabilitation (PSR)',
    description: 'Collaborative, recovery-oriented approach for individuals with severe or persistent mental illnesses. Its primary goal is to help individuals develop the emotional, cognitive, and social skills necessary to live, work, and thrive as independently as possible in their communitie',
    color: 'bg-secondary/10 text-secondary'
  },
  {
    icon: Users,
    title: 'Adult Behavioral Health Services',
    description: 'Comprehensive care for individuals struggling with mental health conditions, substance use, and emotional distress.',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: Brain,
    title: 'Child & Adolescent Services',
    description: 'Specialized emotional and behavioral support tailored for children and teenagers.',
    color: 'bg-accent/10 text-accent'
  },
  {
    icon: GraduationCap,
    title: 'School Advocacy and IEP/504 Assistance',
    description: 'We provide support and guidance to families navigating the IEP and 504 process, helping ensure your child gets the educational support they need to thrive.',
    color: 'bg-secondary/10 text-secondary'
  },
  {
    icon: ClipboardList,
    title: 'Behavioral Health Assessments',
    description: 'Comprehensive assessments to understand behavioral patterns and develop effective treatment plans tailored to individual needs.',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: Shield,
    title: 'Mental Health Skills Training (MHS/TCM)',
    description: 'We support individuals with serious mental illnesses (SMI) or emotional disturbances in regaining everyday life skills and independently navigating medical, educational, and social support systems',
    color: 'bg-accent/10 text-accent'
  }
]

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Behavioral Health Services for Adults & Children
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide compassionate, professional behavioral health services to support 
            the emotional well-being and personal growth of individuals and families.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light font-semibold transition-colors"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}
