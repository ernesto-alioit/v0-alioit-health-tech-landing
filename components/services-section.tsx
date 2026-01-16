import { Shield, Search, FileText, Users, Lock, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Security Program Development",
      description:
        "We design and implement comprehensive security programs tailored to health tech. From policies to technical controls, we build the foundation that protects PHI and satisfies auditors.",
    },
    {
      icon: Search,
      title: "Healthcare Security Assessments",
      description:
        "HIPAA-focused risk analyses, penetration testing, and vulnerability assessments designed for health tech. Identify gaps before regulators or attackers do.",
    },
    {
      icon: FileText,
      title: "HIPAA & Compliance Management",
      description:
        "Navigate HIPAA, HITRUST, SOC 2 Type II, and state privacy laws. We prepare you for audits, manage compliance documentation, and keep you current with regulatory changes.",
    },
    {
      icon: Users,
      title: "Healthcare Security Training",
      description:
        "HIPAA-compliant workforce training programs with healthcare-specific scenarios. Reduce the risk of human error that causes 82% of healthcare breaches.",
    },
    {
      icon: Lock,
      title: "Incident Response & Recovery",
      description:
        "Healthcare-specific incident response planning that meets the new 72-hour restoration requirements. Minimize patient care disruption and breach notification obligations.",
    },
    {
      icon: TrendingUp,
      title: "Third-Party Risk Management",
      description:
        "Evaluate and monitor your BAA partners and healthcare vendors. Ensure your supply chain doesn't become your weakest security link.",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Healthcare Security Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Specialized services built for the unique challenges of health tech companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-background border-border">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-secondary rounded-2xl text-secondary-foreground">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Healthcare Security Specialists</h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 text-pretty">
              Our team specializes in healthcare cybersecurity, with deep expertise in HIPAA, HITRUST, and the unique
              challenges facing health tech companies. We've helped startups achieve their first SOC 2 and guided
              established companies through complex compliance transformations.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed text-pretty">
              From ransomware defense to vendor risk management, from clinical workflow security to AI governance—we
              understand the intersection of healthcare operations and information security.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
