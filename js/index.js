function getLocation() {
  if (navigator.geolocation) {
    document.getElementById("state").style.visibility = "hidden"; 
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
  var x = document.getElementById("demo");
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  weather(lat, long);
    
}

function weather(lat,long)
{
  var URL= `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
  $.getJSON(URL, function(data) {
      
      updateDOM(data);
  });
    
}

function updateDOM(data)
{
    
  var city= data.name;
  var temp= Math.round(data.main.temp);
  var min = Math.round(data.main.temp_min);
  var max = Math.round(data.main.temp_max);
  var desc= data.weather[0].main;
  var icon= data.weather[0].icon;
  var hum = Math.round(data.main.humidity);
  var p = Math.round(data.main.pressure);
  var wind = Math.round(data.main.wind);
  document.getElementById("temp").innerHTML=temp+"°";
  document.getElementById("city").innerHTML="Weather in your city "+city;
  document.getElementById("stemp").innerHTML="Min Temprature: "+min+"°<br> Max Temprature: "+max+"°<br>";
  document.getElementById("desc").innerHTML="Description: "+desc+"<br> Pressure: "+p+"Pa<br> Humidity: "+hum+"%";
  $('#icon').attr('src',icon);
}