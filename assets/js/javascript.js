$(document).ready(function () {

  // GOLOBAL VARIABLES //
  const apiKey = '9f9176e2a3294a9e5a94e22016800ff4';


  // Function to connect to today's current weather
  function currentWeather(today){

    /* Need to set up function to capture city and replace with variable in API   */
    let currentApiUrl = 'api.openweathermap.org/data/2.5/weather?q=' + 'phoenix' + '&appid=' + apiKey;
    console.log(currentApiUrl);
    console.log('Connected to Current Weather API');

  };


  // Function to connect to 5-day forecast's API
  function fiveDayForecast(forcast){

    /* Need to set up function to capture city and replace with variable in API   */
    let forecastApiUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + 'phoenix' + '&appid=' + apiKey;
    console.log(forecastApiUrl)
    console.log('Connected to 5-Day Forecast API')
  };

  //Function to connect to UV Index's API
  function uvIndex(index){
    let uvIndexApiUrl = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + {lat} '&lon=' + {lon} '&appid=' + apiKey;
    console.log(uvIndex);
    console.log('Connected to UV Index API')
  };

  //Add Event Listen for Button click and pull search data

  //Function Hardcoded Calls
  uvIndex();
  fiveDayForecast();
  currentWeather();

































});