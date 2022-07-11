"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "m_products",
      [
        {
          product_name: "BAJAJ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "HONDA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "KAWASAKI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "SUZUKI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "YAMAHA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "DATSUN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "SUPRA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "ISUZU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "MAZDA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "TOYOTA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("m_products", null, {});
  },
};
