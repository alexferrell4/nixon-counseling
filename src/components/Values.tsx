import { Shield, Heart, Users, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Safe',
    description: 'A safe, respectful, and supportive environment for every individual.'
  },
  {
    icon: Heart,
    title: 'Personalized',
    description: 'Care tailored to meet your unique needs and goals.'
  },
  {
    icon: Users,
    title: 'Supportive',
    description: 'We walk alongside you every step of the way.'
  },
  {
    icon: Sparkles,
    title: 'Empowering',
    description: 'Building the tools and confidence for a brighter future.'
  }
]

export default function Values() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to compassionate care guides everything we do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <value.icon size={32} className="text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
