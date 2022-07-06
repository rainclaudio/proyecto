import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Calendar/Calendar";
import React, { useState } from "react";
import NuevaReservaModal from "./Calendar/NuevaReserva";
import EventDetails from "./Calendar/EventDetails";

const DUMMY_USERS = {
  clients: [
    {
      id: 1,
      name: "Carla Merino",
      imageURL: "carla.png",
    },
    {
      id: 2,
      name: "Almendra Castillo",
      imageURL: "almendra.jpg",
    },
    {
      id: 3,
      name: "Daniela Rain",
    },
  ],
  providers: [
    {
      id: 1,
      name: "Marcos Villarroel",
      imageURL: "marcos.jpeg",
    },
    {
      id: 2,
      name: "Pablo Valenzuela",
    },
    {
      id: 3,
      name: "Brayan Canales",
    },
  ],
};
const DUMMY_SERVICES = [
  {
    id: 1,
    name: "Corte de Pelo",
    price: 7000,
  },
  {
    id: 2,
    name: "Manicure",
    price: 8000,
  },
  {
    id: 3,
    name: "Pedicure",
    price: 13000,
  },
  {
    id: 4,
    name: "Botox Capilar",
    price: 18000,
  },
];

function App() {
  const [reservations, addReservation] = useState([]);
  const [modal, setmodal] = useState(false);
  const [event_detail, setEventDetail] = useState(false);
  const [data, setData] = useState({});
  const [date_str, setDate] = useState("");
  const addReservationHandler = (reservation_date) => {
    console.log(reservation_date);
    setDate(reservation_date.date);
    setmodal(true);
  };
  const watchEventHandler = (data, instancia) => {
    setData({ data, instancia });
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
      <div className="grid max-h-screen grid-rows-[5fr_1fr] grid-cols-[4fr_1fr]">
        <div>
          {modal && (
            <NuevaReservaModal
              title="Nueva reserva"
              services={DUMMY_SERVICES}
              users={DUMMY_USERS}
              date={date_str}
              message="hola mundo vamos a hacer una nueva reserva"
              onConfirm={modalHandler}
            ></NuevaReservaModal>
          )}
          {event_detail && (
            <EventDetails
              informacion={data}
              onConfirm={eventHandler}
            ></EventDetails>
          )}
          <Calendar
            reservations={reservations}
            onAddReservation={addReservationHandler}
            onWatchEventDetail={watchEventHandler}
          ></Calendar>
        </div>
        <div> Aquí va el perfil y las estadísticas</div>
        <div>Aquí irá el nav-bar</div>
      </div>
    </React.Fragment>
  );
}

export default App;
