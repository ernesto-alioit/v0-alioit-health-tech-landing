import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Find your vCISO today</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Take the first step towards comprehensive cybersecurity
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  "Expert cybersecurity leadership",
                  "24/7 security monitoring",
                  "Compliance management",
                  "Cost-effective solution",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
                <form className="space-y-3">
                  <Input type="text" placeholder="Your name" className="w-full" />
                  <Input type="email" placeholder="Work email" className="w-full" />
                  <Input type="text" placeholder="Company name" className="w-full" />
                  <Button className="w-full" size="lg">
                    Request Consultation
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  No credit card required. Free initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
