import { Home, Building2, ArrowUpRight } from 'lucide-react'

const organizations = [
  {
    icon: Home,
    name: 'Nixon Home Care',
    description: 'Adult Day Care, Assisted Living, and Independent Living services designed to support dignity, safety, and quality of life.',
    href: 'https://nixonhomecare.org',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: Building2,
    name: 'Nixon Signature Estates',
    description: 'Premier senior living communities offering comfortable, well-appointed residences and attentive care.',
    href: 'https://nixon-estates.com',
    color: 'bg-secondary/10 text-secondary'
  }
]

export default function AffiliatedServices() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Beyond Counseling
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Other Services Nixon Provides
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Nixon family of organizations also offers care and living options for adults and seniors
            throughout the Houston community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {organizations.map((org) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 block"
            >
              <div className={`w-14 h-14 rounded-xl ${org.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <org.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                {org.name}
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {org.description}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
