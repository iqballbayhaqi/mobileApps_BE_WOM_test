const { m_branch } = require("../models");

class BranchController {
  static getMasterBranch(req, res, next) {
    m_branch
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

module.exports = BranchController;
