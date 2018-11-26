const tzlookup = require("tz-lookup");

function getTimezoneForGeolocation(lat, lon) {
  try {
    const timezone = tzlookup(lat, lon);
    return timezone;
  } catch(error) {
    return "";
  }
}

module.exports.getTimezoneForGeolocation = getTimezoneForGeolocation;