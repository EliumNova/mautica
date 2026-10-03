# Mautica — Landing

Landing minimalista de Mautica Servicio Técnico, hecha con Next.js 15 (App Router) + Tailwind CSS.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Cosas que tenés que editar antes de publicar

Todo está centralizado en **`components/Hero.js`**, arriba de todo:

```js
const BG_IMAGES = [
  '/img/foto-1.jpg',
  '/img/foto-2.jpg',
  // ...
];

const WHATSAPP_NUMBER = '5492235555555';
const WHATSAPP_MESSAGE = 'Hola Mautica, me gustaría consultar...';

const USE_LOGO = false; // ponelo en true cuando tengas el logo
```

### 1. Imágenes de fondo

Poné tus fotos en `public/img/` con los nombres `foto-1.jpg`, `foto-2.jpg`, etc.
Recomendado: formato `.webp`, máximo ~300kb cada una, dimensiones de al menos 1920x1080.

Si querés sumar/sacar imágenes, editá el array `BG_IMAGES`.

### 2. WhatsApp

Reemplazá `WHATSAPP_NUMBER` por tu número real con código de país, sin `+` ni espacios.
Mar del Plata sería algo como `54922355XXXXX`.

### 3. Logo

Cuando tengas el logo, guardalo en `public/img/logo.png` (o .svg, mejor) y cambiá `USE_LOGO` a `true`.

## Deploy

Recomendado: [Vercel](https://vercel.com) (los creadores de Next.js).

1. Subí el proyecto a un repo de GitHub
2. Importalo desde Vercel, detecta Next.js automáticamente
3. Deploy

Alternativas: Netlify, Cloudflare Pages, o cualquier hosting con Node.

## Estructura

```
mautica/
├── app/
│   ├── globals.css
│   ├── layout.js          ← metadata + fuente Inter
│   └── page.js            ← página principal
├── components/
│   ├── Hero.js            ← componente principal (acá editás)
│   ├── BackgroundRotator.js   ← lógica de rotación
│   └── WhatsAppIcon.js
├── public/
│   └── img/               ← acá van tus fotos + logo
├── package.json
├── tailwind.config.mjs
├── postcss.config.mjs
└── next.config.mjs
```
