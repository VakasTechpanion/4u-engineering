export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3 text-blue-900">

        <div>
          <h3 className="text-2xl font-bold mb-4">
            4U Engineering
          </h3>
          <p className="text-lg leading-relaxed text-blue-800">
            Delivering reliable, accurate, and technology-driven steel detailing
            and engineering solutions focused on quality, efficiency, and
            long-term value.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-lg">
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About 4U
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition">
                Services 4U
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact 4U
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-blue-600 transition">
                Careers 4U
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">
            Careers & Opportunities
          </h4>

          <p className="text-lg mb-3">
            Interested in working with us?
          </p>

          <p className="text-lg font-semibold">
            hr@4uengg.com
          </p>
        </div>
      </div>
      <div className="border-t border-blue-200 py-5 text-center text-blue-700 text-sm bg-white">
        © {new Date().getFullYear()} 4U Engineering. All Rights Reserved.
      </div>
    </footer>
  );
}