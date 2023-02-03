import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

function AddUser() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = function (event) {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0 || +userAge < 1) return;

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

  return (
    //передаємо в кастомний компонент файл стилів та з нього беремо клас "інпут"
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameChangeHandler} value={userName} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={userAge} />
        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
