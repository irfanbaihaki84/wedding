import Express from 'express';
import Wedding from '../models/weddingModel.js';
import data from '../data.js';

const weddingRouter = Express.Router();

// membuat collection video di database rent
weddingRouter.get('/seed', async (req, res) => {
  // buka browser tulis http://localhost:3002/api/seed dan tekan enter untuk mengesekusi
  await Wedding.deleteOne({});
  const createdWedding = await Wedding.insertMany(data.wedding);
  res.send({ createdWedding });
});

// menampilkan seluruh data wedding
weddingRouter.get('/all', async (req, res) => {
  try {
    const weddings = await Wedding.find();
    res.status(200).send(weddings);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

export default weddingRouter;
