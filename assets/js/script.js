const searchHistory = document.getElementById('searchHistory');
const currentWeather = document.getElementById('currentWeather');
const weatherForecast = document.getElementById('weatherForecast');

// created a function to retrieve coordinates from api 
function getCoordinates(event) {
    // gtabbing user input 
    const userInput = document.getElementById('location-input').value;
    // updateSearchHistory(userInput); - also valid way to useing/calling it. 
    // used back tics to be able to use "${}"" - (template literal) which allows me to sub it with the value of the variable into the string
    const coordinatesAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=4429f2f9ac731a6d8a33fa9befeff361`

    // calling the api function 
    fetch(coordinatesAPI)
    // getting response (if any)
    .then(function (response) {
        if(!response.ok) {
            throw new Error('Network response was not okay');
        }
        // return data as jsonified object
        return response.json();
    })
    // access the retured jsonified data 
    .then(function (data) {
       const {lat, lon} = data[0] // extract properties we wanted from the data - (lat and lon) -- (destructuring)
       console.log(lat, lon) 
       getAPI(lat, lon); // calling a diffrenent end point  (next function)
    })
    .catch(function (error) {
        console.error('Error fetching coordinates:', error);
    })
    
}
// created a function to get the weather based on lat and lon provided 
function getAPI(lat, lon) {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4429f2f9ac731a6d8a33fa9befeff361`
    fetch (weatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //storing returned data into local storage 
        localStorage.setItem('weatherData', JSON.stringify(data));
        console.log('Weather data saved to local storage');
        const {name} = data.city // extract properties we wanted from the data - city name-- (destructuring)

        updateSearchHistory(name)
    })
}

function updateSearchHistory(cityName) {
    const historyBtn = document.createElement('button')
    historyBtn.textContent = cityName
    searchHistory.appendChild(historyBtn)
}


searchButton.addEventListener('click', getCoordinates);