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
import { CreateUserUseCase, LoginUseCase } from './core';
import { CreateUserController, LoginController } from './controllers';
import { UserRepositoryPrisma } from './repositories';
import { CryptoProviderImplementation } from './externals';

// --------------- PROVIDERS ---------------
const cryptoProvider = new CryptoProviderImplementation();

// --------------- REPOS ---------------
const userRepository = new UserRepositoryPrisma();

// --------------- USE CASES ---------------
const createUserUseCase = new CreateUserUseCase(userRepository, cryptoProvider);
const loginUseCase = new LoginUseCase(userRepository, cryptoProvider);

// --------------- DECLARATIONS ---------------
new CreateUserController(app, createUserUseCase);
new LoginController(app, loginUseCase);
