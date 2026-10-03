import Image from "next/image";

// ─── Configuración fácil de editar ─────────────────────────────────
const KICKER = "El equipo";
const TITULO = ["Tres personas.", "Un solo objetivo."];
const DESCRIPCION =
  "Somos Mautica. Desde nuestro local en Mar del Plata hacemos mantenimiento preventivo, limpieza profunda y puesta a punto de consolas, PC y celulares, con atención real en cada trabajo.";

const FOTO = "/img/equipo.png";
const FOTO_ALT = "El equipo de Mautica en su local de Mar del Plata";
// ───────────────────────────────────────────────────────────────────

export default function SectionEquipo() {
  return (
    <section className="w-full bg-[#0a0a0a] py-16 md:py-24 px-6 md:px-12">
      <div
        className="
          mx-auto max-w-6xl
          grid gap-5 md:gap-8
          grid-cols-1 md:grid-cols-2
          items-stretch
        ">
        {/* Card de texto */}
        <article
          className="
            bg-[#141414] border border-white/[0.08]
            rounded-2xl md:rounded-3xl
            p-8 md:p-12
            flex flex-col justify-center
          ">
          <p className="text-accent text-[11px] md:text-[12px] font-medium uppercase tracking-[2.8px] mb-4">
            {KICKER}
          </p>

          <h2 className="text-white text-[28px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.5px] mb-5">
            {TITULO[0]}
            <br />
            {TITULO[1]}
          </h2>

          <div className="w-7 h-[2px] bg-accent mb-5" />

          <p className="text-white/65 text-[14px] md:text-[15px] leading-[1.6] max-w-[460px]">
            {DESCRIPCION}
          </p>
        </article>

        {/* Card de foto (4:3) */}
        <div
          className="
            relative bg-[#141414] border border-white/[0.08]
            rounded-2xl md:rounded-3xl
            overflow-hidden
            aspect-[4/3]
          ">
          <Image
            src={FOTO}
            alt={FOTO_ALT}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
