# Nimbus

Get the latest weather data while learning fun facts about clouds!

## Using the Program

The weather app defaults to a location based on the user's IP address. The app presents the following data sourced from the OpenWeather API:

For the current day:

- Current Temp
- Current Sky Conditions
- "Feels Like" Temp
- High Temp
- Low Temp

For the next two days:

- High Temp
- Low Temp
- Predominant Sky Conditions

The current conditions can be updated by clicking the `refresh` option in the drop-down menu.

### Changing the location

The location can be updated by clicking on the settings icon in the top left to open up the drop-down menu. Selecting `Change Location` opens a dialog where the user can enter the city name, state (for US locations), and country. The app resolves the location name to lat/long coordinates with a call to the OpenWeather Geocoding API and then updates the displayed weather data.

> [!NOTE]
> This project was completed as part of The Odin Project JavaScript course. Emphasis was placed on using `async`, `await`, and `fetch` to work with the OpenWeather and GIPHY APIs.
