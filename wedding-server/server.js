import Express from 'express';
import dotenv from 'dotenv';
import Mongoose from 'mongoose';
import weddingRouter from './routes/weddingRoutes.js';

dotenv.config();

Mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('connect to db'))
  .error((error) => console.log(error.message));

const app = Express();
app.use(Express.json());

app.use('/api/wedding', weddingRouter);

const port = process.env.PORT;
app.listen(port, () => console.log('listening on port: ' + port));
