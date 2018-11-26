const request = require("request");
const weatherAPI = require("../helpers/weatherAPI");
const dateUtils = require("../helpers/dateUtils");

exports.getWeather = (req, res, next) => {
  const location = req.params.location;

  const url = weatherAPI.buildURL(location);

  request.get(url, { json: true }, (_err, _res, _body) => {
    if (_err) {
      console.log(_err);
      res.status(500).json({
        error: _err.message
      });
    } else {
      if (_res.statusCode == 200) {
        const timezoneName = dateUtils.getTimezoneForGeolocation(
          _body.coord.lat,
          _body.coord.lon
        );

        const body = {
          ..._body,
          sys: {
            ..._body.sys,
            timezone: timezoneName
          }
        };
        res.status(_res.statusCode);
        res.send(body);
      } else {
        res.status(_res.statusCode);
        res.send(_body);
      }
    }
  });
};
