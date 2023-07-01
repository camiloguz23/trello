'use client';
import { type Ticket } from '@/models';
import style from './cards.module.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { BtnIcon } from '@/components';

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
          <BtnIcon
            title={`regresar a ${backColum}`}
            onAction={() => {
              onUpdate(card.idTicket, nextState - 2);
            }}
          >
            <NavigateBeforeIcon />
          </BtnIcon>
        )}

        {nextColum && (
          <BtnIcon
            title={`pasarlo a ${nextColum}`}
            onAction={() => {
              onUpdate(card.idTicket, nextState);
            }}
          >
            <NavigateNextIcon />
          </BtnIcon>
        )}
      </div>
    </div>
  );
}

export default CardsComponent;
