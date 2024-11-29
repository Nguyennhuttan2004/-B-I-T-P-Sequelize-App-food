// Sequelize/connect.sequelize.js
import { Sequelize, DataTypes } from 'sequelize';
import LikeRes from '../model/LikeRes.js';
import RateRes from '../model/RateRes.js';
import Orders from '../model/Orders.js';

// Cấu hình kết nối
export const sequelize = new Sequelize('app_foods', 'root', '1234', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    logging: false,
});

// Kiểm tra kết nối
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công với cơ sở dữ liệu.');
    } catch (error) {
        console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
    }
};

testConnection();

// Khởi tạo các mô hình
export const likeResModel = LikeRes(sequelize, DataTypes);
export const rateResModel = RateRes(sequelize, DataTypes);
export const ordersModel = Orders(sequelize, DataTypes);


