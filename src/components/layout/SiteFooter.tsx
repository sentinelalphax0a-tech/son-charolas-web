import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

function IgIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ background: "#1A0A00", color: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Marca */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Son Charolas"
              width={180}
              height={54}
              className="h-12 w-auto object-contain mb-4"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>
              Charolas de botanas salseadas estilo Sonora. Fundado por Juanito Martínez en Zapopan, Jalisco.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/soncharolas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#F4A100]"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
              >
                <IgIcon size={15} />
                @soncharolas · 51.6K
              </a>
              <a
                href="https://instagram.com/juanitocmp1292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#F4A100]"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
              >
                <IgIcon size={15} />
                @juanitocmp1292 · 719K
              </a>
            </div>
          </div>

          {/* Links menú */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}
            >
              El Menú
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Charolas", href: "/menu#charolas" },
                { label: "Bebidas", href: "/menu#bebidas" },
                { label: "Fresas con Crema", href: "/menu#fresas" },
                { label: "Promos", href: "/promos" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sucursales */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}
            >
              Visítanos
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/THSCrHLweWpgrJWs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm transition-colors hover:text-white group"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#F4A100]" />
                  <span>Valdepeñas, Zapopan</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/THSCrHLweWpgrJWs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#F4A100]" />
                  <span>Rancho Blanco, Tlaquepaque</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jcmp1208@gmail.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  <Mail size={14} className="text-[#F4A100]" />
                  jcmp1208@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-8">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}
          >
            © 2025 Son Charolas. Hecho con salsa en Guadalajara, México.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}
          >
            Estilo Sonora · Zapopan · Tlaquepaque
          </p>
        </div>
      </div>
    </footer>
  );
}
