let h2 = document.querySelector('h2');
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[now.getDay()];

h2.innerHTML = `${day}  ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector('#city').innerHTML = response.data.name;
  document.querySelector('#temperature').innerHTML = Math.round(response.data.main.temp);
}

//document.querySelector('#humidity').innerHTML = response.data.main.humidity;
//document.querySelector('#wind').innerHTML = Math.round(response.data.wind.speed);
/*document.querySelector('#description').innerHTML = response.data.weather[0].main;
 */
function searchCity(city) {
  let apiKey = '5f472b7acba333cd8a035ea85a0d4d4c';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector('#city-form').value;
  search(city);
}

let form = document.querySelector('#city-form');
form.addEventListener('submit', searchCity('Paris'));

function searchLocation(position) {
  let apiKey = '5f472b7acba333cd8a035ea85a0d4d4c';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentLocation(searchLocation);
}

let currentLocationButton = document.querySelector('#current-location-btn');
//currentLocationButtton.addEventListener('click', getCurrentLocation);
