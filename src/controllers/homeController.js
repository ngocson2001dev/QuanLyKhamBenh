import db from "../models/index";
import {
  createNewUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {}
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let mess = await createNewUserService(req.body);
  console.log(mess);
  return res.send("crud.ejs");
};

let getAllUser = async (req, res) => {
  let data = await getAllUserService();
  return res.render("homePage.ejs", {
    data: data,
  });
};

let editUser = async (req, res) => {
  let UserID = req.query.id;
  if (UserID) {
    let userData = await getUserByIdService(UserID);
    return res.render("editUser.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found !");
  }
};

let putUser = async (req, res) => {
  let data = req.body;
  await updateUserService(data);
  return res.send("Update user done !");
};

let deleteUser = async (req, res) => {
  let id = req.query.id;
  await deleteUserService(id);
  return res.send("delete the user success!");
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getAllUser: getAllUser,
  editUser: editUser,
  putUser: putUser,
  deleteUser: deleteUser,
};
