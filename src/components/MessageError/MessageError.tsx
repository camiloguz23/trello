import style from './messageError.module.scss';

interface Prop {
  message: string;
}
function MessageError({ message }: Prop): JSX.Element {
  return <span className={style.error}>{message}</span>;
}

export default MessageError;
