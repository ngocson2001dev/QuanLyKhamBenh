import userService from "../services/UserService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let userData = await userService.handleUserLoginService(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters",
      users: [],
    });
  }
  let users = await userService.getAllUsersService(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUserService(req.body);
  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.editUserService(data);
  return res.status(200).json(message);

}

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters UserID!"
    })
  }
  let message = await userService.deleteUserService(req.body.id);
  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (error) {
    console.log('Get all code error: ', error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server'
    })
  }
}
module.exports = {
  handleLoginController: handleLogin,
  handleGetAllUsersController: handleGetAllUsers,
  handleCreateNewUserController: handleCreateNewUser,
  handleDeleteUserController: handleDeleteUser,
  handleEditUserController: handleEditUser,
  getAllCodeController: getAllCode
};
