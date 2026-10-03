import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones · Mautica",
  description: "Términos y condiciones de uso del servicio técnico Mautica.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white no-underline text-[14px] mb-10 transition-colors">
          <i className="ti ti-arrow-left text-[18px]" aria-hidden="true" />
          Volver al inicio
        </Link>

        <h1 className="text-[32px] md:text-[44px] font-medium tracking-[-0.5px] mb-3">
          Políticas de Servicio
        </h1>
        <p className="text-white/50 text-[13px] mb-4">
          MAUTICA – Titular: Mauro Ezequiel Deheza · CUIT 20-47090021-1
        </p>
        <p className="text-white/50 text-[13px] mb-12">
          Última actualización:{" "}
          {new Date().toLocaleDateString("es-AR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="space-y-10 text-white/75 leading-relaxed">
          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              1. Responsabilidad sobre datos
            </h2>
            <p className="mb-3">
              MAUTICA no se hace responsable por la pérdida de datos del
              dispositivo. Nos comprometemos a realizar todas las opciones de
              reparación posibles sin recurrir al reinicio del equipo.
            </p>
            <p className="mb-3">
              Sin embargo, recomendamos al cliente realizar una copia de
              seguridad de su información antes de enviarlo, especialmente si
              contiene datos importantes.
            </p>
            <p className="mb-3">
              En caso de requerirse la desactivación de cuentas (iCloud, Google,
              Mi, etc.), se recomienda cambiar temporalmente la contraseña a una
              genérica, y modificarla nuevamente al retirar el equipo.
            </p>
            <p>
              MAUTICA no guarda, comparte ni copia ningún tipo de información
              del cliente.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              2. Envío de equipos
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                El envío puede ser gratuito dentro de la ciudad de Mar del Plata
                únicamente si el cliente acepta el presupuesto y si la empresa
                lo conviene así.
              </li>
              <li>
                En caso de rechazo, se cobrará el recargo correspondiente según
                lo establecido en "Ingreso de equipos".
              </li>
              <li>
                El retiro del equipo corre por cuenta del cliente, ya sea
                mediante envío o en persona.
              </li>
              <li>
                No se deben anotar contraseñas ni datos personales en el
                empaquetado.
              </li>
              <li>
                MAUTICA no se responsabiliza por robo, hurto, pérdida o rotura
                del equipo durante el traslado.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              3. Ingreso de equipos
            </h2>
            <p className="mb-3">
              Al momento de ingresar un equipo, se dejará constancia de: estado
              general, faltantes o daños previos, observaciones relevantes del
              técnico, y, si corresponde, se adjuntarán imágenes o videos de
              respaldo. Esto se realiza para dejar en claro que MAUTICA no se
              responsabiliza por fallas derivadas de intervenciones previas.
            </p>
            <p className="mb-3">
              Es responsabilidad del cliente contar con seguro o cobertura por
              su cuenta.
            </p>
            <p>
              Si el presupuesto es rechazado, deberá abonar el costo de
              diagnóstico (establecido actualmente en{" "}
              <strong className="text-white">$35.000 ARS</strong>) y/o envío.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              4. Entrega de equipos
            </h2>
            <p>
              El acto de dejar el equipo para reparación implica la aceptación
              plena e irrevocable de estos Términos y Condiciones, sin
              excepción.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              5. Retención de equipos
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Si pasados 90 días desde la entrega del presupuesto el cliente
                no responde o no retira el equipo, este pasará a ser propiedad
                de MAUTICA.
              </li>
              <li>
                De igual manera, si un equipo ya reparado no es retirado dentro
                de los 90 días posteriores al aviso por escrito, también pasará
                a ser propiedad de la empresa.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              6. Daños ajenos a la reparación
            </h2>
            <p className="mb-3">
              MAUTICA no se responsabiliza por daños producidos en partes que no
              estén relacionadas con la reparación solicitada, especialmente
              cuando el daño es consecuencia del estado previo del equipo.
            </p>
            <p className="mb-2 text-white/60 text-[13px]">Ejemplos:</p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>
                Cambiar la batería de un celular con la pantalla previamente
                rota o con manchas, pudiendo ampliarse dichos defectos.
              </li>
              <li>
                Cambiar una pantalla que requiera desmontar la tapa trasera, y
                que esta resulte dañada (rotura, pintura saltada, etc.).
              </li>
            </ul>
            <p>
              En caso de que algún componente sufra daño durante el proceso, se
              informará al cliente y se emitirá nuevo presupuesto. El cliente
              decidirá si desea o no continuar con la reparación adicional.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              7. Calidades de reparación (celulares)
            </h2>
            <p className="mb-4">
              En MAUTICA ofrecemos distintas categorías de servicio, según el
              tipo y calidad del repuesto:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h3 className="text-white font-medium mb-1">
                  Servicio Premium
                </h3>
                <p className="text-[14px]">
                  Utiliza repuestos de la más alta calidad disponible. En
                  algunos casos no es posible obtener repuestos 100% originales,
                  pero se garantiza la mejor opción del mercado. Cuenta con{" "}
                  <strong className="text-white">90 días de garantía</strong>.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h3 className="text-white font-medium mb-1">
                  Servicio Tradicional
                </h3>
                <p className="text-[14px]">
                  Se busca un balance entre calidad y precio, utilizando
                  repuestos de calidad superior. Ofrece{" "}
                  <strong className="text-white">30 días de garantía</strong>.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h3 className="text-white font-medium mb-1">
                  Servicio Económico
                </h3>
                <p className="text-[14px]">
                  Pensado para quienes solo necesitan funcionalidad básica o
                  recuperar datos. Se utilizan componentes de gama económica,
                  los cuales pueden presentar fallas menores (colores, táctil,
                  brillo, etc.). En algunos casos, funciones como huella en
                  pantalla o Face ID en iPhone pueden no funcionar.{" "}
                  <strong className="text-white">
                    Este servicio no cuenta con garantía.
                  </strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              8. Garantía
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                La garantía comienza a regir desde el momento en que se notifica
                al cliente que la reparación fue completada, NO desde la entrega
                física del equipo.
              </li>
              <li>
                La garantía solo cubre la reparación realizada, no otros fallos
                posteriores o periféricos no intervenidos.
              </li>
              <li>
                Si se requiere reparar un componente adicional para garantizar
                el correcto funcionamiento (por ejemplo, batería dañada que
                afecta táctil o pantalla) y el cliente decide no realizar esa
                reparación, la garantía no aplicará.
              </li>
              <li>
                Cualquier nueva falla o inconveniente se considerará una nueva
                reparación, no una extensión de la garantía anterior.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              9. Repuestos (iPhone)
            </h2>
            <p className="mb-3">
              En algunos modelos de iPhone, el sistema puede mostrar mensajes de
              advertencia sobre repuestos no originales. Esto depende del tipo y
              calidad de repuesto utilizado.
            </p>
            <p>
              MAUTICA aclara que esto no afecta el funcionamiento del equipo, y
              es un comportamiento habitual del sistema iOS.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[20px] font-medium mb-3">
              10. Uso de imágenes, fondos de pantalla y material audiovisual
            </h2>
            <p className="mb-3">
              El cliente autoriza a MAUTICA a capturar, utilizar y reproducir
              imágenes, fotografías y videos relacionados con:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Fondos de pantalla y/o pantallas de bloqueo visibles al momento
                de recibir o encender el dispositivo.
              </li>
              <li>
                Imágenes del equipo antes, durante y después del proceso de
                diagnóstico o reparación.
              </li>
              <li>
                Contenido audiovisual generado dentro de la oficina que forme
                parte de la experiencia del cliente (grabaciones de proceso
                técnico, demostraciones, antes/después, atención al cliente,
                etc.).
              </li>
            </ul>
            <p className="mb-3">
              Dicho material podrá ser utilizado por MAUTICA para publicaciones
              en redes sociales, campañas publicitarias, uso interno, y material
              educativo o demostrativo del servicio.
            </p>
            <p className="mb-3">En todos los casos, MAUTICA se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                No divulgar información privada, sensible o datos personales del
                cliente (conversaciones, fotos personales, documentos, cuentas,
                etc.).
              </li>
              <li>
                Evitar mostrar el rostro del cliente, salvo autorización
                expresa.
              </li>
              <li>
                Difuminar o recortar cualquier contenido que pudiera comprometer
                la privacidad del usuario.
              </li>
            </ul>
            <p>
              Si el cliente desea no autorizar el uso de imágenes relacionadas
              con su equipo, deberá informarlo al momento del ingreso. La
              negativa no afectará la calidad ni el costo del servicio.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
