/*
 * Consentimiento previo de medicion. metrik.com.co
 *
 * Google Analytics NO se carga hasta que la persona acepta. Esa es la razon de
 * ser de este archivo: el articulo 5 del Decreto 1377 de 2013 exige que la
 * autorizacion sea previa, asi que un banner que solo informa mientras la
 * herramienta ya corrio no sirve. Ver la seccion 5.4 de /privacidad.
 *
 * Uso desde otra pagina:
 *   metrikMedicion.evento('nombre_evento', { ... })  registra solo si hay consentimiento
 *   metrikMedicion.abrir()                           reabre el aviso para cambiar la eleccion
 */
(function () {
  'use strict';

  var GA_ID = 'G-4NG1H3TJMQ';
  var LLAVE = 'metrik_consentimiento_medicion';
  var VERSION = '1';                       // subir si cambia el alcance de lo que se consiente
  var ACEPTADO = 'aceptado';
  var RECHAZADO = 'rechazado';

  var estado = null;
  var cargado = false;
  var pendientes = [];
  var banner = null;

  // localStorage puede lanzar en modo privado o con cookies bloqueadas.
  function leer() {
    try {
      var v = window.localStorage.getItem(LLAVE);
      if (!v) return null;
      var p = v.split(':');
      if (p[0] !== VERSION) return null;
      return p[1] === ACEPTADO ? ACEPTADO : RECHAZADO;
    } catch (e) { return null; }
  }

  function guardar(valor) {
    try { window.localStorage.setItem(LLAVE, VERSION + ':' + valor); } catch (e) {}
  }

  function cargarGA() {
    if (cargado) return;
    cargado = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    while (pendientes.length) {
      var ev = pendientes.shift();
      window.gtag('event', ev[0], ev[1]);
    }
  }

  // Si la persona rechaza despues de haber aceptado, las cookies previas se van.
  function borrarCookiesGA() {
    var host = document.location.hostname;
    var dominios = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')];
    document.cookie.split(';').forEach(function (c) {
      var nombre = c.split('=')[0].trim();
      if (nombre.indexOf('_ga') !== 0 && nombre.indexOf('_gid') !== 0) return;
      dominios.forEach(function (d) {
        document.cookie = nombre + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
          (d ? '; domain=' + d : '');
      });
    });
  }

  function decidir(valor) {
    estado = valor;
    guardar(valor);
    cerrarBanner();
    if (valor === ACEPTADO) {
      cargarGA();
    } else {
      pendientes.length = 0;
      borrarCookiesGA();
    }
  }

  function estilos() {
    if (document.getElementById('metrik-consentimiento-css')) return;
    var st = document.createElement('style');
    st.id = 'metrik-consentimiento-css';
    st.textContent = [
      '.mk-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#FFFFFF;',
      'border-top:1px solid #E5E7EB;box-shadow:0 -4px 24px rgba(26,26,26,0.08);',
      "font-family:'Montserrat',system-ui,-apple-system,sans-serif;color:#1A1A1A;",
      'padding:1.25rem 1rem;animation:mk-consent-in .25s ease-out}',
      '@keyframes mk-consent-in{from{transform:translateY(100%)}to{transform:translateY(0)}}',
      '@media (prefers-reduced-motion:reduce){.mk-consent{animation:none}}',
      '.mk-consent__box{max-width:1080px;margin:0 auto;display:flex;flex-wrap:wrap;',
      'gap:1rem 1.5rem;align-items:center;justify-content:space-between}',
      '.mk-consent__texto{flex:1 1 320px;font-size:.875rem;line-height:1.45;color:#4B5563;margin:0}',
      '.mk-consent__texto a{color:#1A1A1A;text-decoration:underline;text-underline-offset:2px}',
      '.mk-consent__acciones{display:flex;gap:.75rem;flex-wrap:wrap}',
      '.mk-consent__btn{font-family:inherit;font-size:.875rem;font-weight:600;line-height:1;',
      'padding:.75rem 1.5rem;border-radius:9999px;cursor:pointer;border:1px solid #1A1A1A;',
      'background:#FFFFFF;color:#1A1A1A;transition:background .15s,color .15s,border-color .15s}',
      '.mk-consent__btn:hover{background:#F9FAFB}',
      '.mk-consent__btn:focus-visible{outline:2px solid #10B981;outline-offset:2px}',
      '.mk-consent__btn--si{background:#1A1A1A;color:#FFFFFF}',
      '.mk-consent__btn--si:hover{background:#000000}',
      '@media (max-width:600px){.mk-consent__acciones{width:100%}',
      '.mk-consent__btn{flex:1 1 auto}}',
      '.mk-consent-link{cursor:pointer}'
    ].join('');
    document.head.appendChild(st);
  }

  function cerrarBanner() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }

  function abrirBanner() {
    if (banner) return;
    estilos();
    banner = document.createElement('div');
    banner.className = 'mk-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Aviso sobre medici\u00f3n del sitio');
    banner.innerHTML =
      '<div class="mk-consent__box">' +
        '<p class="mk-consent__texto">Usamos Google Analytics para saber cu\u00e1nta gente entra al sitio ' +
        'y qu\u00e9 recorrido hace. No cargamos nada hasta que decidas. No usamos publicidad dirigida ' +
        'ni perfiles publicitarios. Detalle en la ' +
        '<a href="/privacidad">pol\u00edtica de tratamiento de datos</a>.</p>' +
        '<div class="mk-consent__acciones">' +
          '<button type="button" class="mk-consent__btn" data-mk="no">Rechazar</button>' +
          '<button type="button" class="mk-consent__btn mk-consent__btn--si" data-mk="si">Aceptar</button>' +
        '</div>' +
      '</div>';
    banner.querySelector('[data-mk="si"]').addEventListener('click', function () { decidir(ACEPTADO); });
    banner.querySelector('[data-mk="no"]').addEventListener('click', function () { decidir(RECHAZADO); });
    document.body.appendChild(banner);
  }

  // Deja una via para cambiar de opinion junto al enlace de la politica en el pie.
  function enlacePie() {
    if (document.querySelector('.mk-consent-link')) return;
    // El ultimo enlace a la politica es el del pie en las tres paginas que cargan medicion.
    // Se excluye el que va dentro del propio aviso, que si no se elige a si mismo.
    var enlaces = [].slice.call(document.querySelectorAll('a[href*="privacidad"]'))
      .filter(function (el) { return !el.closest || !el.closest('.mk-consent'); });
    var ref = enlaces[enlaces.length - 1];
    if (!ref || !ref.parentNode) return;
    var sep = document.createElement('span');
    sep.className = ref.className.replace('footer-link ', '');
    sep.innerHTML = ' &middot; ';
    var a = document.createElement('a');
    a.className = ref.className + ' mk-consent-link';
    a.href = '#';
    a.textContent = 'Preferencias de medici\u00f3n';
    a.addEventListener('click', function (e) { e.preventDefault(); abrirBanner(); });
    ref.parentNode.insertBefore(sep, ref.nextSibling);
    ref.parentNode.insertBefore(a, sep.nextSibling);
  }

  window.metrikMedicion = {
    estado: function () { return estado; },
    abrir: abrirBanner,
    evento: function (nombre, params) {
      if (estado !== ACEPTADO) return;          // sin consentimiento no se registra nada
      if (cargado && typeof window.gtag === 'function') window.gtag('event', nombre, params || {});
      else pendientes.push([nombre, params || {}]);
    }
  };

  function iniciar() {
    estado = leer();
    enlacePie();
    if (estado === ACEPTADO) cargarGA();
    else if (estado !== RECHAZADO) abrirBanner();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
