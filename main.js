console.log('awoo >.<');

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/DoL/service-worker.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   })
//   .catch(function(error) {
//     console.log('Service worker registration failed, error:', error);
//   });
// }

import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);