import { CryptoProvider } from '../../shared';
import { User } from '../model';
import { UserRepository } from '../provider';

export class LoginUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptoProvider: CryptoProvider,
  ) {}

  async execute(email: string, password: string): Promise<User> {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = this.cryptoProvider.compare(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  }
}
