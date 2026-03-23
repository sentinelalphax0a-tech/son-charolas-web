"use client";

import type { Product } from "@/types/menu";
import ProductCardFeatured from "./ProductCardFeatured";

interface Props {
  products: Product[];
}

export default function ProductCarousel({ products }: Props) {
  return (
    <>
      {/* ── Mobile: carrusel horizontal scroll snap ── */}
      <div className="md:hidden -mx-4">
        <div
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-none"
              style={{ width: "80vw", scrollSnapAlign: "start" }}
            >
              <ProductCardFeatured product={product} index={index} />
            </div>
          ))}
        </div>
        {/* Indicador de scroll */}
        <div className="flex justify-center gap-1.5 mt-3">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === 0 ? "20px" : "6px",
                background: i === 0 ? "#E63946" : "rgba(28,25,23,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop: layout asimétrico ── */}
      <div className="hidden md:grid gap-4" style={{ gridTemplateColumns: "2fr 1fr", gridTemplateRows: "1fr 1fr", height: "560px" }}>
        {/* Card grande — primera y destacada */}
        {products[0] && (
          <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <ProductCardFeatured product={products[0]} index={0} large />
          </div>
        )}
        {/* Cards secundarias */}
        {products.slice(1, 3).map((product, i) => (
          <div key={product.id} style={{ gridColumn: "2", gridRow: i + 1 }}>
            <ProductCardFeatured product={product} index={i + 1} />
          </div>
        ))}
      </div>
    </>
  );
}
