import { CryptoProvider } from '../../shared';
import { User, UserProps } from '../model/User';
import { UserRepository } from '../provider';

export class CreateUserUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptoProvider: CryptoProvider,
  ) {}

  async execute(userData: UserProps): Promise<User> {
    const password = this.cryptoProvider.hash(userData.password);

    const user = new User({
      ...userData,
      password,
    });

    return this.repository.create(user);
  }
}
