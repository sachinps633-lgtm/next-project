import { Shield, Clock, Users, Award, Phone, MapPin } from "lucide-react"

export function ValueProposition() {
  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "All guards are state-licensed, bonded, and fully insured for your protection",
    },
    {
      icon: Clock,
      title: "24/7 Rapid Response",
      description: "Emergency response within 15 minutes anywhere in LA or Florida",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Extensively trained guards with military and law enforcement backgrounds",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over 500 satisfied clients with zero security incidents in 2024",
    },
    {
      icon: Phone,
      title: "Direct Communication",
      description: "24/7 hotline with real-time updates and incident reporting",
    },
    {
      icon: MapPin,
      title: "Local Presence",
      description: "Strategically located teams across Los Angeles and Florida regions",
    },
  ]

  return (
    <section className="py-20 bg-[#fbf8f1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Why Choose Already Security?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're not just another security company. We're your trusted partners in protection, delivering unmatched
            service and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg p-3 rounded-lg flex-shrink-0 bg-[#f4edd9]">
                  <benefit.icon className="h-6 w-6 text-[#b98600]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
