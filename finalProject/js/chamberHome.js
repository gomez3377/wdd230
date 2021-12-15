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
    console.log(jsObject)
      let threeDayArray = []; 
      const threeDayTempArray=[];
      const threeDayWeatherIcons=[];
      const threeDayWeather=[];
      for (i = 0; i < 40; i++){
          if (jsObject.list[i].dt_txt.includes('18:00:00')) {
            threeDayTempArray.push(kelvinToFahrenheit(jsObject.list[i].main.temp) + "\u00B0F");
            threeDayWeather.push(jsObject.list[i].weather[0].main);
            threeDayWeatherIcons.push('https://openweathermap.org/img/w/'+ jsObject.list[i].weather[0].icon + ".png");
          }
      }
      for (i = 1; i <= 3; i++) {
        threeDayArray.push(abbreviatedDayNames[(currentDate.getDay()+ i) % 7]);
        
      }

      document.querySelector(".forcastDay1").textContent = threeDayArray[0]; 
      document.querySelector(".forecastTemp1Weather").textContent = threeDayWeather[0]; 
      document.querySelector(".forecastTemp1High").textContent = threeDayTempArray[0]; 
      document.querySelector(".forcastIcon1").setAttribute ('src' ,threeDayWeatherIcons[0]); 
      
      
      
      document.querySelector(".forcastDay2").textContent = threeDayArray[1]; 
      document.querySelector(".forecastTemp2Weather").textContent = threeDayWeather[1]; 
      document.querySelector(".forecastTemp2High").textContent = threeDayTempArray[1]; 
      document.querySelector(".forcastIcon2").setAttribute ('src' , threeDayWeatherIcons[1]); 
      
      
      
      
      document.querySelector(".forcastDay3").textContent = threeDayArray[2]; 
      document.querySelector(".forecastTemp3Weather").textContent = threeDayWeather[2]; 
      document.querySelector(".forecastTemp3High").textContent = threeDayTempArray[2]; 
 
      document.querySelector(".forcastIcon3").setAttribute ('src' ,threeDayWeatherIcons[2]); 
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

    let businessCardsOne = document.createElement('li');
      businessCardsOne.className = 'businessCards';
      businessCardsOne.setAttribute("data-active","");
    let businessNameOne = document.createElement('h3');
    let businessCardContentOne = document.createElement('div');
    businessCardContentOne.className = 'businessCardContent';
    let businessCardTextContainerOne = document.createElement('div');
    businessCardTextContainerOne.className = 'businesscardTextContainer';
    let businessCardImgContainerOne = document.createElement('div');
    businessCardImgContainerOne.className =  'businesscardImgContainer';
    let businessOnwerOne = document.createElement('p');
    let streetAddressOne = document.createElement('p');
    let cityAndStateOne = document.createElement('p');
    let phoneNumberOne = document.createElement('p');
    let websiteOne = document.createElement('p');
    let businessImgOne = document.createElement('img');
    
    let businessCardsTwo = document.createElement('li');
      businessCardsTwo.className = 'businessCards';
    let businessNameTwo = document.createElement('h3');
    let businessCardContentTwo = document.createElement('div');
    businessCardContentTwo.className = 'businessCardContent';
    let businessCardTextContainerTwo = document.createElement('div');
    businessCardTextContainerTwo.className = 'businesscardTextContainer';
    let businessCardImgContainerTwo = document.createElement('div');
    businessCardImgContainerTwo.className =  'businesscardImgContainer';
    let businessOnwerTwo = document.createElement('p');
    let streetAddressTwo = document.createElement('p');
    let cityAndStateTwo = document.createElement('p');
    let phoneNumberTwo = document.createElement('p');
    let websiteTwo = document.createElement('p');
    let businessImgTwo = document.createElement('img');
    
    let businessCardsThree = document.createElement('li');
      businessCardsThree.className = 'businessCards';
    let businessNameThree = document.createElement('h3');
    let businessCardContentThree = document.createElement('div');
    businessCardContentThree.className = 'businessCardContent';
    let businessCardTextContainerThree = document.createElement('div');
    businessCardTextContainerThree.className = 'businesscardTextContainer';
    let businessCardImgContainerThree = document.createElement('div');
    businessCardImgContainerThree.className =  'businesscardImgContainer';
    let businessOnwerThree = document.createElement('p');
    let streetAddressThree = document.createElement('p');
    let cityAndStateThree = document.createElement('p');
    let phoneNumberThree = document.createElement('p');
    let websiteThree = document.createElement('p');
    let businessImgThree = document.createElement('img');

        
            businessNameOne.textContent = business[2].name;
            businessOnwerOne.textContent = "Owner: " + business[2].owner;
            streetAddressOne.textContent = "Address: " + business[2].address;
            cityAndStateOne.textContent = business[2].cityAndState;
            phoneNumberOne.textContent = "Phone: " + business[2].phone;
            websiteOne.textContent = "Website: " + business[2].website;
            businessImgOne.src = business[2].businessPhoto;
            
            businessCardsOne.appendChild(businessNameOne);
            businessCardsOne.appendChild(businessCardContentOne);
            businessCardContentOne.appendChild(businessCardTextContainerOne);
            businessCardContentOne.appendChild(businessCardImgContainerOne);
            businessCardTextContainerOne.appendChild(businessOnwerOne);
            businessCardTextContainerOne.appendChild(streetAddressOne);
            businessCardTextContainerOne.appendChild(cityAndStateOne);
            businessCardTextContainerOne.appendChild(phoneNumberOne);
            businessCardTextContainerOne.appendChild(websiteOne);
            businessCardImgContainerOne.appendChild(businessImgOne);
            
            businessNameTwo.textContent = business[4].name;
            businessOnwerTwo.textContent = "Owner: " + business[4].owner;
            streetAddressTwo.textContent = "Address: " + business[4].address;
            cityAndStateTwo.textContent = business[4].cityAndState;
            phoneNumberTwo.textContent = "Phone: " + business[4].phone;
            websiteTwo.textContent = "Website: " + business[4].website;
            businessImgTwo.src = business[4].businessPhoto;
            
            businessCardsTwo.appendChild(businessNameTwo);
            businessCardsTwo.appendChild(businessCardContentTwo);
            businessCardContentTwo.appendChild(businessCardTextContainerTwo);
            businessCardContentTwo.appendChild(businessCardImgContainerTwo);
            businessCardTextContainerTwo.appendChild(businessOnwerTwo);
            businessCardTextContainerTwo.appendChild(streetAddressTwo);
            businessCardTextContainerTwo.appendChild(cityAndStateTwo);
            businessCardTextContainerTwo.appendChild(phoneNumberTwo);
            businessCardTextContainerTwo.appendChild(websiteTwo);
            businessCardImgContainerTwo.appendChild(businessImgTwo);
            
            businessNameThree.textContent = business[6].name;
            businessOnwerThree.textContent = "Owner: " + business[6].owner;
            streetAddressThree.textContent = "Address: " + business[6].address;
            cityAndStateThree.textContent = business[6].cityAndState;
            phoneNumberThree.textContent = "Phone: " + business[6].phone;
            websiteThree.textContent = "Website: " + business[6].website;
            businessImgThree.src = business[6].businessPhoto;
            
            businessCardsThree.appendChild(businessNameThree);
            businessCardsThree.appendChild(businessCardContentThree);
            businessCardContentThree.appendChild(businessCardTextContainerThree);
            businessCardContentThree.appendChild(businessCardImgContainerThree);
            businessCardTextContainerThree.appendChild(businessOnwerThree);
            businessCardTextContainerThree.appendChild(streetAddressThree);
            businessCardTextContainerThree.appendChild(cityAndStateThree);
            businessCardTextContainerThree.appendChild(phoneNumberThree);
            businessCardTextContainerThree.appendChild(websiteThree);
            businessCardImgContainerThree.appendChild(businessImgThree);
            



            document.querySelector('.business-carousel-slides').appendChild(businessCardsOne);
            document.querySelector('.business-carousel-slides').appendChild(businessCardsTwo);
            document.querySelector('.business-carousel-slides').appendChild(businessCardsThree);
            
        
    
    
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click",() => {
    const offset =button.dataset.carouselButton === "next" ? 1: -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if (newIndex < 0) newIndex = slides.children.length -1
  if (newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
  })
});