'use client';
import style from './button.module.scss';
interface Prop {
  name: string;
  type: 'button' | 'submit';
  onAction?: () => void;
}
function Button({ name, type, onAction }: Prop): JSX.Element {
  return (
    <button className={style.btn} type={type} onClick={onAction}>
      {name}
    </button>
  );
}

export default Button;
