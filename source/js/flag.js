//http://api.geonames.org/countryInfo?username=demo
(function(){
  var request = new XMLHttpRequest();
  request.open("GET", "http://api.geonames.org/countryInfo?username=demo", true);
  request.onload = function(){
    if(request.status >= 200 && request.status < 400){
      // Success!
      var data = request.responseText;
      console.log(data);
    }else{
      // Something is wrong
    }
  }
  request.onerror = function(){
    // Something is wrong
  }
})();
