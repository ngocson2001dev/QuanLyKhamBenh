import db from "../models/index";
import bcrypt from "bcryptjs";

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var salt = bcrypt.genSaltSync(10);
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUserService = async (data) => {
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

let getAllUserService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll();
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

let getUserByIdService = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userid },
      });
      user ? resolve(user) : resolve({});
    } catch (error) {
      reject(error);
    }
  });
};

let updateUserService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.userID },
      });
      if (user) {
        (user.firstName = data.firstName),
          (user.lastName = data.lastName),
          (user.address = data.address),
          (user.phoneNumber = data.phoneNumber),
          (user.gender = data.gender),
          console.log(user);
        await user.save();
        resolve();
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};
let deleteUserService = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: userid },
      });
      if (user) await user.destroy();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUserService: createNewUserService,
  getAllUserService: getAllUserService,
  getUserByIdService: getUserByIdService,
  updateUserService: updateUserService,
  deleteUserService: deleteUserService,
};
