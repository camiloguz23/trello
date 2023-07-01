import { type Ticket, type User } from '@/models';
import { serviceLogin, servicePutTicket, servicesTicket } from '@/services/index.services';

export const requestLogin = async(email: string, password: string): Promise<{ user: User; ticket: Ticket[] }> => {
  const response = await serviceLogin(email, password);
  const dataUser: User = await response.json();
  const rol: string = dataUser.nameRol === 'Team member' ? `${dataUser.document}` : '';
  const responseTicket = await servicesTicket(rol);
  const dataTickets = await responseTicket.json();

  return {
    user: dataUser,
    ticket: dataTickets
  };
};

export const requestPutTicket = async(userId: User, idTicket: number, state: number): Promise<Ticket[] | undefined> => {
  const body = JSON.stringify({
    id: idTicket,
    status: state
  });

  if (userId.nameRol.includes('Team') && state === 4) {
    return undefined
  }

  await servicePutTicket(body).catch((err) => {
    console.log(err);
  });
  const responseTicket = await servicesTicket(`${userId.document}`);
  const dataTickets: Ticket[] = await responseTicket.json();
  return dataTickets
};
