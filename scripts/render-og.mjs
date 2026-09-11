#!/usr/bin/env node
/**
 * Renderiza assets/og/metrik-og.png (1200x630) desde scripts/og-fuente.html.
 *
 * Es la imagen que ven WhatsApp y LinkedIn al pegar el enlace. Si cambia el
 * gancho del hero, cambia el del artboard y se vuelve a correr esto:
 *
 *   node scripts/render-og.mjs
 *
 * Sin dependencias: habla CDP contra el chromium de playwright, que es lo unico
 * que hay en la torre (no hay puppeteer, ni ImageMagick, ni PIL). El clip sale
 * del getBoundingClientRect del artboard, no de numeros a ojo, y se espera
 * document.fonts.ready antes de medir: sin eso el titular se captura con la
 * serif de respaldo y el recorte queda corrido.
 */
import { spawn } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const CHROME = process.env.CHROME_BIN
  || '/home/mauricio/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome'
const PORT = 9335
const PROFILE = `${process.env.TMPDIR || '/tmp'}/metrik-og-profile`
const SALIDA = resolve(DIR, 'assets/og/metrik-og.png')

const sleep = ms => new Promise(r => setTimeout(r, ms))

const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORT}`, '--disable-gpu',
  '--hide-scrollbars', '--no-sandbox', `--user-data-dir=${PROFILE}`,
  '--window-size=1400,900', '--force-device-scale-factor=1',
], { stdio: 'ignore' })

let ws, id = 0, sessionId
const pending = new Map()
const send = (method, params = {}, useSession = true) => new Promise((res, rej) => {
  const n = ++id
  pending.set(n, { res, rej })
  const msg = { id: n, method, params }
  if (useSession && sessionId) msg.sessionId = sessionId
  ws.send(JSON.stringify(msg))
})

try {
  let browser
  for (let i = 0; i < 60; i++) {
    try {
      browser = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json()
      if (browser.webSocketDebuggerUrl) break
    } catch {}
    await sleep(250)
  }
  if (!browser?.webSocketDebuggerUrl) throw new Error('chromium no levanto el puerto de debug')

  ws = new WebSocket(browser.webSocketDebuggerUrl)
  await new Promise(r => (ws.onopen = r))
  ws.onmessage = e => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) {
      const { res, rej } = pending.get(m.id)
      pending.delete(m.id)
      m.error ? rej(new Error(m.error.message)) : res(m.result)
    }
  }

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' }, false)
  ;({ sessionId } = await send('Target.attachToTarget', { targetId, flatten: true }, false))

  await send('Page.enable')
  await send('Runtime.enable')
  await send('Page.navigate', { url: 'file://' + resolve(DIR, 'scripts/og-fuente.html') })
  await sleep(900)

  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true })
  await sleep(250)

  const { result } = await send('Runtime.evaluate', {
    expression: `(() => { const r = document.getElementById('og').getBoundingClientRect();
      return JSON.stringify({ x: r.x + scrollX, y: r.y + scrollY, w: r.width, h: r.height }) })()`,
    returnByValue: true,
  })
  const caja = JSON.parse(result.value)
  if (Math.round(caja.w) !== 1200 || Math.round(caja.h) !== 630) {
    throw new Error(`el artboard mide ${caja.w}x${caja.h}, se esperaba 1200x630`)
  }

  const shot = await send('Page.captureScreenshot', {
    format: 'png', captureBeyondViewport: true,
    clip: { x: caja.x, y: caja.y, width: caja.w, height: caja.h, scale: 1 },
  })
  mkdirSync(dirname(SALIDA), { recursive: true })
  writeFileSync(SALIDA, Buffer.from(shot.data, 'base64'))
  console.log(`metrik-og.png  ${caja.w}x${caja.h}`)
} finally {
  ws?.close()
  chrome.kill()
}
