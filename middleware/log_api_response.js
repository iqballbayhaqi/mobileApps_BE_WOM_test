const { t_log_apiresponse } = require("../models");

const logApiResponse = (req, res, next) => {
  t_log_apiresponse.findAll().then((data) => {
    t_log_apiresponse.create({
      endpoint: req.protocol + "://" + req.get("host") + req.originalUrl,
      parameter_in: JSON.stringify(req.query),
      log_id: data.length + 1,
      response_code: req.statusCode,
      response_message: req.status,
      response_date: new Date(),
    });
  });
};

module.exports = logApiResponse;
