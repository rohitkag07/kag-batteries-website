export default function Features() {
  const features = [
    { icon: "🌾", title: "Farmer-First Design", description: "Products engineered specifically for India's farmers and rural communities. Designed for real field conditions." },
    { icon: "💪", title: "Tested Durability", description: "Heat-resistant, dust-proof, long working hours. Tested for rough daily handling and farm environments." },
    { icon: "✓", title: "Quality Assurance", description: "Multi-stage testing ensures every product meets highest standards. Trusted by 1,00,000+ users yearly." },
    { icon: "🔋", title: "Innovation Focus", description: "From traditional torches to Li-ion powered technology. Continuous improvement for modern India." },
    { icon: "💛", title: "Affordable Excellence", description: "Honest pricing without compromising on quality. Real value for hardworking families." },
    { icon: "🤝", title: "Trusted Relationships", description: "25+ years of trust built through relationships, not marketing. Dealers and customers are our partners." },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Kag Batteries Stands Apart
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
