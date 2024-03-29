const searchButton = document.getElementById('searchButton');
const searchHistory = document.getElementById('searchHistory');
const currentWeather = document.getElementById('currentWeather');
const weatherForecast = document.getElementById('weatherForeast');

console.log(searchButton);
function getAPI() {
    const weatherAPI = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid=4429f2f9ac731a6d8a33fa9befeff361';
    
    fetch (weatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}
searchButton.addEventListener('click', getAPI);