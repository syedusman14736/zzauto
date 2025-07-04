"use client"

import { useRef, useEffect } from "react"

export default function CarBrands() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const brands = [
    { name: "Infiniti", logo: "/placeholder.svg?height=60&width=120&text=Infiniti" },
    { name: "Kia", logo: "/placeholder.svg?height=60&width=120&text=KIA" },
    { name: "Mercedes-Benz", logo: "/placeholder.svg?height=60&width=120&text=Mercedes" },
    { name: "Nissan", logo: "/placeholder.svg?height=60&width=120&text=Nissan" },
    { name: "Toyota", logo: "/placeholder.svg?height=60&width=120&text=Toyota" },
    { name: "Buick", logo: "/placeholder.svg?height=60&width=120&text=Buick" },
    { name: "Cadillac", logo: "/placeholder.svg?height=60&width=120&text=Cadillac" },
    { name: "Chevrolet", logo: "/placeholder.svg?height=60&width=120&text=Chevrolet" },
    { name: "Ford", logo: "/placeholder.svg?height=60&width=120&text=Ford" },
    { name: "Honda", logo: "/placeholder.svg?height=60&width=120&text=Honda" },
    { name: "BMW", logo: "/placeholder.svg?height=60&width=120&text=BMW" },
    { name: "Audi", logo: "/placeholder.svg?height=60&width=120&text=Audi" },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We Transport All Vehicle Brands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From luxury vehicles to everyday cars, we safely transport all makes and models across the nation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex space-x-8 overflow-x-hidden" style={{ width: "calc(200% + 2rem)" }}>
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-sm p-6 flex items-center justify-center"
                style={{ minWidth: "150px", height: "80px" }}
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-sm p-6 flex items-center justify-center"
                style={{ minWidth: "150px", height: "80px" }}
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
