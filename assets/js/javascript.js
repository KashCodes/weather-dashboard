$(document).ready(function () {

  // GOLOBAL VARIABLES //
  const apiKey = '9f9176e2a3294a9e5a94e22016800ff4';


  // Function to connect to today's current weather
  function currentWeather(today){

    let currentApiUrl = 'api.openweathermap.org/data/2.5/weather?q=' + 'phoenix' + '&appid=' + apiKey;
    console.log(currentApiUrl);
    console.log('Connected to Current Weather API');

  };


  // Function to connect to 5-day forecast's API
  function fiveDayForecast(forcast){

    let forecastApiUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + 'phoenix' + '&appid=' + apiKey;
    console.log(forecastApiUrl)
    console.log('Connected to 5-Day Forecast API')
  }


  //Function Hardcoded Calls
  fiveDayForecast();
  currentWeather();

































});