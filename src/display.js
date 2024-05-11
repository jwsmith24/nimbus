import { updateTempUnit } from './data-processing';
import { getBackgroundImage } from './giphy';
import { refreshData } from './location';

// current data elements
const location = document.getElementById('location');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const high = document.getElementById('high');
const low = document.getElementById('low');

// forecast elements
const nextDayForecast = document.getElementById('next-forecast');
const secondDayForecast = document.getElementById('second-forecast');

// background image
const background = document.querySelector('.container');

const unitDialog = document.getElementById('units-popup');

async function setBackground(type) {
  const url = await getBackgroundImage(type);
  console.log(url);
  background.style.backgroundImage = 'url(' + url + ')';
}

export function updateData(wx) {
  temp.textContent = `Current Temp: ${wx.currentTemp}${wx.unit}`;
  description.textContent =
    'Current Conditions: ' + wx.description.toUpperCase();
  feelsLike.textContent = `Feels like: ${wx.feelsLike}${wx.unit}`;
  high.textContent = `High: ${wx.highTemp}${wx.unit}`;
  low.textContent = `Low: ${wx.lowTemp}${wx.unit}`;
  humidity.textContent = `Humidity: ${wx.humidity}%`;
  setBackground(wx.type);
}

export function updateForecastData(forecastData) {
  nextDayForecast.textContent = `Tomorrow: ${forecastData.nextDayTemp}${forecastData.unit} and ${forecastData.nextDayCondition}`;

  secondDayForecast.textContent = `Next Day: ${forecastData.secondDayTemp}${forecastData.unit} and ${forecastData.secondDayCondition}`;

  updateForecastIcons(forecastData);
}

export function updateLocationDisplay(locationObj) {
  location.textContent = locationObj.name;
}

export function initMenus() {
  initDropDownMenu();
  initUnitMenu();
}

function initDropDownMenu() {
  const dropDownIcon = document.getElementById('drop-down');
  const menuOptions = document.querySelector('.menu-options');
  const unitOption = document.getElementById('unit-options');
  const refreshOption = document.getElementById('refresh');

  refreshOption.addEventListener('click', () => {
    refreshData();
  });

  let dropDownOpen = true;
  dropDownIcon.addEventListener('click', () => {
    toggleDropDown();
  });

  dropDownIcon.addEventListener('mouseover', () => {
    displayMenu();
  });

  dropDownIcon.addEventListener('mouseout', () => {
    hideMenu();
  });

  function toggleDropDown() {
    dropDownOpen = dropDownOpen ? false : true;

    if (dropDownOpen) {
      hideMenu();
    } else {
      displayMenu();
    }
  }

  function displayMenu() {
    menuOptions.style.display = 'block';
  }

  function hideMenu() {
    menuOptions.style.display = 'none';
  }

  unitOption.addEventListener('click', () => {
    unitDialog.showModal();
  });
}

function initUnitMenu() {
  const updateButton = document.getElementById('update-units-btn');
  const cancelButton = document.getElementById('cancel-units-btn');
  const tempUnitInput = document.getElementById('temp-change');
  const unitForm = document.getElementById('units-form');

  updateButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('temp unit value: ' + tempUnitInput.value);
    updateTempUnit(tempUnitInput.value);
    console.log('Units updated to: ' + tempUnitInput.value);
    unitDialog.close();
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    unitForm.reset();
    unitDialog.close();
  });
}

function updateForecastIcons(data) {
  const nextDayIcon = document.getElementById('nextDayIcon');
  const secondDayIcon = document.getElementById('secondDayIcon');
  console.log(data);

  setNextDayIcon(data, nextDayIcon);
  setSecondDayIcon(data, secondDayIcon);
}

function setNextDayIcon(data, icon) {
  switch (data.nextDayCondition) {
    case 'Clear':
      icon.src = '../resources/sunny.png';
      break;
    case 'Clouds':
      icon.src = '../resources/cloudy.png';
      break;
    case 'Rain':
      icon.src = '../resources/rainy.png';
      break;
    case 'Snow':
      icon.src = '../resources/snow.png';
      break;
    case 'Storms':
      icon.src = '../resources/stormy.png';
      break;
  }
}

function setSecondDayIcon(data, icon) {
  switch (data.secondDayCondition) {
    case 'Clear':
      icon.src = '../resources/sunny.png';
      break;
    case 'Clouds':
      icon.src = '../resources/cloudy.png';
      break;
    case 'Rain':
      icon.src = '../resources/rainy.png';
      break;
    case 'Snow':
      icon.src = '../resources/snow.png';
      break;
    case 'Storms':
      icon.src = '../resources/stormy.png';
      break;
  }
}
