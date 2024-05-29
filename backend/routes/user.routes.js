import { Router } from "express";
import { getUser, getUsers, editUser, changeAvatar, registerUser, loginUser } from "../controllers/user.controller.js";
const router = Router();
import authHandler from "../middlewares/auth.middleware.js";

router.route('/').get(getUsers);
router.route("/:id").get(getUser);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/change-avatar").post(authHandler,changeAvatar);
router.route("/edit-user").patch(editUser);


export default router;