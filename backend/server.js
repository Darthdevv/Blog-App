import express from 'express';
import cors from 'cors';
import connectToMongoDB from './database/connectToMongoDB.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { errorHandler, notFound } from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use('/api/users', userRoutes)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running on port: ${PORT}`);
})