const currentTemperature = parseFloat(document.querySelector("#currentTemperature").textContent);

const windSpeed = parseFloat(document.querySelector('#windSpeed').textContent);
if (currentTemperature <= 50 && windSpeed > 3.0) {
    
    const windChill = windChillFunc(currentTemperature,windSpeed);
}
else {
    windChill = "N/A"
}

function windChillFunc(t,s) {
    windChill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
    windChill = Math.round(windChill);
    return windChill;
}

document.querySelector("#windChill").textContent = windChill