import User from '../infra/typeorm/entities/User';
import iCreateUserDto from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: iCreateUserDto): Promise<User>;
  save(user: User): Promise<User>;
}
