import express from 'express';
import * as rateController from '../controller/Rate.controller.js';

const router = express.Router();

router.post('/', rateController.addRate);
router.get('/:res_id', rateController.getRatesByRestaurant);

export default router;