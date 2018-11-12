let cacheName = "pareionde-cache-v0";

let filesToCache = [
	"index.html",
	"css/style.css",
  "css/modulos/variaveis.css",
  "css/libraries/all.min.css",
  "css/libraries/bootstrap.min.css",
  "css/libraries/bootstrap.min.css.map",
  "css/elementos/accordion.css",
  "css/elementos/add-form.css",
  "css/elementos/buttons.css",
  "css/elementos/details.css",
  "css/elementos/footer.css",
  "css/elementos/header.css",
  "css/elementos/main.css",
  "js/db.js",
  "js/details.js",
  "js/form.js",
  "js/navigation.js",
  "js/window.js",
  "js/pwa-eu/conexao.js",
  "js/pwa-eu/gerenciamento.js",
  "js/libraries/bootstrap.min.js",
  "js/libraries/bootstrap.min.js.map",
  "js/libraries/handlebars.js",
  "js/libraries/jquery.min.js",
  "js/libraries/popper.min.js"
];

self.addEventListener("install", function(event) {
	event.waitUntil(caches.open(cacheName).then((cache) =>{
		return cache.addAll(filesToCache);
	}));
    console.log("service worker installed...")
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('service worker: Activate');
    e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('service worker: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
    );
    return self.clients.claim();
});