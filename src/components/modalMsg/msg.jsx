import React from "react";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../../ui/ui";
import "./modal.css";

const Msg = ({ setState }) => {
  const { acceptance } = useSelector((state) => state.acceptance);
  return (
    <div className="msg-modal">
      <div className="bg"></div>
      <div className="content">
        <i className="bi bi-x-lg" onClick={() => setState(false)}></i>
        <h4>Запись к врачу</h4>
        <div className="icon text-center">
          <i className="bi bi-check2-circle"></i>
          <h3>Вы успешно записались!</h3>
          <p>Желаем вам крепкого здоровья</p>
          <div className="info-list">
            <span className="keys">Врач: </span>
            <span className="text-value">{acceptance.data.doctorName}</span>
          </div>
          <div className="info-list">
            <span className="keys">Дата: </span>
            <span className="text-value">{acceptance.data.date}</span>
          </div>
          <PrimaryButton setState={setState} value={false}>
            Закрыть
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Msg;
