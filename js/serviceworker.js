// asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_PWA';

// Archivos a cachear en la app
var urlsToCache = [
	'./',
	'./css/all.min.css',
	'./css/bootstrap.min.css',
	'./css/estilos.css',
	'./css/normalize.css',	
	'./imagenes/192x192.png',
	'./imagenes/512x512.png',
	'./imagenes/apple-touch-icon.png',
	'./imagenes/ALAJERO.jpeg',
	'./imagenes/alcancia',
	'./imagenes/caja2.jpg',
	'./imagenes/favicon-16x16.png',
	'./imagenes/favicon-32x32.png',
	'./imagenes/favicon.ico',
	'./imagenes/image.png',
	'./imagenes/maskable_iconx48.png',
	'./imagenes/maskable_iconx72.png',
	'./imagenes/maskable_iconx96.png',
	'./imagenes/maskable_iconx128.png',
	'./imagenes/maskable_iconx192.png',
	'./imagenes/maskable_iconx384.png',
	'./imagenes/maskable_iconx512.png',
	'./imagenes/maskable_icon.png',
	'./imagenes/caja8.jpg',
	'./imagenes/caja11.jpg',
	'./imagenes/centro de mesa.jpeg',
	'./imagenes/dulceros4.jpeg',
	'./imagenes/esferas2.jpg',
    './imagenes/esferas y cororas.jpg',
    './imagenes/klineera.jpeg',
    './imagenes/logo.png',
    './imagenes/logo.png',
    './imagenes/personaizados7.jpg',
    './imagenes/personalizados7.jpeg',
    './imagenes/pluma7.jpg',
    './imagenes/porta6.jpg',
    './imagenes/retrato.jpeg',
	'./js/anime.min.js',
	'./js/bootstrap.bundle.min.js',		
	'./js/jquery-3.6.0.min.js',
	'./js/mis-scripts.js',
	'./js/serviceworker.js',
	'./webfonts/fa-brands-400.eot',
	'./webfonts/fa-brands-400.svg',
	'./webfonts/fa-brands-400.ttf',
	'./webfonts/fa-brands-400.woff',
	'./webfonts/fa-brands-400.woff2',
	'./webfonts/fa-regular-400.eot',
	'./webfonts/fa-regular-400.svg',
	'./webfonts/fa-regular-400.ttf',
	'./webfonts/fa-regular-400.woff',
	'./webfonts/fa-regular-400.woff2',
	'./webfonts/fa-solid-900.eot',
	'./webfonts/fa-solid-900.svg',
	'./webfonts/fa-solid-900.ttf',
	'./webfonts/fa-solid-900.woff',
	'./webfonts/fa-solid-900.woff2',
];


// evento Install
self.addEventListener('install', e=> {
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(urlsToCache)
							.then(() => { 
							 self.skipWaiting();	
							});
			})
			.catch(err => console.log('No se ha registrado el cache', err))
	); 
});

// evento Activate
// que la app funcione sin conexion
self.addEventListener('activate', e=> {
	const cacheWhitelist = [CACHE_NAME];
	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})						
				);
			})		
			.then(()=> {
				// Activar cache
				self.clients.claim();
			})
	);

}); 


// evento fetch 
self.addEventListener('fetch', e=> {
	e.respondWith(
		caches.match(e.request)
			.then(res => {
				if(res){
					// devuelvo datos desde cache
					return res;
				}

				return fetch(e.request);
			}) 
	);
});
	