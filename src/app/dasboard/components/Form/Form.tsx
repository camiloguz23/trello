'use client';
import { type CreateTicket, type StatusTicket, type UserGet } from '@/models';
import style from './form.module.scss';
import { Button, Input } from '@/components';
import { useState, type FormEvent } from 'react';
import { requestCreateTicket } from '@/helper';
import { useDispatch } from 'react-redux';
import { onAddCard } from '@/store/state/card';

interface Prop {
  status: StatusTicket[];
  users: UserGet[];
  onClose: (value: false) => void;
}

function Form({ status, users, onClose }: Prop): JSX.Element {
  const [isEmptyForm, setIsEmptyForm] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const dataForm: HTMLFormElement = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(dataForm));
    const isEmpty: boolean = Object.values(data).some((item) => item === '');
    setIsEmptyForm(isEmpty);
    void requestCreateTicket(data as CreateTicket).then((info) => {
      if (info.length) {
        dispatch(onAddCard(info));
        onClose(false);
      }
    });
  };
  return (
    <div className={style.contentForm}>
      <form action='' onSubmit={onSubmitForm}>
        <Input label='Descripcion de la tarea' name='description' type='text' />
        <select name='document'>
          <option value=''>Seleccione un Team Member</option>
          {users
            .filter((item) => item.nameRol !== 'admin')
            .map((item) => (
              <option key={item.document} value={item.document}>
                {item.name}
              </option>
            ))}
        </select>

        <select name='status'>
          <option value=''>Seleccione un Team Member</option>
          {status.map((item) => (
            <option key={item.idStatus} value={item.idStatus}>
              {item.nameStatus}
            </option>
          ))}
        </select>
        <Button name='Crear Ticket' type='submit' />
        {isEmptyForm && <span className={style.error}>Completar los campos</span>}
      </form>
    </div>
  );
}

export default Form;
