import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'DIN_API_NYCKEL_HÄR';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    setWeather(data);
  };

  return (
    <div>
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default WeatherApp;
