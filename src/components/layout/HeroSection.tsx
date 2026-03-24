import Image from "next/image";
import HeroAnimations from "./HeroAnimations";
import HeroProductImage from "./HeroProductImage";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{ background: "#1A0A00" }}
    >
      {/* Gradient de fondo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 75% 30%, #F4A100 0%, #E63946 40%, #1A0A00 75%)",
        }}
      />

      {/* Overlay móvil: oscurece zona del texto (mitad inferior) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to top, #1A0A00 0%, #1A0A00 38%, rgba(26,10,0,0.6) 55%, transparent 72%)",
        }}
      />

      {/* Overlay desktop: abajo-izquierda */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to top right, #1A0A00 0%, rgba(26,10,0,0.92) 18%, rgba(26,10,0,0.5) 35%, transparent 58%)",
        }}
      />

      {/* Gradiente izquierdo desktop: termina en ~52% */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to right, #1A0A00 30%, rgba(26,10,0,0.1) 46%, transparent 52%)",
        }}
      />

      {/* Imagen móvil: estática, top 20px */}
      <div
        className="absolute left-0 right-0 md:hidden pointer-events-none"
        style={{ zIndex: 2, top: "20px", height: "54svh" }}
      >
        <Image
          src="/images/hero-product.png"
          alt="Charola y Clamatazo Son Charolas"
          fill
          className="object-contain object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Imagen desktop: flotante con sombra — Client Component */}
      <div
        className="absolute top-0 bottom-0 right-0 hidden md:block pointer-events-none"
        style={{ zIndex: 10, left: "51%" }}
      >
        <HeroProductImage />
      </div>

      {/* Texto: encima de todo */}
      <div
        className="relative w-full max-w-7xl mx-auto px-5 pb-12 md:pb-16 mt-[calc(54svh+60px)] md:mt-auto"
        style={{ zIndex: 30 }}
      >
        <HeroAnimations />
      </div>
    </section>
  );
}
