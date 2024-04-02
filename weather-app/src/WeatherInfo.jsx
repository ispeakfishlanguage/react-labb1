import WeatherIcon from './WeatherIcon';

function WeatherInfo({ data }) {
  if (!data) return <p>Ingen väderinformation tillgänglig</p>;

  return (
    <div>
      <h2>Väder i {data.name}</h2>
      <WeatherIcon iconCode={data.weather[0].icon} />
      <p>Temperatur: {data.main.temp}°C</p>
      <p>Väder: {data.weather[0].main}</p>
      <p>Luftfuktighet: {data.main.humidity}%</p>
      <p>Vindhastighet: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
