let $location = $("#location"),
    $temperature = $("#temperature"),
    $description = $("#description"),
    $weatherimg = $("#weather-image");



$("document").ready(function(){
  
  if(!"geolocation" in navigator){
    console.log("Geolocation no disponible");
  }else{
    
   navigator.geolocation.getCurrentPosition(function(position){
     
     var longitude = (position.coords.longitude);
     var latitude = (position.coords.latitude);
     
     
     var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
     
     //Request
     
     $.getJSON(url,function(data){
       
       $location.html(data.name + ", "+data.sys.country);
              $temperature.html(data.main.temp+"°C");
 $description.html(data.weather[0].description);
 $weatherimg.attr("src",data.weather[0].icon);
       
 })
     
     
    });
    
  }
  
});