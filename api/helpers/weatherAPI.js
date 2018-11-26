const textUtils = require("./textUtils");
const config = require("../../config/config"); 

function buildURL(location, lang="en") {
  const coords = textUtils.parseCoordinates(location);

  const BASEURL = config.WEATHER_API_URL;
  const APIKEY = config.WEATHER_API_KEY;

  let url = "";
  if (coords) {
    // lat, lon search query
    const [latitude, longitude] = coords;
    url = `${BASEURL}?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`;
  } else {
    // city name
    url = `${BASEURL}?q=${location}&APPID=${APIKEY}`;
  }

  url += "&lang=" + lang;
  return url;
}

module.exports.buildURL = buildURL;