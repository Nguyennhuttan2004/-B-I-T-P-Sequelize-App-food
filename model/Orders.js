// models/Orders.js
export default (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        food_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        arr_sub_id: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    });

    return Orders;
};