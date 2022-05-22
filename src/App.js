import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersState) => {
      return [
        ...prevUsersState,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />

      {usersList.length > 0 ? <UsersList users={usersList} /> : ""}
    </div>
  );
}

export default App;
