# Nimbus

Get the latest weather data while learning fun facts about clouds!

> [!NOTE]
> This project was completed as part of The Odin Project JavaScript course. Emphasis was placed on using `async`, `await`, and `fetch` to work with the OpenWeather and GIPHY APIs.

## Using the Program

The weather app defaults to a location based on the user's IP address. The app presents the following data sourced from the OpenWeather API:

For the current day:

- Current Temp
- Current Sky Conditions
- "Feels Like" Temp
- Relative Humidity
- High Temp
- Low Temp

For the next two days:

- High Temp
- Predominant Sky Conditions

The weather data can be updated by clicking the `refresh` option in the drop-down menu.

### Changing the location

The location can be updated by clicking on the settings icon in the top left to open up the drop-down menu. Selecting `Change Location` opens a dialog where the user can enter the city name, state (for US locations), and country. The app resolves the location name to lat/long coordinates with a call to the OpenWeather Geocoding API and then updates the displayed weather data.

### Changing the units

The temperature units can be adjusted via the `Units` menu option. The user can select from Fahrenheit, Celsius, or Kelvin for their preferred unit. The display is refreshed with the new units. The logic for converting units is implemented client-side to reduce the amount of HTTP requests.

### Dynamic background

Each time the page loads, the background updates to a random GIF related to the current weather conditions. If the API usage rate is exceeded (100 requests/hour), the background defaults to the weather icons used with the forecasted data.
