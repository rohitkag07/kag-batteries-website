"use client";

export default function ProductBrochures() {
  const brochures = [
    {
      id: 1,
      title: "KAG Batteries Product Poster",
      description: "Download our complete product catalog and specifications.",
      link: "/brochures/kag batteries product poster.pdf",
    },
  ];

  return (
    <section id="brochures" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          Product Brochures
        </h2>
        <div className="flex justify-center">
          {brochures.map((brochure) => (
            <div
              key={brochure.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md w-full border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {brochure.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {brochure.description}
              </p>
              <a
                href={brochure.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 group"
              >
                <span>Download PDF</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 9v9m0 0 3-3m-3 3-3-3m6-6-4.125-4.125a2.25 2.25 0 0 0-3.182 0l-5 5"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
