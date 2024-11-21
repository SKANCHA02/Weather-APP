document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '075a3d3cfe28d186e2ab9fe8180dd753';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const weatherOutput = document.getElementById('weather-output');
        if (data.cod === '404') {
        weatherOutput.innerHTML = `<p>City not found!</p>`;
        } else {

        const { main, weather, wind } = data;
        weatherOutput.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${weather[0].description}</p>
            <p><strong>Temperature:</strong> ${main.temp}°C</p>
            <p><strong>Humidity:</strong> ${main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
        `;
        }
        })
        .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-output').innerHTML = '<p>Error fetching data. Try again later.</p>';
    });
    });