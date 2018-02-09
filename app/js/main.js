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
            $('#intro-quesiton-mark').hide();
            $('#loading').hide();
            break;
        case error.POSITION_UNAVAILABLE:
            $('#city-code').show();
            $('#intro-quesiton-mark').hide();
            $('#loading').hide();
            break;
        case error.TIMEOUT:
            break;
        case error.UNKNOWN_ERROR:
            break;
    }
}

$("#s").keypress(function(e) {
    if(e.which == 13) {
        submitCity();
    }
});

function submitCity() {
    if ($( "input:first" ).val()) {
        getWeatherCityName($( "input:first" ).val());
        $('.submit-city-form').fadeOut();
        $('#loading').fadeIn();
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
                    $('.suggestion__jacket').text("You're gonna need a bigger jacket");
                    $('.suggestion__forecast').text("and clouds could be slangin' snow");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You're gonna need a bigger jacket");
                    $('.suggestion__forecast').text("with a bit'a flurry here and there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("You're gonna need a bigger jacket,");
                    $('.suggestion__forecast').text("a Russian novel and some whiskey");
                    break;
                default:
                    $('.suggestion__jacket').text("You're gonna need a bigger jacket.");
                    $('.suggestion__forecast').text("It's gonna be cold and dark...and it's gonna last forever.");
            }
            break;

        case tempHigh<=3 && tempHigh>0:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("You're gonna need the Gore-tex today");
                    $('.suggestion__forecast').text("cause it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Just...I'm just done with winter");
                    $('.suggestion__forecast').text("It's gonna be cold drizzle. Let's just stay inside");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Go with the thick winter jacket");
                    $('.suggestion__forecast').text("and treat yourself to a nice coffee.");
                    break;
                default:
                    $('.suggestion__jacket').text("You're gonna need that thick jacket...");
                    $('.suggestion__forecast').text("again.");
            }
            break;

        case tempHigh <=10 && tempHigh >3:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Go with the thicker jacket. It'll be chilly");
                    $('.suggestion__forecast').text("and it'll piss cold rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Go with the thicker jacket. It'll be chilly");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Go with some layers today. It'll be chilly");
                    $('.suggestion__forecast').text("and the sun is gonna hide a bit");
                    break;
                default:
                    $('.suggestion__jacket').text("You'll be warm in a thick jacket");
                    $('.suggestion__forecast').text("and cold in a thin jacket");
            }
            break;

        case tempHigh <=15 && tempHigh >10:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("A rain jacket with layers");
                    $('.suggestion__forecast').text("and don't forget your snorkel");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("You should grab a light jacket");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Layers, layers, layers.");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("Try a sweater under a lighter jacket");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempHigh <=17 && tempHigh >15:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Eeehhhh....you should grab a jacket");
                    $('.suggestion__forecast').text("cause it could piss down rain");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Grab the light jacket.");
                    $('.suggestion__forecast').text("and it could tinkle here or there");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("You might as well grab a light jacket");
                    $('.suggestion__forecast').text("cause the clouds will block the sun");
                    break;
                default:
                    $('.suggestion__jacket').text("Eeehhhh....you should take a light jacket");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

        case tempHigh <=20 && tempHigh >17:
            switch (true) {
                case rain:
                    $('.suggestion__jacket').text("Go with the raincoat");
                    $('.suggestion__forecast').text("and grab an umbrella");
                    break;
                case drizzle:
                    $('.suggestion__jacket').text("Could just grab a light jacket for later");
                    $('.suggestion__forecast').text("but peep the possible drizzle");
                    break;
                case cloudy:
                    $('.suggestion__jacket').text("Could just grab a light jacket for later");
                    $('.suggestion__forecast').text("and the sun is gonna hide");
                    break;
                default:
                    $('.suggestion__jacket').text("Could just grab a light coat for later");
                    $('.suggestion__forecast').text("and you could grab some shades");
            }
            break;

            case tempHigh <=25 && tempHigh >20:
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
                    $('.suggestion__jacket').text("Fuck a jacket!");
                    $('.suggestion__forecast').text("you're showing up a popcicle and a gift card");
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
    $('#tweet-url').attr('href', 'http://twitter.com/home?status=I%20needed%20a%20fucking%20jacket%20in%20' + city + '%20today.%20https://doineedafuckingjacket.com%20told%20me%20so.')
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
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyD5Zl8P8cofRfy5d_rvfYWSs6ptXnLBUiE';
        var async = true;

        console.log(url);

        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var data = JSON.parse(request.responseText);
                    getWeatherLatLon(data.results[0].geometry.location.lat.toFixed(2), data.results[0].geometry.location.lng.toFixed(2))
                }
                else {
                    console.log('what');
                    reject(request.status);
                }
            }
        };
        request.send();
    });
}


function getWeatherLatLon(lat, lon) {
    var key = "c254108b1bb34c0524d145ad1a99d5a2",
        locationAPI = "https://api.darksky.net/forecast/" + key + "/" + lat + "," + lon,
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
           getAddress(lat, lon);
           thisIsWhat(tempHigh, windRange, forecasts);
        }
    });
}

function getAddress (latitude, longitude) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyD5Zl8P8cofRfy5d_rvfYWSs6ptXnLBUiE';
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
    pageInitAnimation();
    getLocation();
});
