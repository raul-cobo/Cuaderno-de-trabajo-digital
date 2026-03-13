// Service Worker básico para habilitar la instalación de la PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Por ahora, simplemente deja pasar las peticiones de red normales.
    // Aquí es donde en el futuro se programaría la caché para que funcione sin internet.
});