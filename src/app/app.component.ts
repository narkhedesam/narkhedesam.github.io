import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'narkhedesam';
  ngOnInit(): void {
    this.removeServiceWorkerIfPresentAndReloadPage();
  }


  removeServiceWorkerIfPresentAndReloadPage(){
    navigator.serviceWorker.getRegistrations()
    .then(registrations => {
      registrations.forEach(registration => {
        registration.unregister();
      })
    });

    navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister()
    } })

    if(window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations()
      .then(function(registrations) {
        for(let registration of registrations) {
          registration.unregister();
        }
      });
    }

    if ('caches' in window) {
        caches.keys()
          .then(function(keyList) {
              return Promise.all(keyList.map(function(key) {
                  return caches.delete(key);
              }));
          })
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
          for (const registration of registrations) {
            // unregister service worker
            console.log('serviceWorker unregistered');
            registration.unregister();

            setTimeout(function(){
              console.log('trying redirect do');
              window.location.replace(window.location.href); // because without redirecting, first time on page load: still service worker will be available
            }, 3000);
          }
      });
    }
  }

}
