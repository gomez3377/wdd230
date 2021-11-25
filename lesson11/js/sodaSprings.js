

// ----------------------------------------Current Weather API----------------------------------------





const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=16c8459fe7ad78ab492843e5df730694";

fetch(weatherapiURL)
.then((response)=> response.json())
.then((jsObject)=> {


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





const forcastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=16c8459fe7ad78ab492843e5df730694"
fetch(forcastapiURL)
.then((response)=> response.json())
.then((jsObject)=> {
    let fiveDayArray = []; 
    const fiveDayTempArray=[];
    const fiveDayWeatherIcons=[];
    for (i = 0; i < 40; i++){
        if (jsObject.list[i].dt_txt.includes('18:00:00')) {
          fiveDayTempArray.push(kelvinToFahrenheit(jsObject.list[i].main.temp) + "\u00B0F");
          fiveDayWeatherIcons.push('https://openweathermap.org/img/w/'+ jsObject.list[i].weather[0].icon + ".png");
        }
    }
    for (i = 1; i <= 5; i++) {
      fiveDayArray.push(abbreviatedDayNames[(currentDate.getDay()+ i) % 7]);
      
    }
    
    document.querySelector("#forcastDay1").textContent = fiveDayArray[0]; 
    document.querySelector("#forecastTemp1").textContent = fiveDayTempArray[0]; 
    document.querySelector("#forcastIcon1").setAttribute ('src' ,fiveDayWeatherIcons[0]); 
    
    
    
    document.querySelector("#forcastDay2").textContent = fiveDayArray[1]; 
    document.querySelector("#forecastTemp2").textContent = fiveDayTempArray[1]; 
    document.querySelector("#forcastIcon2").setAttribute ('src' , fiveDayWeatherIcons[1]); 
    
    
    
    document.querySelector("#forcastDay3").textContent = fiveDayArray[2]; 
    document.querySelector("#forecastTemp3").textContent = fiveDayTempArray[2]; 
    document.querySelector("#forcastIcon3").setAttribute ('src' ,fiveDayWeatherIcons[2]); 
    
    
    
    document.querySelector("#forcastDay4").textContent = fiveDayArray[3]; 
    document.querySelector("#forecastTemp4").textContent = fiveDayTempArray[3]; 
    document.querySelector("#forcastIcon4").setAttribute ('src' , fiveDayWeatherIcons[3]); 
    
    
    
    document.querySelector("#forcastDay5").textContent = fiveDayArray[4]; 
    document.querySelector("#forecastTemp5").textContent = fiveDayTempArray[4]; 
    document.querySelector("#forcastIcon5").setAttribute ('src' , fiveDayWeatherIcons[4]); 
    
});
