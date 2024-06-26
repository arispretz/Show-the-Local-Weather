<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Show the Local Weather</title>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:400,500">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css">
</head>
<body>
  <div class="container">
    <div id="app-box" class="row">
      <div id="title">
        <h1>Weather App</h1>
      </div>
      <div id="sub-app-box" class="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12 rounded">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div>
            <div class="on-left"></div>
            <div class="on-right">
              <select id="unit-select">
                <option>&#8457;</option>
                <option selected="selected">&#8451;</option>
              </select>
            </div>
          </div>
          <div class="text-center" id="location">New York, United States</div>
          <div class="text-center" id="weather-image">
            <i class="wi wi-cloudy"></i>
          </div>
          <div id="weather-detail">few clouds</div>
          <div class="text-center" id="temp">
            <span class="temp-value">30</span><span class="temp-unit">&#8451;</span>
          </div>
        </div>
        <div id="bottom-app-section" class="row">
          <div id="bottom-pressure-section" class="col-md-4 col-sm-4 col-xs-4 bottom-divisions">
            <div class="text-center bottom-weather-icons">
              <i class="wi wi-barometer"></i>
            </div>
            <div class="bottom-readings text-center">Pressure</div>
            <div class="text-center" id="pressure"><span>900.50</span> hPa</div>
          </div>
          <div id="bottom-wind-section" class="col-md-4 col-sm-4 col-xs-4 bottom-divisions">
            <div class="text-center bottom-weather-icons">
              <i class="wi wi-storm-warning"></i>
            </div>
            <div class="bottom-readings text-center">Wind</div>
            <div class="text-center" id="wind"><span>7</span> m/s &nbsp; &nbsp;</div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-4 bottom-divisions">
            <div class="text-center bottom-weather-icons">
              <i class="wi wi-humidity"></i>
            </div>
            <div class="bottom-readings text-center">Humidity</div>
            <div class="text-center" id="humidity"><span>46</span> %</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
          <footer>Created by Ariana Spretz - Copyright 2024</footer>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
  <script src="/script.js"></script>
</body>
</html>
