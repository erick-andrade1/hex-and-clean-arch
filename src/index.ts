import 'dotenv/config';
import express from 'express';
import { createRoutes } from './routes';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

createRoutes(app);
