import { hash } from 'bcryptjs';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUsersRepository';

interface IRequestUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUserRepository) {}

  public async execute({ name, email, password }: IRequestUser): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('Email address already used');
    }

    const hashPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export default CreateUserService;
