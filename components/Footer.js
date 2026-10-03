import { CONTACTO, REDES, NEGOCIO } from "@/lib/config";

const USE_LOGO = true; // poné true cuando tengas el logo

// Items de redes con su ícono Tabler
const REDES_CONFIG = [
  { key: "instagram", icon: "brand-instagram", label: "Instagram" },
  { key: "whatsapp", icon: "brand-whatsapp", label: "WhatsApp" },
  { key: "youtube", icon: "brand-youtube", label: "YouTube" },
  { key: "facebook", icon: "brand-facebook", label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  // Filtrar redes que tengan URL configurada
  const redesActivas = REDES_CONFIG.filter((r) => REDES[r.key]);

  return (
    <footer
      id="contacto"
      className="w-full bg-[#0a0a0a] border-t border-white/[0.08] pt-16 md:pt-20 pb-8 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Logo + nombre — centrado arriba */}
        <div className="flex flex-col items-center mb-12">
          {USE_LOGO ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/img/logo.png"
              alt="Mautica"
              className="w-14 h-14 md:w-16 md:h-16 mb-3"
            />
          ) : (
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/[0.06] border border-dashed border-white/25 flex items-center justify-center text-[10px] tracking-[1.5px] text-white/40 mb-3">
              LOGO
            </div>
          )}
          <p className="text-white text-[20px] md:text-[24px] font-medium">
            Mautica
          </p>
          <p className="text-white/50 text-[10px] md:text-[11px] tracking-[2.5px] uppercase mt-1">
            Servicio Técnico
          </p>
        </div>

        {/* Grid de datos de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto mb-12">
          <div className="text-center md:text-left">
            <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-2">
              Teléfono
            </p>
            <a
              href={`tel:${CONTACTO.telefonoTel}`}
              className="text-white text-[14px] md:text-[15px] no-underline hover:text-accent transition-colors">
              {CONTACTO.telefono}
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-center text-white/40 text-[10px] tracking-[2px] uppercase mb-2">
              Dirección
            </p>
            <a
              href={NEGOCIO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white text-[13px] md:text-[14px] leading-relaxed no-underline hover:text-accent transition-colors block">
              {NEGOCIO.direccion}
              <br />
              {NEGOCIO.detalle}
              <br />
              {NEGOCIO.ciudad}
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-2">
              Correo Electrónico
            </p>
            <a
              href={`mailto:${CONTACTO.email}`}
              className="text-white text-[14px] md:text-[15px] no-underline hover:text-accent transition-colors break-all">
              {CONTACTO.email}
            </a>
          </div>
        </div>

        {/* Redes sociales */}
        {redesActivas.length > 0 && (
          <div className="flex justify-center gap-3 mb-10 pb-10 border-b border-white/[0.08]">
            {redesActivas.map((red) => (
              <a
                key={red.key}
                href={
                  red.key === "whatsapp"
                    ? `${REDES[red.key]}?text=${encodeURIComponent("Hola chicos! Quisiera hacerles una consulta")}`
                    : REDES[red.key]
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={red.label}
                className="
                  w-11 h-11 rounded-full
                  border border-white/30
                  flex items-center justify-center
                  text-white
                  hover:bg-white/10 hover:border-white/50
                  transition-colors
                  no-underline
                ">
                <i
                  className={`ti ti-${red.icon} text-[18px]`}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        )}

        {/* Bottom bar: copyright + links legales */}
        <div
          className="
          flex flex-col-reverse md:flex-row items-center justify-between gap-4
          text-[12px] text-white/40
        ">
          <p className="m-0">
            © {year} Mautica · Todos los derechos reservados
          </p>
          <div className="flex gap-5">
            <a
              href="/terminos"
              className="text-white/55 hover:text-white no-underline transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
