import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// --------------- Rotas Abertas ---------------
import { CreateUserUseCase } from './core';
import { CreateUserController } from './controllers/user/CreateUserController';
import { UserRepositoryPrisma } from './repositories/UserRepositoryPrisma';

const userRepository = new UserRepositoryPrisma();
const createUserUseCase = new CreateUserUseCase(userRepository);

new CreateUserController(app, createUserUseCase);
