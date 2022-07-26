import "./App.scss";
import Button from "./components/Button/Button";
//import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState();
  
  //func to do fetch request
  const getUsers = async () => {
    const response = await fetch("http://randomuser.me/api/?results=6");
    const data = await response.json();
    setUsers(data.results);
  }
  //link getUser to be called on button press

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUsers} label="Get Random User" />
      {users && <ProfileContainer userList={users} />}
    </div>
  );
};

export default App;
