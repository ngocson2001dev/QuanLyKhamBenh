import express from "express";
import homeController from "../controllers/homeController";
import loginController from "../controllers/loginController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/getUser", homeController.getAllUser);
  router.get("/editUser", homeController.editUser);
  router.post("/putUser", homeController.putUser);
  router.get("/deleteUser", homeController.deleteUser);
  //API
  router.post("/api/login", loginController.handleLoginController);

  return app.use("/", router);
};

module.exports = initWebRouter;
