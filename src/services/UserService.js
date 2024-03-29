import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isUserExist = await checkUserEmail(email);
      if (isUserExist) {
        //User already exist
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "roleId", "password", "firstName", "lastName"],
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

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email is exist
      let check = await checkUserEmail(data.email);
      if (check) {
        resolve({
          errCode: 1,
          message: 'Email này đã tồn tại trên hệ thống!'
        })
      }
      else {
        let hashPassword = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPassword,
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          phoneNumber: data.phoneNumber,
          address: data.address,
          roleId: data.roleId,
          positionId: data.positionId,
          image: data.image
        });
        resolve({
          errCode: 0,
          message: "Thêm mới User thành công !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: 'Missing required parameter'
        })
      }
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false
      })
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.roleId = data.roleId;
        user.positionId = data.positionId;
        user.gender = data.gender;
        user.phoneNumber = data.phoneNumber;
        if (data.image) {
          user.image = data.image
        }
        await user.save();
        resolve({
          errCode: 0,
          message: 'Update the user successed!'
        })
      } else {
        resolve({
          errCode: 1,
          errMessage: `User's not found!`
        })
      }
    } catch (error) {
      reject(error);
    }
  })
}

let deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    let user = await db.User.findOne({
      where: { id: id }
    });
    if (!user) {
      resolve({
        errCode: 2,
        errMessage: "Người dùng không tồn tại"
      })
    }
    await db.User.destroy({
      where: { id: id }
    });
    resolve({
      errCode: 0,
      message: "Xóa user thành công !"
    })
  })
};

let getAllCode = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameters'
        });
      } else {
        let res = {};
        let allcode = await db.Allcode.findAll({
          where: { type: typeInput }
        });
        res.errCode = 0;
        res.data = allcode;
        resolve(res);
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  handleUserLoginService: handleUserLogin,
  getAllUsersService: getAllUsers,
  createNewUserService: createNewUser,
  deleteUserService: deleteUser,
  editUserService: editUser,
  getAllCodeService: getAllCode
};
