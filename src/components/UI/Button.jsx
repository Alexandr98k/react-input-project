import styles from './Button.module.css';

function Button(props) {
  return (
    //Динамічно визначаємо тип кнопки, щоб її можна було перевикористати в інших компонентах. Передаючи пропс з типом кнопки.
    <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
