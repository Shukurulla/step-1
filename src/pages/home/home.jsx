import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { Spinner } from "../../ui/ui";
import "./home.css";

const Home = () => {
  const { specialities } = useSelector((state) => state.speciality);
  const { doctors } = useSelector((state) => state.doctor);
  const [selectData, setSelectData] = useState("all");

  const filteredData =
    selectData == "all" ? doctors : doctors?.filter((c) => c.job == selectData);

  return (
    <>
      {specialities.length == 0 || doctors.length == 0 ? (
        <Spinner />
      ) : (
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
          <div className="data-option d-flex gap-3">
            <h1>Врачи</h1>
            <select
              className="select"
              defaultValue={"all"}
              onChange={(e) => setSelectData(e.target.value)}
            >
              <option value="all">Все</option>
              {specialities.map((item) => (
                <option value={item.title}>{item.title}</option>
              ))}
            </select>
          </div>
          <div className="row">
            {filteredData.map((item) => (
              <div className="col-lg-4 my-3 col-md-6 col-sm-12">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
