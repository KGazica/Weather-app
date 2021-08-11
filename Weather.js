// apiKey = 'e5c74f7b2740620338fb4717601f1da2';
const api ={
    key: '2c4e2fe2e8fb27d9205e1e439ea4006e',
    base:'https://api.openweathermap.org/data/2.5/',
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    let city = document.querySelector('.location .city')
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML =`${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.current .hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)} °c / ${Math.round(weather.main.temp_max)} °c`;

}