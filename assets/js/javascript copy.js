// $(document).ready(function () {});

// GOLOBAL VARIABLES //
//Store API Key
const apiKey = '&units=imperial&appid=9f9176e2a3294a9e5a94e22016800ff4';
//store value from search input
let city = $('#search-value').val();
let date = new Date();

function getCityName() {
  var city = $('#search-value').val();
 //passes that variable into this function to use it
  getTodayApi(city);
 }

function getTodayApi (city) {
  // show 5 day forecast header
  $('#forecastH5').addClass('show');

  //get the value of the city input from user
  // city = $('#search-value').val();

  //clear input box
  $('#search-value').val("");

  // full URL to call API
  const queryApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + apiKey;

  console.log(queryApi);
  console.log(city);

  //fetch API
  fetch(queryApi)
  .then(function (response){
    console.log("almost there")
    return response.json()
  })
  .then(function(data){
        console.log(data);
        // console.log("We Connected to API");
        // console.log("Coordinates");
        // console.log(data.coord);
        // console.log("Coor Lon");
        // console.log(data.coord.lon);
        // console.log("Coor Lat");
        // console.log(data.coord.lat);
        // console.log(data.name);
        // console.log("Humidity");
        // console.log(data.main.humidity);
        // console.log("Weather Icon");
        // console.log(data.weather[0].description);
        // console.log(data.weather[0].icon);
        // console.log("Temp");
        // console.log(data.main.temp);
        // console.log("Wind Speed");
        // console.log(data.wind.speed);
        
        // //List item in search history
        // let listItem = $("<li>").addClass("list-group-item").text(data.name);
        // $("#city-history").append(listItem);


        // $('#today').empty();

        // //get and set the content
        // const card = $("<div>").addClass("card");
        // const cardBody = $("<div>").addClass("card-body");
        // const city = $("<h3>").addClass("card-title").text(response.name);
        // const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
        // const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + data.main.temp + " °F");
        // const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + data.main.humidity + "%");
        // const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + data.wind.speed + " MPH");
        // const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

        // //append to page 
        // city.append(cityDate, image)
        // cardBody.append(city, temperature, humidity, wind);
        // card.append(cardBody);
        // $("#today").append(card);


      });
      // .catch(function(error) {
      //   alert("Unable to connect to Open Weather");
      // });
      console.log(response);
};

function getForecastApi () {

  // full URL to call API
  const queryForecastApi = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + apiKey;

  console.log(queryForecastApi);
  console.log(city);

  //fetch API
  fetch(queryForecastApi)
  .then(function (response){
      console.log(response);
      response.json().then(function(response){
        console.log(response)
















      });
});

};































//event listener for onclick run getTodayApi
// $('#searchBtn').on("click", getTodayApi)

//search functionkeypress 'enter' capture
// $('#search-value').keypress(function(event){

//   //keycode 13 = enter/return key
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     $('#searchBtn').click();
//   }
// });





// function historyList () {
//   let listItem = $("<li>").addClass("list-group-item").text(city);
//   $("#city-history").append(listItem);
// }

// function getCurrentConditions (response) {

//   //convert temp to fahrenheight
//   let tempF = (response.main.temp - 273.15) * 1.80 + 32;
//   tempF = Math.floor(tempF);

//   $('#today').empty();

//   //get and set the content
//   const card = $("<div>").addClass("card");
//   const cardBody = $("<div>").addClass("card-body");
//   const city = $("<h3>").addClass("card-title").text(response.name);
//   const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
//   const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
//   const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
//   const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
//   const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

//   //append to page 
//   city.append(cityDate, image)
//   cardBody.append(city, temperature, humidity, wind);
//   card.append(cardBody);
//   $("#today").append(card)
// }







 

  // // Function to connect to today's current weather
  // function currentWeather(today){

  //   /* Need to set up function to capture city and replace with variable in API   */
  //   var currentApiUrl = 

  //   // fetch currentWeather
  //   fetch(currentApiUrl).then(function(response){
  //     response.json().then(function(currentData){
  //       console.log(currentData);
  //       console.log('JSON currentData');
  //     });
  //   });
  //   console.log('Connected to Current Weather API');
  // };


  // // Function to connect to 5-day forecast's API
  // function fiveDayForecast(forcast){

  //   /* Need to set up function to capture city and replace with variable in API   */
  //   let forecastApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + 'phoenix' + '&appid=' + apiKey;

  //   // fetch forecastApiUrl 
  //   fetch(forecastApiUrl).then(function(response){
  //     response.json().then(function(forecastData){
  //       console.log(forecastData);
  //       console.log('JSON forecastData')
  //     })
  //     // console.log(response)
  //   });
  //   // console.log(forecastApiUrl)
  //   console.log('Connected to 5-Day Forecast API')
  // };

  // //Function to connect to UV Index's API
  // function uvIndex(index){
  //   let uvIndexApiUrl = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + '37.75' + '&lon=' + '122.37'+ '&appid=' + apiKey;
    
  //   //fetch uvIndex
  //   fetch(uvIndexApiUrl).then(function(response){
  //     response.json().then(function(uvData){
  //       console.log(uvData);
  //       console.log('JSON uvData')
  //     });
  //     // console.log(response);
  //   });
  //   // console.log(uvIndexApiUrl);
  //   console.log('Connected to UV Index API')
  // };

  // //Function Hardcoded Calls
  // currentWeather();
  // fiveDayForecast();
  // uvIndex();
  


































