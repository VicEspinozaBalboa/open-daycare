# SPEC 03 — Login y activación de cuenta (`/login` y `/activate-account`)

> **Estado:** Aprobado
> **Depende de:** SPEC 01
> **Fecha:** 2026-10-28
> **Objetivo:** Reproducir `login.dc.html` y `activar-cuenta.dc.html` como `/login` y `/activate-account` a pantalla completa, sin selector de rol, con campos vacíos, interacciones locales y submit hacia `/`.

## Scope

**In:**

- Ruta `/login`: layout de dos columnas (1.05fr / 1fr) a pantalla completa, sin sidebar.
- Panel izquierdo: gradiente coral `#F6A98E → #F2937A → #EC7E62`, dos círculos translúcidos, logo sol + "OpenDayCare", título "El día de cada niño, compartido con su familia.", párrafo descriptivo y pie "🌿 Guardería Sala Soles".
- Panel derecho, ancho máximo 392px: "Iniciar sesión", subtítulo "Ingresá para ver el día de hoy.", campos EMAIL y CONTRASEÑA, enlace "¿Olvidaste tu contraseña?" inerte, botón "Iniciar sesión" y enlace "Activá tu cuenta".
- Se elimina por completo el bloque "INGRESO COMO" y los botones Personal / Familia. No hay lógica de roles.
- Ruta `/activate-account`: layout centrado a pantalla completa, ancho máximo 440px, sin sidebar.
- Cabecera con icono sol, "Bienvenida a OpenDayCare" y subtítulo "Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta.".
- Tarjeta de invitación "Te invitaron a seguir a" / "Mateo · Sala Soles" con avatar `M`.
- Campos CÓDIGO DE INVITACIÓN, EMAIL y CREAR CONTRASEÑA, vacíos y con placeholders.
- Consentimiento de fotos destildado por defecto y clickeable.
- Botón "Activar mi cuenta" y enlace "Iniciar sesión".
- Navegación real: `/login` → `/activate-account`, `/activate-account` → `/login`, submit de ambos → `/`.
- Nuevo módulo `app/_data/auth.ts` con los datos de la invitación.
- Componentes cliente para submit y checkbox; markup y tarjeta en server components.

**Out of scope (para futuras specs):**

- Autenticación real, sesión, cookies o backend.
- Validación de formularios, mensajes de error y estados de carga.
- Flujo de recuperación de contraseña.
- Selector Personal / Familia y cualquier distinción de rol.
- Conectar el logout de la sidebar con `/login`.
- Responsive / móvil: fidelidad solo de escritorio, como los mockups.
- Cambios visuales en `/`, `/kids` o `/kids/[id]`.

## Data model

Nuevo módulo `app/_data/auth.ts`. Sin persistencia: constantes estáticas en memoria. Identificadores en inglés, texto visible en español (convención de SPEC 01 y 02).

```ts
interface Invitation {
  code: string;          // "7K4P9"
  email: string;         // "lucia.fernandez@gmail.com"
  childName: string;     // "Mateo"
  room: string;          // "Sala Soles"
  childInitial: string;  // "M"
  avatarBg: string;      // "#A9D9E8"
  avatarText: string;    // "#1F7A93"
}

const invitation: Invitation;
```

- `invitation` alimenta la tarjeta de invitación y los placeholders de código y email.
- Los campos arrancan vacíos: no se precargan valores del mockup.
- No se agregan roles ni credenciales.
- Este módulo no modifica `children.ts` ni `feed.ts`.

## Implementation plan

1. `app/_data/auth.ts`: interfaz `Invitation` y constante `invitation` con los valores del mockup. Manual: `npx tsc --noEmit`.
2. `app/_components/SunIcon.tsx`: SVG del sol compartido con prop de tamaño, para reutilizarlo en ambas pantallas.
3. `app/login/page.tsx`: server component con el layout de dos columnas, panel coral, logo, textos y pie, más el formulario.
4. `app/login/_components/LoginForm.tsx`: componente cliente con campos vacíos, placeholders, link inerte y submit con `useRouter` hacia `/`. Manual: `/login` se ve como el mockup y el botón navega a `/`.
5. `app/activate-account/page.tsx`: server component centrado con icono, títulos y tarjeta de invitación desde `invitation`.
6. `app/activate-account/_components/ActivateAccountForm.tsx`: componente cliente con tres campos vacíos, placeholders desde `invitation`, checkbox de fotos destildado y toggle, submit hacia `/` y enlace a `/login`. Manual: ambos caminos navegan correctamente.
7. Pulido visual comparando contra `references/pantallas/login.dc.html` y `references/pantallas/activar-cuenta.dc.html`; capturas Playwright en `.playwright-mcp/`.
8. Verificación final: `npx tsc --noEmit`, `npm run lint` (sin errores nuevos) y `npm run build`.

## Acceptance criteria

- [ ] `/login` renderiza sin errores en la consola del navegador.
- [ ] `/login` mantiene el layout 1.05fr / 1fr, el gradiente coral y los dos círculos translúcidos del mockup.
- [ ] `/login` no muestra el bloque "INGRESO COMO" ni los botones Personal / Familia.
- [ ] Los campos EMAIL y CONTRASEÑA de `/login` están vacíos y muestran placeholder.
- [ ] "¿Olvidaste tu contraseña?" no navega ni produce 404.
- [ ] "Iniciar sesión" navega a `/`.
- [ ] "Activá tu cuenta" navega a `/activate-account`.
- [ ] `/activate-account` muestra icono, "Bienvenida a OpenDayCare", subtítulo y tarjeta "Mateo · Sala Soles".
- [ ] Los campos código, email y contraseña de `/activate-account` están vacíos y muestran placeholder.
- [ ] El checkbox de autorización de fotos arranca destildado y cambia con el clic.
- [ ] "Activar mi cuenta" navega a `/`.
- [ ] "Iniciar sesión" en `/activate-account` navega a `/login`.
- [ ] `/` sigue visualmente idéntico a la SPEC 01.
- [ ] `npx tsc --noEmit`, `npm run lint` y `npm run build` no reportan errores nuevos.
- [ ] Capturas de `/login` y `/activate-account` en `.playwright-mcp/`, comparadas contra los mockups.

## Decisions

- **Sí:** rutas `/login` y `/activate-account`, en inglés como SPEC 02; el usuario confirmó ambos destinos.
- **Sí:** pantallas a pantalla completa sin sidebar ni `AppShell`. Es lo que muestran los mockups y no forman parte de la app autenticada.
- **Sí:** eliminar el selector Personal / Familia. El usuario pidió un login único.
- **Sí:** campos vacíos con placeholders y consentimiento destildado. Decisión explícita del usuario, aunque se aparte del mockup precargado.
- **Sí:** `app/_data/auth.ts` para la invitación. Evita hardcodear "Mateo · Sala Soles" y mantiene coherencia con `children.ts`.
- **Sí:** submit navega a `/` y sin validación. No hay backend; así el flujo es verificable.
- **Sí:** "¿Olvidaste tu contraseña?" inerte. No hay flujo de recuperación en este alcance.
- **No:** autenticación, sesión o persistencia. Fuera de alcance.
- **No:** validación de campos o estados de error. Requiere reglas que no existen sin backend.
- **No:** conectar el logout de la sidebar. Va en su propia spec.

## Risks

| Riesgo | Mitigación |
| --- | --- |
| El layout raíz usa `body` flex y puede alterar el centrado de las pantallas | Cada página define `min-h-screen` propio; verificación visual con Playwright. |
| Los componentes cliente con `useRouter` rompen el render estático con `cacheComponents` | Ambos componentes son hojas de UI sin datos externos; verificar con `npm run build`. |
| Diferencias de fidelidad entre Tailwind y estilos inline del mockup | Paso 7 con capturas y comparación de valores computados. |
| `npm run lint` ya falla por `references/pantallas/support.js` | Criterio: sin errores nuevos; no se toca ese archivo generado. |

## What is **not** in this spec

- Autenticación real, sesión, cookies o base de datos.
- Selector de rol Personal / Familia.
- Recuperación de contraseña.
- Validaciones y mensajes de error.
- Logout funcional desde la sidebar.
- Responsive / móvil.

Cada uno de esos puntos, si llega, va en su propia spec.
