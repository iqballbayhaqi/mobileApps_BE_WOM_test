"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "m_branches",
      [
        {
          branch_name: "BALARAJA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "BALARAJA SYARIAH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "BEKASI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "BEKASI SYARIAH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "BSD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "BSD SYARIAH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "CIKANDE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "CIKANDE SYARIAH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "MAUK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "MAUK SYARIAH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "TANGERANG SELATAN 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "TANGERANG 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "RAWAMANGUN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "RAWAMANGUN SYARIAH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          branch_name: "ROXY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("m_branches", null, {});
  },
};
