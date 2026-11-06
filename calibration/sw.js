var C='ieq-calibration-v4',F=['./','index.html','apple-touch-icon.png','icon-192.png','icon-512.png','manifest.webmanifest'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(function(r){if(r.ok&&new URL(e.request.url).origin===location.origin){var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k)})}return r}).catch(function(){return caches.match(e.request,{ignoreSearch:true}).then(function(m){return m||caches.match('index.html')})}))});
