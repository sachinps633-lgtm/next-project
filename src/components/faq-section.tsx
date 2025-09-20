"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, X } from "lucide-react"


export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)


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

  

  const faqs = [
    
    {
      question: "Why Already Security?",
      answer:
        "Already Security stands apart from other security companies by prioritizing trust as the foundation of our client relationships. We believe trust is essential for a successful partnership, and we work diligently to build and maintain it. As a fully licensed and insured security provider, Already Security upholds uncompromising standards and fosters strong, reliable connections with our clients—every time, without exception.",
    },
    {
      question: "Does Already Security provide 24/7 Security?",
      answer:
        "Yes, all our security guards are state-licensed, bonded, and fully insured. We carry comprehensive liability insurance up to $2 million and all guards undergo extensive background checks and training.",
    },
    {
      question: "What types of Services does Already Security offer?",
      answer:
        "Already Security offers the following services: Security Guards, Surveillance, Bodyguards, Fire Watch, Vehicle Patrol, Executive Security, Armed and Unarmed Security Guards, and Event Security.",
    },
    {
      question: "What locations does Already Security provide services to?",
      answer:
        "Already Security provides services throughout Los Angeles, California.",
    },
    {
      question: "How can we contact you?",
      answer:
        "Call directly at (818) 800-1143. We’re here to protect you.",
    },
  ]

  return (
    <>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Get answers to common questions about our security services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#b98600] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#b98600] flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button size="lg" className="bg-[#b98600]" onClick={() => setIsFormOpen(true)} >Talk With Security Expert</Button>
          </div>
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
