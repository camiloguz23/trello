export interface Cards {
  id: string;
  title: string;
  status: 'done' | 'in progress' | 'todo';
  description: string;
}
