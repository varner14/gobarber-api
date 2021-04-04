/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable spaced-comment */
import { injectable, inject } from 'tsyringe';

//import User from '../infra/typeorm/entities/User';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUserRepository from '../repositories/IUsersRepository';

interface IRequestUser {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequestUser): Promise<void> {
    this.mailProvider.sendMail(
      email,
      'Pedido de recureação de senha recebido.',
    );
  }
}

export default SendForgotPasswordEmailService;
