import { useState } from 'react';
import './App.css';
import UserList from './components/Users/userList';
import AddUser from './components/Users/AddUser';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = function (userName, userAge) {
    //використовуємо такий трюк з функцією всередині сетЮзерЛіст, адже потрібно, щоб новий стейт базувався на попередньому
    console.log(userName, userAge);
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge, id: (Date.now() + '').slice(-10) }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
