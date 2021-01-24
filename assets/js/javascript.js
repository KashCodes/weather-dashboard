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
