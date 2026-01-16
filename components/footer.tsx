import Image from "next/image"
import Link from "next/link"
import { Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Contact Information */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-4">Head Quarters</h4>
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="font-medium text-white">USA</p>
                <p>Phone: 520-367-2544</p>
                <p className="mt-2">9040 S Rita Rd #1270</p>
                <p>Tucson, AZ 85747</p>
                <p className="mt-2">7670 Opportunity Rd #255</p>
                <p>San Diego, CA 92111</p>
              </div>
              <div>
                <p className="font-medium text-white">Mexico</p>
                <p>Garmendia #202-I, Col.Centro</p>
                <p>Hermosillo, Son. 83000</p>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Security Program Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  HIPAA Compliance
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  HITRUST Certification
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  SOC 2 Readiness
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Security Assessments
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Incident Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="https://clutch.co/profile/alio-it-solutions"
                  className="hover:text-primary transition-colors"
                >
                  Clutch Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-primary transition-colors">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link href="#youtube" className="hover:text-primary transition-colors">
                  YouTube Channel
                </Link>
              </li>
              <li>
                <Link href="#whitepapers" className="hover:text-primary transition-colors">
                  White Papers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/alioit-logo.png"
                alt="AlioIT Solutions"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
              <p className="text-sm text-white/60">Cybersecurity Programs for Health Tech</p>
            </div>

            <div className="flex items-center gap-4">
              <Link href="#privacy" className="text-sm text-white/60 hover:text-primary transition-colors">
                Privacy
              </Link>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/company/alio-nearshore-it/"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="https://x.com/alio_it"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@alioit4373"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-white/40">© {new Date().getFullYear()} AlioIT Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
