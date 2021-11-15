// This section script places a automatic current date in the footer

// This JS was based on the codepen by Alesha Anderson McCown
// See for reference https://codepen.io/aleshana/pen/OJbJovG

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  
  ];
  
  const currentDate = new Date();
  const currentWeekday = dayNames[currentDate.getDay()];
  const currentDay = currentDate.getDate();
  const currentMonth = monthNames [currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  
  const currentFullDate = currentWeekday + ", " + currentDay + " " + currentMonth + " " + currentYear; 
  
  
  document.getElementById("currentDate").innerHTML = currentFullDate;

// This section allows the hamburger menu to toggle on and off

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

    
if (currentWeekday === "Friday") {
    document.getElementById("banner").style.display = "block";
} 
// Webfront Load 

WebFont.load ({
    google: {
        families: [
            'Poiret One',
            'Lato'
        ]
    }
});

// ----------------------------------Kelvin To Fahrenheit Formula -----------------------------

function kelvinToFahrenheit (K) {
    let f = (K - 273.15) *
    (9/5) +
    32;
    f = Math.round(f);
    return f;
}


//---------------------------Wind Chill Formula-------------------------------

function windChillFunc(t, s) {
    let f =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16);
    f = Math.round(f);
    return f;
  }




  
// ----------------------------------------Current Weather API----------------------------------------


const weatherapiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=16c8459fe7ad78ab492843e5df730694";

fetch(weatherapiURL)
.then((response)=> response.json())
.then((jsObject)=> {
console.log(jsObject);

const currentWeather = jsObject.weather[0].main;
const currentTemperature = kelvinToFahrenheit(jsObject.main.temp);
const currentHighTemperature = kelvinToFahrenheit(jsObject.main.temp_max);
const currentHumidity = jsObject.main.humidity;
const currentWindSpeed = jsObject.wind.speed;


document.getElementById("currentWeather").textContent = currentWeather;
document.getElementById("currentTemperature").textContent = currentTemperature;    
document.getElementById("currentHighTemperature").textContent = currentHighTemperature;    
document.getElementById("currentHumidity").textContent = currentHumidity + "%";    
document.getElementById("windSpeed").textContent = currentWindSpeed;    


});


// ------------------------------------------5 Day Forecast API ----------------------------------------
const forcastapiURL = 
fetch(forcastapiURL)
.then((response)=> response.json())
.then((jsObject)=> {
    console.log(jsObject);
});




 parseFloat(
    document.querySelector("#currentTemperature").textContent
  );
  let windChill =""
  
  parseFloat(document.querySelector("#windSpeed").textContent);
  if (currentTemperature <= 50 && windSpeed > 3.0) {
    windChill = windChillFunc(currentTemperature, windSpeed) + "&#176;F";
  } else {
    windChill = "N/A";
  }
  
  
  document.getElementById("windChill").innerHTML = windChill;
  