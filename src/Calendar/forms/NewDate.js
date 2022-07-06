import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const NewDate = (props) => {
  console.log(props.enteredDate);
  const getDate = function (date) {
    return date.split("T")[0];
  };
  const getHour = function (date) {
    let hour = date.split("T")[1];
    if (!hour) return "00:00";
    return hour;
  };
  const modify = function (date, value, provenience) {
    let answer = date;
    if (provenience === "time") {
      let hour = date.split("T")[1];
      if (!hour) answer = date + "T" + value + ":00";
      else {
        console.log(date);
        answer = date.split("T")[0] + "T" + value + ":00";
      }
    }
    return answer;
  };

  const handleChange = (e, provenience) => {
    let newdate = modify(props.enteredDate, e.target.value, provenience);
    props.onChange(newdate);
  };

  return (
    <React.Fragment>
      <label>Fecha: </label>

      <div className="d-flex">
        <input
          type="date"
          value={getDate(props.enteredDate)}
          onChange={(event) => {
            handleChange(event, "date");
          }}
        />
        <input
          id="appt-time"
          type="time"
          onChange={(event) => {
            handleChange(event, "time");
          }}
          name="appt-time"
          value={getHour(props.enteredDate)}
        ></input>
      </div>
    </React.Fragment>
  );
};
export default NewDate;
