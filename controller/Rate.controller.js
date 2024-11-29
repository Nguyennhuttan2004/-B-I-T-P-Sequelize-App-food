import * as rateService from '../services/Rate.service.js';

export const addRate = async (req, res) => {
    try {
        const rate = await rateService.addRate(req.body);
        res.status(201).json(rate);
    } catch (error) {
        console.error('Error adding rate:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getRatesByRestaurant = async (req, res) => {
    try {
        const rates = await rateService.getRatesByRestaurant(req.params.res_id);
        res.status(200).json(rates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};