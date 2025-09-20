import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <p className="text-gray-300 text-center">Professional security services protecting Los Angeles and Florida businesses and residences with 24/7 monitoring and rapid response.</p>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2025 Already Security. All rights reserved. || <Link href="/privacy-policy" className="text-gray-300 hover:text-[#b98600] transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
