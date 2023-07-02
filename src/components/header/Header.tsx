import Image from 'next/image';
import style from './header.module.scss'

function Header(): JSX.Element {
  const size: number = 80;
  return (
    <header className={style.header}>
      <Image alt='logo' src={'/img/Trello.png'} width={120} height={size} />
    </header>
  );
}

export default Header;
