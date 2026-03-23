"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/menu", label: "Menú" },
  { href: "/sucursales", label: "Sucursales" },
  { href: "/promos", label: "Promos" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#1A0A00]/95 backdrop-blur-md shadow-xl"
            : "bg-gradient-to-b from-black/50 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              style={{
                position: "relative",
                width: "200px",
                height: "44px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/logo.png"
                alt="Son Charolas"
                fill
                className="object-cover"
                style={{
                  mixBlendMode: "screen",
                  objectPosition: "center 52%",
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/80 hover:text-[#F4A100] transition-colors uppercase tracking-wider"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/soncharolas"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-[#E63946] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#E63946]/90 transition-colors uppercase tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pedir ahora
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white p-2 hover:text-[#F4A100] transition-colors"
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        links={navLinks}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
