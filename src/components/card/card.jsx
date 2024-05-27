import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="doctors-card">
      <div className="card-image">
        <img src={item.image} className="w-100" alt="" />
      </div>
      <div className="about-doctor">
        <h4 className="name">{item.name}</h4>
        <div className="pb-3">
          <div className="d-flex align-items-center justify-content-between">
            <small className="keys">Должность:</small>
            <small className="text-value">{item.speciality}</small>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <small className="keys">Мед. учреждение:</small>
            <small className="text-value">Семейная поликлиника</small>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <small className="keys">Адрес:</small>
            <small className="text-value">{item.address}</small>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <small className="keys">Специальность:</small>
            <small className="text-value">{item.job}</small>
          </div>
        </div>
        <Link className="primary-text" to={`/doctors/${item._id}`}>
          Записаться на прием <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
