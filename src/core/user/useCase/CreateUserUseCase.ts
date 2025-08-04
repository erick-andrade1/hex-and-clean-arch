import { User, UserProps } from '../model/User';
import { UserRepository } from '../provider';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: UserProps): Promise<User> {
    const user = new User(userData);
    return this.userRepository.create(user);
  }
}
