"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    industry: "",
    servicesInterested: "",
    currentChallenges: "",
    budget: "",
    timeline: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        companySize: "",
        industry: "",
        servicesInterested: "",
        currentChallenges: "",
        budget: "",
        timeline: "",
      })
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Secure Your Health Tech Company</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Take the first step towards HIPAA compliance and comprehensive security
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  "HIPAA & HITRUST compliance expertise",
                  "Healthcare-specific security assessments",
                  "PHI protection & breach prevention",
                  "Audit-ready documentation & policies",
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
              {isSuccess ? (
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your information and will contact you within 24 hours to discuss your healthcare
                      security and compliance needs.
                    </p>
                  </div>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="companySize">Company Size *</Label>
                        <Select
                          value={formData.companySize}
                          onValueChange={(value) => handleSelectChange("companySize", value)}
                          required
                        >
                          <SelectTrigger id="companySize">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501+">501+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry">Health Tech Segment *</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => handleSelectChange("industry", value)}
                          required
                        >
                          <SelectTrigger id="industry">
                            <SelectValue placeholder="Select segment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="digital-health">Digital Health / Telehealth</SelectItem>
                            <SelectItem value="ehr-emr">EHR / EMR Software</SelectItem>
                            <SelectItem value="medical-devices">Medical Devices / IoMT</SelectItem>
                            <SelectItem value="health-analytics">Health Analytics / AI</SelectItem>
                            <SelectItem value="pharma-biotech">Pharma / Biotech</SelectItem>
                            <SelectItem value="payer-tech">Payer / Insurance Tech</SelectItem>
                            <SelectItem value="other-healthtech">Other Health Tech</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servicesInterested">Services Interested In *</Label>
                      <Select
                        value={formData.servicesInterested}
                        onValueChange={(value) => handleSelectChange("servicesInterested", value)}
                        required
                      >
                        <SelectTrigger id="servicesInterested">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security-program">Security Program Development</SelectItem>
                          <SelectItem value="hipaa-compliance">HIPAA Compliance</SelectItem>
                          <SelectItem value="hitrust">HITRUST Certification</SelectItem>
                          <SelectItem value="soc2">SOC 2 Readiness</SelectItem>
                          <SelectItem value="assessment">Security Assessment</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenges">Current Security Challenges</Label>
                      <Textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        placeholder="E.g., preparing for HIPAA audit, need SOC 2 for enterprise sales, recent security incident..."
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<10k">Less than $10K</SelectItem>
                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k+">$50K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline *</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleSelectChange("timeline", value)}
                          required
                        >
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="planning">Just planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Consultation"
                      )}
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    No credit card required. Free initial consultation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
