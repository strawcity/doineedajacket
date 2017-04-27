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
    if ($( "input:first" ).val()) {
        getWeatherCityName($( "input:first" ).val());
        $('.submit-city-form').fadeOut('fast');
    }
    event.preventDefault();
}

function thisIsWhat(tempRange, windRange, forecasts, useFahrenheit){
    var drizzle,
        rain,
        hour;

    $.each(forecasts, function (hour, forecast) {
        if (forecast.includes("rain") && !forecast.includes("light")) {
            rain = true;
        } else if (forecast.includes("rain") && forecast.includes("light")) {
            drizzle = true;
        } else if (forecast.includes("drizzle")) {
            drizzle = true;
        }
    });

    Math.max.apply(Math,tempRange);
    Math.max.apply(Math,windRange);

    switch (true) {
        case tempRange < 0:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("clouds could be slangin snow");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("bit'a flurry here and there");
                    break;
                default:
                    //console.log('no rain');
            }
            break;

        case tempRange[0]<=3 && tempRange[0]>0:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("and it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("could sprinkle a bit");
                    break;
                default:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("it's gonna be cold. and dark.");
            }
            break;

        case tempRange[0] <=10 && tempRange[0] >3:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                default:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempRange[0] <=15 && tempRange[0] >10:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("don't forget your snorkel");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                default:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempRange[0] <=17 && tempRange[0] >15:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                default:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempRange[0] <=20 && tempRange[0] >17:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("but grab an umbrella");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("but peep the possible drizzle");
                default:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempRange[0] >25:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You kidding? Fuck a jacket!");
                    $('.suggestion__forecast').text("but grab an umbrella");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You kidding? Fuck a jacket!");
                    $('.suggestion__forecast').text("but peep the possible drizzle");
                default:
                    $('.suggestion__jacket').text("You kidding? Fuck a jacket!");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;
    }

    tempBox(tempRange[0], useFahrenheit);
    animateElements();
}

function tempBox(temp) {
    $('#temp-f-number').text(Math.round(temp * 9/5 + 32));
    $('#temp-c-number').text(Math.round(temp));
    $('#mobile-temp-f-number').text(Math.round(temp * 9/5 + 32));
    $('#mobile-temp-c-number').text(Math.round(temp));
}

function postCityName(city) {
    $('#city-append').text(' in ' + city);
    $('#tweet-url').attr('href', 'http://twitter.com/home?status=I%20needed%20a%20fucking%20jacket%20in%20' + city + '%20today.%20www.doIneedajacket.strawcity.com%20told%20me%20so.')
}

function animateElements(){
    pageTitleAnimation();
    suggestionJacketAnimation();
    tempBoxAnimation();
    mobileTempBoxAnimation();
    mobileTweetLinkAnimation();
    setTimeout(tweetLinkAnimation, 2000);
    setTimeout(mobileTweetLinkAnimation, 2000);
    $('#bg-gradient').animate({"opacity":"1"}, 300);
    $('#bg-gradient-mobile').animate({"opacity":"1"}, 300);
};

function getWeatherCityName(city) {
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
            $.each(data.list, function (i, item) {
                if (i <= 5) {
                    tempRange.push(item.main.temp);
                    forecasts.push(item.weather[0].description);
                    windRange.push(item.wind.speed);
                }
          });
          thisIsWhat(tempRange, windRange, forecasts);
          postCityName(city);
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
          getAddress (lat, lon);
          thisIsWhat(tempRange, windRange, forecasts);
        }
    });
}

function getAddress (latitude, longitude) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();

        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var data = JSON.parse(request.responseText);
                    var address = data.results[0];
                    resolve(address);
                    postCityName(address.address_components[4].long_name);
                }
                else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
};

$(document).ready(function() {
    getLocation();
});
