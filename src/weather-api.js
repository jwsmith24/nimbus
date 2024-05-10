import {
  updateData,
  updateForecastData,
  updateLocationDisplay,
} from './display';
import { processForecast, processWx } from './data-processing';
import { defaultLocation } from './location';

const key = '240bfc06d13fa4a6c479581cad040e61';
const cityResultLimit = 1; //Only gets the city that best matches search criteria

// Main call to get weather.
export async function getWeather(location) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${key}`
  );

  const weatherData = await weatherResponse.json();
  // Update UI with new wx data
  updateData(processWx(weatherData));

  updateLocationDisplay(await resolveLocationName(weatherData.coord));
  getForecasts(weatherData.coord);
}

// Async call to GeoCoding API to resolve location name to lat/long
export async function convertToLatLong(input) {
  const queryInput = `${input.city},${input.state},${input.country}`;
  const latLong = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${queryInput}&limit=${cityResultLimit}&appid=${key}`
  );

  const resJson = await latLong.json();

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

// Free tier of OpenWeather doesn't provide daily forecasts, instead it provides a 5-day forecast at 3-hour increments (40 total lines of data)
// The data point for 1200 on each day is used for simplicity.
export async function getForecasts(coordinates) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}`
  );

  const forecastData = await response.json();

  const nextDayForecast = forecastData.list[4]; // grab the data for 1200 on the next and second day
  const secondDayForecast = forecastData.list[12];

  const forecast = {
    nextDayTemp: nextDayForecast.main.temp,
    nextDayCondition: nextDayForecast.weather[0].main,
    secondDayTemp: secondDayForecast.main.temp,
    secondDayCondition: secondDayForecast.weather[0].main,
  };

  updateForecastData(processForecast(forecast));
}
