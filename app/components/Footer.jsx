export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] mt-0 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            4U Engineering
          </h3>
          <p className="text-lg leading-relaxed text-blue-100/90">
            Delivering reliable, accurate, and technology-driven steel detailing
            and engineering solutions focused on quality, efficiency, and
            long-term value.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-lg text-blue-100/90">
            <li>
              <a href="#about" className="hover:text-white transition">
                About 4U
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services 4U
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact 4U
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition">
                Careers 4U
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-blue-100/70 text-sm">
        © {new Date().getFullYear()} 4U Engineering. All Rights Reserved.
      </div>
    </footer>
  );
}
