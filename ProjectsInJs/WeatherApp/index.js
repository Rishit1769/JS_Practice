document.addEventListener('DOMContentLoaded',()=>{
    let city = document.getElementById("city-input");
    let getWeatherBtn = document.getElementById("get-weather-btn");
    let info = document.getElementById("weather-info");
    let cityName = document.getElementById("city-name");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let errorMessage = document.getElementById("error-message");

    const API_KEY = "9dc823e397fd0be865abf07289b4594e";
    getWeatherBtn.addEventListener('click', async()=>{
        const cityName = city.value.trim()
        if(!cityName) return;

        //server might throw some error
        //server/database is in another continent so it will take time
        try {
            const data = await getWeatherData(cityName);
            displayWeatherData(data)
        } catch (error) {
            showError();
        }
    })

    async function getWeatherData(cityName){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error("City not found");
        }
        const Data = await response.json()
        return Data
    }

    async function displayWeatherData(weatherData){
        const {name,main,weather} = weatherData;
        cityName.textContent = name;
        temperature.textContent = `Temperature: ${main.temp}`
        description.textContent = `Weather: ${weather[0].description}`
        
        info.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError(error){
        info.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})