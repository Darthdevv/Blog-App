import { Router } from 'express';
import { getPost, getPosts, getPostsByCategory, getUserPosts, editPost, createPost, deletePost } from '../controllers/post.controller.js';
import authHandler from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(getPosts).post(authHandler,createPost);
router.route("/:id").get(getPost).patch(authHandler, editPost).delete(authHandler, deletePost);
router.route("/categories/:category").get(getPostsByCategory);
router.route("/users/:id").get(getUserPosts);


export default router;