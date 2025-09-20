"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Shield, Clock, CheckCircle } from "lucide-react"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Final CTA form submitted:", formData)
  }


  const sendEmail = async () => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'recipient@example.com',
        subject: 'Hello from Next.js',
        text: 'This is a test email.'
      })
    });

    const data = await response.json();
    console.log(data.message);
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Protect Your Property Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Don't wait for a security incident to happen. Get professional protection from Los Angeles and Florida's
              most trusted security company.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Free Security Assessment</h3>
                    <p className="text-gray-300">
                      We'll evaluate your property and provide a customized security plan at no cost.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-300">
                      All guards are state-licensed, bonded, and covered by comprehensive insurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-300">
                      Round-the-clock monitoring and emergency response whenever you need us.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 p-6 bg-[#b98600]/10 rounded-lg border border-[#b98600]/20">
                <p className="text-primary font-semibold mb-2">🔒 Security Guarantee</p>
                <p className="text-sm text-gray-300">
                  If you're not completely satisfied with our service in the first 30 days, we'll refund your money and
                  help you find alternative security solutions.
                </p>
              </div> */}
            </div>

            {/* Right side - Contact form */}
            <Card className="p-8 bg-white text-slate-900">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Get Your Free Quote</h3>
                <p className="text-slate-600">Speak with a security expert within 15 minutes</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Tell us about your security needs..."
                  className="w-full h-24 px-3 py-2 border border-input bg-background rounded-md resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold bg-[#b98600]" onClick={sendEmail}>
                  Get My Free Security Quote
                </Button>
              </form>

              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t">
                <a href="tel:+1234567890" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full bg-transparent hover:bg-[#b98600]">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>


              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
