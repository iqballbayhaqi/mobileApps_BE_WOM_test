'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class t_data_customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      t_data_customer.belongsTo(models.m_product, { foreignKey: 'product_id', targetKey: 'id' });
      t_data_customer.belongsTo(models.m_branch, { foreignKey: 'branch_id', targetKey: 'id' })
    }
  }
  t_data_customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_no: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    tenor_id: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    usr_crt: DataTypes.STRING,
    usr_upt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 't_data_customer',
  });
  return t_data_customer;
};