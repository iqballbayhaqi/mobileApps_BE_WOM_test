'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('t_log_apiresponses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      endpoint: {
        type: Sequelize.STRING
      },
      parameter_in: {
        type: Sequelize.STRING
      },
      log_id: {
        type: Sequelize.STRING
      },
      response_code: {
        type: Sequelize.STRING
      },
      response_message: {
        type: Sequelize.STRING
      },
      response_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('t_log_apiresponses');
  }
};