# metrik-landing

Landing page corporativa de MéTRIK. Contexto del proyecto en `../CONTEXT.md`.

## Stack
- HTML + CSS + JS vanilla
- Assets en `assets/`, paginas auxiliares en root (`confianza.html`, `auth/`, `Tratamiento de datos/`)

## Repo
- Remote: `https://github.com/bi-metrik/metrik-landing` (public)
- Branch principal: `main`

## Deploy (Vercel)
- Team/scope: `metrik-one`
- Dominio: `metrik.com.co` (alias manual)
- Comandos:
  ```bash
  vercel --prod --yes
  vercel alias set [nueva-url] metrik.com.co --scope metrik-one
  ```
- Cada deploy genera URL nueva — siempre reasignar el alias.

## Convenciones
- Tuteo colombiano ("Empieza", no "Empezá")
- Precios y trial: fuente de verdad es `metrik-docs/docs/20_lineas/` ficha [21] ONE
- Copy de posicionamiento alineado con eje "sistema antes de crecer"
