"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {  Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Property Manager",
      company: "Downtown LA Apartments",
      image: "/professional-woman-headshot.png",
      rating: 5,
      text: "Already Security transformed our property safety. Their guards are professional, reliable, and our residents feel completely secure. Zero incidents since we started working with them 18 months ago.",
    },
    {
      name: "Michael Rodriguez",
      title: "CEO",
      company: "Tech Innovations Inc",
      image: "/professional-man-headshot.png",
      rating: 5,
      text: "Outstanding executive protection services. Their team is discreet, highly trained, and always one step ahead. I can focus on my business knowing my safety is in expert hands.",
    },
    {
      name: "Jennifer Chen",
      title: "Event Coordinator",
      company: "Premier Events Florida",
      image: "/professional-asian-woman-headshot.png",
      rating: 5,
      text: "We've used Already Security for over 50 events. Their crowd control and emergency response is unmatched. Professional, courteous, and they handle everything seamlessly.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#fbf8f1]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-balance">What Our Clients Say</h2>
      <p className="text-xl text-muted-foreground text-pretty">
        Don't just take our word for it. Here's what our satisfied clients have to say.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="p-8 bg-[#fbf8f1]">
          <Quote className="h-12 w-12 text-[#b98600]/30 mb-4" />

          <div className="text-center">
          

            {/* Testimonial text */}
            <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-pretty">
              "{testimonial.text}"
            </blockquote>

             {/* Stars */}
             <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#b98600] text-[#b98600]" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>

  )
}
