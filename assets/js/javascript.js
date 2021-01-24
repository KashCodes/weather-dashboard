// $(document).ready(function () {});

// GOLOBAL VARIABLES //
//Store API Key
const apiKey = '&appid=9f9176e2a3294a9e5a94e22016800ff4';
//store value from search input
let city = $('#search-value').val();
let date = new Date();



function getApi () {
  // show 5 day forecast header
  $('#forecastH5').addClass('show');

  //get the value of the city input from user
  city = $('#search-value').val();

  //clear input box
  $('#search-value').val("");

  // full URL to call API
  const queryApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + apiKey;

  console.log(queryApi);
  console.log(city);

  //fetch API
  fetch(queryApi)
  .then(function (response){

    if (response.ok) {
      console.log(response);
      response.json().then(function(response){
        console.log(response);
        console.log("We Connected to API");
        console.log("Coordinates");
        console.log(response.coord);
        console.log("Coor Lon");
        console.log(response.coord.lon);
        console.log("Coor Lat");
        console.log(response.coord.lat);
        console.log(response.name);
        console.log("Humidity");
        console.log(response.main.humidity);
        console.log("Weather Icon");
        console.log(response.weather[0].description);
        console.log(response.weather[0].icon);
        console.log("Temp");
        console.log(response.main.temp);
        console.log("Wind Speed");
        console.log(response.wind.speed);
        
        //List item in search history
        let listItem = $("<li>").addClass("list-group-item").text(response.name);
        $("#city-history").append(listItem);

        //convert temp to fahrenheight
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
        tempF = Math.floor(tempF);

        $('#today').empty();

        //get and set the content
        const card = $("<div>").addClass("card");
        const cardBody = $("<div>").addClass("card-body");
        const city = $("<h3>").addClass("card-title").text(response.name);
        const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
        const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
        const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
        const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

        //append to page 
        city.append(cityDate, image)
        cardBody.append(city, temperature, humidity, wind);
        card.append(cardBody);
        $("#today").append(card)

      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function(error) {
    alert("Unable to connect to Open Weather");
  });
  console.log(response);
};

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





//event listener for onclick run getApi
$('#searchBtn').on("click", getApi)

//search functionkeypress 'enter' capture
$('#search-value').keypress(function(event){

  //keycode 13 = enter/return key
  if (event.keyCode === 13) {
    event.preventDefault();
    $('#searchBtn').click();
  }
});

 

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
  


































