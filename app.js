async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8f81ccbdc118bae215e000e42d2d419b'; // Get from openweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').classList.remove('d-none');
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('desc').innerText = data.weather[0].description;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('wind').innerText = data.wind.speed;
        } else {
            alert("City not found");
        }
    } catch (error) {
        console.error("Error fetching data", error);
    }
}