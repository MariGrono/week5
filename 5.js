//function showTemperature(response) {
//console.log(response.data.main.temp);
//}
//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

//function showTemperature(response) {
//let temperature = Math.round(response.data.main.temp);
//console.log(response.data.main.temp);
//let temperatureElement = document.querySelector('h1');
//temperatureElement.innerHTML = `It is ${temperature} degrees in Sydney`;
//}
//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = 'c95d60a1e3adbeb286133f1ebebc2579';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector('h1');
    temperatureElement.innerHTML = `The outside temperature is ${temperature} degrees`;
  }
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(retrievePosition);
