import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ccbj_capstone:ccbj_capstone123@capstonedatabase.j8gktwu.mongodb.net/';
const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
  try {
    res.send('APP IS RUNNING!');
  } catch (error) {
    next(error);
  }
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => 
    app.listen(
      PORT,
      () => console.log(`Server running on http://localhost:${PORT}`)
    ))
  .catch((error) => console.log(error));

import usersRoutes from './routes/users.js';
app.use('/users', usersRoutes);

import reviewsRoutes from './routes/reviews.js';
app.use('/reviews', reviewsRoutes);

import commentsRoutes from './routes/comments.js';
app.use('/reviews', commentsRoutes)