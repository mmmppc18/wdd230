const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '4d28a8b5d356758d518dc67e8c28e7c5';
const latitude = 49.75;
const longitude = 6.64;



async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);

            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            currentTemp.textContent = `${temperature}°F`;
            captionDesc.textContent = description;

            weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
            weatherIcon.alt = description;

        } else {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
apiFetch(url);