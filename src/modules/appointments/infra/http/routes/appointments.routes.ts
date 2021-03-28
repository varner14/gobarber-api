/* eslint-disable spaced-comment */
import { Router } from 'express';
import { parseISO } from 'date-fns';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// Rota GET

//appointmentsRouter.get('/', async (request, response) => {
//  console.log(request.user);

//  const appointments = await appointmentsRepository.find();

//  return response.json(appointments);
//});

// Rota POST
appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const appointmentsRepository = new AppointmentsRepository();
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
