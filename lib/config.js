// ─────────────────────────────────────────────────────────────
// Config del negocio. Editás acá y se actualiza todo el sitio.
// ─────────────────────────────────────────────────────────────

// Dirección y datos del local
export const NEGOCIO = {
  ciudad: "Mar del Plata",
  direccion: "Rivadavia 3188",
  detalle: "Piso 9 · Of. 94",
  // Link a tu Google Maps (el de "Compartir" → "Enviar enlace")
  mapsUrl: "https://maps.app.goo.gl/TrFxe44ERf9uVa9h9",
};

// Datos de contacto que aparecen en el footer
export const CONTACTO = {
  telefono: "+54 9 223 620-3529",
  telefonoTel: "+5492236203529", // formato para tel: (sin espacios ni guiones)
  email: "contacto@mautica.com.ar",
  direccionLarga:
    "Rivadavia 3188, Piso 9, Of. 94, B7600 Mar del Plata, Provincia de Buenos Aires",
};

// Datos fiscales que aparecen en el footer
export const FISCAL = {
  razonSocial: "MAUTICA",
  titular: "Mauro Ezequiel Deheza",
  cuit: "20-47090021-1",
};

// Links a redes sociales (poné null para ocultar)
export const REDES = {
  instagram: "https://instagram.com/mauticatech",
  whatsapp: "https://wa.me/5492236203529",
  youtube: "https://youtube.com/@mauticatech",
  // facebook: 'https://facebook.com/mautica',
};

// Reseñas. Por ahora hardcodeadas.
// Cuando conectes Google Places API, este objeto se va a llenar automáticamente.
// Ver instrucciones en components/SectionServicios.js
export const RESENAS = {
  rating: 5.0,
  cantidad: 187,
};

// Embed de Google Maps.
// Reemplazá el src de abajo por el tuyo siguiendo estos pasos:
//   1. Andá a Google Maps y buscá tu negocio
//   2. Click en "Compartir"
//   3. Pestaña "Insertar un mapa"
//   4. Copiá el HTML del iframe y pegá solo el atributo src acá
export const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.7!2d-57.55!3d-38.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRivadavia%203188%2C%20Mar%20del%20Plata!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar";

// Servicios. Editá, agregá o sacá.
// "icon" usa nombres de Tabler Icons (https://tabler.io/icons)
export const SERVICIOS = [
  {
    icon: "device-laptop",
    color: "blue", // azul, verde, amber, pink, gray
    titulo: "PC y notebooks",
    descripcion: "Limpieza, mantenimiento preventivo, optimización de rendimiento y asesoramiento",
  },
  {
    icon: "device-mobile",
    color: "green",
    titulo: "Celulares",
    descripcion: "Puesta a punto, limpieza, cuidado del equipo y accesorios",
  },
  {
    icon: "device-gamepad-2",
    color: "amber",
    titulo: "Consolas",
    descripcion: "Limpieza profunda y mantenimiento preventivo en todos los modelos",
  },
  {
    icon: "plug-connected",
    color: "pink",
    titulo: "Accesorios gamer",
    descripcion: "Joysticks, cables, cargadores y más",
  },
];
