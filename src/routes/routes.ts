import express from "express";
import Post from "../controllers/controllers"

const router = express.Router();

router.get("/", Post.getAllPost);
router.get("/:id", Post.getPost);
router.post("/", Post.createPost);
router.put("/:id", Post.updatePost);
router.delete("/:id", Post.deletePost);

export default router;