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
  
  
  
  
  
  const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5606000&appid=16c8459fe7ad78ab492843e5df730694";
  
  fetch(weatherapiURL)
  .then((response)=> response.json())
  .then((jsObject)=> {
  
  
  const currentWeather = jsObject.weather[0].main;
  const currentTemperature = kelvinToFahrenheit(jsObject.main.temp);
  const currentHighTemperature = kelvinToFahrenheit(jsObject.main.temp_max);
  const currentHumidity = jsObject.main.humidity;
  const currentWindSpeed = jsObject.wind.speed;
  
  
  document.querySelector(".currentWeather").textContent = currentWeather;
  document.querySelector(".currentTemperature").textContent = currentTemperature;    
  document.querySelector(".currentHighTemperature").textContent = currentHighTemperature;    
  document.querySelector(".currentHumidity").textContent = currentHumidity + "%";    
  document.querySelector(".windSpeed").textContent = currentWindSpeed;    
  
  
  });
  
  
  
  
  
  // ------------------------------------------5 Day Forecast API ----------------------------------------
  
  
  
  
  
  const forcastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5606000&appid=16c8459fe7ad78ab492843e5df730694"
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
      for (i = 1; i <= 2; i++) {
        fiveDayArray.push(abbreviatedDayNames[(currentDate.getDay()+ i) % 7]);
        
      }
      
      document.querySelector(".forcastDay1").textContent = fiveDayArray[0]; 
      document.querySelector(".forecastTemp1High").textContent = fiveDayTempArray[0]; 
      document.querySelector(".forcastIcon1").setAttribute ('src' ,fiveDayWeatherIcons[0]); 
      
      
      
      document.querySelector(".forcastDay2").textContent = fiveDayArray[1]; 
      document.querySelector(".forecastTemp2High").textContent = fiveDayTempArray[1]; 
      document.querySelector(".forcastIcon2").setAttribute ('src' , fiveDayWeatherIcons[1]); 
      
      
      
      document.querySelector(".forcastDay3").textContent = fiveDayArray[2]; 
      document.querySelector(".forecastTemp3High").textContent = fiveDayTempArray[2]; 
      document.querySelector(".forcastIcon3").setAttribute ('src' ,fiveDayWeatherIcons[2]); 
      
  });
  
  //-----------------------------------Getting the Wind Chill Value--------------------------------------
let currentTemperature = parseFloat(document.querySelector(".currentTemperature").textContent);
let windSpeed = parseFloat(document.querySelector(".windSpeed").textContent);


let windChill =""
if (currentTemperature <= 50 && windSpeed > 3.0) {
  windChill = windChillFunc(currentTemperature, windSpeed) + "\u00B0F";
} 
else {
  windChill = "N/A";
}


document.querySelector(".windChill").innerHTML = windChill;



const requestURL = 'json/localBusiness.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const business = jsonObject;

    let businessCardsOne = document.createElement('section')
    let businessNameOne = document.createElement('h3');
    let businessOnwerOne = document.createElement('p');
    let streetAddressOne = document.createElement('p');
    let cityAndStateOne = document.createElement('p');
    let phoneNumberOne = document.createElement('p');
    let websiteOne = document.createElement('p');
    let businessImgOne = document.createElement('img');
    
    let businessCardsTwo = document.createElement('section')
    let businessNameTwo = document.createElement('h3');
    let businessOnwerTwo = document.createElement('p');
    let streetAddressTwo = document.createElement('p');
    let cityAndStateTwo = document.createElement('p');
    let phoneNumberTwo = document.createElement('p');
    let websiteTwo = document.createElement('p');
    let businessImgTwo = document.createElement('img');
   
    let businessCardsThree = document.createElement('section')
    let businessNameThree = document.createElement('h3');
    let businessOnwerThree = document.createElement('p');
    let streetAddressThree = document.createElement('p');
    let cityAndStateThree = document.createElement('p');
    let phoneNumberThree = document.createElement('p');
    let websiteThree = document.createElement('p');
    let businessImgThree = document.createElement('img');

        
            businessNameOne.textContent = ":" + business[2].name;
            businessOnwerOne.textContent = "Owner: " + business[2].owner;
            streetAddressOne.textContent = "Address: " + business[2].address;
            cityAndStateOne.textContent = business[2].cityAndState;
            phoneNumberOne.textContent = "Phone: " + business[2].phone;
            websiteOne.textContent = "Website: " + business[2].website;
            businessImgOne.src = business[2].businessPhoto;
            
            businessCardsOne.appendChild(businessNameOne);
            businessCardsOne.appendChild(businessOnwerOne);
            businessCardsOne.appendChild(streetAddressOne);
            businessCardsOne.appendChild(cityAndStateOne);
            businessCardsOne.appendChild(phoneNumberOne);
            businessCardsOne.appendChild(websiteOne);
            businessCardsOne.appendChild(businessImgOne);
            
            businessNameTwo.textContent = ":" + business[4].name;
            businessOnwerTwo.textContent = "Owner: " + business[4].owner;
            streetAddressTwo.textContent = "Address: " + business[4].address;
            cityAndStateTwo.textContent = business[4].cityAndState;
            phoneNumberTwo.textContent = "Phone: " + business[4].phone;
            websiteTwo.textContent = "Website: " + business[4].website;
            businessImgTwo.src = business[4].businessPhoto;
            
            businessCardsTwo.appendChild(businessNameTwo);
            businessCardsTwo.appendChild(businessOnwerTwo);
            businessCardsTwo.appendChild(streetAddressTwo);
            businessCardsTwo.appendChild(cityAndStateTwo);
            businessCardsTwo.appendChild(phoneNumberTwo);
            businessCardsTwo.appendChild(websiteTwo);
            businessCardsTwo.appendChild(businessImgTwo);
            
            businessNameThree.textContent = ":" + business[6].name;
            businessOnwerThree.textContent = "Owner: " + business[6].owner;
            streetAddressThree.textContent = "Address: " + business[6].address;
            cityAndStateThree.textContent = business[6].cityAndState;
            phoneNumberThree.textContent = "Phone: " + business[6].phone;
            websiteThree.textContent = "Website: " + business[6].website;
            businessImgThree.src = business[6].businessPhoto;
            
            businessCardsThree.appendChild(businessNameThree);
            businessCardsThree.appendChild(businessOnwerThree);
            businessCardsThree.appendChild(streetAddressThree);
            businessCardsThree.appendChild(cityAndStateThree);
            businessCardsThree.appendChild(phoneNumberThree);
            businessCardsThree.appendChild(websiteThree);
            businessCardsThree.appendChild(businessImgThree);
            
            document.querySelector('div.localBusinesses').appendChild(businessCardsOne);
            document.querySelector('div.localBusinesses').appendChild(businessCardsTwo);
            document.querySelector('div.localBusinesses').appendChild(businessCardsThree);
            
        
    
    
});