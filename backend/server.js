import path from 'path';
import { fileURLToPath } from "url";
import express from 'express';
import cors from 'cors';
import connectToMongoDB from './database/connectToMongoDB.js';
import dotenv from 'dotenv';
import upload from 'express-fileupload';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js'
import { errorHandler, notFound } from './middlewares/error.middleware.js';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "https://blog-app-production-6e12.up.railway.app",
  })
);
app.use(upload());
app.use('/uploads', express.static(__dirname + '/uploads'));

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running on port: ${PORT}`);
})