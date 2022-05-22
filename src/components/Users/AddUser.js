import React, { useState } from "react";

import Card from "../UI/Card";
import calsses from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Please Enter Valiid Name and age (Non-emppty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valiid age ( > 0)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHanlder = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          onConfrim={errorHanlder}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={calsses.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="test"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
