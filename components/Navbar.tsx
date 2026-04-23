"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo Text */}
        <h1 className="text-2xl font-bold tracking-tight text-blue-900">
          Accredian
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-black transition">Programs</a>
          <a href="#" className="hover:text-black transition">Enterprise</a>
          <a href="#" className="hover:text-black transition">Resources</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-base text-gray-700 hover:text-black transition">
            Login
          </button>

          <button className="bg-blue-600 text-white text-base px-6 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 transition">
            Book Demo
          </button>
        </div>

      </div>
    </nav>
  );
}