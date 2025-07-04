"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California to Florida",
      rating: 5,
      text: "Z&Z Auto Transport made my cross-country move so much easier. They picked up my car exactly when promised and delivered it in perfect condition. The communication throughout the process was excellent!",
    },
    {
      name: "Michael Chen",
      location: "Texas to New York",
      rating: 5,
      text: "I was nervous about shipping my classic Mustang, but Z&Z's enclosed transport service was perfect. The car arrived without a scratch, and the driver was incredibly professional. Highly recommend!",
    },
    {
      name: "Jennifer Martinez",
      location: "Oregon to Georgia",
      rating: 5,
      text: "Great experience from start to finish. The quote was competitive, pickup was on time, and delivery was actually a day early. The customer service team kept me updated throughout the journey.",
    },
    {
      name: "David Thompson",
      location: "Illinois to Arizona",
      rating: 5,
      text: "Used Z&Z for my job relocation and couldn't be happier. No upfront payment, comprehensive insurance, and excellent communication. They made the whole process stress-free.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            Z&Z Auto Transport.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
