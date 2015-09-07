angular
  .module('weatherOrNot', ['ngRoute'])

  .config(function($routeProvider){
    $routeProvider
      .when('/:zipCode', {
        templateUrl: 'views/zip.html'
      })
  })


  .controller('Main', function($http){
    var vm = this;

    navigator.geolocation.getCurrentPosition(function (geoposition) {
      var lat = geoposition.coords.latitude;
      var long = geoposition.coords.longitude;

      $http
        .get(`http://api.wunderground.com/api/1a83bcf806654e1a/conditions/q/${lat},${long}.json`)
        .success(function(data){
          vm.temperature = data.current_observation.temp_f;
          vm.place = data.current_observation.display_location.full;
          vm.humidity = data.current_observation.relative_humidity;
        })
    })
  })
