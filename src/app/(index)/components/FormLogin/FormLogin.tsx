'use client';
import { Button, Input } from '@/components';
import style from './form.module.scss';
import { type FormEvent, useState } from 'react';
import { requestLogin } from '@/helper';
import { useDispatch } from 'react-redux';
import { onAddUser } from '@/store/state/user';
import { useRouter } from 'next/navigation';
import { onAddCard } from '@/store/state/card';

function FormLogin(): JSX.Element {
  const [tab, setTab] = useState('log');
  const dispatch = useDispatch();
  const path = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const dataForm: HTMLFormElement = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(dataForm));
    console.log(data)
    requestLogin(data.email as string, data.password as string)
      .then((res) => {
        dispatch(onAddUser(res.user));
        dispatch(onAddCard(res.ticket));
        path.push('dasboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className={style.form} autoComplete='off' onSubmit={onSubmit}>
      <div className={style.tab}>
        <span
          className={tab === 'log' ? style.active : ''}
          onClick={() => {
            setTab('log');
          }}
        >
          Ingresar
        </span>
        <span
          className={tab === 'reg' ? style.active : ''}
          onClick={() => {
            setTab('reg');
          }}
        >
          Registrarse
        </span>
      </div>
      {tab === 'reg' && (
        <>
          <Input label='documento' type='text' name='documento' />
          <Input label='name' type='text' name='name' />
        </>
      )}
      <Input label='email' type='email' name='email' />
      <Input label='password' type='password' name='password' />
      <Button name='Enviar' type='submit' />
    </form>
  );
}

export default FormLogin;
