"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized ? (
        <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-sm animate-fade-in-up">
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-2 right-2 text-primary-foreground/70 hover:text-primary-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="pr-6">
            <p className="font-semibold mb-2">Need Security Now?</p>
            <p className="text-sm mb-3 opacity-90">Get immediate assistance from our security experts</p>
            <a href="tel:8188001143" className="inline-flex items-center w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#b98600] rounded-md hover:bg-[#a57800]">
              <Phone className="h-4 w-4 mr-2" />
              818-800-1143
            </a>

          </div>
        </div>
      ) : (
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg animate-pulse-glow"
          onClick={() => setIsMinimized(false)}
        >
          <Phone className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
