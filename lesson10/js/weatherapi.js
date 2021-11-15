const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=16c8459fe7ad78ab492843e5df730694";

fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=> {
    console.log(jsObject);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc  = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
});

WebFont.load({
    google: {
        families: [
            'Josefin Sans'
        ]
    }
});