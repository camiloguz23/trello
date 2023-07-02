'use client';

import style from './board.module.scss';
import { Columns } from './components';
import { useSelector } from 'react-redux';
import { type UserGet, type StatusTicket, type Ticket, type User } from '@/models';
import { type StructureStore } from '@/store/store';
import { useState } from 'react';
import Form from '../Form/Form';

interface Prop {
  columns: StatusTicket[];
  users: UserGet[];
}
function Board({ columns, users }: Prop): JSX.Element {
  const TODOS: Ticket[] = useSelector((store: StructureStore) => store.card);
  const user: User = useSelector((store: StructureStore) => store.user);
  const [open, setOpen] = useState<boolean>(false);

  const onFilterTodo = (state: string): Ticket[] => {
    const result = TODOS.filter((item) => item.nameStatus === state);
    return result;
  };

  return (
    <>
      {user.nameRol === 'admin' && (
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className={style.btnCreate}
        >
          Crear ticket
        </button>
      )}

      <div className={style.board}>
        {columns.map((item, index) => (
          <Columns key={index} title={item.nameStatus} columns={columns} idStatus={index + 1} todos={onFilterTodo(item.nameStatus)} />
        ))}
        <img className={style.boardImg} src={'/img/board.svg'} alt='board' />
        <img className={style.scheduleImg} src={'/img/schedule.svg'} alt='board' />
      </div>
      {open && (
        <Form
          users={users}
          status={columns}
          onClose={(value) => {
            setOpen(value);
          }}
        />
      )}
    </>
  );
}

export default Board;
