const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);

            if (url.includes('weather')) {
                displayCurrentWeather(data);
            }
            else if (url.includes('forecast')) {
                displayForecast(data);
            }

        } else {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${20.42}&lon=${-86.92}&appid=${`4d28a8b5d356758d518dc67e8c28e7c5`}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${20.42}&lon=${-86.92}&appid=${`4d28a8b5d356758d518dc67e8c28e7c5`}&units=imperial`;

apiFetch(currentUrl);

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    currentHumidity.innerHTML = `${data.main.humidity}%`;

    document.getElementById('temp-max').textContent = data.main.temp_max;

    const iconCode = data.weather[0].icon;
    const iconsrc = `http://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    weatherDescription.innerHTML = data.weather[0].description;

}