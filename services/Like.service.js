import { likeResModel } from "../Sequelize/connect.sequelize.js"; 

export const addLike = async (data) => {
    return await likeResModel.create(data);
};

export const removeLike = async (id) => {
    return await likeResModel.destroy({ where: { like_id: id } });
};

export const getLikesByRestaurant = async (res_id) => {
    return await likeResModel.findAll({ where: { res_id } });
};