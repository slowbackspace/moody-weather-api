const request = require("request");
const weatherAPI = require("../helpers/weatherAPI");
const dateUtils = require("../helpers/dateUtils");

exports.getWeather = (req, res, next) => {
  const location = req.params.location;

  const url = weatherAPI.buildURL(location);

  request.get(url, { json: true }, (_err, _res, _body) => {
    if (_err) {
      console.log(_err);
      console.log(_body);
      console.log("error");
      res.status(_res.statusCode).json({
        error: _err.message
      });
    } else {
      const body = {
        ..._body,
        sys: {
          ..._body.sys,
          timezone: dateUtils.getTimezoneForGeolocation(
            _body.coord.lat,
            _body.coord.lon
          )
        }
      };
      res.status(_res.statusCode);
      res.send(body);
    }
  });
};
