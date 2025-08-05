import { CryptoProvider, Errors, UseCase } from '../../shared';
import { UserRepository } from '../../user';
import { LoginInput, LoginOutput } from '../dto';

export class LoginUseCase implements UseCase<LoginInput, LoginOutput> {
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptoProvider: CryptoProvider,
  ) {}

  async execute(input: LoginInput): Promise<LoginOutput> {
    const user = await this.repository.findByEmail(input.email);

    if (!user) {
      throw new Error(Errors.USER_NOT_FOUND);
    }

    const isPasswordValid = this.cryptoProvider.compare(
      input.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new Error(Errors.INVALID_CREDENTIALS);
    }

    return {
      user: user,
      token: '',
    };
  }
}
