'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo + brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1.5">
                <img
                  src="/logo.png" // same logo from public
                  alt="KagBatteries Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-wide">
                KagBatteries
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium long-range rechargeable torches engineered for everyday
              household, farm and professional use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">
              Products
            </h3>
            <p className="text-gray-400 text-sm">
              17 rechargeable torch models covering long-range, security and
              emergency use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">
              Support
            </h3>
            <p className="text-gray-400 text-sm">
              For bulk enquiries or dealership, use the contact form or WhatsApp
              button on the site.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">
              Contact
            </h3>
            <p className="text-gray-400 text-sm">
              Email / phone details you want to show can be placed here.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Kag Batteries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
