import { SERVICIOS, NEGOCIO, RESENAS, MAPS_EMBED_SRC } from "@/lib/config";

// ─────────────────────────────────────────────────────────────
// Paleta de colores para los íconos de servicios.
// Cada color tiene fondo (con opacidad) y color del ícono.
// ─────────────────────────────────────────────────────────────
const PALETA = {
  blue: { bg: "rgba(55,138,221,0.15)", fg: "#378ADD" },
  green: { bg: "rgba(29,158,117,0.15)", fg: "#1D9E75" },
  amber: { bg: "rgba(239,159,39,0.15)", fg: "#EF9F27" },
  pink: { bg: "rgba(212,83,126,0.15)", fg: "#D4537E" },
  gray: { bg: "rgba(255,255,255,0.08)", fg: "#B4B2A9" },
};

// Tarjeta individual de servicio
function ServicioCard({ icon, color, titulo, descripcion }) {
  const c = PALETA[color] || PALETA.gray;

  return (
    <article className="bg-[#141414] border border-white/[0.08] rounded-2xl p-5 md:p-6">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: c.bg }}>
        <i
          className={`ti ti-${icon} text-[22px]`}
          style={{ color: c.fg }}
          aria-hidden="true"
        />
      </div>
      <h3 className="text-white text-[15px] md:text-[16px] font-medium leading-tight mb-1.5">
        {titulo}
      </h3>
      <p className="text-white/55 text-[13px] leading-snug">{descripcion}</p>
    </article>
  );
}

// Card del mapa
function MapaCard() {
  return (
    <div className="bg-[#141414] border border-white/[0.08] rounded-2xl overflow-hidden h-[240px] lg:h-full lg:min-h-[280px]">
      <iframe
        src={MAPS_EMBED_SRC}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Ubicación de Mautica en ${NEGOCIO.ciudad}`}
        className="w-full h-full block" // 👈 block evita el gap de inline
      />
    </div>
  );
}

// Card de reseñas + dirección
function ResenasCard() {
  const { rating, cantidad } = RESENAS;
  const estrellas =
    "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));

  return (
    <a
      href={NEGOCIO.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-[#141414] border border-white/[0.08] rounded-2xl p-6
        flex md:flex-col gap-6 md:gap-4 items-center md:items-stretch
        hover:border-white/20 transition-colors
        no-underline
      ">
      {/* Bloque rating */}
      <div className="text-center md:flex-1 md:flex md:flex-col md:justify-center md:border-b md:border-white/10 md:pb-4">
        <p className="text-white text-[44px] md:text-[52px] font-medium leading-none">
          {rating.toFixed(1).replace(".", ",")}
        </p>
        <p className="text-amber-400 text-[14px] tracking-[2px] mt-2">
          {estrellas}
        </p>
        <p className="text-white/50 text-[11px] mt-1">
          {cantidad} reseñas en Google
        </p>
      </div>

      {/* Bloque dirección */}
      <div className="flex-1 md:flex-none border-l md:border-l-0 border-white/10 pl-6 md:pl-0 md:pt-2">
        <p className="text-white text-[14px] font-medium mb-1">
          {NEGOCIO.ciudad}
        </p>
        <p className="text-white/55 text-[12px] leading-relaxed">
          {NEGOCIO.direccion}
          <br />
          {NEGOCIO.detalle}
        </p>
      </div>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Sección completa
// ─────────────────────────────────────────────────────────────
export default function SectionServicios() {
  return (
    <section className="w-full bg-[#0a0a0a] py-16 md:py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Badge superior */}
        <div className="mb-8 md:mb-10 text-center">
          <span
            className="
              inline-block px-3 py-1.5 rounded-full
              bg-accent/10 border border-accent/30
              text-accent text-[11px] tracking-[2px] font-medium uppercase
            ">
            ② Servicios
          </span>
        </div>

        {/* Grid de servicios: 2 cols en mobile, 4 cols en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-5">
          {SERVICIOS.map((s) => (
            <ServicioCard key={s.titulo} {...s} />
          ))}
        </div>

        {/* Mapa + Reseñas: stack en mobile, 2/3 + 1/3 en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="lg:col-span-2">
            <MapaCard />
          </div>
          <div className="lg:col-span-1">
            <ResenasCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
 * 🔌 CÓMO CONECTAR LAS RESEÑAS A GOOGLE PLACES API (en el futuro)
 * ──────────────────────────────────────────────────────────────
 *
 * Cuando quieras que el rating y la cantidad de reseñas se actualicen
 * solos, seguí estos pasos:
 *
 * 1. Andá a https://console.cloud.google.com
 *    - Creá un proyecto
 *    - Activá "Places API" en la sección de APIs
 *    - Generá una API key y restringila a tu dominio
 *
 * 2. Conseguí tu Place ID en:
 *    https://developers.google.com/maps/documentation/places/web-service/place-id
 *    (Buscás tu negocio y copiás el ID, algo como ChIJN1t_tDeuEmsRUsoyG83frY4)
 *
 * 3. Guardá en .env.local:
 *    GOOGLE_PLACES_API_KEY=tu_key
 *    GOOGLE_PLACE_ID=tu_place_id
 *
 * 4. Creá app/api/resenas/route.js:
 *
 *    export async function GET() {
 *      const res = await fetch(
 *        `https://places.googleapis.com/v1/places/${process.env.GOOGLE_PLACE_ID}` +
 *        `?fields=rating,userRatingCount&key=${process.env.GOOGLE_PLACES_API_KEY}`,
 *        { next: { revalidate: 3600 } } // cachea 1 hora
 *      );
 *      const data = await res.json();
 *      return Response.json({
 *        rating: data.rating,
 *        cantidad: data.userRatingCount,
 *      });
 *    }
 *
 * 5. Convertí SectionServicios en async y reemplazá el import de RESENAS por:
 *
 *    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/resenas`,
 *      { next: { revalidate: 3600 } });
 *    const RESENAS = await res.json();
 *
 * Listo, se actualiza automáticamente cada hora.
 * ────────────────────────────────────────────────────────────── */
