import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Shield, Clock } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Nationwide Auto Transport Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Experience seamless vehicle shipping with Z&Z Auto Transport. Professional, secure, and affordable car
            transport solutions across all 50 states.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg">
                Request a Quote
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-blue-100">Door-to-door service across all 50 states</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-blue-100">Comprehensive coverage for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
