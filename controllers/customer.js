const { t_data_customer, m_product, m_branch } = require("../models");

class CustomerController {
  static getAllDataCust(req, res, next) {
    t_data_customer
      .findAll({ include: [m_product, m_branch] })
      .then((data) => {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
          data,
        });
      })
      .catch((err) => next(err));
  }

  static getDataCustomer(req, res, next) {
    t_data_customer
      .findOne({ where: { id: +req.query.id }, include: [m_product, m_branch] })
      .then((data) => {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
          data,
        });
        req.statusCode = 200;
        req.status = "Success";
        next();
      })
      .catch((err) => next(err));
  }

  static saveDataCust(req, res, next) {
    const {
      first_name,
      last_name,
      phone_no,
      branch_id,
      product_id,
      tenor_id,
      avatar,
    } = req.body;

    t_data_customer
      .create({
        first_name,
        last_name,
        phone_no,
        branch_id,
        product_id,
        tenor_id,
        avatar,
      })
      .then((data) => {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
        });
        req.statusCode = 200;
        req.status = "Success";
        next();
      })
      .catch((err) => next(err));
  }

  static updateDataCust(req, res, next) {
    if (!req.query.id) {
      throw next({error: "querry id tidak ada"})
    }

    t_data_customer
      .update(
        req.body,
        { where: { id: +req.query.id }, returning: true }
      )
      .then((data) => {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
        });
        req.statusCode = 200;
        req.status = "Success";
        next();
      })
      .catch((err) => next(err));
  }

  static deleteDataCust(req, res, next) {
    t_data_customer
      .destroy({
        where: { id: +req.body.id },
        returning: true,
      })
      .then((data) => {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
        });
        req.statusCode = 200;
        req.status = "Success";
        next();
      })
      .catch((err) => next(err));
  }
}

module.exports = CustomerController;
