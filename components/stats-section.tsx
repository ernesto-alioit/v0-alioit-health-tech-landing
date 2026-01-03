import { Shield, Clock, FileCheck, DollarSign } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Shield,
      number: "25+",
      title: "Seamless Integrations",
      description:
        "The AlioIT vCISO solution is designed to integrate seamlessly with your organization's existing technology stack. Whether it's your communication channel (Slack, Gmail, etc.) or your cloud provider (AWS, Google Cloud Platform, Microsoft Azure, etc.).",
    },
    {
      icon: Clock,
      number: "24/7",
      title: "Round-The-Clock Support",
      description:
        "Our vCISOs are dedicated to providing round-the-clock support to our clients. We understand that security threats can occur at any time, which is why we have specialists on standby 24/7 to respond to any incidents.",
    },
    {
      icon: FileCheck,
      number: "100+",
      title: "Technical Assessments Completed",
      description:
        "AlioIT's team of cybersecurity specialists have completed hundreds of penetration testing engagements. These assessments range from all-encompassing network penetration tests to web application assessments for startups.",
    },
    {
      icon: DollarSign,
      number: "5x",
      title: "Cheaper Than Traditional Hires",
      description:
        "The position of Chief Information Security Officer (CISO) is highly-demanded and well-compensated. The average base salary for a CISO in the United States is $233,507. Get expert guidance for a fraction of the cost.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get ready for seamless support</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Expert cybersecurity services tailored to your business needs
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
