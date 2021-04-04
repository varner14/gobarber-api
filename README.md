# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar MailTrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve aconteer em segundo plano (background job);


**RN**

- O link enviado por email para  resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao reseta-la;


# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já atualizado;
- Para atualizar sua senha, o usuário deve informar a sua senha;


# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia especifico
- O prestador deve receber uma noificação sempre que houver um novo agendamento;
- O prestaqdor deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia deve ser armazenados em cache;
- As notificações do prestador deve ser armazenado em mongodb;

**RN**

- A Notificação deve ter um status de lida ou não lida para que o prestador possa controlar;



# Agendamento de serviços

**RF**

- O usuário deve poder listor todos prestadores de serviços disponiveis;
- o usuário deve poder listar os dias de um mes com horarios disponivel de um prestador;
- O usuário deve poder listar horarios disponiveis de um especifico prestador;
- O usuari deve poder realizar um novo agendamento

**RNF**

- Listagen de prestadores deve ser armazenados em cache;

**RN**

- Cada agendamento deve durar 1h examtamente
- Os Agendamentos devem estar disponiveis entra as 8 ate as 18h  (Primeiro as 8h, ultimo as 17:00)
- O usuário não pode agendar um horário já agendado;
- O usuário não pode agendar um horario passado;


