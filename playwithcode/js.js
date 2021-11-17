

// // Factory Function
// // Use Camel Notation: oneTwoThreeFour
function createCircle (radius) {
   return {
        radius,
        draw () {
            console.log('draw');
        }
    };

}
// const circle = createCircle(1);

// // Constructor Function
// // Use Pascal Notation: OneTwoThreeFour
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1,2,3]);

const another = new Circle(1);

function windChillFunc(t, s) {
    let f =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16);
    f = Math.round(f);
    return f;
  }



let currentTemp =parseFloat(
    document.querySelector("#currentTemp").textContent
  );
  let windChill =""
  
  let windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
  if (currentTemp <= 50 && windSpeed > 3.0) {
    windChill = windChillFunc(currentTemp, windSpeed) + "\u00B0F";
  } else {
    windChill = "N/A";
  }
  
  
  document.getElementById("windChill").textContent = windChill;

  function days() {
    var day = new Date();
    var week = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
  
    for (i = 0; i < 5; i++) {
      console.log(week[(day.getDay() + i) % 7]);
    }
  }
  
