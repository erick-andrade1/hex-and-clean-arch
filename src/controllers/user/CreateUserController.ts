import { Express } from 'express';
import { CreateUserUseCase } from '../../core';
import { createUserList } from '../../factories';

export class CreateUserController {
  constructor(
    private readonly server: Express,
    private readonly useCase: CreateUserUseCase,
  ) {
    this.server.post('/api/users', async (req, res) => {
      try {
        const userData = req.body;
        const result = await this.useCase.execute({
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
        res.status(201).json(createUserList(result));
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }
}
