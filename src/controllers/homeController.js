import db from "../models/index";
import { createNewUser } from "../services/CRUDService";

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
  let mess = await createNewUser(req.body);
  console.log(mess);
  return res.send("crud.ejs");
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
