import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'varner@skeel.com.br',
      password: '123456',
    });
    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with a same email from another', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'varner@skeel.com.br',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'varner@skeel.com.br',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
