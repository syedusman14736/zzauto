import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CreditCard, Shield, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description:
        "We provide door-to-door auto transport services to all 50 states, ensuring your vehicle reaches any destination safely.",
    },
    {
      icon: CreditCard,
      title: "No Upfront Payment Required",
      description:
        "Pay only when your vehicle is delivered. No hidden fees or upfront payments required for our transport services.",
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance Included",
      description:
        "Every shipment is fully insured with comprehensive coverage, giving you complete peace of mind during transport.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description:
        "Our dedicated customer service team is available around the clock to assist you with any questions or concerns.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Z&Z Auto Transport?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional auto transport services with unmatched reliability and customer
            satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
