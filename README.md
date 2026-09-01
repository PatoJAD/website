# PatoJAD — Sitio web

Sitio web oficial de **PatoJAD**: blog y portfolio sobre tecnología, gaming, hardware, software y GNU/Linux.

- **Producción:** https://patojad.com.ar
- **Media kit / sponsors:** https://patojad.com.ar/sponsor
- Hecho con **[Hugo](https://gohugo.io) (Extended)** + **[Tailwind CSS v4](https://tailwindcss.com)**, con **bun** como gestor de paquetes.

---

## 🧱 Stack

| Capa | Tecnología |
|------|------------|
| Generador estático | Hugo **Extended** `0.164.x`+ (necesita la variante *extended* para `images.Text`, WebP, etc.) |
| Estilos | Tailwind CSS **v4** (vía `buildStats` de Hugo, sin PostCSS) |
| JS | **Vanilla** (sin framework), en bundles concatenados por Hugo |
| Búsqueda | [Fuse.js](https://fusejs.io) (carga *on-demand*) sobre un índice `index.json` |
| Carrusel | [Embla](https://www.embla-carousel.com) (carga condicional, solo donde se usa) |
| Fuentes | Open Sans + Fira Code **self-hosted** (subset) · Font Awesome 6 **subset** |
| Gestor de paquetes | **bun** (instala Tailwind y el binario de Hugo vía `hugo-extended`) |
| Deploy | GitHub Pages (rama `gh-pages`) |

---

## 🚀 Requisitos

- **[bun](https://bun.sh)** (>= 1.x). Con bun alcanza: instala tanto Tailwind como el binario de Hugo Extended.
- **git**.
- Para el script de estadísticas: **Node/bun** (el script es un `.mjs`).

> El binario de Hugo se instala vía el paquete `hugo-extended` (declarado en `trustedDependencies` para que bun ejecute su postinstall y descargue el binario).

## 📦 Instalación

```bash
git clone git@github.com:PatoJAD/website.git
cd website
bun install
```

`bun install` instala:
- `tailwindcss` + `@tailwindcss/cli`
- `hugo-extended` (descarga el binario de Hugo Extended `0.164.x`)

## 🧑‍💻 Desarrollo

```bash
bun run dev
```

Levanta el servidor de Hugo con live-reload en `http://localhost:1313`.

## 🏗️ Build de producción

```bash
bun run build      # hugo --minify --enableGitInfo  → genera /public
```

## 🚢 Deploy

```bash
bun run deploy     # ejecuta deploy.sh
```

`deploy.sh` hace `hugo --minify`, agrega el `CNAME` (`patojad.com.ar`) y publica `/public` en la rama **`gh-pages`** del repo (GitHub Pages).

---

## 📁 Estructura

```
.
├── config/_default/        # Configuración de Hugo (dividida por archivo)
│   ├── config.yaml         #   baseURL, título, GA, taxonomías, tema…
│   ├── params.yaml         #   redes, sponsors, tecnologías, sitios amigos, donaciones…
│   ├── menus.yaml          #   menú principal y del footer
│   ├── outputs.yaml        #   HTML/JSON/RSS por tipo (feeds por sección y taxonomía)
│   ├── permalinks.yaml     #   /post/:year/:month/:slug/ , /proyect/:slug/
│   └── …                   #   markup, sitemap, related, services
├── content/                # Contenido en Markdown
│   ├── posts/YYYY/*.md     #   artículos del blog (type: post | video)
│   ├── projects/*.md       #   proyectos (type: project)
│   ├── authors/            #   autores
│   ├── categories/         #   metadatos de categorías (icono, color)
│   └── sponsor/, privacity/
├── data/                   # Data files (meses, días, linkedin)
├── scripts/
│   └── fetch-stats.mjs     # genera stats.json para el dashboard de sponsors
├── static/                 # Assets estáticos (íconos, imágenes, fuentes, SW, manifest)
├── themes/tailwind/        # Tema propio
│   ├── assets/css/         #   styles.css, critical.css, fontawesome (subset)
│   ├── assets/js/          #   JS por feature (ver abajo)
│   ├── assets/fonts/       #   Open Sans + Fira Code (woff2)
│   └── layouts/            #   plantillas, partials, render hooks, shortcodes
├── deploy.sh
└── package.json
```

---

## ✨ Funcionalidades

### Blog
- Listado con **hero de post destacado**, búsqueda y RSS; cards con imagen, meta y CTA.
- **Single de artículo**: índice (TOC) **sticky con scroll-spy**, **barra de progreso de lectura**, **lightbox** de imágenes, **compartir** (nativo + copiar enlace + redes), **CTA de comunidad**, **navegación anterior/siguiente**, posts relacionados.
- Taxonomías: **categorías** (con icono/color) y **tags** (nube ponderada por popularidad), con páginas de término y **feed RSS por término/sección**.
- Datos estructurados: `BlogPosting`, `BreadcrumbList` y **FAQ/HowTo** opt-in por front-matter (`faq:` / `howto:`).

### Búsqueda
- Modal a **pantalla completa** con fondo *glass*; resultados en **grid de cards** (hasta 4 por fila).
- `Fuse.js` se **carga on-demand** al abrir el buscador (fuera del bundle inicial). El índice `index.json` se genera con `layouts/index.json`.

### Proyectos
- Grilla de proyectos + sección **"Proyecto destacado"** que trae stats en vivo de la organización en GitHub.

### Sponsors / Media kit (`/sponsor`)
- Dashboard de **audiencia en vivo** (YouTube, GitHub, Mastodon, Facebook…) alimentado por `stats.json` + APIs públicas del lado del cliente.
- Formatos, planes, OG image propia.

### UX / diseño
- **Animaciones al hacer scroll** (reveal + count-up) declarativas por atributos `data-*` — ver [`viewport-animations.js`](themes/tailwind/assets/js/viewport-animations.js).
- Micro-interacciones (`fx-pop`, `fx-nudge`), scrollbar sutil, respeto de `prefers-reduced-motion`.
- Utilidades de marca: `.btn-primary`/`.btn-outline`, `.hr-brand`, `.text-gradient`, `.card-glow`, `.badge-pill`, `.chip`.
- **PWA**: manifest + service worker.

### Rendimiento
- CSS crítico inline; fuentes self-hosted con `preload`; **Font Awesome en subset**.
- Bundles JS separados (async) + carga diferida de GA/Metricool/AdSense.
- Embla y Fuse **no** van en el bundle inicial (condicional / on-demand).

---

## 📊 Pipeline de estadísticas

El dashboard de `/sponsor` combina dos fuentes:

1. **Server-side** — `scripts/fetch-stats.mjs` corre en el servidor (cron) y escribe `stats.json` en `statsapi.patojad.com.ar`. Requiere variables de entorno:
   - `YT_API_KEY` (YouTube), `FB_ACCESS_TOKEN` (Facebook), `GITHUB_TOKEN` (opcional, sube el rate limit), `THREADS_ACCESS_TOKEN` (opcional).
   ```bash
   YT_API_KEY=... FB_ACCESS_TOKEN=... bun run stats
   ```
2. **Client-side** — el dashboard lee `stats.json` y complementa con APIs públicas.

> Nota: las métricas de *Page Insights* de Facebook fueron discontinuadas por Meta; el engagement de FB se calcula a partir de los posts (`reactions`/`comments`/`shares`).

---

## 🎨 Convenciones del tema

- **Tailwind + `buildStats`**: Hugo detecta las clases desde los **templates renderizados**, no desde strings de JS. Clases usadas **solo** en JS se purgan → usar CSS propio o clases que existan en templates.
- **Font Awesome es un subset**: los íconos que vienen de datos/front-matter (categorías, wallets) deben tener su regla `::before` agregada en `themes/tailwind/assets/css/vendor/fontawesome.css`.
- **Ruteo de single**: los posts usan `_default/single.html` (por `type:`), no `posts/single.html`.
- **Reutilizables**: `partials/helper/` (`section-header.html`, `date-es.html`, `icon.html`).

---

## 📄 Licencia

Ver [LICENSE](LICENSE). El contenido de los artículos es propiedad de PatoJAD.

---

Creado por [PatoJAD](https://patojad.com.ar) · desarrollo con [Vasak Group](https://vasak.net.ar).
