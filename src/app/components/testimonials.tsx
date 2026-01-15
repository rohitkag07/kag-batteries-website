export default function Testimonials() {
  const testimonials = [
    { name: "Farmer Rajesh", title: "Cotton Farmer, Maharashtra", quote: "Kaveri torch has been my companion for 8 years. I travel 40km just to buy it because nothing else lasts like this. Best investment for farm work!" },
    { name: "Deepti Sharma", title: "Shop Owner, Delhi", quote: "My customers specifically ask for Kag Batteries products. Nano batteries outsell everything else in my store. People trust the brand." },
    { name: "Vijay Patel", title: "Distributor, Gujarat", quote: "Working with Kag Batteries for 12 years. The products speak for themselves. Customer loyalty is unmatched. Real value, real quality." },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Stories from Our Customers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
