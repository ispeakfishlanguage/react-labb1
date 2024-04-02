import React, { useState, useEffect } from "react";
import Header from "./Header";
import WeatherForm from "./WeatherForm";
import WeatherInfo from './WeatherInfo';
import Footer from './Footer';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!city) return; // Avsluta om staden inte är angiven

    const fetchWeather = async () => {
      try {
        setIsLoading(true); // Börja ladda innan hämtningen
        setFetchError(false); // Återställ felstatus vid nytt hämtningsförsök
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Säker hantering av API-nyckeln
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`;
    
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Väderinformation kunde inte hämtas');
        }
        const data = await response.json();
        setWeatherData(data); // Uppdatera tillstånd med hämtad väderdata
      } catch (error) {
        console.error(error);
        setFetchError(true); // Ange felstatus till true om hämtningen misslyckas
        setWeatherData(null); // Återställa väderdata vid fel
      } finally {
        setIsLoading(false); // Sluta ladda oavsett resultatet av hämtningen
      }
    };
    

    fetchWeather();
  }, [city]); // Denna effekt körs när 'city'-tillståndet ändras

  const handleFormSubmit = (cityName) => {
    setCity(cityName); // Uppdatera stadstillstånd, vilket triggar effekten att hämta aktuella väderinformation
  };

  return (
    <div className="App">
      <Header />
      <WeatherForm onFormSubmit={handleFormSubmit} />
      {isLoading && <p className="loading">Loading...</p>}
      {fetchError && <p className="error">Fel vid hämtning av väderinformation. Vänligen försök igen.</p>}
      {weatherData && <WeatherInfo data={weatherData} />}
      <Footer />
    </div>
  );  
}

export default App;
