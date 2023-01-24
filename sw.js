---
layout: null
---
'use strict';

const version = 'v1';
const staticCacheName = "version-{{site.time | date: '%Y%m%d%H%M%S'}}";

addEventListener('install', installEvent => {
     console.log('The service worker is installing...');
     skipWaiting();
     installEvent.waitUntil(
       caches.open(staticCacheName)
       .then( staticCache => {
         return staticCache.addAll([
           '/css/style.css',
           '/colophon/index.html',
           '/contact/index.html',
           '/links/index.html',
           '/notes/index.html'
         ]);
       })
     );
   });

addEventListener('activate', activateEvent => {
     console.log('The service worker is activated. Deleting old caches...');
     activateEvent.waitUntil(
       caches.keys()
       .then( cacheNames => {
         return Promise.all(
           cacheNames.map( cacheName => {
             if (cacheName != staticCacheName) {
               return caches.delete(cacheName);
             }
           })
       );
     })
     .then( () => {
       return clients.claim();
     })
   );
});


addEventListener('fetch', fetchEvent => {
     console.log('The service worker is listening.');
     const request = fetchEvent.request;
     fetchEvent.respondWith(
       caches.match(staticCacheName)
       .then ( responseFromCache => {
         if (responseFromCache) {
           return responseFromCache;
         }
         return fetch(request)
         .catch( error => {
           return caches.match('/offline.html');
         });
      })
    );
});
