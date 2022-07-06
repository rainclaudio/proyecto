import React from "react";

const Date = (props) => {
  function padTo2Digits(num) {
    return String(num).padStart(2, "0");
  }
  console.log(props.date);
  const month = props.date.toLocaleString("es-CL", { month: "long" });
  const day = props.date.toLocaleString("es-CL", { day: "2-digit" });
  const year = props.date.getFullYear();
  const hour = props.date.toLocaleString("es-CL", { hour: "2-digit" });
  const minutes = padTo2Digits(props.date.getMinutes());
  return (
    <div className="flex gap-1 items-start">
      <div className="">{day}</div>
      <div className="">{month}</div>
      <div className="">{year}</div>
      <div className="">{hour}</div>
      <div className="">{minutes}</div>
    </div>
  );
};
export default Date;
