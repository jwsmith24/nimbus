// default to F temps
let tempUnit = 'f';

// Openweather temps are given in Kelvin. Convert to C and bundle into our own wx object.
export function processWx(weatherData) {
  let unitConversion = setUnitConversion();

  const wx = {
    currentTemp: Math.round(unitConversion(weatherData.main.temp)),
    highTemp: Math.round(unitConversion(weatherData.main.temp_max)),
    lowTemp: Math.round(unitConversion(weatherData.main.temp_min)),
    feelsLike: Math.round(unitConversion(weatherData.main.feels_like)),
    humidity: weatherData.main.humidity,
    description: weatherData.weather[0].description,
    unit: '\u00B0 ' + tempUnit.toUpperCase(),
  };

  return wx;
}

export function processForecast(forecastData) {
  let unitConversion = setUnitConversion();

  const wx = {
    nextDayTemp: Math.round(unitConversion(forecastData.nextDayTemp)),
    nextDayCondition: forecastData.nextDayCondition,
    secondDayTemp: Math.round(unitConversion(forecastData.secondDayTemp)),
    secondDayCondition: forecastData.secondDayCondition,
    unit: '\u00B0 ' + tempUnit.toUpperCase(),
  };

  return wx;
}

function updateTempUnit(unit) {
  if (unit === 'f' || unit === 'c' || unit === 'k') {
    tempUnit = unit;
  } else {
    console.error('Invalid unit, defaulting to F');
    tempUnit = 'f';
  }
}

function setUnitConversion() {
  let unitConversion;
  if (tempUnit === 'f') {
    unitConversion = kelvinToFahrenheit;
  } else if (tempUnit === 'c') {
    unitConversion = kelvinToCelsius;
  } else {
    unitConversion = kelvin;
  }

  return unitConversion;
}

function kelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273;
}

function kelvinToFahrenheit(temp) {
  return (temp * 9) / 5 - 459.67;
}

function kelvin(temp) {
  return temp;
}
