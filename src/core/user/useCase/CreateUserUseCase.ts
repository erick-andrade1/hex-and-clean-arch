import { CryptoProvider, UseCase } from '../../shared';
import { CreateUserDTO } from '../dto';
import { User } from '../model/User';
import { UserRepository } from '../provider';

export class CreateUserUseCase implements UseCase<CreateUserDTO, User> {
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptoProvider: CryptoProvider,
  ) {}

  async execute(userData: CreateUserDTO): Promise<User> {
    const password = this.cryptoProvider.hash(userData.password);

    const user = new User({
      ...userData,
      password,
    });

    return this.repository.create(user);
  }
}
