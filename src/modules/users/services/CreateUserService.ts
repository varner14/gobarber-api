import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUsersRepository';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequestUser {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password }: IRequestUser): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('Email address already used');
    }

    const hashPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export default CreateUserService;
