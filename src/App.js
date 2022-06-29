import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Calendar/Calendar";
import React, { useState } from "react";
import NuevaReservaModal from "./Calendar/NuevaReserva";
import EventDetails from "./Calendar/EventDetails";

function App() {
  const [reservations, addReservation] = useState([]);
  const [modal, setmodal] = useState(false);
  const [event_detail, setEventDetail] = useState(false);

  const [date_str, setDate] = useState("");
  const addReservationHandler = (reservation_date) => {
    console.log(reservation_date);
    setDate(reservation_date.date);
    setmodal(true);
  };
  const watchEventHandler = (data) => {
    setEventDetail(true);
  };
  const eventHandler = () => {
    setEventDetail(null);
  };

  // Añadir al arreglo
  const modalHandler = (recivedData) => {
    addReservation((reservations) => {
      return [recivedData, ...reservations];
    });
    setmodal(null);
  };

  return (
    <React.Fragment>
      {modal && (
        <NuevaReservaModal
          title="nueva reserva"
          date={date_str}
          message="hola mundo vamos a hacer una nueva reserva"
          onConfirm={modalHandler}
        ></NuevaReservaModal>
      )}
      {event_detail && (
        <EventDetails
          title="nueva reserva"
          date={date_str}
          message="hola mundo vamos a hacer una nueva reserva"
          onConfirm={eventHandler}
        ></EventDetails>
      )}
      <Calendar
        reservations={reservations}
        onAddReservation={addReservationHandler}
        onWatchEventDetail={watchEventHandler}
      ></Calendar>
    </React.Fragment>
  );
}

export default App;
