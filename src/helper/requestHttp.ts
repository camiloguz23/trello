import { type CreateTicket, type Ticket, type User } from '@/models';
import { serviceLogin, servicePutTicket, servicesCreateTicket, servicesTicket } from '@/services';

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
    return undefined;
  }
  console.log(body);
  await servicePutTicket(body).catch((err) => {
    console.log(err);
  });

  const rol = userId.nameRol === 'admin' ? '' : `${userId.document}`;
  const responseTicket = await servicesTicket(rol);
  const dataTickets: Ticket[] = await responseTicket.json();
  return dataTickets;
};

export const requestCreateTicket = async(data: CreateTicket): Promise<Ticket[]> => {
  const responseCreate = await servicesCreateTicket(data.document, data.description, data.status);
  const info: string = await responseCreate.text();
  if (info === 'Inserción exitosa') {
    const responseTicket = await servicesTicket('');
    const dataTickets: Ticket[] = await responseTicket.json();
    return dataTickets;
  }

  return [];
};
