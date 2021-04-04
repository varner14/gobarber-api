/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable spaced-comment */
import FakeEmailProvider from '@shared/container/providers/MailProvider/fakes/FakeEmailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgoPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeEmailProvider = new FakeEmailProvider();

    const sendMail = jest.spyOn(fakeEmailProvider, 'sendMail');

    const sendForgoPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeEmailProvider,
    );

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await sendForgoPasswordEmail.execute({
      email: 'johndoe@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
