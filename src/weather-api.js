import { updateData, updateLocationDisplay } from './display';
import { processWx } from './data-processing';

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
  updateLocationDisplay(await resolveLocationName(weatherData.coord));
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

export async function resolveLocationName(location) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=${cityResultLimit}&appid=${key}`
  );

  const jsonResponse = await response.json();
  return {
    name: jsonResponse[0].name,
    country: jsonResponse[0].country,
  };
}
