import { Guard } from '@/guard';
import { FormLogin } from './components';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <img src={'/img/login.svg'} alt='login' className={styles.imgLogin} />
      <Guard>
        <FormLogin />
      </Guard>
    </main>
  );
}
