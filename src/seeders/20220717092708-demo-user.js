"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "$2a$10$gvBMR8qjY4lAa6JslYJ39egO/D1.qomqNwznE6qLuU9xwib7yQHZS",
        firstName: "Do Son",
        lastName: "",
        gender: "M",
        phoneNumber: "0342432432",
        image: "",
        address: "Hà Nội",
        roleId: "R1",
        positionId: "P1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
