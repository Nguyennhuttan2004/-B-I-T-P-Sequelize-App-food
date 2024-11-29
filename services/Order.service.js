import { ordersModel } from "../Sequelize/connect.sequelize.js"; 

export const addOrder = async (data) => {
    return await ordersModel.create(data);
};

export const getOrdersByUser = async (user_id) => {
    return await ordersModel.findAll({ where: { users_id: user_id } });
};