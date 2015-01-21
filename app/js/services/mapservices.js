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
      var layers = [];

      var municipalitiesLayerURL = "http://ermes.dlsi.uji.es:6080/arcgis/rest/services/italy_vector_mxd/MapServer/1";
      var municipalitiesLayer = new FeatureLayer(municipalitiesLayerURL);
      
      layers.push(municipalitiesLayer);

      return layers;
    }

    return {
      loadServices: _loadServices
    };

  });

})();
