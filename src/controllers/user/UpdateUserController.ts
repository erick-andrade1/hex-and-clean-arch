import { Express, Request, Response } from 'express';
import { UpdateUserUseCase } from '../../core';
import { createUserList } from '../../factories';
import { AuthenticatedRequest } from '../../middlewares';

export class UpdateUserController {
  constructor(
    private readonly server: Express,
    private readonly useCase: UpdateUserUseCase,
    ...middlewares: any[]
  ) {
    this.server.put(
      '/api/users/:id',
      ...middlewares,
      async (req: AuthenticatedRequest, res: Response) => {
        try {
          const userData = req.body;
          const id = req.params.id;
          console.log(req.userId);
          const result = await this.useCase.execute({
            id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
          });
          res.status(200).json(createUserList(result));
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    );
  }
}
