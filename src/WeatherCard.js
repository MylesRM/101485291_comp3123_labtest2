import React from "react";

function WeatherCard({ weather }) {
    // Show a fallback method if data is missing
    if (!weather || !weather.main) {
        return <p>Loading weather data...</p>;
    }
    // Kelvin to Celsius
    const tempC = (weather.main.temp - 273.15).toFixed(1);
    const feelsC = (weather.main.feels_like - 273.15).toFixed(1);

    return (
        <div className="weather-card">
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <p>{tempC} °C (Feels like {feelsC} °C)</p>
            <p>{weather.weather?.[0]?.description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
                alt={weather.weather?.[0]?.description}
            />
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind?.speed} m/s</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            {weather.snow && <p>Snow (last hour): {weather.snow["1h"]} mm</p>}
        </div>
    );
}

export default WeatherCard;
