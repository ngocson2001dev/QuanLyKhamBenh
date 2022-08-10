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
  console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};

let handleCreateUser = async (req, res) => {};

module.exports = {
  handleLoginController: handleLogin,
  handleGetAllUsersController: handleGetAllUsers,
  handleCreateUserController: handleCreateUser,
};
