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


                // Lazy Load Images
// Lazy Load Function From MDN Progressive Loading Page

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


// The Intersection Observer 
// Function from MDN Progressive Loading Page
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Visits on this page 
var n = localStorage.getItem('onLoadCounter');
if (n === null) {
    n = 0;
}
n++

localStorage.setItem("on_load_counter", n);
nums = n.toString().split('').map(Number);
document.getElementById('countervisitor').innerHTML = '';
for (var i of nums) {
    document.getElementById('countervisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}
res[date]
