const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            displayResults(data);

        } else {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${49.75}&lon=${6.64}&appid=${`4d28a8b5d356758d518dc67e8c28e7c5`}&units=imperial`;
apiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconCode = data.weather[0].icon;
    const iconsrc = `http://openweathermap.org/img/wn/${iconCode}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
}


