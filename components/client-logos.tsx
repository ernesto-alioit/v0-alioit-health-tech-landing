export default function ClientLogos() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">
          We've Helped Secure Some of the World's Largest (and Smallest) Organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="w-32 h-16 bg-secondary/5 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-medium">Client {i}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto text-pretty">
          Our team has helped identify and remediate vulnerabilities in Fortune 500 companies, Federal Government
          agencies, SMBs, startups, and more. Let us help you too!
        </p>
      </div>
    </section>
  )
}
