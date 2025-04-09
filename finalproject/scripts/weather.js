const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const forecastTemp = document.querySelector('#forecast-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const highTempMessage = document.querySelector('#high-temp-message');
const highTempDisplay = document.querySelector('#temp-max');


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
apiFetch(forecastUrl);

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    currentHumidity.innerHTML = `${data.main.humidity}%`;

    const iconCode = data.weather[0].icon;
    const iconsrc = `http://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    weatherDescription.innerHTML = data.weather[0].description;

    const highTemp = data.main.temp_max;
    highTempMessage.innerHTML = `${highTemp}&deg;F`;
}

function displayForecast(data) {
    const tomorrowForecast = getTomorrowForecast(data.list);
    if (tomorrowForecast) {
        forecastTemp.innerHTML = `${tomorrowForecast.main.temp}&deg;F`;
    } else {
        console.error('Forecast for 3:00 PM not found')
    }
}

function getTomorrowForecast(forecastList) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(15, 0, 0, 0);

    for (let forecast of forecastList) {
        const forecastDate = new Date(forecast.dt * 1000);


        const localTime = new Date(forecastDate.getTime() - (forecastDate.getTimezoneOffset() * 60000));


        if (localTime.getDate() === tomorrow.getDate() && localTime.getHours() === 15) {
            return forecast;
        }
        return null;
    }

    function closeMessage() {
        console.log('Closing message...');
        highTempMessage.style.display = 'none';
    }
}