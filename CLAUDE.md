# metrik — landing

## Proyecto
- **Tipo:** Landing page
- **Cliente:** MéTRIK
- **Stack:** HTML + CSS + JS vanilla
- **Repo:** https://github.com/bi-metrik/metrik-landing
- **Deploy:** https://metrik.com.co (Vercel, team: metrik-one)

## Sprint actual
- **Fase:** Deploy
- **Objetivo:** Ajustes de contenido, redes sociales y pricing
- **Progreso:** Completado — en producción en metrik.com.co

## Ultimo avance
**Sesion:** 2026-03-25
**Branch:** main

Que se hizo:
- Redes sociales unificadas en 3 páginas (index.html, confianza.html, privacidad.html): LinkedIn `/company/m%C3%A9trik/`, Instagram `metrik.negocios`, TikTok `@metrik.negocios`, Facebook `metrik.co`
- DNS migrado a Vercel (metrik-one team) — nameservers + registro A — metrik.com.co live con SSL
- Copy actualizado en index.html: title/meta tags + methodology section → nuevo eje "El sistema que toda empresa necesita"
- Hero tagline "De caos a claridad" se mantiene (decisión Mauricio)
- Toggle mensual/anual implementado por Max: Empresa $100K/mes | Empresa+WA $150K/mes (anual: $83K | $125K)
- Vercel project re-linked a metrik-one (el team ID anterior estaba obsoleto)
- Cambios sin commitear — pendiente git commit

## Pendientes
- [ ] **URGENTE:** Commit de todos los cambios (index.html, confianza.html, privacidad.html)
- [ ] Verificar billing real Meta desde business.facebook.com → WhatsApp Manager → Billing
- [ ] Auditar sección Clarity de la landing — copy no revisado en esta sesión
- [ ] Al hacer nuevo deploy: reasignar alias `metrik.com.co` con `vercel alias set [url] metrik.com.co --scope metrik-one`

## Decisiones clave
| Fecha | Decision | Contexto |
|-------|----------|----------|
| 2026-03-25 | Hero tagline "De caos a claridad" se mantiene | Mauricio decidió no cambiarla |
| 2026-03-25 | Nuevo copy meta tags y methodology: "El sistema que toda empresa necesita antes de crecer" | Aprobado por Mateo y Mauricio — nuevo eje posicionamiento |
| 2026-03-25 | Toggle mensual/anual: Free / Empresa $100K / Empresa+WA $150K | Pricing ONE v3.0 aprobado — sin WA chico |
| 2026-03-25 | WA add-on bajó de $80K a $50K | User-initiated = gratis según Meta API. Margen >97% |
| 2026-03-25 | Vercel re-linked a metrik-one team | Team ID bi-metrik estaba obsoleto — proyecto vive en metrik-one |

## Contexto critico
- Todos los cambios de esta sesión están **sin commitear** — hacer git commit antes del próximo trabajo
- Vercel scope es `metrik-one`, no `bi-metrik`. Usar `vercel --prod --yes` desde el directorio del proyecto
- Cada deploy genera una URL nueva — siempre reasignar alias con `vercel alias set [nueva-url] metrik.com.co --scope metrik-one`
- [21] Ficha ONE actualizada a v3.0 en metrik-docs con nuevo modelo de pricing
- Docs [25][26][27][28][70][71] siguen CONGELADOS hasta resultados del A/B test de LinkedIn (diseñado por Mateo)

## Notas para continuidad
Al retomar este proyecto, revisar:
1. Este archivo para contexto general
2. `docs/decisions.md` para historial completo de decisiones
3. Git log para últimos cambios
4. Verificar que metrik.com.co apunta al deploy correcto con `vercel alias ls --scope metrik-one`
