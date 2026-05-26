// Weather App using OpenWeatherMap API
// Objective: Fetch and display real-time weather data based on city input

// DOMContentLoaded event - Waits for page to fully load before running code
document.addEventListener('DOMContentLoaded',()=>{
    // Get references to all DOM elements
    let city = document.getElementById("city-input");  // Input field for city name
    let getWeatherBtn = document.getElementById("get-weather-btn");  // Get weather button
    let info = document.getElementById("weather-info");  // Container for weather data
    let cityName = document.getElementById("city-name");  // Element to display city
    let temperature = document.getElementById("temperature");  // Element to display temp
    let description = document.getElementById("description");  // Element to display description
    let errorMessage = document.getElementById("error-message");  // Element to show errors

    // API key for OpenWeatherMap service
    // This key authenticates requests to the weather API
    const API_KEY = "9dc823e397fd0be865abf07289b4594e";

    // Add click event listener to the weather button
    getWeatherBtn.addEventListener('click', async()=>{
        // Get and trim the city name from input
        const cityName = city.value.trim()
        // If input is empty, stop execution
        if(!cityName) return;

        // Try-catch block: Handles errors from API calls or network issues
        try {
            // Call async function to fetch weather data
            // await waits for the Promise to resolve before continuing
            const data = await getWeatherData(cityName);
            // Display the fetched weather data
            displayWeatherData(data)
        } catch (error) {
            // If error occurs, display error message
            showError();
        }
    })

    // Async function to fetch weather data from API
    async function getWeatherData(cityName){
        // Construct the API URL with city name and parameters
        // units=metric uses Celsius instead of Kelvin
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

        // fetch() makes HTTP request to the API
        // await waits for the response
        const response = await fetch(url);
        
        // Check if response is successful (status 200-299)
        if(!response.ok){
            // Throw error if city not found or other issue
            throw new Error("City not found");
        }
        // Parse JSON response
        // response.json() returns a Promise, so we await it
        const Data = await response.json()
        return Data
    }

    // Function to display weather data in the UI
    async function displayWeatherData(weatherData){
        // Destructuring: Extract specific properties from the weather data object
        // weatherData contains name (city), main (temp info), weather (description)
        const {name,main,weather} = weatherData;
        // Display city name
        cityName.textContent = name;
        // Display temperature with formatting
        temperature.textContent = `Temperature: ${main.temp}`
        // Display weather description (weather[0] gets first weather condition)
        description.textContent = `Weather: ${weather[0].description}`
        
        // Show weather info and hide error message
        info.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    // Function to show error message
    function showError(error){
        // Hide weather info and show error message
        // Note: There's a bug here - should be addClass not remove on info
        info.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})