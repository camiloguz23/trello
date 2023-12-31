import { headerPost } from './config/header';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost/api/' : 'https://appisistem.000webhostapp.com/api/';

export const serviceLogin = async(email: string, password: string): Promise<Response> => {
  const data = new URLSearchParams();
  data.append('email', email);
  data.append('password', password);
  return await fetch(`${URL}login.php`, headerPost(data.toString()));
};

export const servicesTicket = async(idUser?: string): Promise<Response> => {
  const params = idUser ? `/${idUser}` : '';
  return await fetch(`${URL}tickets.php${params}`);
};

export const getStatus = async(): Promise<Response> => {
  return await fetch(`${URL}`);
};

export const servicePutTicket = async(idTicket: number, state: number): Promise<Response> => {
  const data = new URLSearchParams();
  data.append('id', `${idTicket}`);
  data.append('status', `${state}`);
  data.append('action', 'edit');
  return await fetch(`${URL}tickets.php`, headerPost(data.toString()));
};

export const servicesUser = async(): Promise<Response> => {
  return await fetch(`${URL}user.php/`);
};

export const servicesCreateTicket = async(document: string, description: string, state: string): Promise<Response> => {
  const data = new URLSearchParams();
  data.append('document', document);
  data.append('description', description);
  data.append('status', state);
  data.append('action', 'create');
  return await fetch(`${URL}tickets.php`, headerPost(data.toString()));
};
