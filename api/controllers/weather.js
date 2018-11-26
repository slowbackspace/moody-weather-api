const request = require("request");
const weatherAPI = require("../helpers/weatherAPI"); 

exports.getWeather = (req, res, next) => {
  const location = req.params.location;
  
  const url = weatherAPI.buildURL(location);

  request.get(url, {json: true}, (_err, _res, _body) => {
    if (_err) {
        console.log(_err);
        console.log(_body);
        console.log("error");
        res.status(_res.statusCode).json({
            error: _err.message
        });
    } else {
        res.status(_res.statusCode);
        res.send(_body);
    }
  });
};
