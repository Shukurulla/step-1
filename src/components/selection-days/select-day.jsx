import React, { useState } from "react";
import { hours } from "../../constants";
import "./select.css";

const SelectDay = ({ date, setDate, selectDay }) => {
  const changeHour = (value) => {
    setDate(`${date}, ${value}`);
    console.log(selectDay);
  };
  return (
    <div>
      <div className="title-day">{date}</div>
      <div className="row">
        {hours.map((item) => (
          <div className="col-lg-1 col-md-1 col-sm-3 col-3">
            <div
              className={`select-hour cursor-pointer ${
                selectDay == `${date}, ${item}` ? "active" : ""
              }`}
              onClick={() => changeHour(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectDay;
