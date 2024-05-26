import path from 'path';
import express from 'express';
import cors from 'cors';
import connectToMongoDB from './database/connectToMongoDB.js';
import dotenv from 'dotenv';
import upload from 'express-fileupload';
import userRoutes from './routes/user.routes.js';
import { errorHandler, notFound } from './middlewares/error.middleware.js';

const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(upload());
app.use('/uploads', express.static(__dirname + '/uploads'));

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use('/api/users', userRoutes)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running on port: ${PORT}`);
})