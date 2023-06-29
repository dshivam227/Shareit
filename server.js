import express from 'express';
import cors from 'cors';
import router from './server/routes/routes.js';
import DBConnection from './server/database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));