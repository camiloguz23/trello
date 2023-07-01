'use client';

import style from './board.module.scss';
import { Columns } from './components';
import { useSelector } from 'react-redux';
import { type StatusTicket, type Ticket } from '@/models';
import { type StructureStore } from '@/store/store';

interface Prop {
  columns: StatusTicket[];
}
function Board({ columns }: Prop): JSX.Element {
  const TODOS: Ticket[] = useSelector((store: StructureStore) => store.card);

  const onFilterTodo = (state: string): Ticket[] => {
    const result = TODOS.filter((item) => item.nameStatus === state);
    return result;
  };

  return (
    <>
      <div className={style.board}>
        {columns.map((item, index) => (
          <Columns key={index} title={item.nameStatus} columns={columns} idStatus={index + 1} todos={onFilterTodo(item.nameStatus)} />
        ))}
      </div>
    </>
  );
}

export default Board;
