export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 text-base">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Accredian
            </h2>
            <p className="leading-relaxed text-gray-700">
              Empowering professionals through industry-ready programs
              and world-class education.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-black transition">About</a></li>
              <li><a href="#" className="hover:text-black transition">Careers</a></li>
              <li><a href="#" className="hover:text-black transition">Blog</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-black transition">Data Science</a></li>
              <li><a href="#" className="hover:text-black transition">AI & ML</a></li>
              <li><a href="#" className="hover:text-black transition">Cloud</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-black transition">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition">Contact</a></li>
              <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-gray-300 text-sm text-center text-gray-600">
          © 2026 Accredian Clone. All rights reserved.
        </div>

      </div>
    </footer>
  );
}