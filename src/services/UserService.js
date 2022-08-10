import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isUserExist = await checkUserEmail(email);
      if (isUserExist) {
        //User already exist
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "roleId", "password"],
        });
        if (user) {
          //User already exist
          let checkPassword = await bcrypt.compareSync(password, user.password);
          if (checkPassword) {
            userData.errCode = 0;
            userData.errMessage = `OK`;
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = `Wrong password`;
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found!`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system. Please try other email !`;
      }
      resolve(userData);
    } catch (error) {
      reject();
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) resolve(true);
      else resolve(false);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "all") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId && userId !== "all") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLoginService: handleUserLogin,
  getAllUsersService: getAllUsers,
};
