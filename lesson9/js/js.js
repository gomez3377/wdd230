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
    document.querySelector('nav#homeNav').classList.toggle("hide");
    document.querySelector('span.top').classList.toggle("active");
    document.querySelector('span.middle').classList.toggle("active");
    document.querySelector('span.bottom').classList.toggle("active");
}

// This section adds Town Data from a JSON file to the Home Page

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i <= 6; i++){
        if (towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven" || towns[i].name === "Preston") {

            let card = document.createElement('section');
            card.className = 'townSection';
            let townInfo = document.createElement('div');
            townInfo.className = "townInfoContainer";

            let townName = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let townImgContainer = document.createElement('picture');
            let townImgSource1 = document.createElement('source');
            let townImgSource2 = document.createElement('source');
            let townImgSource3 = document.createElement('source');
            let townImg = document.createElement('img');
            
            townName.textContent = towns[i].name;
            motto.textContent = towns[i].motto
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            
            townImgSource1.media = '(max-width: 200px)';
            townImgSource2.media = '(max-width: 500px)';
            townImgSource3.media = '(max-width: 800px)';
            townImg.alt = 'townImg';
            
            card.appendChild(townInfo)
            townInfo.appendChild(townName);
            townInfo.appendChild(motto);
            townInfo.appendChild(yearFounded);
            townInfo.appendChild(population);
            townInfo.appendChild(rainfall);

            card.appendChild(townImgContainer);
            townImgContainer.appendChild(townImg);
            townImgContainer.appendChild(townImgSource1);
            townImgContainer.appendChild(townImgSource2);
            townImgContainer.appendChild(townImgSource3);

            if (towns[i].name === "Soda Springs") {
                townImgSource1.srcset="img/sodaSpringsImg200.jpg";
                townImgSource2.srcset="img/sodaSpringsImg500.jpg";
                townImgSource3.srcset="img/sodaSpringsImg800.jpg";
                townImg.src="img/sodaSpringsImg800.jpg";
            }
            if (towns[i].name === "Fish Haven") {
                townImgSource1.srcset="img/fishHavenImg200.jpg";
                townImgSource2.srcset="img/fishHavenImg500.jpg";
                townImgSource3.srcset="img/fishHavenImg800.jpg";
                townImg.src="img/fishHavenImg800.jpg";
            }
            
            if (towns[i].name === "Preston") {
                townImgSource1.srcset="img/prestonImg200.jpg";
                townImgSource2.srcset="img/prestonImg500.jpg";
                townImgSource3.srcset="img/prestonImg800.jpg";
                townImg.src="img/prestonImg800.jpg";
            }
            document.querySelector('div.townCards').appendChild(card);
        }
    }


});

//This section gets the google fonts I need from the webfont API
WebFont.load({
    google: {
        families: [

            'Poiret One',
            'Lato'
        ]
    }
});