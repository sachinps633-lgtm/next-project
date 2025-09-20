import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You | Already Security",
  description: "We received your request. We'll be in touch shortly.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f1] flex items-center justify-center">
      <main className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center text-center max-w-md">
        {/* Icon */}
        <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-6">
          <CheckCircle className="text-green-600 w-10 h-10" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Thank You!
        </h1>

        {/* Paragraph */}
        <p className="text-gray-500 text-lg mb-8">
          We received your message and our team will reach out shortly. If your
          request is urgent, please call us directly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">Return Home</Link>
          </Button>
          
        </div>
      </main>
    </div>
  )
}


