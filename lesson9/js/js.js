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


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < 4; i++){
        let card = document.createElement('section');
        let townName = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
   

        // h2.textContent = towns[i].name + ' ' + prophets[i].lastname;
        // birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        // birthPlaces.textContent = 'Place of Birth: ' + prophets[i].birthplace; 
        prophetImg.src = prophets[i].imageurl;
        prophetImg.alt = 'prophetImg';

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlaces);
        card.appendChild(prophetImg);
        
        document.querySelector('div.townCards').appendChild(card);
    }
});

WebFont.load({
    google: {
        families: [

            'Poiret One',
            'Lato'
        ]
    }
});