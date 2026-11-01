
import Navbar from "./components/Navbar";
import SiteShell from "./components/SiteShell";

export default function Home() {
  return (
    <SiteShell activeSection="home">
      <Navbar activeSection="home" />

      <main className="relative min-h-0 flex-1 w-full overflow-hidden bg-[#f2eee5]">

        <picture className="absolute inset-0 block h-full w-full">

          {/* Laptop and desktop */}
          <source
            media="(min-width: 768px)"
            srcSet="/hero-desktop.png"
          />

          {/* Mobile */}
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet="
              /homepage-engineering-480w.webp 480w,
              /homepage-engineering-768w.webp 768w
            "
            sizes="100vw"
          />

          {/* Fallback */}
          <img
            src="/hero-desktop.png"
            alt="4U Engineering Pvt. Ltd."
            fetchPriority="high"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

        </picture>

      </main>
    </SiteShell>
  );
}
