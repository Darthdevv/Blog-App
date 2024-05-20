import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
})