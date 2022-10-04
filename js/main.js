window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
      .then(res => console.log("Service Worker registered"))
      .catch(err => console.log("Unable to register Service Worker", err))
  }
}
