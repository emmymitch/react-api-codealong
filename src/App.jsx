import { useState, useEffect } from "react";
import "./App.scss";
// import Button from "./components/Button/Button";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import RangeInput from "./components/RangeInput/RangeInput";

//to get the users from the api when this component first mounts
const App = () => {
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(5);
  const [sexFilter, setSexFilter] = useState("all");

  const getUsers = async (resultNum, chosenSex) => {
    const params = [`&gender=${chosenSex}`];
    const url = `https://randomuser.me/api?results=${resultNum}${params.join("")}`;
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
  };

  const handleInputChange = (event) => {
    setNumUsers(event.target.value);
  };

  const handleSexChange = (event) => {
    setSexFilter(event.target.value);
  };

  //useEffect needs:
  // - a callback function
  // - a dependency array (empty for mounting)
  useEffect(() => {
    getUsers(numUsers, sexFilter);
  }, [numUsers, sexFilter]);

  return (
    <div className="app">
      <h1>Random User Generator</h1>

      <RangeInput 
        label={`Number of users: ${numUsers}`}
        id="user-range-input"
        onChange={handleInputChange}
        value={numUsers}
      />

      <RadioButtons
        label="User sex:"
        options = {["all", "female", "male"]}
        selected = {sexFilter}
        onChange={handleSexChange}
      />

      <ProfileContainer profiles={users} />
    </div>
  );
};

export default App;
