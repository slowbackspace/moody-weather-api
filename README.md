# Moody Weather API
Proxy for sending requests to the OpenWeatherMap API.

Live [https://moody-weather.myrbium.com/v1/weather/:location](https://moody-weather.myrbium.com/v1/weather/)

- Basically returns same response as OpenWeatherMap API. However, there is additional field `sys.timezone` with a timezone of a fetched location (eg. Europe/Berlin). 

## Usage
Set env variable `WEATHER_API_KEY` to your API key and run `node server.js`;