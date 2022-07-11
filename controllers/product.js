const { m_product } = require("../models");

class ProductController {
  static getMasterProduct(req, res, next) {
    m_product
      .findAll()
      .then((data) => {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
          data,
        });
        req.statusCode = 200;
        req.status = "Success"
        next();
      })
      .catch((err) => next(err));
  }
}

module.exports = ProductController;
