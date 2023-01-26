import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler=(username,userage)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:username,age:userage,id:Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
