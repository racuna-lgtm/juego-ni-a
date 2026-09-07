/* ============================================================
   Service worker de El Refugio de Theo.
   Guarda el juego en el dispositivo para poder jugar sin internet.

   Si algún día cambias index.html o datos.js, sube el número de
   VERSION (v3 → v4). Si no, el celular seguirá mostrando la
   versión vieja que tiene guardada.
   ============================================================ */

const VERSION = "refugio-theo-v5";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./datos.js",
  "./generador.js",
  "./manifest.json",
  "./icono.svg"
];

self.addEventListener("install", function(ev){
  ev.waitUntil(
    caches.open(VERSION).then(function(cache){
      return cache.addAll(ARCHIVOS);
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(nombres){
      return Promise.all(nombres.map(function(n){
        if(n !== VERSION) return caches.delete(n);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* Primero lo guardado (así abre al toque y sin internet).
   En paralelo intenta bajar la versión nueva para la próxima vez. */
self.addEventListener("fetch", function(ev){
  if(ev.request.method !== "GET") return;
  ev.respondWith(
    caches.match(ev.request).then(function(guardado){
      const red = fetch(ev.request).then(function(resp){
        if(resp && resp.status === 200 && resp.type === "basic"){
          const copia = resp.clone();
          caches.open(VERSION).then(function(c){ c.put(ev.request, copia); });
        }
        return resp;
      }).catch(function(){ return guardado; });
      return guardado || red;
    })
  );
});
