import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ReactTooltip from "react-tooltip";

const Calendar = (props) => {
  const handleDateClick = (arg) => {
    console.log(arg);
    props.onAddReservation({ date: arg.dateStr });
  };
  const handleEventClick = (arg) => {
    console.log(arg);
    props.onWatchEventDetail(arg.event._def, arg.event._instance);
  };
  return (
    <FullCalendar
      events={props.reservations}
      plugins={[dayGridPlugin, interactionPlugin]}
      contentHeight={"auto"}
      eventContent={renderEventContent}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      // eventDisplay={}
    />
  );
};

function renderEventContent(eventInfo) {
  console.log(eventInfo);
  let hour = eventInfo.event.startStr.split("T", 5)[1].substring(0, 5);
  return (
    <>
      {hour !== "00:00" ? <b>{hour}</b> : ""}
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default Calendar;
