import style from './form.module.scss';

function Form(): JSX.Element {
  return <div className={style.contentForm}>
    <form action="">
        <label htmlFor="title">
            <span>Title</span>
            <input type="text" name="title" id="" placeholder='Title'/>
        </label>
        <label htmlFor="state" className={style.checkbox}>
            <input type="checkbox" checked={true}/>
            <span>TODO</span>
        </label>
        <label htmlFor="state" className={style.checkbox}>
            <input type="checkbox" value={'activo'}/>
            <span>In Progress</span>
        </label>
        <label htmlFor="state" className={style.checkbox}>
            <input type="checkbox" value={'activo'} className={style.inputCheckout}/>
            <span>Done</span>
        </label>
    </form>
  </div>;
}

export default Form;
