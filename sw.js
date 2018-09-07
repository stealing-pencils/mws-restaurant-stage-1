let staticCacheName = 'restaurant-static-v1';

// importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(staticCacheName).then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/css/styles.css',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/data/restaurants.json',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg'
     ]);
   })
 );
});

// self.addEventListener('activate', function(e){
//   e.waitUntil(caches.keys().then(function(cacheNames){
//     return Promise.all(cacheNames.filter(function(cacheName){
//       return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
//       }).map(function(cacheName){
//         return cache.delete(cacheName);
//          console.log('check on cache');
//         })
//     );
//   }));
// });
