export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-blue-800">
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About 4U
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services 4U
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact 4U
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:underline">
                Careers 4U
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-300 py-4 text-center text-blue-800 text-sm">
        © 2026 4U Engineering. All Rights Reserved.
      </div>
    </footer>
  );
}