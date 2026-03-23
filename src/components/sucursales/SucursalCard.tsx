import { MapPin, Clock } from "lucide-react";

function IgIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
import type { Sucursal } from "@/types/menu";

interface Props {
  sucursal: Sucursal;
}

export default function SucursalCard({ sucursal }: Props) {
  return (
    <div
      className="rounded-3xl p-7 flex flex-col justify-between gap-6 transition-colors hover:bg-white/10"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div>
        {/* Nombre + barrio */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h3
              className="leading-tight mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.75rem",
                color: "#fff",
              }}
            >
              {sucursal.name}
            </h3>
            <p
              className="text-sm"
              style={{ color: "#F4A100", fontFamily: "var(--font-body)" }}
            >
              {sucursal.neighborhood}
            </p>
          </div>
          {sucursal.instagramHandle && (
            <a
              href={`https://instagram.com/${sucursal.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs transition-colors hover:text-white shrink-0"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
            >
              <IgIcon size={12} />@{sucursal.instagramHandle}
            </a>
          )}
        </div>

        {/* Dirección */}
        <div className="flex items-start gap-2 mb-5">
          <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#F4A100" }} />
          <div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>
              {sucursal.address}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>
              {sucursal.city}
            </p>
          </div>
        </div>

        {/* Horarios */}
        <div className="space-y-2">
          {sucursal.schedule.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <Clock size={13} style={{ color: "rgba(255,255,255,0.3)" }} />
              <div className="flex justify-between w-full">
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
                >
                  {s.days}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#fff", fontFamily: "var(--font-body)" }}
                >
                  {s.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={sucursal.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm uppercase tracking-wide transition-all hover:scale-105"
        style={{
          background: "#F4A100",
          color: "#1A0A00",
          fontFamily: "var(--font-heading)",
          width: "fit-content",
        }}
      >
        <MapPin size={14} />
        Cómo llegar
      </a>
    </div>
  );
}
