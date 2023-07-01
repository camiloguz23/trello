export interface User {
  document: number;
  email: string;
  name: string;
  password: string;
  nameRol: string;
}
export interface Ticket {
  user: number;
  name: string;
  description: string;
  nameStatus: string;
  idTicket: number;
}
