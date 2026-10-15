# SPEC 02 — Pantallas de niños (`/kids` y `/kids/[id]`)

> **Estado:** Implementado
> **Depende de:** SPEC 01
> **Fecha:** 2026-10-15
> **Objetivo:** Reproducir las pantallas `ninos.dc.html` y `perfil-nino.dc.html` como `/kids` (listado con buscador client-side) y `/kids/[id]` (perfil), reutilizando la sidebar de la SPEC 01, con datos estáticos y sin backend.

## Scope

**In:**

- Ruta `/kids`: encabezado "GESTIÓN / Niños" + botón "Agregar niño" (inerte), buscador funcional en frontend, separador "SALA SOLES · N niños" y grid de 2 columnas con las 8 tarjetas.
- Tarjeta de niño: avatar con iniciales y color propio, nombre, "edad · N padres vinculados", badge `MANÍ`/`LACTOSA` si hay alergia, badge `VINCULAR` si no hay padres, o chevron si no aplica ninguno. Hover: borde `#F2A78E` + `translateY(-2px)`.
- Buscador client-side: filtra por nombre, insensible a mayúsculas y acentos ("sofia" encuentra "Sofía Méndez"), actualiza el contador y muestra estado vacío "No se encontraron niños" sin coincidencias.
- Ruta `/kids/[id]`: perfil completo — "Volver a Niños", avatar 84px, nombre, "edad · Sala", botón "Editar" (inerte), banner "Alergias y notas", ficha (Fecha de nacimiento / Sala / Ingreso), columna derecha con "Resumen del día" (inerte) y "PADRES VINCULADOS" con estados `ACTIVA`/`PENDIENTE` + "Vincular otro padre" (inerte).
- `generateStaticParams` para los 8 ids; id desconocido → `notFound()`.
- Refactor de sidebar: prop `active` (`"feed" | "kids" | ...`), hrefs reales en logo (`/`), Feed (`/`) y Niños (`/kids`); el resto sigue inerte (`#`).
- `AppShell` compartido (aside + main scrollable) usado por `/` y `/kids`; `app/page.tsx` solo cambia para usarlo — sin cambios visuales en el home.
- Navegación real: `/` ↔ `/kids` ↔ `/kids/[id]`.
- Datos estáticos tipados en `app/_data/children.ts`, incluidos los perfiles de los 7 niños no mockupeados.

**Out of scope (para futuras specs):**

- Backend, base de datos, API o cualquier persistencia.
- Pantallas `agregar-nino`, `vincular-padre`, `resumen-dia`, avisos, mi cuenta, crear publicación, login.
- Acciones reales: Editar, Agregar niño, Resumen del día, Vincular otro padre, logout.
- Responsive / móvil: fidelidad solo de escritorio como el mockup.

## Data model

Nuevo módulo `app/_data/children.ts`. Sin persistencia: datos estáticos en memoria. Identificadores en inglés, texto visible en español (convención de la SPEC 01).

```ts
type ParentStatus = "active" | "pending";

interface ChildParent {
  id: string;
  name: string;        // "Lucía Fernández"
  relation: string;    // "Mamá" | "Papá"
  status: ParentStatus;
  initial: string;     // "L"
  color: string;       // "#C9B6E8"
}

interface Child {
  id: string;          // slug URL: "mateo-fernandez"
  name: string;
  age: string;         // "3 años"
  room: string;        // "Soles"
  initial: string;
  avatarBg: string;
  avatarText: string;
  allergyLabel?: string; // badge lista: "MANÍ" | "LACTOSA"
  allergies?: string;    // banner perfil: "Alergia al maní. …"
  birthDate: string;     // "12 mar 2022"
  joinedAt: string;      // "feb 2025"
  parents: ChildParent[];
}

const children: Child[]; // 8 registros; el detalle de Mateo calca el mockup
```

- `parents.length` deriva el texto de la tarjeta ("2 padres vinculados" / "sin padres vinculados") y el badge `VINCULAR`.
- Los 7 niños no mockupeados llevan datos inventados coherentes: fechas creíbles, alergia de perfil acorde al badge de la lista, y `parents` cuyo largo coincida con el "N padre(s) vinculado(s)" del mockup.
- Búsqueda en memoria: `normalize(name).includes(normalize(query))` con `normalize` quitando acentos y bajando a minúsculas.

## Implementation plan

1. `app/_data/children.ts`: interfaces `Child`/`ChildParent` + array de 8 niños. Manual: `npx tsc --noEmit`.
2. `app/_components/Sidebar.tsx`: prop `active`, hrefs reales (`/`, `/`, `/kids`, `#`, `#`) sin cambiar el resto del markup. Manual: home con "Feed" activo idéntico a hoy.
3. `app/_components/AppShell.tsx`: extraer el layout flex (aside + main) de `app/page.tsx` y reescribir `app/page.tsx` para usarlo. Manual: `/` se ve idéntico a la SPEC 01.
4. `app/kids/page.tsx`: server component con encabezado, separador y los `children` pasados a `ChildrenDirectory`.
5. `app/kids/_components/ChildrenDirectory.tsx`: componente client con input, filtro normalizado, contador dinámico, grid y estado vacío; renderiza `ChildCard`.
6. `app/_components/ChildCard.tsx`: tarjeta parametrizada por `Child` con badge/chevron condicional y hover del mockup. Enlaza a `/kids/${child.id}`.
7. `app/kids/[id]/page.tsx`: `generateStaticParams` + `notFound()`; banner de alerjias, ficha y tarjeta de padres. Manual: `/kids/mateo-fernandez` calca `perfil-nino.dc.html`; `/kids/no-existe` → 404.
8. Pulido visual comparando ambos mockups; capturas Playwright en `.playwright-mcp/`.

## Acceptance criteria

- [x] `/kids` renderiza con sidebar "Niños" activa (bg `#FBE3D8`, texto `#D9583C`) y 0 errores en consola.
- [x] Se ven 8 tarjetas en grid de 2 columnas con los badges exactos del mockup: MANÍ (Mateo), VINCULAR (Valentina), LACTOSA (Tomás), chevron en el resto.
- [x] Escribir "sof" en el buscador muestra solo a Sofía Méndez; el contador pasa de "8 niños" a "1 niño".
- [x] Escribir un texto sin coincidencias muestra "No se encontraron niños".
- [x] Hacer clic en una tarjeta navega a `/kids/<slug>` (sin 404).
- [x] `/kids/mateo-fernandez` muestra "12 mar 2022", "Soles", "feb 2025", el banner de alerjias y los padres Lucía (ACTIVA) / Diego (PENDIENTE), idéntico al mockup.
- [x] Los 8 ids renderizan perfil; `/kids/xyz` devuelve 404.
- [x] "Volver a Niños" lleva a `/kids`; nav Feed lleva a `/`; nav Niños lleva a `/kids`.
- [x] "Agregar niño", "Editar", "Resumen del día", "Vincular otro padre", Avisos, Mi cuenta y Nueva publicación no navegan (sin 404).
- [x] `/` sigue visualmente idéntico a la SPEC 01 (mismos valores computados).
- [x] `npx tsc --noEmit` y `npm run lint` sin errores nuevos.
- [x] Capturas `.playwright-mcp/` de `/kids` y `/kids/mateo-fernandez` comparadas contra los mockups.

## Decisions

- **Sí:** rutas en inglés `/kids` y `/kids/[id]` con slug (`mateo-fernandez`). Regla de naming del proyecto y escala a datos reales.
- **Sí:** extraer `AppShell` y parametrizar `Sidebar` con `active`. Evita duplicar la sidebar; toca `page.tsx` solo para delegar el layout.
- **Sí:** navegación real entre `/`, `/kids` y `/kids/[id]`; el resto inerte (opción a).
- **Sí:** datos de perfil inventados para los 7 niños no mockupeados (opción a), coherentes con la lista.
- **Sí:** contador dinámico + estado vacío mínimo. Sin eso el buscador no es verificable.
- **Sí:** buscador 100% client-side (`useState` + filtro en memoria). Sin backend, como se pidió.
- **Sí:** `generateStaticParams` + `notFound()` en `[id]`. Comprueba con `cacheComponents` y evita improvisar en runtime.
- **No:** path en español `/ninos`. El usuario pidió nombres de página en inglés.
- **No:** backend, API o persistencia. Explícitamente fuera.
- **No:** copiar la sidebar en cada pantalla. Duplicación innecesaria.

## Risks

| Riesgo | Mitigación |
| --- | --- |
| El refactor de `Sidebar`/`AppShell` rompe el home de la SPEC 01 | Paso 3 incluye verificación manual de `/` y criterio de aceptación específico con valores computados. |
| `cacheComponents` (Next 16) con ruta dinámica | `generateStaticParams` + `npm run build` en la verificación final. |
| Componente client (`ChildrenDirectory`) contamina el render estático | El filtro vive en el cliente; los datos viajan como props serializables desde el server component. |

## What is **not** in this spec

- Backend, base de datos, API, persistencia.
- `agregar-nino`, `vincular-padre`, `resumen-dia`, avisos, mi cuenta, login.
- Acciones reales de los botones (Editar, Agregar, Vincular, logout).
- Responsive / móvil.
