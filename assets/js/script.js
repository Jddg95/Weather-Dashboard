const searchButton = document.getElementById('searchButton');
const searchHistory = document.getElementById('searchHistory');
const currentWeather = document.getElementById('currentWeather');
const weatherForecast = document.getElementById('weatherForeast');

console.log(searchButton);
function getAPI() {
    const weatherAPI = 'http://api.openweathermap.org/geo/1.0/reverse?lat=30.26&lon=-97.74&limit=5&appid=4429f2f9ac731a6d8a33fa9befeff361';
    
    fetch (weatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //storing returned data into local storage 
        localStorage.setItem('weatherData', JSON.stringify(data));
        console.log('Weather data saved to local storage');
    })
}
searchButton.addEventListener('click', getAPI);