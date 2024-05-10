import { updateData, updateLocationName } from './display';

const key = '240bfc06d13fa4a6c479581cad040e61';
const cityResultLimit = 1; //Only gets the city that best matches search criteria

// Main call to get weather.
export async function getWeather(location) {
  console.log('LAT: ' + location.lat);
  console.log('LONG: ' + location.long);

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${key}`
  );

  const weatherData = await weatherResponse.json();
  // Update UI with new wx data
  updateData(processWx(weatherData));
}

// Async call to GeoCoding API to resolve location name to lat/long
export async function convertToLatLong(input) {
  const queryInput = `${input.city},${input.state},${input.country}`;
  const latLong = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${queryInput}&limit=${cityResultLimit}&appid=${key}`
  );

  console.log('Geo Response: ');
  const resJson = await latLong.json();
  console.log(resJson);

  const lat = resJson[0].lat;
  const long = resJson[0].lon;

  return { lat, long };
}

// Openweather temps are given in Kelvin. Convert to C and bundle into our own wx object.
function processWx(weatherData) {
  const wx = {
    currentTemp: Math.round(kelvinToCelsius(weatherData.main.temp)),
    highTemp: Math.round(kelvinToCelsius(weatherData.main.temp_max)),
    lowTemp: Math.round(kelvinToCelsius(weatherData.main.temp_min)),
    feelsLike: Math.round(kelvinToCelsius(weatherData.main.feels_like)),
    description: weatherData.weather[0].description,
  };

  console.log(wx);
  return wx;
}

function kelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273;
}
