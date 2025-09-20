"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { X, Shield } from "lucide-react"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        timeoutId = setTimeout(() => {
          setIsVisible(true)
        }, 500)
      }
    }

    const handleMouseEnter = () => {
      clearTimeout(timeoutId)
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      clearTimeout(timeoutId)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Exit intent email:", email)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
  <Card className="max-w-md w-full p-8 relative animate-fade-in-up bg-[#fbf8f1]">
    <button
      onClick={() => setIsVisible(false)}
      className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
    >
      <X className="h-5 w-5" />
    </button>

    <div className="text-center">
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Shield className="h-8 w-8 text-primary" />
      </div>

      <h3 className="text-2xl font-bold mb-2">Wait! Don't Leave Unprotected</h3>
      <p className="text-muted-foreground mb-6">
        Get our free security checklist and learn how to protect your property today.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" size="lg" className="w-full bg-[#b98600]">
          Get Free Security Checklist
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        No spam. Unsubscribe anytime. Your information is secure.
      </p>
    </div>
  </Card>
</div>

  )
}
