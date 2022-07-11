'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class t_log_apiresponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  t_log_apiresponse.init({
    endpoint: DataTypes.STRING,
    parameter_in: DataTypes.STRING,
    log_id: DataTypes.STRING,
    response_code: DataTypes.STRING,
    response_message: DataTypes.STRING,
    response_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 't_log_apiresponse',
  });
  return t_log_apiresponse;
};