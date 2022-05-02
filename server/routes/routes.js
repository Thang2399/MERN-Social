import express from "express";

import {getPosts, createPost, updatePost, getPost, deletePost, updateLikePost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/like_post/:id', updateLikePost);

export default router;