import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import classes from "./NuevaReserva.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const DetailOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Hola mundo</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="submit">Okay</Button>
      </footer>
    </Card>
  );
};

const EventDetails = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DetailOverlay
          date={props.date}
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default EventDetails;
