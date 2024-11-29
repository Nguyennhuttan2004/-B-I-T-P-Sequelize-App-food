import express from 'express';
import {sequelize} from './Sequelize/connect.sequelize.js';
import likeRoutes from './routes/Like.route.js';
import rateRoutes from './routes/Rate.route.js';
import orderRoutes from './routes/Order.route.js';

const app = express();
app.use(express.json());

app.use('/api/likes', likeRoutes);
app.use('/api/rates', rateRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.sync(); 
});