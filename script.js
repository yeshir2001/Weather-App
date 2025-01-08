const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfoDiv = document.getElementById('weather-info');
const loadingDiv = document.getElementById('loading');
const errorMessageDiv = document.getElementById('error-message');
const apiKey = 6379422cf09e27c75c82c0f38dfa1826; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function fetchWeather(location) {
  loadingDiv.style.display = 'block';
  weatherInfoDiv.innerHTML = '';
  errorMessageDiv.innerHTML = '';

  try {
    const response = await fetch(`${apiUrl}${location}&appid=${apiKey}`);
    if (!response.ok) {
      if (response.status === 404) {
          throw new Error('City not found.');
      } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
   }
    const data = await response.json();
     loadingDiv.style.display = 'none';

        displayWeather(data);
  } catch (error) {
       loadingDiv.style.display = 'none';
        errorMessageDiv.innerHTML = error.message;
        console.error('Error fetching weather data:', error);

  }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const { temp, humidity } = main;
    const { description, icon } = weather[0];

  weatherInfoDiv.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Description: ${description}</p>
    <p>Humidity: ${humidity}%</p>
    <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
  `;
}


searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    } else {
        errorMessageDiv.innerHTML = 'Please enter a city name.'
    }
});
locationInput.addEventListener('keyup', (event)=>{
    if (event.key === "Enter"){
        const location = locationInput.value;
         if (location) {
        fetchWeather(location);
    } else {
        errorMessageDiv.innerHTML = 'Please enter a city name.'
    }
    }
})
