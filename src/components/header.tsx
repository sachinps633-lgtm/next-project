"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Shield } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      {/* Top bar with trust indicators */}
      <div className="hidden md:block bg-[#b98600] text-primary-foreground py-2 px-4 text-center text-sm font-medium">
  <div className="container mx-auto flex items-center justify-center gap-6">
    <span className="flex items-center gap-1">
      <Shield className="h-4 w-4" />
      Licensed & Insured
    </span>
    <span>24/7 Emergency Response</span>
    <span>Serving Los Angeles & Florida</span>
  </div>
</div>


      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              {/* <Shield className="h-8 w-8 text-primary" /> */}
              <img src="/already-security.webp" alt="Already Security" className="h-18 w-auto" />

            </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="hover:text-primary transition-colors">
                Our Services
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
              <Button size="lg" className="w-full">
                Get Free Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
