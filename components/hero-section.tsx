"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 bg-[#1a1a2e]">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/alioit-logo.png"
              alt="AlioIT Solutions"
              width={120}
              height={35}
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#expertise" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Expertise
            </Link>
            <Link href="#community" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="#company" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Company
            </Link>
            <button
              onClick={scrollToContact}
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-4">
            Information Security Services by AlioIT Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span className="text-primary">Virtual CISO</span> as a Service
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We partner with small and midsize businesses (SMBs) to provide bespoke solutions to secure your digital
            assets, protect sensitive information, and maintain compliance with industry regulations. Gain the
            advantages of an in-house CISO for a fraction of the cost.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToContact}>
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent"
              onClick={() => window.open("https://calendly.com/alioit/30min", "_blank")}
            >
              Schedule a Call
            </Button>
          </div>

          <div className="pt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/5 rounded-full border border-border">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background" />
              </div>
              <span className="text-sm font-medium">Trusted by 100+ organizations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
