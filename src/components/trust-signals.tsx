import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock } from "lucide-react"

export function TrustSignals() {
  const certifications = [
    "California Security License",
    "Florida Security License",
    "BBB A+ Rating",
    "ASIS International Member",
    "Insured up to $2M",
    "BSIS Certified",
  ]

  const stats = [
    { number: "500+", label: "Protected Clients", icon: Users },
    { number: "24/7", label: "Emergency Response", icon: Clock },
    { number: "0", label: "Security Incidents in 2024", icon: Shield },
    { number: "15min", label: "Average Response Time", icon: Award },
  ]

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#b98600] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#b98600] mb-2">{stat.number}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Licensed, Certified & Trusted</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="border-[#b98600] text-[#b98600] px-4 py-2">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Client logos placeholder */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Trusted by leading businesses across LA & Florida</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">Client Logo {i}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
