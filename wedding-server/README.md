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
  .then(() => console.log('connect to db'))
  .error((error) => console.log(error.message));

const app = Express();
app.use(Express.json());

const port = process.env.PORT;
app.listen(port, () => console.log('listening on port: ' + port));
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
MONGODB_URI=mongodb://127.0.0.1:27017/rent
```
