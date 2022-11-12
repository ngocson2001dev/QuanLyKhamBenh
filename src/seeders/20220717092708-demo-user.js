"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123",
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
      {
        email: "bacsi@gmail.com",
        password: "123",
        firstName: "Trần Cường",
        lastName: "",
        gender: "M",
        phoneNumber: "0342432432",
        image: "",
        address: "Hà Nội",
        roleId: "R2",
        positionId: "P4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
