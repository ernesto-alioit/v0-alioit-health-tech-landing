import { Shield, Clock, FileCheck, DollarSign } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Shield,
      number: "$9.77M",
      title: "Average Healthcare Breach Cost",
      description:
        "Healthcare data breaches are the most expensive of any industry—for the 13th consecutive year. Our proactive security programs help you avoid becoming a statistic by building robust defenses before attackers strike.",
    },
    {
      icon: Clock,
      number: "72hrs",
      title: "New HIPAA Restoration Requirement",
      description:
        "The proposed HIPAA Security Rule mandates critical systems like EHRs be restored within 72 hours of a cyberattack. We help you build the resilience and recovery capabilities to meet these new standards.",
    },
    {
      icon: FileCheck,
      number: "100+",
      title: "Healthcare Compliance Audits",
      description:
        "Our team has guided over 100 health tech companies through HIPAA, HITRUST, SOC 2, and state privacy regulations. We know what auditors look for and help you build programs that pass the first time.",
    },
    {
      icon: DollarSign,
      number: "5x",
      title: "Cheaper Than Building In-House",
      description:
        "With a 4 million person cybersecurity talent shortage, building an internal security team is costly and slow. Get enterprise-grade security expertise at a fraction of the cost.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Built for Healthcare's Unique Challenges</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Expert cybersecurity services designed for the regulatory and technical demands of health tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="text-4xl font-bold text-primary">{stat.number}</div>
                    <h3 className="text-xl font-semibold">{stat.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{stat.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
