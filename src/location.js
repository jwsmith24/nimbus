// Functions for resolving location to lat/long coordinates when the user changes their location

import { convertToLatLong, getWeather } from './weather';

const cityNameInput = document.getElementById('city-name');
const stateInput = document.getElementById('states');
const countryInput = document.getElementById('country');

const updateButton = document.getElementById('update-button');
const cancelButton = document.getElementById('cancel-button');

const locationDialog = document.getElementById('location-popup');
const locationForm = document.querySelector('.location-form');

const changeLocationButton = document.getElementById('change-location');

let currentLocation;

const location = document.getElementById('location');

function updateLocationName(name) {
  location.textContent = name;
}

// Fetch lat long when location changes.
async function getLatLong() {
  const input = {
    city: cityNameInput.value,
    state: stateInput.value,
    country: countryInput.value,
  };
  location.textContent = input.city;

  return await convertToLatLong(input);
}

async function updateLocation() {
  console.log('hi from update location in location.js');
  currentLocation = await getLatLong();
  // Refresh active wx data with new location
  getWeather(currentLocation);
}

export function initLocation() {
  getUserLocation();

  updateButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateLocation();
    locationDialog.close();
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    locationForm.reset();
    locationDialog.close();
  });

  changeLocationButton.addEventListener('click', () => {
    locationDialog.showModal();
  });
}

function getUserLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      currentLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      console.log('From getUserLocation in location.js:');
      console.log(currentLocation);
      // Refresh active wx data with new location
      getWeather(currentLocation);
    });
  } else {
    console.error('This browser does not support geolocation');
  }
}
