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