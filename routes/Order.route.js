import express from 'express';
import * as orderController from '../controller/Order.controller.js';

const router = express.Router();

router.post('/', orderController.addOrder);
router.get('/user/:user_id', orderController.getOrdersByUser);

export default router;