const key = '240bfc06d13fa4a6c479581cad040e61';
const cityResultLimit = 5;

function getWeather(cityName, stateCode, countryCode) {}

async function convertToLatLong(cityName, stateCode, countryCode) {
  const queryInput = `${cityName},${stateCode},${countryCode}`;
  const latLong = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${queryInput}&limit=${cityResultLimit}&appid=${key}`
  );

  console.log('Geo Response: ');
  const resJson = await latLong.json();
  console.log(resJson);
}

convertToLatLong('clarksville', 'tn', 'us');
