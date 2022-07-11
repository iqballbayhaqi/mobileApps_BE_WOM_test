'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class t_log_apirequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  t_log_apirequest.init({
    endpoint: DataTypes.STRING,
    parameter_in: DataTypes.STRING,
    log_id: DataTypes.STRING,
    request_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 't_log_apirequest',
  });
  return t_log_apirequest;
};