"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroProductImage() {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={{ y: [0, -22, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        scale: 1.02,
        filter:
          "drop-shadow(0px 30px 60px rgba(244,161,0,0.6)) drop-shadow(0px 8px 28px rgba(230,57,70,0.4))",
      }}
    >
      <Image
        src="/images/hero-product.png"
        alt="Charola y Clamatazo Son Charolas"
        fill
        className="object-contain object-center"
        priority
        sizes="45vw"
      />
    </motion.div>
  );
}
