import React, { useState } from 'react';
import { Table, Form, InputGroup, Button } from 'react-bootstrap';

const Details = () => {
  const [cityName, setCityName] = useState('');
  const [weatherResponse, setWeatherResponse] = useState([]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f0e914d45317511b099689222bac4fff`);
      if (response.ok) {
        console.log(response);
      }
      const data = await response.json();
      if (data) {
        setWeatherResponse(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchWeather();
  };

  const renderTableRows = () => {
    if (weatherResponse && Object.keys(weatherResponse).length > 0) {
      return (
        <>
        <tr>
<td>Coordinate (Lon)</td> 
<td>{weatherResponse.coord.lon}</td>
</tr>
<tr>
<td>Coordinate (Lat)</td> 
<td>{weatherResponse.coord.lat}</td>
</tr>
<tr>
<td>Weather</td> 
<td>{weatherResponse.weather[0].main}</td>
</tr>
<tr>
<td>Description</td> 
<td>{weatherResponse.weather[0].description}</td>
</tr>
<tr>
<td>Temperature</td> 
<td>{weatherResponse.main.temp}</td>
</tr>
<tr>
<td>Feels Like</td> 
<td>{weatherResponse.main.feels_like}</td>
</tr>
<tr>
<td>Min Temperature</td> 
<td>{weatherResponse.main.temp_min}</td>
</tr>
<tr>
<td>Max Temperature</td> 
<td>{weatherResponse.main.temp_max}</td>
</tr>
<tr>
<td>Pressure</td> 
<td>{weatherResponse.main.pressure}</td>
</tr>
<tr>
<td>Humidity</td> 
<td>{weatherResponse.main.humidity}</td>
</tr>
<tr>
<td>Wind Speed</td> 
<td>{weatherResponse.wind.speed}</td>
</tr>
<tr>
<td>Wind Degree</td> 
<td>{weatherResponse.wind.deg}</td>
</tr>
<tr>
<td>Clouds</td> 
<td>{weatherResponse.clouds.all}</td>
</tr>
<tr>
<td>Visibility</td> 
<td>{weatherResponse.visibility}</td>
</tr>
<tr>
<td>Sunrise</td> 
<td>{weatherResponse.sys.sunrise}</td>
</tr>
<tr>
<td>Sunset</td> 
<td>{weatherResponse.sys.sunset}</td>
</tr>



        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="2">No data available</td>
        </tr>
      );
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Locations"
          aria-label="Search Locations"
          aria-describedby="basic-addon2"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <Table bordered>
        <thead>
          <tr>
            <th colSpan={2} className="text-center">{cityName}</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </Table>
    </>
  );
}

export default Details;





