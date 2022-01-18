let express = require("express");
let userRouter = express.Router();
let userController = require("../controllers/usersController");

userRouter.route("/")
    .get(userController.testDefault);
userRouter.route("/newUser/:firstName/:lastName/:email")
    .get(userController.addNewUser);


module.exports = userRouter;