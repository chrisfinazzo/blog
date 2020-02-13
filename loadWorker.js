if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('Success!', registration.scope);
    })
    .catch(function (error) {
      console.error('Failure!', error);
    });
}
