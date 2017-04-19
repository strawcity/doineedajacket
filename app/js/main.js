var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    getWeather(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Seems like location services aren't turned on. Enter your zipcode instead:"
            $('#zip-code').show();
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "I'm in"
            $('#zip-code').show();
            $( "#target" ).submit(function( event ) {
                getWeatherCityName( $( "input:first" ).val() );
                event.preventDefault();
            });
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function wTFShouldIWear(tempRange, windRange){
    Math.max.apply(Math,tempRange);
    Math.max.apply(Math,windRange);
    if (tempRange[0] < 10) {
        console.log('heavy coat, fur sure');
    } if (tempRange[0] >= 10){
        if (windRange[0] > 5) {
            console.log('Warmer but gonna be windy, grab a thicker coat');
        }
         console.log('Light coat');
    }
}

function willItRain(forecasts) {
    var drizzle = "drizzle",
        rain = "rain";
    $.each(forecasts, function (hour, forecast) {
        if (forecast.includes("rain")) {
            console.log("but in " + hour * 3 + " hours it'll rain");
        } else if (forecast.includes("drizzle")) {
            console.log("but in " + hour * 3 + " hours it'll drizzle");
        }
    });
}

function getWeatherCityName(city) {
    console.log(city);
    var locationAPI = "http:///api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&appid=5cef660da7c7763ee744868bd0d3327d";
    var tempRange = [];
    var forecasts = [];
    var windRange = [];
    $.ajax({
       type: "GET",
       dataType: "jsonp",
       jsonp: "callback", jsonpCallback: "callback",
       url: locationAPI,
       cache: true,
       success: function (data) {
            $.each(data.list, function (i, item) {
                if (i <= 5) {
                    tempRange.push(item.main.temp);
                    forecasts.push(item.weather[0].description);
                    windRange.push(item.wind.speed);
                }
          });
          wTFShouldIWear(tempRange, windRange);
          willItRain(forecasts);
        }
    });
}

function getWeatherLatLon(lat, lon) {
    var locationAPI = "http:///api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=5cef660da7c7763ee744868bd0d3327d";
    var tempRange = [];
    var forecasts = [];
    var windRange = [];
    $.ajax({
       type: "GET",
       dataType: "jsonp",
       jsonp: "callback", jsonpCallback: "callback",
       url: locationAPI,
       cache: false,
       success: function (data) {
            $.each(data.list, function (i, item) {
                if (i <= 5) {
                    tempRange.push(item.main.temp);
                    forecasts.push(item.weather[0].description);
                    windRange.push(item.wind.speed);
                }
          });
          wTFShouldIWear(tempRange, windRange);
          willItRain(forecasts);
        }
    });
}

$(document).ready(function() {
    getLocation();
    $('form').keypress(function(event) {
        return event.keyCode != 13;
    });
});
