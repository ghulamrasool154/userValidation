import React from "react";

import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfrim} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfrim}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
