# metrik — landing

## Proyecto
- **Tipo:** Landing page
- **Cliente:** MéTRIK
- **Stack:** HTML + CSS + JS vanilla
- **Repo:** https://github.com/bi-metrik/metrik-landing
- **Deploy:** https://metrik.com.co (Vercel, team: metrik-one)

## Sprint actual
- **Fase:** Deploy
- **Objetivo:** Mejoras de UX y consistencia post-auditoría Noor
- **Progreso:** Completado — en producción en metrik.com.co

## Ultimo avance
**Sesion:** 2026-03-30
**Branch:** main

Que se hizo:
- Commit de todos los cambios pendientes de la sesión anterior (redes, copy, pricing ONE v3.0)
- Pricing: línea de usuarios incluidos debajo del precio en cajones Empresa y Empresa+WA
- Pricing: separador "Extras" (en español) para diferenciar lo incluido de lo adicional
- Auditoría UX completa con Noor — 9 hallazgos priorizados
- Nav: anclas ONE / Clarity / Precios (ocultas en mobile)
- Hero: CTA "Empieza gratis" visible above the fold con animación
- Trial unificado a 10 días en todo el documento (era 14 en algunos lugares)
- "Pro" → "Empresa" en CTA final (plan ya no se llama Pro)
- "Empezá" → "Empieza" (tuteo colombiano consistente)
- Framing Clarity/Projects corregido — sin implicar que ONE falla
- Contexto adicional en trust card AFI
- "NIT pendiente" eliminado del footer

## Pendientes
- [ ] Testimonios / casos reales de clientes — requiere contenido de Mauricio
- [ ] Verificar billing real Meta desde business.facebook.com → WhatsApp Manager → Billing
- [ ] Al hacer nuevo deploy: reasignar alias `metrik.com.co` con `vercel alias set [url] metrik.com.co --scope metrik-one`

## Decisiones clave
| Fecha | Decision | Contexto |
|-------|----------|----------|
| 2026-03-25 | Hero tagline "De caos a claridad" se mantiene | Mauricio decidió no cambiarla |
| 2026-03-25 | Nuevo copy meta tags y methodology: "El sistema que toda empresa necesita antes de crecer" | Aprobado por Mateo y Mauricio — nuevo eje posicionamiento |
| 2026-03-25 | Toggle mensual/anual: Free / Empresa $100K / Empresa+WA $150K | Pricing ONE v3.0 aprobado — sin WA chico |
| 2026-03-25 | WA add-on bajó de $80K a $50K | User-initiated = gratis según Meta API. Margen >97% |
| 2026-03-25 | Vercel re-linked a metrik-one team | Team ID bi-metrik estaba obsoleto — proyecto vive en metrik-one |
| 2026-03-30 | "Extras" como equivalente español de "Add-ons" | Más claro para el ICP colombiano |
| 2026-03-30 | Trial unificado a 10 días | Consistente con ficha ONE [21] — 14 días generaba postergación |
| 2026-03-30 | Nav con 3 anclas sin hamburguesa | Oculto en mobile (<600px) — prioridad mobile-first |
| 2026-03-30 | NIT eliminado del footer hasta tener dato confirmado | "NIT pendiente" generaba desconfianza en B2B |

## Contexto critico
- Vercel scope es `metrik-one`, no `bi-metrik`. Usar `vercel --prod --yes` desde el directorio del proyecto
- Cada deploy genera una URL nueva — siempre reasignar alias con `vercel alias set [nueva-url] metrik.com.co --scope metrik-one`
- [21] Ficha ONE actualizada a v3.0 en metrik-docs con modelo de pricing actual
- Docs [25][26][27][28][70][71] siguen CONGELADOS hasta resultados del A/B test de LinkedIn (diseñado por Mateo)
- Testimonios es el único pendiente de UX que requiere contenido real — no se puede implementar sin casos de clientes

## Notas para continuidad
Al retomar este proyecto, revisar:
1. Este archivo para contexto general
2. `docs/decisions.md` para historial completo de decisiones
3. Git log para últimos cambios
4. Verificar que metrik.com.co apunta al deploy correcto con `vercel alias ls --scope metrik-one`
