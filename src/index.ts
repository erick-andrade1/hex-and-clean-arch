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
import { CreateUserController } from './controllers';
import { UserRepositoryPrisma } from './repositories';
import { CryptoProviderImplementation } from './externals';

const userRepository = new UserRepositoryPrisma();
const cryptoProvider = new CryptoProviderImplementation();
const createUserUseCase = new CreateUserUseCase(userRepository, cryptoProvider);

new CreateUserController(app, createUserUseCase);
