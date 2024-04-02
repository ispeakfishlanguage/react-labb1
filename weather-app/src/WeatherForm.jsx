import React, { useState } from 'react';

function WeatherForm({ onFormSubmit }) {
  // State to hold the input value
  const [city, setCity] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    onFormSubmit(city); // Invoke the callback with the city name
    setCity(''); // Reset the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city" className='Label'>Stad: </label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={handleChange}
        placeholder="Sök stad..."
      />
      <button type="submit" className="submitbutton">Sök</button>
    </form>
  );
}

export default WeatherForm;
