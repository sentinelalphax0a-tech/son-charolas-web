import { reviews } from "@/lib/menu-data";
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#FFF8F0" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-sm uppercase tracking-widest font-semibold mb-2"
            style={{ color: "#E63946", fontFamily: "var(--font-body)" }}
          >
            Lo que dicen de nosotros
          </p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: "#1A0A00",
            }}
          >
            LA GENTE
            <br />
            HABLA
          </h2>
        </div>

        {/* Grid de reseñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* CTA a Instagram */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/soncharolas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold pb-1 transition-colors hover:text-[#E63946]"
            style={{
              color: "#1A0A00",
              borderBottom: "2px solid #1A0A00",
              fontFamily: "var(--font-body)",
            }}
          >
            Ver más en @soncharolas →
          </a>
        </div>
      </div>
    </section>
  );
}
