const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
        const city = "New York"; // Change to any predetermined city

        async function fetchWeather() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
       
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.cod === 200) {
                    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                    document.getElementById("description").textContent = data.weather[0].description;
                    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                } else {
                    document.getElementById("temperature").textContent = "Error fetching data";
                }
            }
        }