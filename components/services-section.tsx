import { Shield, Search, FileText, Users, Lock, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Virtual CISO Services",
      description:
        "Strategic cybersecurity leadership and guidance without the cost of a full-time executive. We provide comprehensive security program development and oversight.",
    },
    {
      icon: Search,
      title: "Security Assessments",
      description:
        "Thorough vulnerability assessments and penetration testing to identify weaknesses in your systems before attackers do. Get actionable recommendations.",
    },
    {
      icon: FileText,
      title: "Compliance Management",
      description:
        "Navigate complex regulatory requirements including HIPAA, SOC 2, ISO 27001, and more. We ensure your organization meets all necessary standards.",
    },
    {
      icon: Users,
      title: "Security Awareness Training",
      description:
        "Empower your employees with knowledge to recognize and prevent security threats. Regular training sessions and simulated phishing campaigns.",
    },
    {
      icon: Lock,
      title: "Incident Response",
      description:
        "24/7 incident response services to quickly contain and remediate security breaches. Minimize damage and get back to business faster.",
    },
    {
      icon: TrendingUp,
      title: "Risk Management",
      description:
        "Comprehensive risk assessments and mitigation strategies tailored to your business. Prioritize security investments based on actual threat levels.",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Experienced Cybersecurity Advisors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Where You Need Them, When You Need Them
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Expert Team with Years of Experience</h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 text-pretty">
              AlioIT's team consists of professionals who have been working in the field of cybersecurity for many
              years. They have a deep understanding of the latest threats and vulnerabilities, as well as the most
              effective strategies and tools for protecting against them.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed text-pretty">
              Whether you're dealing with a potential data breach, a phishing attack, or another type of cyber threat,
              our team has the experience and expertise needed to help you stay safe and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
