import style from './input.module.scss';

interface Prop {
  label: string;
  type: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  name: string;
}
function Input({ label, type, name }: Prop): JSX.Element {
  return (
    <label className={style.label} htmlFor={name}>
      <input type={type} name={name} placeholder=' ' autoComplete='off'/>
      <span>{label}</span>
    </label>
  );
}

export default Input;
