// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDv4IC6FF0VpgTvPGiJz2fNuMOv12oknnU",
    authDomain: "fir-todo-466b7.firebaseapp.com",
    databaseURL: "https://fir-todo-466b7.firebaseio.com",
    projectId: "fir-todo-466b7",
    storageBucket: "fir-todo-466b7.appspot.com",
    messagingSenderId: "769437767084"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
