import { Errors, UseCase } from '../../shared';
import { UpdateUserDTO } from '../dto';
import { User } from '../model';
import { UserRepository } from '../provider';

export class UpdateUserUseCase implements UseCase<UpdateUserDTO, User> {
  constructor(private readonly repository: UserRepository) {}

  async execute(dto: UpdateUserDTO): Promise<User> {
    const user = await this.repository.findById(dto.id);

    if (!user) {
      throw new Error(Errors.USER_NOT_FOUND);
    }

    user.copyWith({
      name: dto.name,
      email: dto.email,
      updatedAt: new Date(),
    });

    return this.repository.update(user);
  }
}
