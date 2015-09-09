angular.module('F1FeederApp.controllers', [])
.controller('driversController', function($scope, ergastAPIservice){
  $scope.nameFilter = null;
  $scope.driversList = [];
  $scope.searchFilter = function(driver){
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
  };


  ergastAPIservice.getDrivers().success(function (response){
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log($scope.driversList);

    $scope.driversList.forEach(function(d){
      d.flagUrl = flagUrl(nationality[d.Driver.nationality]);
    });
    function flagUrl(countryCode){
      if(!countryCode) {return console.log('no code', countryCode, err);}
      var url = "http://www.geonames.org/flags/x/" + countryCode + ".gif";
      console.log(url);
      return url;
    }

  });
})

.factory('flag', ['countryCode', function(countryCode) {
  if(!countryCode){return console.log('the country code is missing', countryCode, err);}
  var url = "http://www.geonames.org/flags/x/" + countryCode + ".gif";
  console.log(url);
  return url;
})

.controller('driverController', function($scope, $routeParams, ergastAPIservice){
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ergastAPIservice.getDriverDetails($scope.id).success(function (response){
    $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  });

  // $scope.driver.forEach(function(d){
  //     d.flagUrl = d.flagUrl(nationality[d.Driver.nationality]);
  //   });
  //
  //
  // function flagUrl(countryCode){
  //   if(!countryCode) {return;}
  //   var url = "http://www.geonames.org/flags/x/" + countryCode + ".gif";
  //   console.log(url);
  //   return url;
  // }


  ergastAPIservice.getDriverRaces($scope.id).success(function (response){
    $scope.races = response.MRData.RaceTable.Races;
  });

});
