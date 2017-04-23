function getLocation() {
    navigator.geolocation.getCurrentPosition(saveLatLon, showError);
}

function saveLatLon(position) {
    getWeatherLatLon(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $('#city-code').show();
            break;
        case error.POSITION_UNAVAILABLE:
            $('#city-code').show();
            break;
        case error.TIMEOUT:
            break;
        case error.UNKNOWN_ERROR:
            break;
    }
}

function submitCity() {
    console.log($( "input:first" ).val());
        getWeatherCityName($( "input:first" ).val());
        $('.submit-city-form').fadeOut('fast');
        event.preventDefault();
}

function thisIsWhat(tempRange, windRange){
    Math.max.apply(Math,tempRange);
    Math.max.apply(Math,windRange);
    if (tempRange[0] < 10) {
        jacketSwitcher('winter-coat');
    } else if (tempRange[0] >= 10 && tempRange[0]<= 14){
        if (windRange[0] > 5) {
            console.log('Warmer but gonna be windy, grab a thicker coat');
        }
        jacketSwitcher('light-jacket');
    } else {
        jacketSwitcher('no-jacket');
    }
}

function willItRain(forecasts) {
    var drizzle,
        rain;
    $.each(forecasts, function (hour, forecast) {
        if (forecast.includes("rain")) {
            rain = true;
            console.log("but in " + hour * 3 + " hours it'll rain");
        } else if (forecast.includes("drizzle")) {
            drizzle = true;
            console.log("but in " + hour * 3 + " hours it'll drizzle");
        }
    });

    // Add array of sayings and randomize what to output
    if (rain === true) {
        $('body').animate({"background-color":"#929EA8"}, 300);
        $('span#will-it-rain').text("But it'll be pissing down rain");
    } else if (drizzle === true) {
        $('span#will-it-rain').text("There'll be a bit of sea breeze though");
    } else {
        $('#sunny').animate({opacity: 1}, 850);
    }
}

function setFormWidth() {
    var formWidth = $('#title-text').width();
    $('.submit-city-form').css("width",formWidth);
}

function getWeatherCityName(city) {
    console.log(city);
    $('#loader').fadeIn();
    var locationAPI = "http:///api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=metric&appid=5cef660da7c7763ee744868bd0d3327d",
        tempRange = [],
        forecasts = [],
        windRange = [];
    $.ajax({
       type: "GET",
       dataType: "jsonp",
       jsonp: "callback", jsonpCallback: "callback",
       url: locationAPI,
       cache: false,
       success: function (data) {
           console.log(data);
            $.each(data.list, function (i, item) {
                if (i <= 5) {

                    tempRange.push(item.main.temp);
                    forecasts.push(item.weather[0].description);
                    windRange.push(item.wind.speed);
                }
          });
          willItRain(forecasts);
          thisIsWhat(tempRange, windRange);
        }
    });
}

function getWeatherLatLon(lat, lon) {
    var locationAPI = "http:///api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=5cef660da7c7763ee744868bd0d3327d",
        tempRange = [],
        forecasts = [],
        windRange = [];
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
          willItRain(forecasts);
          thisIsWhat(tempRange, windRange);
        }
    });
}

$(document).ready(function() {
    // setFormWidth();
    getLocation();
    $('form').keypress(function(event) {
        return event.keyCode != 13;
    });
});
