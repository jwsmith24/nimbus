// current data elements
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feels-like');
const high = document.getElementById('high');
const low = document.getElementById('low');

// forecast elements
//tbd

export function updateData(wx) {
  console.log('From display.js: ');
  console.log(wx);
  temp.textContent = `Current Temp: ${wx.currentTemp}\u00B0 C`;
  description.textContent =
    'Current Conditions: ' + wx.description.toUpperCase();
  feelsLike.textContent = `Feels like: ${wx.feelsLike}\u00B0 C`;
  high.textContent = `High: ${wx.highTemp}\u00B0 C`;
  low.textContent = `Low: ${wx.lowTemp}\u00B0 C`;
}
