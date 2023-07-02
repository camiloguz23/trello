'use client';

import style from './colums.module.scss';
import { type User, type Ticket, type StatusTicket } from '@/models';
import CardsComponent from '../cards/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { type StructureStore } from '@/store/store';
import { requestPutTicket } from '@/helper';
import { onAddCard } from '@/store/state/card';
import { Badge, LinearProgress } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useState } from 'react';

interface Prop {
  title: string;
  columns: StatusTicket[];
  idStatus: number;
  todos: Ticket[];
}

function Columns({ title, columns, idStatus, todos }: Prop): JSX.Element {
  const infoUser: User = useSelector((store: StructureStore) => store.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const updateState = (idTicket: number, idState: number): void => {
    setLoading(true);
    void requestPutTicket(infoUser, idTicket, idState).then((data) => {
      data && dispatch(onAddCard(data));
      setLoading(false);
    });
  };

  const setColumn = (id: number): string => {
    const columnId: number = id > 3 ? columns.length : id;
    const column: string = columns.find((item) => item.idStatus === columnId)!.nameStatus;
    const isValidRol: boolean = infoUser.nameRol.includes('Team') && id === columns.length;
    return id <= columns.length && !isValidRol ? column : '';
  };

  const backColumn = (id: number): string => {
    const idStatus = id > 1 ? id - 1 : id;
    const column: string = columns.find((item) => item.idStatus === idStatus)!.nameStatus;
    const isValidRol: boolean = infoUser.nameRol.includes('Team') && id === columns.length;
    return id > 1 && !isValidRol ? column : '';
  };
  return (
    <div>
      <div className={style.ContentColumn}>
        <div className={style.TitleContent}>
          <p>{title}</p>
          <Badge badgeContent={todos.length} color='success'>
            <AssignmentIcon color='action' />
          </Badge>
        </div>
        {loading && <LinearProgress color='secondary' />}
        <div className={style.contentCardTable}>
          {todos.map((item) => (
            <CardsComponent
              key={item.idTicket}
              card={item}
              nextState={idStatus + 1}
              nextColum={setColumn(idStatus + 1)}
              backColum={backColumn(idStatus)}
              onUpdate={(id, state) => {
                updateState(id, state);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Columns;
