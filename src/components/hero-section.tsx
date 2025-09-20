"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Shield, Clock, MapPin, X } from "lucide-react"

export function HeroSection() {
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

  // Auto-open the form after 13s and 40s
  useEffect(() => {
    const firstTimer = setTimeout(() => setIsFormOpen(true), 13000)
    const secondTimer = setTimeout(() => setIsFormOpen(true), 40000)
    return () => {
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
    }
  }, [])

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
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/professional-security-guards-in-uniform-patrolling.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="text-white animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-black mb-6 text-balance leading-tight">
                Your Safety, <span className="text-[#b98600]">Our Priority</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 text-pretty">
                Professional security services protecting Los Angeles & Florida businesses and residences with 24/7
                monitoring and rapid response.
              </p>

              {/* Key benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8 ">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-[#b98600] flex-shrink-0" />
                  <span>Licensed & Insured Guards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-[#b98600] flex-shrink-0" />
                  <span>24/7 Emergency Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#b98600] flex-shrink-0" />
                  <span>Local LA & Florida Teams</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-[#b98600] flex-shrink-0" />
                  <span>Immediate Deployment</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 animate-pulse-glow bg-[#b98600] cursor-pointer"
                  onClick={() => setIsFormOpen(true)}
                >
                  Request Immediate Assistance
                </Button>
                <a href="tel:8188001143" className="w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent w-full"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    818-800-1143
                  </Button>
                </a>

              </div>
            </div>

            {/* Right side - Quick quote form */}
            <div className="hidden md:block animate-fade-in-up">
              <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Free Security Quote</h3>
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
                  <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold bg-[#b98600]" onClick={sendEmail}>
                    Get My Free Quote Now
                  </Button>
                </form>

                <p className="text-xs text-slate-500 text-center mt-4">
                  No obligation. Your information is secure and confidential.
                </p>
              </Card>
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
              <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold bg-[#b98600]" onClick={sendEmail}>
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
