import { Metadata } from 'next'
import { 
  Heart, 
  Users, 
  GraduationCap, 
  ClipboardList, 
  Brain, 
  Shield,
  Briefcase,
  BookOpen,
  MessageCircle,
  Target,
  Lightbulb,
  HandHeart
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Nixon Counseling Services',
  description: 'Comprehensive behavioral health services including individual therapy, family counseling, child & adolescent support, and school-based services in Houston, TX.',
}

const mainServices = [
  {
    icon: Heart,
    title: 'Adult Behavioral Health Services',
    description: 'Comprehensive care for individuals struggling with mental health conditions, substance use, and emotional distress.',
    features: ['Anxiety & Depression', 'Stress Management', 'Trauma Recovery', 'Emotional Regulation', 'Life Transitions']
  },
  {
    icon: Users,
    title: 'Pyschosocial Rehabilitation (PSR)',
    description: 'Collaborative, recovery-oriented approach for individuals with severe or persistent mental illnesses. Its primary goal is to help individuals develop the emotional, cognitive, and social skills necessary to live, work, and thrive as independently as possible in their communities',
    features: ['Communication Skills', 'Conflict Resolution', 'Parenting Support', 'Blended Family Issues', 'Family Dynamics']
  },
  {
    icon: Brain,
    title: 'Child & Adolescent Services',
    description: 'Specialized emotional and behavioral support tailored for children and teenagers. We use age-appropriate approaches to help young people express themselves and develop coping skills.',
    features: ['Behavioral Issues', 'Anxiety & Depression', 'Social Skills', 'Self-Esteem', 'Academic Concerns']
  },
  {
    icon: Users,
    title: 'Mental Health Skills Training (MHS/TCM)',
    description: 'We support individuals with serious mental illnesses (SMI) or emotional disturbances in regaining everyday life skills and independently navigating medical, educational, and social support systems',
    features: ['On-Site Counseling', 'Classroom Observations', 'Teacher Consultations', 'Behavior Support Plans', 'Social Skills Groups']
  },
  {
    icon: ClipboardList,
    title: 'School Advocacy and IEP/504 Assistance',
    description: 'We provide support and guidance to families navigating the IEP and 504 process, helping ensure your child gets the educational support they need to thrive.',
    features: ['IEP Meeting Support', '504 Plan Guidance', 'Documentation Review', 'Advocacy Support', 'School Communication']
  },
  {
    icon: Shield,
    title: 'Behavioral Health Assessments',
    description: 'Comprehensive assessments to understand behavioral patterns and develop effective treatment plans tailored to individual needs.',
    features: ['Initial Evaluations', 'Progress Monitoring', 'Treatment Planning', 'Diagnostic Clarity', 'Recommendations']
  }
]

const additionalServices = [
  { icon: Briefcase, title: 'Case Management', description: 'Coordinated care and connection to community resources.' },
  { icon: BookOpen, title: 'Psychoeducation', description: 'Educational support for understanding mental health.' },
  { icon: MessageCircle, title: 'Coping Skills Training', description: 'Practical strategies for managing stress and emotions.' },
  { icon: Target, title: 'Life Skills Development', description: 'Building essential skills for daily living.' },
  { icon: Lightbulb, title: 'Crisis Intervention', description: 'Immediate support during difficult situations.' },
  { icon: HandHeart, title: 'Supportive Counseling', description: 'Ongoing emotional support and guidance.' }
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive behavioral health services for adults, children, and families. We provide personalized care to support your journey to wellness.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Behavioral Health Services
            </h2>
          </div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <div 
                key={service.title} 
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <service.icon size={28} className="text-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`bg-muted rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <service.icon size={64} className="text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              And More
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Additional Support Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-primary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Insurance & Payment Options
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We strive to make our services accessible. We currently accept the following insurance plans, with more options coming soon.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center min-w-[140px]">
                  <p className="font-bold text-primary">Molina Healthcare</p>
                  <p className="text-sm text-muted-foreground">of Texas</p>
                </div>
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center min-w-[140px]">
                  <p className="font-bold text-primary">Superior</p>
                  <p className="text-sm text-muted-foreground">HealthPlan</p>
                </div>
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center min-w-[140px]">
                  <p className="font-bold text-primary">Self-Pay</p>
                  <p className="text-sm text-muted-foreground">Options Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step toward wellness. Contact us today to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/intake"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Start Intake Process
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
