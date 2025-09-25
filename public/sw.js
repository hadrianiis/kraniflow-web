// Advanced Service Worker with optimized caching strategies
// Cache-first for static assets, Network-first for API calls

const CACHE_NAME = 'kranioflow-v1';
const STATIC_CACHE = 'kranioflow-static-v1';
const DYNAMIC_CACHE = 'kranioflow-dynamic-v1';
const API_CACHE = 'kranioflow-api-v1';

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only'
};

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/terapia',
  '/blog',
  '/fonts/SFProDisplay-Regular.woff2',
  '/fonts/SFProDisplay-Medium.woff2',
  '/fonts/SFProDisplay-Bold.woff2',
  '/images/featured_img1.avif',
  '/images/kika-photo.avif',
  '/images/kika-about.avif',
  '/logo-kranio.svg'
];

// API endpoints that should use network-first strategy
const API_ENDPOINTS = [
  '/api/contact',
  '/api/blog',
  '/api/wordpress-status'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('[SW] Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Take control of all clients
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Determine caching strategy based on request type
  const strategy = getCachingStrategy(request);
  
  event.respondWith(
    handleRequest(request, strategy)
  );
});

// Determine caching strategy for a request
function getCachingStrategy(request) {
  const url = new URL(request.url);
  
  // Static assets - cache first
  if (isStaticAsset(url)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // API calls - network first
  if (isApiCall(url)) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // Images - stale while revalidate
  if (isImage(url)) {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
  }
  
  // HTML pages - network first with cache fallback
  if (isHtmlPage(url)) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // Default - cache first
  return CACHE_STRATEGIES.CACHE_FIRST;
}

// Check if request is for static asset
function isStaticAsset(url) {
  return url.pathname.match(/\.(js|css|woff2|woff|ttf|eot|svg|png|jpg|jpeg|gif|webp|avif|ico)$/);
}

// Check if request is API call
function isApiCall(url) {
  return url.pathname.startsWith('/api/') || 
         url.hostname.includes('wordpress.com') ||
         url.hostname.includes('kranioflow');
}

// Check if request is for image
function isImage(url) {
  return url.pathname.match(/\.(png|jpg|jpeg|gif|webp|avif|svg)$/);
}

// Check if request is HTML page
function isHtmlPage(url) {
  return url.pathname.endsWith('/') || 
         !url.pathname.includes('.') ||
         url.pathname.match(/\.(html|htm)$/);
}

// Handle request with specified strategy
async function handleRequest(request, strategy) {
  const url = new URL(request.url);
  
  try {
    switch (strategy) {
      case CACHE_STRATEGIES.CACHE_FIRST:
        return await cacheFirst(request);
        
      case CACHE_STRATEGIES.NETWORK_FIRST:
        return await networkFirst(request);
        
      case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
        return await staleWhileRevalidate(request);
        
      case CACHE_STRATEGIES.NETWORK_ONLY:
        return await networkOnly(request);
        
      case CACHE_STRATEGIES.CACHE_ONLY:
        return await cacheOnly(request);
        
      default:
        return await cacheFirst(request);
    }
  } catch (error) {
    console.error('[SW] Error handling request:', error);
    
    // Fallback to offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html') || 
             new Response('Offline - Please check your connection', {
               status: 503,
               statusText: 'Service Unavailable'
             });
    }
    
    throw error;
  }
}

// Cache-first strategy
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network-first strategy
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  // Update cache in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  // Return cached version immediately if available
  return cachedResponse || fetchPromise;
}

// Network-only strategy
async function networkOnly(request) {
  return await fetch(request);
}

// Cache-only strategy
async function cacheOnly(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (!cachedResponse) {
    throw new Error('Resource not in cache');
  }
  
  return cachedResponse;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form submissions
async function syncContactForm() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingSubmissions = await getPendingSubmissions();
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        });
        
        if (response.ok) {
          // Remove from pending submissions
          await removePendingSubmission(submission.id);
          console.log('[SW] Synced contact form submission');
        }
      } catch (error) {
        console.error('[SW] Failed to sync submission:', error);
      }
    }
  } catch (error) {
    console.error('[SW] Background sync error:', error);
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/logo-kranio.svg',
      badge: '/logo-kranio.svg',
      vibrate: [100, 50, 100],
      data: data.data,
      actions: data.actions || []
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Utility functions for IndexedDB operations
async function getPendingSubmissions() {
  // Implementation would use IndexedDB
  return [];
}

async function removePendingSubmission(id) {
  // Implementation would use IndexedDB
  return true;
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRIC') {
    // Forward performance metrics to analytics
    console.log('[SW] Performance metric:', event.data.metric);
  }
});

console.log('[SW] Service worker loaded successfully');
