import type { Metadata } from "next";
import { Archivo_Black, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Son Charolas — Estilo Sonora | Guadalajara",
  description:
    "Charolas de botanas salseadas estilo Sonora en Zapopan y Tlaquepaque. La botana más antojable de Guadalajara. Pide en Rappi o visítanos.",
  keywords:
    "charolas estilo sonora Guadalajara, son charolas menú, Juanito Martínez comida, charolas Zapopan, comida sonorense GDL",
  openGraph: {
    title: "Son Charolas — Estilo Sonora",
    description:
      "La botana más antojable de Guadalajara. Charolas, clamatos, fresas con crema.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${archivoBlack.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "#FFF8F0", color: "#1C1917" }}>
        {children}
      </body>
    </html>
  );
}
