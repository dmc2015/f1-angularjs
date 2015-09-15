angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http){
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP',
        // url: '////ergast.com/api/fl/2013/driverStandings.json?callback=JSON_CALLBACK'
      url: '////ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });

    };

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP',
        url: '////ergast.com/api/f1/2013/drivers/'+ id + '/driverStandings.json?callback=JSON_CALLBACK'
      });
    };

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP',
        url: '////ergast.com/api/f1/2013/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
      });
    };

    return ergastAPI;
})
.factory('flagUrl', function(){
  var apiUrl = {};

  apiUrl.getUrl = function(countryCode) {
    console.log('this is country code in factory', countryCode);
    if(!countryCode) {return console.log('no code', countryCode, url);}
    var url = "////www.geonames.org/flags/x/" + countryCode + ".gif";
    console.log('this is the url of the flag', url);
    return url;
  }
  return apiUrl;

});



// angular.module('FlagApp.services', [])
//   .factory('flagAPIservice', function($http){
//     var flagAPI = {};
//     var countryCode = driver.Driver
//
//     flagAPI.getFlags = function(countryCode) {
//       var countryXML = "////api.geonames.org/countryInfo?username=demo",
//         country = $scope.drivesList.Driver.nationality,
//         countryCode = $scope.drivesList.Driver.nationality;
//
//       return flagAPI({
//         url: '////www.geonames.org/flags/x/' + countryCode + '.gif'
//       });
//
//     };
//     return flagAPI
//   })
