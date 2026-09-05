const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city: string) => {
  console.log("City:", city);
  console.log("API Key:", API_KEY);

  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?q=${encodeURIComponent(city)}` +
    `&units=metric` +
    `&appid=${API_KEY}`;

  const response = await fetch(url);

  console.log("Status:", response.status);

  const data = await response.json();

  console.log("API Response:", data);

  if (!response.ok) {
    throw new Error(data.message || "Weather API request failed");
  }

  return {
    city: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
};