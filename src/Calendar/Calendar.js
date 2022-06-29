import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ReactTooltip from "react-tooltip";

const Calendar = (props) => {
  const handleDateClick = (arg) => {
    props.onAddReservation({ date: arg.dateStr });
  };
  const handleEventClick = (arg) => {
    console.log(arg);
    // console.log(arg.event._def.title);

    props.onWatchEventDetail();
  };
  return (
    <FullCalendar
      events={props.reservations}
      plugins={[dayGridPlugin, interactionPlugin]}
      eventContent={renderEventContent}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      // eventDisplay={}
    />
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default Calendar;
