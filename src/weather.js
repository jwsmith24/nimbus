const key = '240bfc06d13fa4a6c479581cad040e61';
const cityResultLimit = 5;

// Main call to get weather.
export async function getWeather(cityName, stateCode, countryCode) {
  const location = await convertToLatLong(cityName, stateCode, countryCode);

  console.log('LAT: ' + location.lat);
  console.log('LONG: ' + location.long);

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${key}`
  );

  const weatherData = await weatherResponse.json();

  console.log(weatherData);
}

// Async call to GeoCoding API to resolve location name to lat/long
async function convertToLatLong(cityName, stateCode, countryCode) {
  const queryInput = `${cityName},${stateCode},${countryCode}`;
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

getWeather('clarksville', 'tn', 'us');
