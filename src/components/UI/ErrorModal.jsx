import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

function ErrorModal({ title, message, onErrorHandler }) {
  return (
    <div>
      <div className={styles.backdrop} onClick={onErrorHandler}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
export default ErrorModal;
