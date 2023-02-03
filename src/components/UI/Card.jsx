import styles from './Card.module.css';

function Card(props) {
  // Використовуємо спеціальний синтаксис props.children для того, щоб передати контент, який поміщений між відкриваючим та закриваючим тегом цього компоненту.
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
}

export default Card;
