import type { Review } from "@/types/menu";

interface Props {
  review: Review;
  index: number;
}

const CARD_STYLES = [
  { bg: "#E63946", text: "#fff" },
  { bg: "#1A0A00", text: "#fff" },
  { bg: "#2D5016", text: "#fff" },
  { bg: "#F4A100", text: "#1A0A00" },
];

const SOURCE_LABEL: Record<Review["source"], string> = {
  google: "Google",
  instagram: "Instagram",
  manual: "Cliente",
};

export default function ReviewCard({ review, index }: Props) {
  const s = CARD_STYLES[index % CARD_STYLES.length];

  return (
    <div
      className="rounded-3xl p-6 flex flex-col justify-between gap-6"
      style={{ background: s.bg, minHeight: "200px" }}
    >
      {/* Estrellas */}
      <div>
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} style={{ color: s.text === "#fff" ? "#F4A100" : "#1A0A00", fontSize: "1.1rem" }}>
              ★
            </span>
          ))}
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: s.text === "#fff" ? "rgba(255,255,255,0.85)" : "rgba(26,10,0,0.75)", fontFamily: "var(--font-body)" }}
        >
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Autor */}
      <div className="flex items-center justify-between">
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: s.text, fontFamily: "var(--font-heading)" }}
          >
            {review.author}
          </p>
          {review.product && (
            <p
              className="text-xs mt-0.5"
              style={{
                color: s.text === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(26,10,0,0.5)",
                fontFamily: "var(--font-body)",
              }}
            >
              {review.product}
            </p>
          )}
        </div>
        <span
          className="text-xs px-2 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.12)",
            color: s.text === "#fff" ? "rgba(255,255,255,0.6)" : "rgba(26,10,0,0.5)",
            fontFamily: "var(--font-body)",
          }}
        >
          {SOURCE_LABEL[review.source]}
        </span>
      </div>
    </div>
  );
}
