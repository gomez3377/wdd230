function windChillFunc(t, s) {
  let f =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);
  f = Math.round(f);
  return f;
}

const currentTemperature = parseFloat(
  document.querySelector("#currentTemperature").innerHTML
);
let windChill =""
const windSpeed = parseFloat(document.querySelector("#windSpeed").innerHTML);
if (currentTemperature <= 50 && windSpeed > 3.0) {
  windChill = windChillFunc(currentTemperature, windSpeed);
} else {
  windChill = "N/A";
}


document.getElementById("windChill").innerHTML = windChill;

