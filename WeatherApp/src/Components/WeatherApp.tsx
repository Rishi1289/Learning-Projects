import { useState } from "react";
import type { Weatherdata } from "../Type/Weatherdata";
import { getWeather } from "../Services/weatherService";
import "./WeatherApp.css";

function WeatherApp() {
  const [city, setCity] = useState<string>("");

  // Initial state is empty
  const [weather, setWeather] = useState<Weatherdata | null>(null);

  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Error state
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (error) {
      console.error(error);
      setWeather(null);
      setError("City not found. Please enter a valid city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">

      <h1>Weather App</h1>

      <div className="search-container">

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {/* Error */}
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p className="loading-message">
          Loading weather...
        </p>
      )}

      {/* Weather */}
      {!loading && weather && (
        <div className="weather-container">

          <h2>{weather.city}</h2>

          <p>{weather.condition}</p>

          <h3>{weather.temperature}°C</h3>

          <p>Humidity: {weather.humidity}%</p>

          <p>Wind: {weather.windSpeed} km/h</p>

        </div>
      )}

      {/* Initial empty state */}
      {!loading && !weather && !error && (
        <div className="empty-state">
          <h2>🌤️</h2>
          <p>Search for a city to see the weather</p>
        </div>
      )}

    </div>
  );
}

export default WeatherApp;