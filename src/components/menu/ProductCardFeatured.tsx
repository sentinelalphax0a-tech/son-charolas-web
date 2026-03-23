"use client";

import { motion } from "framer-motion";
import type { Product } from "@/types/menu";
import { formatPrice } from "@/lib/utils";

const categoryStyles: Record<
  Product["category"],
  { bg: string; accent: string; label: string }
> = {
  charolas: {
    bg: "linear-gradient(135deg, #E63946 0%, #8B0000 60%, #1A0A00 100%)",
    accent: "#F4A100",
    label: "🔥 Charola",
  },
  bebidas: {
    bg: "linear-gradient(135deg, #2D5016 0%, #1a3008 60%, #1A0A00 100%)",
    accent: "#F4A100",
    label: "🥤 Bebida",
  },
  fresas: {
    bg: "linear-gradient(135deg, #c2185b 0%, #E63946 50%, #1A0A00 100%)",
    accent: "#F4A100",
    label: "🍓 Fresas",
  },
};

interface Props {
  product: Product;
  index: number;
  large?: boolean;
}

export default function ProductCardFeatured({ product, index, large = false }: Props) {
  const style = categoryStyles[product.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative rounded-3xl overflow-hidden flex flex-col justify-end cursor-pointer h-full"
      style={{
        background: style.bg,
        minHeight: large ? "480px" : "240px",
      }}
    >
      {/* Precio — top right */}
      <div
        className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-bold z-10"
        style={{
          background: style.accent,
          color: "#1A0A00",
          fontFamily: "var(--font-heading)",
        }}
      >
        {formatPrice(product.price)}
      </div>

      {/* Categoría — top left */}
      <div
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider z-10"
        style={{
          background: "rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.8)",
          fontFamily: "var(--font-body)",
        }}
      >
        {style.label}
      </div>

      {/* Gradiente inferior para legibilidad */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 p-6">
        <h3
          className="leading-none mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: large ? "clamp(2rem, 5vw, 3.5rem)" : "clamp(1.5rem, 4vw, 2rem)",
            color: "#fff",
          }}
        >
          {product.name.toUpperCase()}
        </h3>
        <p
          className="text-sm line-clamp-2 mb-5"
          style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
        >
          {product.description}
        </p>
        <div
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            fontFamily: "var(--font-body)",
          }}
        >
          Pedir →
        </div>
      </div>
    </motion.div>
  );
}
