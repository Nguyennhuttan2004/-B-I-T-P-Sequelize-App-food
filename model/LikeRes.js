export default (sequelize, DataTypes) => {
    const LikeRes = sequelize.define('LikeRes', {
        like_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        res_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_like: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

  return LikeRes;
};