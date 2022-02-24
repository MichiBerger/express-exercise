import express from 'express';
import jokes from './routes/jokes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

try {
  await mongoose.connect('mongodb://localhost:27017/jokes-app');
  console.log('Connected to MongoDB.');
} catch (error) {
  console.error('ERROR: could not connect.', error.message);
}

const app = express();
const port = 3333;

app.use(express.json());

app.use('/jokes', jokes);

app.listen(port, () => {
  console.log(`👏 Listening on port ${port}`);
});
