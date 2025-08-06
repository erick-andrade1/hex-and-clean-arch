import { Express } from 'express';
import { LoginUseCase } from '../../core';
import { createUserList } from '../../factories';

export class LoginController {
  constructor(
    private readonly server: Express,
    private readonly useCase: LoginUseCase,
  ) {
    this.server.post('/api/auth/login', async (req, res) => {
      try {
        const body = req.body;
        const result = await this.useCase.execute({
          email: body.email,
          password: body.password,
        });
        res.status(200).json({
          user: createUserList(result.user),
          token: result.token,
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }
}
