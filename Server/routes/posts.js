import express from 'express';
const router = express.Router();
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/post.js';

router.get('/', getPosts)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id',deletePost)
router.put('/:id/likePost',likePost)


export default router;