import express from 'express';
import * as likeController from '../controller/Like.controller.js';

const router = express.Router();

router.post('/', likeController.addLike);
router.delete('/:id', likeController.removeLike);
router.get('/:res_id', likeController.getLikesByRestaurant);

export default router;