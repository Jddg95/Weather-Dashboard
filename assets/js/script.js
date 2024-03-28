const searchButton = document.getElementById('searchButton');
const searchHistory = document.getElementById('searchHistory');
const currentWeather = document.getElementById('currentWeather');
const weatherForecast = document.getElementById('weatherForeast');


function getAPI() {
    const weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={4429f2f9ac731a6d8a33fa9befeff361}';

    fetch (weatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}
searchButton.addEventListener('click', getAPI);