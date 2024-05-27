import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";

const Home = () => {
  const { specialities } = useSelector((state) => state.speciality);
  const { doctors } = useSelector((state) => state.doctor);
  const [selectData, setSelectData] = useState("all");

  const filteredData =
    selectData == "all" ? doctors : doctors?.filter((c) => c.job == selectData);

  return (
    <div className="home">
      <div className="page-navigation py-3">
        <p>
          <Link to={"/"} className="old-page">
            Главная
          </Link>{" "}
          <i className="bi bi-chevron-right"></i>{" "}
          <Link to="/" className="current-page">
            Запись к врачу
          </Link>
        </p>
      </div>
      <div className="data-option">
        <h1>Врачи</h1>
        <select value={"all"}>
          <option value="all">Все</option>
          {specialities.map((item) => (
            <option value={item.title}>{item.title}</option>
          ))}
        </select>
        <div className="row">
          {filteredData.map((item) => (
            <div className="col-lg-4 my-3 col-md-6 col-sm-12">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
