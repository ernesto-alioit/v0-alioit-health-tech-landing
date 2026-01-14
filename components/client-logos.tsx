export default function ClientLogos() {
  const clients = [
    {
      name: "Kimley Horn",
      src: "/images/row-1-css-17pj0ql-image.png",
    },
    {
      name: "NinjaOne",
      src: "/images/row-3-css-17pj0ql-image.jpg",
    },
    {
      name: "Boostlingo",
      src: "/images/row-4-css-17pj0ql-image.svg",
    },
    {
      name: "Scout",
      src: "/images/row-5-css-17pj0ql-image.png",
    },
    {
      name: "Secberus",
      src: "/images/row-6-css-17pj0ql-image.png",
    },
    {
      name: "University Shield",
      src: "/images/row-8-css-17pj0ql-image.png",
    },
    {
      name: "Cambium Learning Group",
      src: "/images/row-9-css-17pj0ql-image.png",
    },
    {
      name: "Focus",
      src: "/images/row-10-css-17pj0ql-image.jpeg",
    },
    {
      name: "Time 4 Learning",
      src: "/images/row-11-css-17pj0ql-image.jpg",
    },
    {
      name: "Marqi Medical",
      src: "/images/marqimedical.jpeg",
    },
  ]

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">
          We've Helped Secure Some of the World's Largest (and Smallest) Organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <img
                src={client.src || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="max-w-full h-auto max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
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
