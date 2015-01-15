/*
  The appcontroller.js file manages tasks at an application level 
*/

/*global define */    // Jshint option to indicate global objects
(function () {
  'use strict';

  define([
    'controllers/mapcontroller'     // Indicates dependency on controllers/mapcontroller.js
  ], function (MapController) {

    // Triggered after map loads
    function mapLoaded(map) {
      console.debug('map has been loaded', map);
    }

    // 
    function _init(config) {
      var mapCtrl = new MapController(config);
      // Loads mapcontroller and waits for load to finish
      mapCtrl.load().then(mapLoaded);
    }

    return {
      init: _init
    };

  });
})();
