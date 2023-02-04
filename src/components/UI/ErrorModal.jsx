import { Fragment } from 'react';
import ReactDom from 'react-dom';
import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

//we can also add other components to this file. We add two new components for modal and overlay. Звісно ми могли б винести ці два компоненти в окремі файли, щоб перевикористати їх обох в інших компонентах.

const Overlay = function ({ onErrorHandler }) {
  return <div className={styles.backdrop} onClick={onErrorHandler}></div>;
};

const Modal = function ({ title, message, onErrorHandler }) {
  return (
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
  );
};

function ErrorModal({ title, message, onErrorHandler }) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Overlay onErrorHandler={onErrorHandler} />,
        document.getElementById('overlay-root'),
      )}
      {ReactDom.createPortal(
        <Modal title={title} message={message} onErrorHandler={onErrorHandler} />,
        document.getElementById('modal-root'),
      )}
    </Fragment>
  );
}
export default ErrorModal;
