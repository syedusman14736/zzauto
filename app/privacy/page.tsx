import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At Z&Z Auto Transport, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you
              use our auto transport services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Collection</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Personal contact information (name, email, phone number)</li>
              <li>Vehicle details (make, model, year, condition)</li>
              <li>Pickup and delivery locations</li>
              <li>Payment and billing information</li>
              <li>Communication preferences and service requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate quotes and coordinate transport services</li>
              <li>Communicate with you about your shipment status</li>
              <li>Process payments and maintain billing records</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with
              trusted partners and service providers who assist us in delivering our services, including carrier
              partners, payment processors, and customer service platforms. All third parties are required to maintain
              the confidentiality of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Measures</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal information, including
              encryption, secure servers, and regular security audits. While we strive to protect your data, no method
              of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights regarding your personal
              information, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@zzautotransport.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> (555) 123-4567
              </p>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
