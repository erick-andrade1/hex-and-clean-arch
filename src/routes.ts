import type { Express } from 'express';
import { CreateUserUseCase, LoginUseCase, UpdateUserUseCase } from './core';
import {
  CreateUserController,
  LoginController,
  UpdateUserController,
} from './controllers';
import { UserRepositoryPrisma } from './repositories';
import {
  CryptoProviderImplementation,
  TokenProviderImplementation,
} from './externals';
import { auth } from './middlewares';

// --------------- PROVIDERS ---------------
const cryptoProvider = new CryptoProviderImplementation();
const tokenProvider = new TokenProviderImplementation(process.env.TOKEN_SECRET);

// --------------- MIDDLEWARES ---------------
const authMiddleware = auth(tokenProvider);

// --------------- REPOS ---------------
const userRepository = new UserRepositoryPrisma();

// --------------- USE CASES ---------------
const createUserUseCase = new CreateUserUseCase(userRepository, cryptoProvider);
const loginUseCase = new LoginUseCase(
  userRepository,
  cryptoProvider,
  tokenProvider,
);
const updateUserUseCase = new UpdateUserUseCase(userRepository);

export function createRoutes(server: Express) {
  new CreateUserController(server, createUserUseCase);
  new LoginController(server, loginUseCase);
  new UpdateUserController(server, updateUserUseCase, authMiddleware);
}
