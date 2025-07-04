import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Shield, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Open Car Transport",
      description:
        "Cost-effective solution for standard vehicles. Your car travels on an open carrier with other vehicles, providing reliable and affordable transportation.",
      features: ["Most economical option", "Suitable for most vehicles", "Quick pickup times", "Reliable delivery"],
    },
    {
      icon: Shield,
      title: "Enclosed Car Transport",
      description:
        "Enhanced protection for luxury, classic, or high-value vehicles. Your car is fully enclosed and protected from weather and road debris.",
      features: ["Maximum protection", "Climate-controlled options", "Perfect for luxury cars", "Premium service"],
    },
    {
      icon: Zap,
      title: "Expedited Shipping",
      description:
        "Prioritized delivery for time-sensitive needs. Get your vehicle transported faster with our expedited shipping service.",
      features: ["Faster delivery times", "Priority scheduling", "Dedicated carriers", "Real-time tracking"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Transport Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional auto transport services designed to meet your specific needs and
            budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
