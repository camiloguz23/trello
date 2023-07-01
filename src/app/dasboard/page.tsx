import { getStatus } from '@/services/index.services';
import { Board, Form } from './components';
import styles from './dasboard.module.scss';
import { type StatusTicket } from '@/models';

async function getStatusTicket(): Promise<StatusTicket[]> {
  const res = await getStatus().catch((err) => {
    console.log(err);
  });

  return await res?.json();
}

async function page(): Promise<JSX.Element> {
  const statusTicket: StatusTicket[] = await getStatusTicket();
  return (
    <main className={styles.main}>
      <Board columns={statusTicket} />
      {/* <Form /> */}
    </main>
  );
}

export default page;
