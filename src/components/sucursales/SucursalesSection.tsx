import { sucursales } from "@/lib/menu-data";
import SucursalCard from "./SucursalCard";
import MapEmbed from "./MapEmbed";

export default function SucursalesSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#1A0A00" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-sm uppercase tracking-widest font-semibold mb-2"
            style={{ color: "#F4A100", fontFamily: "var(--font-body)" }}
          >
            Dos ubicaciones en GDL
          </p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: "#fff",
            }}
          >
            ENCUÉNTRANOS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {sucursales.map((sucursal) => (
            <SucursalCard key={sucursal.id} sucursal={sucursal} />
          ))}
        </div>

        {/* Mapa */}
        <MapEmbed
          src={sucursales[0].mapsEmbedUrl}
          title="Son Charolas — Sucursales en Guadalajara"
        />
      </div>
    </section>
  );
}
