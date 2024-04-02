function WeatherIcon({ iconCode }) {
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return <img src={iconUrl} alt="Weather icon" />;
  }
  
  export default WeatherIcon;
  