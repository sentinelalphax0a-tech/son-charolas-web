import Link from "next/link";
import { getFeaturedProducts } from "@/lib/menu-data";
import ProductCarousel from "./ProductCarousel";

export default function FeaturedProductsSection() {
  const products = getFeaturedProducts();

  return (
    <section className="py-20 px-4" style={{ background: "#FFF8F0" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header de sección */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-sm uppercase tracking-widest font-semibold mb-2"
              style={{ color: "#E63946", fontFamily: "var(--font-body)" }}
            >
              Lo que no te puedes perder
            </p>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                color: "#1A0A00",
              }}
            >
              NUESTROS
              <br />
              CLÁSICOS
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold pb-1 transition-colors hover:text-[#E63946]"
            style={{
              color: "#1A0A00",
              borderBottom: "2px solid #1A0A00",
              fontFamily: "var(--font-body)",
            }}
          >
            Ver todo el menú →
          </Link>
        </div>

        <ProductCarousel products={products} />

        {/* CTA mobile */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1 text-sm font-semibold pb-1"
            style={{
              color: "#E63946",
              borderBottom: "2px solid #E63946",
              fontFamily: "var(--font-heading)",
            }}
          >
            Ver todo el menú →
          </Link>
        </div>
      </div>
    </section>
  );
}
