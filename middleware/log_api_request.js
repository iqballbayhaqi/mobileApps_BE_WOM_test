const { t_log_apirequest } = require("../models");

const logApiRequest = (req, res, next) => {

  t_log_apirequest.findAll()
  .then(data => {
    t_log_apirequest.create({
      endpoint: req.protocol + "://" + req.get('host') + req.originalUrl, 
      parameter_in: JSON.stringify(req.query), 
      log_id: data.length + 1, 
      request_date: new Date()
    })
  })

  next();
}

module.exports = logApiRequest;
