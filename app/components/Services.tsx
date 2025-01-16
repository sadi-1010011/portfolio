import { Globe, Code, Smartphone } from 'lucide-react'

const services = [
  {
    title: "Web Development",
    description: "Custom websites tailored to your business needs.",
    icon: Globe
  },
  {
    title: "Advanced SEO",
    description: "Basic and advanced SEO suites.",
    icon: Smartphone
  },
  {
    title: "API Integration",
    description: "Seamless integration with third-party services.",
    icon: Code
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <service.icon className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

