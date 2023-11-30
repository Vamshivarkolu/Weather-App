const apiKey = '3045dd712ffe6e702e3245525ac7fa38'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      document.getElementById('weatherResult').innerText = 'City not found';
    } else {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;

      const weatherInfo = `Weather: ${weatherDescription}<br>Temperature: ${temperature}°C<br>Humidity: ${humidity}%`;
      document.getElementById('weatherResult').innerHTML = weatherInfo;
    }
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
}
