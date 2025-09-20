"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Users, Building, Calendar, Flame, Car, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export function ServicesSection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "",
  })

  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  

  const services = [
    {
      icon: Shield,
      title: "Security Guards",
      description: "Professional uniformed guards for residential and commercial properties",
      features: ["Armed & Unarmed Options", "24/7 Patrol Services", "Access Control"],
      image: "/professional-security-guard-in-uniform.jpg",
    },
    {
      icon: Users,
      title: "Executive Security",
      description: "Personal protection for high-profile individuals and executives",
      features: ["Close Protection", "Threat Assessment", "Secure Transportation"],
      image: "/executive-protection-bodyguard.jpg",
    },
    {
      icon: Building,
      title: "Commercial Security",
      description: "Comprehensive security solutions for businesses and facilities",
      features: ["Perimeter Security", "Employee Safety", "Asset Protection"],
      image: "/commercial-building-security.jpg",
    },
    {
      icon: Calendar,
      title: "Event Security",
      description: "Professional security management for events of all sizes",
      features: ["Crowd Control", "VIP Protection", "Emergency Response"],
      image: "/event-security-team.jpg",
    },
    {
      icon: Flame,
      title: "Fire Watch",
      description: "Certified fire watch services for construction and industrial sites",
      features: ["Code Compliance", "24/7 Monitoring", "Emergency Protocols"],
      image: "/fire-watch-security-guard.jpg",
    },
    {
      icon: Car,
      title: "Armed and Unarmed Security Guards",
      description: "Dedicated security officers for properties, businesses, and events",
      features: ["Highly Trained Personnel", "24/7 On-Site Protection", "Emergency Response & Support"],
      image: "/security-patrol-vehicle.jpg",
    },
  ]

  return (
    <>    
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Comprehensive Security Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From residential protection to corporate security, we provide tailored solutions for every security need in
            Los Angeles and Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-[#fbf8f1]">
              <div className="aspect-video relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#b98600] p-2 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#b98600] rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsFormOpen(true)}>
                  Request Quote for {service.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 bg-[#b98600]"
          onClick={() => setIsFormOpen(true)}
          
          >
            Get Custom Security Plan
          </Button>
        </div>
      </div>
    </section>

     {/* Modal with the same quick quote form */}
     {isFormOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
        <Card className="relative w-full max-w-md p-6 bg-white">
          <button
            aria-label="Close form"
            className="absolute right-4 top-4 text-slate-500 hover:text-slate-800"
            onClick={() => setIsFormOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Get Free Security Quote</h3>
            <p className="text-slate-600">Response within 15 minutes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
                required
                autoFocus
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12"
                required
              />
            </div>
            <div>
              <select
                className="w-full h-12 px-3 border border-input bg-background rounded-md"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                required
              >
                <option value="">What do you need protection for?</option>
                <option value="residential">Residential Property</option>
                <option value="business">Business/Commercial</option>
                <option value="event">Event Security</option>
                <option value="executive">Executive Protection</option>
                <option value="construction">Construction Site</option>
              </select>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold bg-[#b98600]">
              Get My Free Quote Now
            </Button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-4">
            No obligation. Your information is secure and confidential.
          </p>
        </Card>
      </div>
    )}
    </>
  )
}
