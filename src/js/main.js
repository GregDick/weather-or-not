angular
  .module('weatherOrNot', [])

  .controller('Main', function($http){
    var vm = this;

    $http
      .get('http://api.wunderground.com/api/1a83bcf806654e1a/geolookup/conditions/q/autoip.json')
      .success(function(data){
        vm.temperature = data.current_observation.temp_f;
        vm.place = data.current_observation.display_location.full;
        vm.humidity = data.current_observation.relative_humidity;
      })
  })
