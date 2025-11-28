import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
    // Holds the current city being searched
    const [city, setCity] = useState("Toronto");
    //Holds the weather data
    const [weather, setWeather] = useState(null);
    //Fetches wather data from API
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3da31648740dbf7db2cbdcfafc67691`)
            .then(res => res.json())
            .then(data => {
                console.log("API response:", data);
                setWeather(data);
            })
            .catch(err => console.error("Fetch error:", err)); //Debugging
    }, [city]);

    return (
        <div className="app">
            <h1>Weather App</h1>
            <input
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Enter city"
            />
            {weather && weather.main ? (
                <WeatherCard weather={weather} />
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default App;
