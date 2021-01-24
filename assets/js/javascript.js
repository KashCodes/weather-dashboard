//Global Variable declarations
var cityList = [];
var cityname;


// Local storage functions
initCityList();
initWeather();

// Function that displays the city entered by the user
function renderCities(){
    $("#cityList").empty();
    $("#cityInput").val("");

    for (i=0; i<cityList.length; i++){
      var a = $("<a>");
      a.addClass("list-group-item list-group-item-action list-group-item-primary city");
      a.attr("data-name", cityList[i]);
      a.text(cityList[i]);
      $("#cityList").prepend(a);
    }
}

//Function in charge of pulling the city list array from local storage
function initCityList() {
  var storedCities = JSON.parse(localStorage.getItem("cities"));

  if (storedCities !== null) {
    cityList = storedCities;
  }

  renderCities();
  }

   // Function that will pull the current city into local storage so the current weather can be displayed on reload

function initWeather()  {
  var storedWeather = JSON.parse(localStorage.getItem("currentCity"));

  if (storedWeather !== null) {
    cityname = storedWeather;

    displayWeather();
    displayFiveDayForecast();
  }
}

// Function that saves the city array to LS(Local Storage)
function storeCityArray() {

  localStorage.setItem("cities", JSON.stringify(cityList));

}

//Stores the currently displayed city to LS
function storeCurrentCity() {

  localStorage.setItem("currentCity", JSON.stringify(cityname));
}

//The function that provided the click button life and purpose
$("#citySearchBtn").on("click", function(event){
  event.preventDefault();

  cityname = $("#cityInput").val().trim();
  if(cityname === ""){
    alert("Please enter a city name I am not a mind reader")

  }else if (cityList.length >= 5){
    cityList.shift();
    cityList.push(cityname);

  }else{
  cityList.push(cityname);
  }
  storeCurrentCity();
  storeCityArray();
  renderCities();
  displayWeather();
  displayFiveDayForecast();

});

// Event handler if the user chooses to hit enter instead of clicking
$("#cityInput").keypress(function(e){
  if(e.which == 13){
    $("#citySearchBtn").click();
  }
})

async function displayWeather() {

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=9f9176e2a3294a9e5a94e22016800ff4";
  
  var response = await $.ajax({
      url: queryURL,
      method: "GET"
    })
    console.log(response);
  
    var currentWeatherDiv = $("<div class='card-body' id='currentWeather'>");
    var getCurrentCity = response.name;
    var date = new Date();
    var val=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
    var getCurrentWeatherIcon = response.weather[0].icon;
    var displayCurrentWeatherIcon = $("<img src = http://openweathermap.org/img/wn/" + getCurrentWeatherIcon + ".png />");
    var currentCityEl = $("<h3 class = 'card-body'>").text(getCurrentCity+" ("+val+")");
    currentCityEl.append(displayCurrentWeatherIcon);
    currentWeatherDiv.append(currentCityEl);
    var getTemp = response.main.temp.toFixed(1);
    var tempEl = $("<p class='card-text'>").text("Temperature: "+getTemp+"° F");
    currentWeatherDiv.append(tempEl);
    var getHumidity = response.main.humidity;
    var humidityEl = $("<p class'card-text'>").text("Humidity: "+getHumidity+"%");
    currentWeatherDiv.append(humidityEl);
    var getWindSpeed = response.wind.speed.toFixed(1);
    var windSpeedEl = $("<p class='card-text'>").text("Wind Speed: "+getWindSpeed+" mph");
    currentWeatherDiv.append(windSpeedEl);
    var getLong = response.coord.lon;
    var getLat = response.coord.lat;
  
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat="+getLat+"&lon="+getLong+"&appid=9f9176e2a3294a9e5a94e22016800ff4"
    var uvResponse = await $.ajax({
        url: uvURL,
        method: "GET"
    })
  
    //Acquiring Uv index info and setting a color value based on the value
    var getUVIndex = uvResponse.value;
    var uvNumber = $("<span>");
    if (getUVIndex > 0 && getUVIndex <= 2.99){
        uvNumber.addClass("low");
    }else if(getUVIndex >= 3 && getUVIndex <= 5.99){
        uvNumber.addClass("moderate");
    }else if(getUVIndex >= 6 && getUVIndex <= 7.99){
        uvNumber.addClass("high");
    }else if(getUVIndex >= 8 && getUVIndex <= 10.99){
        uvNumber.addClass("vhigh");
    }else{
        uvNumber.addClass("extreme");
    } 
    uvNumber.text(getUVIndex);
    var uvIndexEl = $("<p class='card-text'>").text("UV Index: ");
    uvNumber.appendTo(uvIndexEl);
    currentWeatherDiv.append(uvIndexEl);
    $("#weatherContainer").html(currentWeatherDiv);
  }
