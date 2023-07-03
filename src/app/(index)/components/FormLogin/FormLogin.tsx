/* eslint-disable multiline-ternary */
'use client';
import { Button, Input, MessageError } from '@/components';
import style from './form.module.scss';
import { type FormEvent, useState } from 'react';
import { requestLogin } from '@/helper';
import { useDispatch } from 'react-redux';
import { onAddUser } from '@/store/state/user';
import { useRouter } from 'next/navigation';
import { onAddCard } from '@/store/state/card';
import { CircularProgress } from '@mui/material';
import { setCookie } from 'cookies-next';

function FormLogin(): JSX.Element {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const path = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const dataForm: HTMLFormElement = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(dataForm));
    setLoading(true);
    requestLogin(data.email as string, data.password as string)
      .then((res) => {
        if (typeof res.user?.error === 'string' || !res.user?.document) {
          setMessage('Datos invalidos');
          setLoading(false);
          return;
        }
        dispatch(onAddUser(res.user));
        dispatch(onAddCard(res.ticket));
        setLoading(false);
        setMessage('');
        setCookie('session', 'true');
        path.push('/dasboard');
      })
      .catch((err) => {
        console.log(err);
        setMessage('Error');
        setLoading(false);
      });
  };
  return (
    <form className={style.form} autoComplete='off' onSubmit={onSubmit}>
      <div className={style.tab}>
        <span className={style.active}>Ingresar</span>
      </div>
      <Input label='email' type='email' name='email' />
      <Input label='password' type='password' name='password' />
      {loading ? (
        <CircularProgress
          sx={{
            marginBottom: '40px',
            marginTop: 'auto'
          }}
        />
      ) : (
        <Button name='Enviar' type='submit' />
      )}
      {message && <MessageError message={message} />}
    </form>
  );
}

export default FormLogin;
