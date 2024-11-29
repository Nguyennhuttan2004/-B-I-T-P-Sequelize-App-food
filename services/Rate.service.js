import { rateResModel } from "../Sequelize/connect.sequelize.js"; 

export const addRate = async (data) => {
    return await rateResModel.create(data);
};

export const getRatesByRestaurant = async (res_id) => {
    return await rateResModel.findAll({ where: { res_id } });
};