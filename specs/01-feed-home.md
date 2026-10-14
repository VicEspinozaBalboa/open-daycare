# SPEC 01 — Feed como home (`/`)

> **Estado:** Implementado
> **Depende de:** —
> **Fecha:** 2026-10-13
> **Objetivo:** Reproducir la pantalla del mockup `feed.dc.html` (sidebar + columna de feed) como home `/`, con estilo idéntico, enlaces inertes y datos estáticos, sin autenticación ni base de datos.

## Scope

**In:**

- Home `/` como shell completo: sidebar de 248px + columna de feed centrada de 760px.
- Fuentes Fredoka (títulos) y Nunito (cuerpo) vía `next/font/google`, reemplazando Geist.
- Paleta crema y base tipográfica como tokens en `app/globals.css`.
- Sidebar: logo "OpenDayCare / Sala Soles", botón "Nueva publicación", nav con Feed/Niños/Avisos/Mi cuenta (Feed activo), pie con "Caro Giménez · Maestra · Soles" y logout.
- Columna feed: encabezado de guardería, bloque compose "Compartí un momento…", separador "PUBLICADO HOY" y 3 tarjetas (LOGRO, ACTIVIDAD con placeholder de foto, ANUNCIO) con sus badges, contadores y "Editar".
- Los 3 posts como datos estáticos tipados.
- Enlaces del mockup renderizados como inertes (no navegan).

**Out of scope (para futuras specs):**

- Autenticación/login real y cierre de sesión funcional.
- Base de datos o cualquier persistencia.
- Resto de pantallas: niños, avisos, mi cuenta, crear publicación, detalle de publicación, foto.
- Interacciones funcionales (like, comentar, editar, compartir).
- Responsive / móvil: fidelidad solo de escritorio como el mockup.

## Data model

Nuevo módulo `app/_data/feed.ts`. Sin persistencia: datos estáticos en memoria.

Todos los identificadores, tipos y nombres internos van en inglés (regla de código limpio del proyecto); el texto visible se mantiene en español.

```ts
type PostKind = "achievement" | "activity" | "announcement";

interface FeedPost {
  id: string;
  kind: PostKind;          // "achievement" | "activity" | "announcement"
  authorInitial: string;   // "M"
  authorName: string;      // "Mateo"
  time: string;            // "14:20"
  postedBy: string;        // "publicado por vos"
  audience: string;        // "Para: familia de Mateo"
  body: string;
  photo?: { label: string }; // solo en "activity": "Foto · pintando con témperas"
  likes: number;
  comments: number;
}

const currentUser = { name: "Caro Giménez", initial: "C", role: "Maestra · Soles" };
const room = { name: "Sala Soles", greeting: "Buenas, Caro", subtitle: "12 niños · martes 17 jun" };
```

Estilos y etiqueta visible por tipo en un mapa `Record<PostKind, {...}>` dentro del mismo archivo. Las claves están en inglés y el `label` que se renderiza queda en español:

```ts
const postKindStyles: Record<PostKind, { label: string /* "LOGRO" */; dot: string; pill: string; text: string; avatarBg: string; avatarText: string }> = {
  achievement: { label: "LOGRO", dot: "#3E9B6C", pill: "#CFEBD8", text: "#3E9B6C", avatarBg: "#A9D9E8", avatarText: "#1F7A93" },
  activity:    { label: "ACTIVIDAD", dot: "#2E89A6", pill: "#C7E7F1", text: "#2E89A6", avatarBg: "#A9D9E8", avatarText: "#1F7A93" },
  announcement:{ label: "ANUNCIO", dot: "#4E72C8", pill: "#CCD8F4", text: "#4E72C8", avatarBg: "#CCD8F4", avatarText: "#4E72C8" },
};
```

## Implementation plan

1. `app/globals.css`: reemplazar tokens del starter por la paleta crema (`#F6ECDF`, `#FFFDF9`, `#ECE0D0`, texto `#3F362E`, muted `#A89A8B`, acento `#EE8164`) y base `body` con Nunito. Manual: `npm run dev`, fondo crema.
2. `app/layout.tsx`: cargar Fredoka + Nunito con `next/font/google`, `lang="es"`, metadata `title: "OpenDayCare"`, quitar Geist. Manual: el home usa Nunito/Fredoka.
3. `app/_data/feed.ts`: tipos `FeedPost`/`PostKind`, `currentUser`, `room`, array de los 3 posts y mapa de estilos por tipo.
4. `app/_components/Sidebar.tsx`: aside completo con logo, botón, nav (Feed activo con `#FBE3D8`/`#D9583C`) y pie de usuario. Iconos como SVG inline.
5. `app/_components/PostCard.tsx`: tarjeta parametrizada por `FeedPost` (badge por tipo, audiencia, cuerpo, placeholder de foto opcional, contadores like/comentarios, "Editar").
6. `app/page.tsx`: reescribir como layout flex (aside + main), encabezado de guardería, bloque compose, "PUBLICADO HOY" y `.map()` de los posts.
7. Pulido visual comparando contra `references/pantallas/feed.dc.html`; capturas con Playwright en `.playwright-mcp/`.

## Acceptance criteria

- [x] `/` renderiza sin errores en la consola del navegador.
- [x] El fondo es crema `#F6ECDF` y las tipografías Fredoka/Nunito están aplicadas.
- [x] La sidebar de 248px muestra logo, botón "Nueva publicación", los 4 ítems de nav (Feed activo) y el pie "Caro Giménez".
- [x] El encabezado muestra "GUARDERÍA · SALA SOLES", "Buenas, Caro" y "12 niños · martes 17 jun".
- [x] Aparece el bloque compose "Compartí un momento…" y el separador "PUBLICADO HOY".
- [x] Se ven 3 tarjetas en orden LOGRO / ACTIVIDAD / ANUNCIO con sus badges y contadores (3/1, 5/2, 8/0).
- [x] La tarjeta ACTIVIDAD muestra el placeholder punteado "Foto · pintando con témperas".
- [x] Ningún enlace navega ni produce 404.
- [x] La comparación visual con `references/pantallas/feed.dc.html` es coincidente a nivel de layout, colores y tipografía.

### Verificación (2026-10-14)

- Consola del navegador: 0 errores / 0 warnings (`.playwright-mcp/spec01-console.log`).
- Estilos computados vs. mockup: `body` bg `rgb(246,236,223)` = `#F6ECDF`; `aside` width `248px`; `h1` Fredoka 30px 600; `body` Nunito. Fuentes Fredoka 600 y Nunito 400/600/700/800 en estado `loaded`.
- Nav activo "Feed": bg `rgb(251,227,216)` (`#FBE3D8`), color `rgb(217,88,60)` (`#D9583C`), weight 800 — idéntico al mockup `feed.dc.html`.
- 3 tarjetas con badges LOGRO / ACTIVIDAD / ANUNCIO y contadores 3/1, 5/2, 8/0.
- Placeholder de foto: `border-style: dashed`, color `rgb(219,205,186)`, label "Foto · pintando con témperas".
- 15 enlaces totales, todos `href="#"`; al hacer clic la URL queda en `/#` (sin 404).
- `npx tsc --noEmit` → OK. `npm run build` → OK, `/` prerenderizada como estática.
- Captura: `.playwright-mcp/spec01-feed-home.png`. (No se pudo hacer comparación pixel a pixel por imagen: el modelo activo no soporta entrada de imágenes; la comparación se hizo contra los valores del HTML del mockup.)

## Decisions

- **Sí:** Tailwind utilitario con valores exactos (ej. `bg-[#F6ECDF]`) + tokens en `globals.css`. Sigue la convención del repo y mantiene fidelidad.
- **Sí:** Pantalla completa (sidebar + feed) como home. Es lo que muestra el mockup.
- **Sí:** Enlaces inertes (`href="#"` sin navegación). Las pantallas destino no existen aún.
- **Sí:** Solo escritorio, fiel al mockup. No se inventan breakpoints.
- **Sí:** Datos en array tipado (`app/_data/feed.ts`) recorrido con `.map()`. Deja el terreno listo para una futura spec de datos.
- **Sí:** Fuentes Fredoka + Nunito vía `next/font/google` en reemplazo de Geist.
- **Sí:** Identificadores, tipos y nombres internos en inglés (`PostKind = "achievement" | "activity" | "announcement"`, `postKindStyles`). El texto visible queda en español vía `label`. Sigue la regla de código limpio del proyecto.
- **No:** Rutas stub para las demás pantallas. Va en su propia spec.
- **No:** Interacciones reales (like/comentar/editar). Fuera de alcance sin backend.
- **No:** Responsive. Fuera del alcance pedido.

## Risks

| Riesgo | Mitigación |
| --- | --- |
| `next/font` no resuelve las fuentes (offline) | Mantener fallback `system-ui, sans-serif` en la base tipográfica. |
| Diferencias de fidelidad entre utilidades Tailwind y los estilos inline del mockup | Diff visual con Playwright contra `references/pantallas/feed.dc.html` en el paso 7. |
| `cacheComponents`/experimental altera el render estático | La página es estática y sin datos; verificar build con `npm run build`. |

## What is **not** in this spec

- Autenticación y login reales.
- Base de datos y persistencia.
- Pantallas niños, avisos, mi cuenta, crear publicación, detalle, foto.
- Interacciones funcionales e iconos de conteo con acción.
- Responsive / móvil.
