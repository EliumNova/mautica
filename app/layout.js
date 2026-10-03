import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat", // 👈 esto falta
});

export const metadata = {
  title: "Mautica · Servicio Técnico",
  description: "Reparación, venta y cursos. Reparamos lo que amás.",

  openGraph: {
    title: "Mautica · Servicio Técnico",
    description: "Reparamos lo que amás.",
    type: "website",
    url: "https://mautica.com.ar",
    images: [
      {
        url: "https://mautica.com.ar/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Mautica Servicio Técnico",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mautica · Servicio Técnico",
    description: "Reparamos lo que amás.",
    images: ["https://mautica.com.ar/img/logo.png"],
  },

  icons: {
    icon: "/img/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        {/* Tabler Icons via CDN — para los íconos de servicios */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.24.0/dist/tabler-icons.min.css"
        />
      </head>
      <body className={`${montserrat.className} bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
