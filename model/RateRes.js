// models/RateRes.js
export default (sequelize, DataTypes) => {
    const RateRes = sequelize.define('RateRes', {
        rate_id: {
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
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_rate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    return RateRes;
};