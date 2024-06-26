$(document).ready(function () {
    let $location = $("#location"),
        $dayAndTime = $(".on-left"),
        $selectUnitsDropDown = $("#unit-select"),
        $weatherImage = $("#weather-image i"),
        $weatherDescription = $("#weather-detail"),
        $tempValue = $("#temp .temp-value"),
        $tempUnit = $("#temp .temp-unit"),
        $pressure = $("#pressure span"),
        $wind = $("#wind span"),
        $humidity = $("#humidity span"),
        $date,
        $url,
        tempCelsius;

    setInterval(() => {
        $date = moment().format('dddd, h:mm a');
        $dayAndTime.html($date);
    }, 1000);

    $.get("https://ipinfo.io", function (response) {
        let [lat, lon] = response.loc.split(",");
        $url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d51a257c115b6c19dcb52f542833a7e1&units=metric`;

        $.getJSON($url, function (data) {
            $weatherDescription.html(data.weather[0].description);
            $pressure.html(data.main.pressure);
            $wind.html(data.wind.speed);
            $location.html(`${data.name}, ${data.sys.country}`);
            $humidity.html(data.main.humidity);
            tempCelsius = data.main.temp;
            updateTemperature();

            let weatherCondition = data.weather[0].main.toLowerCase();
            switch (weatherCondition) {
                case "drizzle":
                    $weatherImage.removeClass().addClass("wi wi-sprinkle");
                    break;
                case "clouds":
                    $weatherImage.removeClass().addClass("wi wi-cloudy");
                    break;
                case "rain":
                    $weatherImage.removeClass().addClass("wi wi-rain");
                    break;
                case "snow":
                    $weatherImage.removeClass().addClass("wi wi-snow");
                    break;
                case "clear":
                    $weatherImage.removeClass().addClass("wi wi-day-sunny");
                    break;
                case "thunderstorm":
                    $weatherImage.removeClass().addClass("wi wi-thunderstorm");
                    break;
                default:
                    $weatherImage.removeClass().addClass("wi wi-cloudy");
            }
        });
    }, "jsonp");

    $selectUnitsDropDown.change(updateTemperature);

    function updateTemperature() {
        if ($selectUnitsDropDown.val() === "℉") {
            let tempFahrenheit = (tempCelsius * 9/5) + 32;
            $tempValue.html(Math.round(tempFahrenheit));
            $tempUnit.html("℉");
        } else {
            $tempValue.html(Math.round(tempCelsius));
            $tempUnit.html("℃");
        }
    }
});
