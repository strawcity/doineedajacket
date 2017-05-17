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

function thisIsWhat(tempHigh, windRange, forecasts){
    var drizzle,
        cloudy,
        rain,
        hour;

    if (forecasts.includes("rain") && !forecasts.includes("light")) {
        rain = true;
    } else if (forecasts.includes("rain") && forecasts.includes("light")) {
        drizzle = true;
    } else if (forecasts.includes("cloudy")) {
        cloudy = true;
    } else if (forecasts.includes("drizzle") || forecasts.includes("Drizzle")) {
        drizzle = true;
    }

    switch (true) {
        case tempHigh < 0:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("clouds could be slangin snow");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("bit'a flurry here and there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("bit'a flurry here and there");
                    break;
                default:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("it's gonna be cold...and dark...and it's gonna last forever.");
            }
            break;

        case tempHigh<=3 && tempHigh>0:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("and it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("could sprinkle a bit");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("You're gonna need a bigger coat.");
                    $('.suggestion__forecast').text("it's gonna be cold and...dark.");
            }
            break;

        case tempHigh <=10 && tempHigh >3:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("Go with the thicker coat. It'll be chilly.");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempHigh <=15 && tempHigh >10:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("don't forget your snorkel");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("You should grab a light coat");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempHigh <=17 && tempHigh >15:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("Eeehhhh....you could grab a coat");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempHigh <=20 && tempHigh >17:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("but grab an umbrella");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("but peep the possible drizzle");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("Could just grab a hoodie for later");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempHigh >25:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You kidding? Fuck a jacket!");
                    $('.suggestion__forecast').text("but grab an umbrella");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You kidding? Fuck a jacket!");
                    $('.suggestion__forecast').text("but peep the possible drizzle");
                    break;
                default:
                    $('.suggestion__jacket').text("You kidding? Fuck a jacket!");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;
    }

    tempBox(tempHigh);
    animateElements();
}
// Deduct 32, then multiply by 5, then divide by 9
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
    var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': city }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            getWeatherLatLon(results[0].geometry.location.lat().toFixed(2), results[0].geometry.location.lng().toFixed(2))
        } else {
            alert("Something got wrong. Maybe add the country code?");
        }
    });
}

function getWeatherLatLon(lat, lon) {
    var key = "c254108b1bb34c0524d145ad1a99d5a2",
        locationAPI = "https://api.darksky.net/forecast/c254108b1bb34c0524d145ad1a99d5a2/" + lat + "," + lon,
        tempHigh,
        forecasts,
        windRange;
    $.ajax({
       type: "GET",
       dataType: "jsonp",
       jsonp: "callback", jsonpCallback: "callback",
       url: locationAPI,
       cache: false,
       success: function (data) {
           tempHigh = (data.daily.data[0].temperatureMax - 32) * 5/9;
           windRange = data.daily.data[0].windSpeed;
           forecasts = data.daily.data[0].summary;
           getAddress (lat, lon);
           thisIsWhat(tempHigh, windRange, forecasts);
        }
    });
}

function getAddress (latitude, longitude) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyB0XLZYku9IeIhegJlIegWtZmuq0dgYX5w';
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
