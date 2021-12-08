// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-mwZMKZGUnWaQeIZxhTqlhJEtuMyrbzg",
    authDomain: "consultorio-firebase.firebaseapp.com",
    projectId: "consultorio-firebase",
    storageBucket: "consultorio-firebase.appspot.com",
    messagingSenderId: "941914109445",
    appId: "1:941914109445:web:4104a471457ce43f7bce6c",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
