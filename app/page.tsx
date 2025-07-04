import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import CarBrands from "@/components/car-brands"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CarBrands />
      <Footer />
    </div>
  )
}
