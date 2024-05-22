import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { getUser, getUsers, editUser, changeAvatar, registerUser, loginUser } from "../controllers/user.controller.js";
const router = Router();

router.route('/').get(getUsers);
router.route("/:id").get(getUser);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/change-avatar").post(changeAvatar);
router.route("/edit-user").post(editUser);


export default router;