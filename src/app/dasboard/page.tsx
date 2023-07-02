import { getStatus, servicesUser } from '@/services/request.services';
import { Board } from './components';
import styles from './dasboard.module.scss';
import { type UserGet, type StatusTicket } from '@/models';

async function getStatusTicket(): Promise<StatusTicket[]> {
  const res = await getStatus().catch((err) => {
    console.log(err);
  });

  return await res?.json();
}

async function getUser(): Promise<UserGet[]> {
  const res = await servicesUser().catch((err) => {
    console.log(err);
  });

  return await res?.json();
}

async function Page(): Promise<JSX.Element> {
  const statusTicket: StatusTicket[] = await getStatusTicket();
  const users: UserGet[] = await getUser();
  return (
    <main className={styles.main}>
      <Board columns={statusTicket} users={users} />
    </main>
  );
}

export default Page;
