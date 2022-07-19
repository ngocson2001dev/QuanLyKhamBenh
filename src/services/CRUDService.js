import db from "../models/index";
import bcrypt from "bcryptjs";

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender === "1" ? true : false,
        phoneNumber: data.phoneNumber,
        address: data.address,
        roleId: data.roleId,
      });
      resolve("Create a new user succeed !");
    } catch (error) {
      reject(error);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var salt = bcrypt.genSaltSync(10);
      var hashPassword = await bcrypt.hashSync("B4c0//", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
};
