"use client";

interface Props {
  src: string;
  title: string;
}

export default function MapEmbed({ src, title }: Props) {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        height: "320px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
