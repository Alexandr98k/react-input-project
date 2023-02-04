import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

function AddUser({ onAddUser }) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  // Якщо в useState не передавати значення то буде -  undefined
  const [error, setError] = useState();

  const addUserHandler = function (event) {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (greater than 0)!',
      });
      return;
    }

    //lifting up state to the App component
    onAddUser(userName, userAge);

    //Two-way binding for reseting values inputs
    setUserAge('');
    setUserName('');
  };

  const nameChangeHandler = function (e) {
    setUserName(e.target.value);
  };

  const ageChangeHandler = function (e) {
    setUserAge(e.target.value);
  };

  const ErrorHandler = function () {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onErrorHandler={ErrorHandler} />
      )}
      {/* передаємо в кастомний компонент файл стилів та з нього беремо клас "інпут" */}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={nameChangeHandler} value={userName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={userAge} />
          <Button type={'submit'}>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
