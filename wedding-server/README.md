### wedding db

buat folder: mkdir wedding-db

masuk kedalam folder: cd wedding-db

instal npm: npm install init -y

instal nodemon di depDependencies: npm i nodemon --save-dev

instal express di dependencies: npm i express --save

instal mongoose di dependencies: npm i mongoose --save

instal dotenv di dependencies: npm i dotenv --save

### packages.json

```javascript
{
  "name": "wedding-db",
  "type": "module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
      "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.0.2"
  },
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^8.0.4"
  }
}
```

buat file server.js: touch server.js

### server.js

```javascript
import Express from 'express';
import dotenv from 'dotenv';
import Mongoose from 'mongoose';

dotenv.config();

Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connect to db');
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = Express();
app.use(Express.json());

const port = process.env.PORT;
app.listen(port, () => console.log(`server at http://localhost:${port}`));
```

buat file .gitignore: touch .gitignore

### .gitignore

```javascript
node_modules;
.env;
```

buat file .env: touch .env

### .env

```javascript
PORT=3002
MONGODB_URI=mongodb://127.0.0.1:27017/latihan-db
```

buat folder models dan file weddingModel.js: mkdir models dan touch weddingModel.js

### weddingModel.js

```javascript
import Mongoose from 'mongoose';

const weddingSchema = new Mongoose.Schema(
  {
    programName: { type: String, required: true },
    groom: { type: Array },
    bride: { type: Array },
    fatherGroom: { type: String },
    motherGroom: { type: String },
    fatherBride: { type: String },
    motherBride: { type: String },
    guests: [
      {
        name: String,
        from: String,
        phone: Number,
        occupation: String,
        status: String,
        message: String,
      },
    ],
    imageGroom: { type: String },
    urlImageGroom: { type: String },
    imageBride: { type: String },
    urlImageBride: { type: String },
    video: { type: String },
    urlVideo: { type: String },
  },
  {
    timestamps: true,
  }
);

const Wedding = Mongoose.model('Wedding', weddingSchema);
export default Wedding;
```

buat folder routes dan file weddingRoutes.js: mkdir routes dan touch weddingRoutes.js

### weddingRoutes.js

```javascript
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
```

buat file data.js: touch data.js

### data.js

```javascript
const data = {
  wedding: [
    {
      programName: 'Wedding',
      groom: ['Romeo', 'Adam'],
      bride: ['Juliet', 'Hawa'],
      fatherGroom: 'Andy Adam',
      motherGroom: 'Asih Adam',
      fatherBride: 'Fikri Hawa',
      motherBride: 'Yuli Hawa',
      guests: [
        {
          name: 'Anya',
          from: 'Tangerang',
          phone: '081987654320',
          occupation: 'Family Adam',
          status: 'Vip',
          message: 'Selamat menikah',
        },
        {
          name: 'Reza',
          from: 'Jakarta',
          phone: '081987654321',
          occupation: 'Family Hawa',
          status: 'Vip',
          message: 'Selamat menikah',
        },
        {
          name: 'Jacob',
          from: 'Bekasi',
          phone: '081987654322',
          occupation: 'Atasan Kerja',
          status: 'Vip',
          message: 'Selamat menikah',
        },
        {
          name: 'Ratih',
          from: 'Bogor',
          phone: '081987654323',
          occupation: 'Teman',
          status: '',
          message: 'Selamat menikah',
        },
        {
          name: 'Rian',
          from: 'Jakarta',
          phone: '081987654324',
          occupation: 'Tetangga',
          status: '',
          message: 'Selamat menikah',
        },
      ],
      imageGroom: 'imageGroom.jpg',
      urlImageGroom: 'http://localhost:3002/assets/groomImage.jpg',
      imageBride: 'imageBride.jpg',
      urlImageBride: 'http://localhost:3002/assets/brideImage.jpg',
      video: 'videoWdding.mp4',
      urlVideo: 'http://localhost:3002/assets/videoWedding.mp4',
    },
  ],
};
export default data;
```
