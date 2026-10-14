---
description: Verifica y marca los acceptance criteria de un spec usando Playwright y Context7.
agent: spec-verifier
---

Verifica el spec `$ARGUMENTS` de la carpeta `specs/`.

Sigue el flujo del agente `spec-verifier`:

1. Identifica y lee el spec (`$ARGUMENTS` puede ser el nombre completo, el número o el slug).
2. Extrae cada acceptance criterion de la checklist.
3. Verifícalos uno por uno: usa Playwright MCP para las pantallas (capturas en `.playwright-mcp/`, comparación visual contra `references/screenshots/*.png` y `references/pantallas/*.dc.html`) y Context7 para confirmar las recomendaciones actuales de Next.js en el código.
4. Marca en el spec con `- [x]` solo los criterios que pasaron; deja en `- [ ]` los que fallaron.
5. Entrega el reporte final en tabla (criterio → resultado → evidencia) y resume los fallos con causa raíz.

No modifiques código de la app; solo marca los checkboxes del spec.
