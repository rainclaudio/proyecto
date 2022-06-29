import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./NuevaReserva.module.css";
import Backdrop from "../UI/Backdrop";
const ModalOverlay = (props) => {
  const serviceInputref = useRef();
  const providerInputref = useRef();
  const [enteredDate, setEnteredDate] = useState(props.date);

  const submitHandler = (event) => {
    // Aquí subimos la información que se genera al crear un nuevo evento
    event.preventDefault();

    props.onConfirm({
      title: serviceInputref.current.value,
      provider: providerInputref.current.value,
      date: enteredDate,
      status: "pending",
    });
  };

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <form onSubmit={submitHandler}>
        <input
          type="date"
          value={enteredDate}
          onChange={(event) => {
            setEnteredDate(event.target.value);
          }}
        />

        <label htmlFor="service">Seleccione un servicio:</label>
        <select id="service" name="service" ref={serviceInputref}>
          <option value="Corte de pelo">Corte de pelo</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
          <option value="Botox Capilar">Botox Capilar</option>
        </select>

        <label htmlFor="proveedor">Seleccione un proveedor:</label>
        <select id="proveedor" name="proveedor" ref={providerInputref}>
          <option value="mar-vill">Marcos Villarroel</option>
          <option value="car-mer">Carla Merino</option>
          <option value="tom-cam">Tomás Camus</option>
        </select>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="submit">Okay</Button>
        </footer>
      </form>
    </Card>
  );
};

const NuevaReservaModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
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

export default NuevaReservaModal;
