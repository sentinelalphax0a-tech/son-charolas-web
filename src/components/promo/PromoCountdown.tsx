"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  isToday: boolean;
  days: number;
  hours: number;
  minutes: number;
}

function calcNextJueves(): TimeLeft {
  const now = new Date();
  const day = now.getDay(); // 0=dom, 4=jue

  if (day === 4) {
    return { isToday: true, days: 0, hours: 0, minutes: 0 };
  }

  const daysUntil = (4 - day + 7) % 7;
  const next = new Date(now);
  next.setDate(now.getDate() + daysUntil);
  next.setHours(12, 0, 0, 0); // La promo empieza al mediodía

  const diff = next.getTime() - now.getTime();
  return {
    isToday: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div
        className="leading-none tabular-nums"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(3rem, 10vw, 5rem)",
          color: "#F4A100",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className="text-xs uppercase tracking-widest mt-1"
        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function PromoCountdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calcNextJueves());
    const id = setInterval(() => setTime(calcNextJueves()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  if (time.isToday) {
    return (
      <div className="text-center">
        <div
          className="animate-pulse leading-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.5rem, 12vw, 6rem)",
            color: "#F4A100",
          }}
        >
          ¡HOY!
        </div>
        <p
          className="text-sm mt-2"
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
        >
          La promo está activa ahora
        </p>
      </div>
    );
  }

  const sep = (
    <span
      className="self-start mt-3"
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2rem, 6vw, 3rem)",
        color: "rgba(255,255,255,0.2)",
      }}
    >
      :
    </span>
  );

  return (
    <div className="flex items-center gap-3 md:gap-5">
      {time.days > 0 && (
        <>
          <Digit value={time.days} label="días" />
          {sep}
        </>
      )}
      <Digit value={time.hours} label="horas" />
      {sep}
      <Digit value={time.minutes} label="min" />
    </div>
  );
}
