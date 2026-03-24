"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroAnimations() {
  return (
    <div className="w-full md:max-w-2xl">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 mb-8 md:mb-5 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold"
        style={{
          background: "rgba(244,161,0,0.15)",
          border: "1px solid rgba(244,161,0,0.35)",
          color: "#F4A100",
          fontFamily: "var(--font-body)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "#F4A100" }}
        />
        Estilo Sonora · Zapopan &amp; Tlaquepaque
      </motion.div>

      {/* Headline — "SON" */}
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="leading-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            color: "#fff",
          }}
        >
          SON
        </motion.h1>
      </div>

      {/* Headline — "CHAROLAS" */}
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="leading-none mb-5"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            color: "#F4A100",
          }}
        >
          CHAROLAS
        </motion.h1>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-base md:text-lg leading-relaxed mb-8 max-w-xs md:max-w-sm"
        style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
      >
        La botana más antojable de Guadalajara. Charolas salseadas, clamatos y
        fresas con crema.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Link
          href="/menu"
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base uppercase tracking-wide transition-all active:scale-95"
          style={{
            background: "#F4A100",
            color: "#1A0A00",
            fontFamily: "var(--font-heading)",
          }}
        >
          Ver menú
        </Link>
        <a
          href="https://instagram.com/soncharolas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base uppercase tracking-wide transition-all active:scale-95"
          style={{
            border: "2px solid rgba(255,255,255,0.3)",
            color: "#fff",
            fontFamily: "var(--font-heading)",
          }}
        >
          Pedir ahora →
        </a>
      </motion.div>
    </div>
  );
}
