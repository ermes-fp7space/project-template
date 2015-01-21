/* 
  Location where web application is started.
  The main.js file sets up any application-level configurations.
*/

/*global require*/	// Jshint option to indicate global objects
(function () {
  'use strict';	// Jshint configuration: place the function in strict mode

  require([
    'controllers/appcontroller',	// Loads application controller: appCtrl
    'services/mapservices',       // Loads loading features from services  
    'dojo/domReady!'				      // Loads modules once page is loaded
  ], function (appCtrl, mapServices) {
    console.debug('DEBUG - Starting application');
    // Initializes application controller with parameters
    appCtrl.init({
      elem: 'map', 
      mapOptions: {
        basemap: 'gray',
        center: [9.403, 45.479],
        zoom: 8
      },
      // Add layers property to configuration file
      layers: mapServices.loadServices()
    });
  });
})();
