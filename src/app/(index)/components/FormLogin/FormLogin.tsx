'use client';
import { Button, Input } from '@/components';
import style from './form.module.scss';
import { type FormEvent, useState } from 'react';
import { requestLogin } from '@/helper';
import { useDispatch } from 'react-redux';
import { onAddUser } from '@/store/state/user';
import { useRouter } from 'next/navigation';
import { onAddCard } from '@/store/state/card';
import { CircularProgress } from '@mui/material';

function FormLogin(): JSX.Element {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const path = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const dataForm: HTMLFormElement = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(dataForm));
    setLoading(true);
    requestLogin(data.email as string, data.password as string)
      .then((res) => {
        dispatch(onAddUser(res.user));
        dispatch(onAddCard(res.ticket));
        setLoading(false);
        path.push('/dasboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className={style.form} autoComplete='off' onSubmit={onSubmit}>
      <div className={style.tab}>
        <span className={style.active}>Ingresar</span>
      </div>
      <Input label='email' type='email' name='email' />
      <Input label='password' type='password' name='password' />
      {loading ? <CircularProgress /> : <Button name='Enviar' type='submit' />}
    </form>
  );
}

export default FormLogin;
