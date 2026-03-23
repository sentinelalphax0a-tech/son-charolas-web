import { activePromo } from "@/lib/menu-data";
import PromoCountdown from "./PromoCountdown";

export default function PromoBanner() {
  if (!activePromo.isActive) return null;

  return (
    <section className="relative overflow-hidden" style={{ background: "#E63946" }}>
      {/* Forma decorativa diagonal */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 hidden md:block"
        style={{
          background: "rgba(0,0,0,0.15)",
          transform: "skewX(-8deg) translateX(30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="text-center md:text-left">
          {/* Badge animado */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4 font-semibold"
            style={{
              background: "#F4A100",
              color: "#1A0A00",
              fontFamily: "var(--font-heading)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A0A00] animate-pulse" />
            {activePromo.badgeText}
          </div>

          <h2
            className="leading-none mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 7vw, 4rem)",
              color: "#fff",
            }}
          >
            {activePromo.title.toUpperCase()}
          </h2>
          <p
            className="text-lg max-w-md"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}
          >
            {activePromo.description}
          </p>
        </div>

        {/* Countdown */}
        <div className="shrink-0">
          <PromoCountdown />
        </div>
      </div>
    </section>
  );
}
