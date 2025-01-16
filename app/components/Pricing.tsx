const plans = [
    {
      name: "Basic",
      price: "₹7,999",
      features: ["5 Pages", "Basic SEO", "Responsive Design", "Social Media Integration", "1 year free domain", "1 Month Support", "1 Revision"]
    },
    {
      name: "Pro",
      price: "₹14,999",
      features: ["12 Pages", "Advanced SEO", "Dynamic Website", "Social Media Integration", "1 year free domain and hosting", "3 Months Support", "3 Revisions"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Pages", "Full SEO Suite", "Free domain", "Unlimited Hosting", "Google Search Console Setup", "1 Year Support", "Unlimited Revisions"]
    }
  ]
  
  export default function Pricing() {
    return (
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center capitalize">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    <a href={`https://wa.me/6238998062?text=I'm%20interested%20in%20%20${plan.name}%20plan%20`}>Choose Plan</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  