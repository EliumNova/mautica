import BackgroundRotator from "./BackgroundRotator";
import WhatsAppIcon from "./WhatsAppIcon";

// ─── Configuración fácil de editar ─────────────────────────────────
// Acá poné tus imágenes (deben estar en /public/img/)
const BG_IMAGES = [
  "/img/foto-1.jpeg",
  "/img/foto-2.jpeg",
  "/img/foto-3.jpeg",
  "/img/foto-4.jpeg",
];

// Número de WhatsApp con código de país, sin "+" ni espacios.
// Ej: 5492235555555 (Argentina, Mar del Plata: 54 + 9 + 223 + ...)
const WHATSAPP_NUMBER = "5492236203529";
const WHATSAPP_MESSAGE = "Hola chicos! Quisiera hacerles una consulta";

// Si todavía no tenés el logo en /public/img/logo.png, dejá USE_LOGO = false
// y se muestra un círculo placeholder.
const USE_LOGO = true;
// ───────────────────────────────────────────────────────────────────

export default function Hero() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <main className="relative w-full h-screen min-h-[100dvh] overflow-hidden">
      {/* Capa 1 — Imágenes de fondo rotando al 50% */}
      <BackgroundRotator images={BG_IMAGES} intervalMs={5000} />

      {/* Capa 2 — Overlay oscuro mobile (gradiente vertical, texto abajo) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none md:hidden
                   bg-gradient-to-b from-black/45 via-black/15 to-black/85"
      />

      {/* Capa 2 — Overlay oscuro desktop (viñeta radial, texto al centro) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Capa 3 — Logo arriba */}
      <div className="absolute top-[12%] md:top-[10%] left-1/2 -translate-x-1/2 z-[3]">
        {USE_LOGO ? (
          // Cuando tengas el logo real, dejá USE_LOGO = true y poné el archivo en /public/img/logo.png
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/img/logo.png"
            alt="Mautica"
            className="w-[90px] md:w-[110px] h-auto"
          />
        ) : (
          <div
            className="w-[90px] h-[90px] md:w-[110px] md:h-[110px]
                       rounded-full bg-white/[0.06]
                       border border-dashed border-white/25
                       flex items-center justify-center
                       text-white/50 text-[11px] tracking-[1.5px]">
            LOGO
          </div>
        )}
      </div>

      {/* Capa 4 — Bloque de marca
          Mobile: anclado abajo (bottom 8%)
          Desktop: centrado verticalmente */}
      <section
        className="absolute left-0 right-0 z-[3] text-center px-6
                   bottom-[8%]
                   md:bottom-auto md:top-1/2 md:-translate-y-1/2">
        <h1 className="text-[44px] md:text-[64px] font-medium leading-none tracking-[-0.8px] text-white">
          Mautica
        </h1>

        <p className="mt-[10px] text-[11px] md:text-[13px] uppercase tracking-[2.8px] text-white/55">
          Mantenimiento y puesta a punto
        </p>

        <div className="w-8 h-px bg-white/30 mx-auto my-5 md:my-6" />

        <p className="mb-7 md:mb-9 text-[12px] md:text-[14px] uppercase tracking-[2.2px] text-white/75">
          Cuidamos lo que amás
        </p>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactanos por WhatsApp"
          className="inline-flex items-center gap-[9px]
                     px-[26px] py-[14px] md:px-7 md:py-[14px]
                     border border-white/45 rounded-full
                     text-[14px] md:text-[15px] font-medium text-white
                     bg-black/30 backdrop-blur-md
                     transition-all duration-200
                     hover:bg-white/10 hover:border-white/70
                     active:scale-[0.98]">
          <WhatsAppIcon />
          Contactanos por WhatsApp
        </a>
      </section>
    </main>
  );
}
