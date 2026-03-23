export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse" style={{ background: "#1A0A00" }}>
      <div
        className="min-h-[100svh]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 75% 30%, rgba(244,161,0,0.15) 0%, rgba(230,57,70,0.1) 40%, #1A0A00 75%)",
        }}
      />
    </div>
  );
}
