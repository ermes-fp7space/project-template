/*
  The mapservices.js file creates isntace of FEatureLauert to use in the map
*/

/*global define */    // Jshint option to indicate global objects
(function() {
  'use strict';

  define([
    'esri/layers/FeatureLayer'
  ], function(FeatureLayer) {

    function _loadServices(config) {
      var layers = []
      // census tract
        , censusLayer = new FeatureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CensusLaborDemo/FeatureServer/1')
      // feature renderer
        , renderer = new SimpleRenderer(symbolUtil.renderSymbol());

      censusLayer.setRenderer(renderer);

      layers.push(censusLayer);

      return layers;
    }

    return {
      loadServices: _loadServices
    };

  });

})();
