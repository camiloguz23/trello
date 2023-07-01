'use client';
import { type Ticket } from '@/models';
import style from './cards.module.scss';
import { IconButton, Tooltip } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface Prop {
  card: Ticket;
  nextState: number;
  nextColum: string;
  onUpdate: (idTicket: number, idState: number) => void;
  backColum: string;
}
function CardsComponent({ card, nextState, nextColum, onUpdate, backColum }: Prop): JSX.Element {
  return (
    <div className={`${style.contentCard}`}>
      <p className={style.title}>{card.name}</p>
      <p className={style.description}>{card.description}</p>
      <div className={style.containerBtn}>
        {backColum && (
          <Tooltip title={`regresar a ${backColum}`}>
            <IconButton
              onClick={() => {
                onUpdate(card.idTicket, nextState - 2);
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          </Tooltip>
        )}

        {nextColum && (
          <Tooltip title={`pasarlo a ${nextColum}`}>
            <IconButton
              onClick={() => {
                onUpdate(card.idTicket, nextState);
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default CardsComponent;
