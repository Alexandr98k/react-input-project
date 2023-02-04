import { useState, Fragment, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

function AddUser({ onAddUser }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [resetInputs, setResetInputs] = useState('');
  // Якщо в useState не передавати значення то буде -  undefined
  const [error, setError] = useState();

  const addUserHandler = function (event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (greater than 0)!',
      });
      return;
    }

    //lifting up state to the App component
    onAddUser(enteredName, enteredAge);

    //Reseting values on inputs
    nameInputRef.current.value = ageInputRef.current.value = '';
  };

  const ErrorHandler = function () {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal title={error.title} message={error.message} onErrorHandler={ErrorHandler} />
      )}
      {/* передаємо в кастомний компонент файл стилів та з нього беремо клас "інпут" */}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type={'submit'}>Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
