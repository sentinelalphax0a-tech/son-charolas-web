"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

function IgIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ links, isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 z-50 w-72 flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ background: "#1A0A00" }}
      >
        {/* Header del drawer */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span
            className="text-xl"
            style={{ fontFamily: "var(--font-heading)", color: "#F4A100" }}
          >
            SON{" "}
            <span style={{ color: "#fff" }}>CHAROLAS</span>
          </span>
          <button
            onClick={onClose}
            className="p-1 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            aria-label="Cerrar menú"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 pt-6 gap-0 flex-1">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-4 transition-colors"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                color: "#fff",
                borderBottom: i < links.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer del drawer */}
        <div className="px-6 pb-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a
            href="https://instagram.com/soncharolas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-lg uppercase tracking-wide transition-colors mb-4"
            style={{
              background: "#E63946",
              color: "#fff",
              fontFamily: "var(--font-heading)",
            }}
          >
            Pedir ahora
          </a>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/soncharolas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
            >
              <IgIcon size={12} /> soncharolas
            </a>
            <a
              href="https://instagram.com/juanitocmp1292"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
            >
              <IgIcon size={12} /> juanitocmp1292
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
