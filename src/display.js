// current data elements
const location = document.getElementById('location');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const high = document.getElementById('high');
const low = document.getElementById('low');

// forecast elements
//tbd

export function updateData(wx) {
  console.log('From display.js: ');
  console.log(wx);

  temp.textContent = `Current Temp: ${wx.currentTemp}${wx.unit}`;
  description.textContent =
    'Current Conditions: ' + wx.description.toUpperCase();
  feelsLike.textContent = `Feels like: ${wx.feelsLike}${wx.unit}`;
  high.textContent = `High: ${wx.highTemp}${wx.unit}`;
  low.textContent = `Low: ${wx.lowTemp}${wx.unit}`;
  humidity.textContent = `Humidity: ${wx.humidity}%`;
}

export function updateLocationDisplay(locationObj) {
  location.textContent = locationObj.name;
}

export function initDropDown() {
  const dropDownIcon = document.getElementById('drop-down');
  const menuOptions = document.querySelector('.menu-options');
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
}
