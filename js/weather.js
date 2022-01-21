const API_KEY = "0f6ba7565887f373f3dade9e109caa19";

/**
 * @param {GeolocationPosition} position
 */
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityName = data.name;
            const weather = data.weather[0].main;
            const weather_description = data.weather[0].description;

            const /** @type HTMLElement*/ cityContainer = document.querySelector("div#weather span:first-child");
            const /** @type HTMLElement*/ weatherContainer = document.querySelector("div#weather span:last-child");
            cityContainer.innerText = cityName;
            weatherContainer.innerText = `(${weather}, ${weather_description} / ${JSON.stringify(data.main)})`;
        })
}

function onGeoError(){
    alert("Can't find you, No weather for you.");
}

const /** @type HTMLElement */ weatherDiv = document.querySelector("div#weather");
weatherDiv.style.backgroundColor = "rgba(0,0,0,0.1)";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);