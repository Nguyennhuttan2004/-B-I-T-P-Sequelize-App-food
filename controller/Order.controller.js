import * as orderService from '../services/Order.service.js';

export const addOrder = async (req, res) => {
    try {
        const order = await orderService.addOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.error('Error adding order:', error);
        res.status(500).json({ error: error.message });
    }
};
export const getOrdersByUser = async (req, res) => {
    try {
        const orders = await orderService.getOrdersByUser(req.params.user_id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};