'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('t_data_customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.INTEGER
      },
      branch_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      tenor_id: {
        type: Sequelize.INTEGER
      },
      avatar: {
        type: Sequelize.STRING
      },
      usr_crt: {
        type: Sequelize.STRING
      },
      usr_upt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('t_data_customers');
  }
};