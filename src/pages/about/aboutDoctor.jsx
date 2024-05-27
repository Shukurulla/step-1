import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/card/card";
import FormModal from "../../components/form-modal/form";
import Msg from "../../components/modalMsg/msg";
import SelectDay from "../../components/selection-days/select-day";
import { days, getNext7Days, months } from "../../constants";
import AcceptanceService from "../../service/acceptance.service";
import { PrimaryButton, Spinner } from "../../ui/ui";
import "./about.css";

const AboutDoctor = () => {
  const { id } = useParams();
  const { doctors } = useSelector((state) => state.doctor);
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const doctor = doctors && doctors.filter((c) => c._id == id)[0];

  const postData = (data) => {
    AcceptanceService.postAcceptance(dispatch, data);

    setShowModal(false);
    setShowMsg(true);
  };

  return (
    <>
      {doctors.length == 0 ? (
        <Spinner />
      ) : (
        <div>
          {showModal == true && (
            <FormModal
              value={{ name: doctor.name, date }}
              setState={setShowModal}
              postData={postData}
            />
          )}
          {showMsg == true && <Msg setState={setShowMsg} />}
          <div className="page-navigation py-3">
            <p>
              <Link to={"/"} className="old-page">
                Главная <i className="bi bi-chevron-right"></i>
              </Link>{" "}
              <Link to="/" className="old-page">
                Запись к врачу <i className="bi bi-chevron-right"></i>
              </Link>{" "}
              <Link className="current-page" to={`/doctors/${id}`}>
                {doctor.name}
              </Link>
            </p>
          </div>
          <div className="">
            <div className="row">
              <div className="col-lg-5 col-md-4 col-sm-12">
                <div className="doc-image">
                  <img src={doctor.image} className="w-100" alt="" />
                </div>
              </div>
              <div className="col-lg-7 py-3 col-md-8 col-sm-12">
                <div className="doctor-info ">
                  <h2>{doctor.name}</h2>
                  <div className="info-list">
                    <div className="keys">Должность:</div>
                    <div className="text-value ">{doctor.job}</div>
                  </div>
                  <div className="info-list">
                    <div className="keys">Мед. учреждение:</div>
                    <div className="text-value ">Семейная поликлиника</div>
                  </div>
                  <div className="info-list">
                    <div className="keys">Адрес:</div>
                    <div className="text-value ">{doctor.address}</div>
                  </div>
                  <div className="info-list">
                    <div className="keys">Специальность:</div>
                    <div className="text-value ">{doctor.speciality}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="select-day py-5">
            {getNext7Days(days)
              .slice(0, 3)
              .map((item) => (
                <SelectDay date={item} selectDay={date} setDate={setDate} />
              ))}
            <div className="primary-text cursor-pointer py-2">
              Еще 4 дня <i className="bi bi-chevron-down"></i>
            </div>

            <PrimaryButton
              isDisabled={date == null}
              setState={setShowModal}
              value={true}
            >
              {date == null ? "Выберите время приема" : date}
            </PrimaryButton>
          </div>
          <div className="similar-doctors pb-5">
            <h2>Другие врачи</h2>
            <div className="row">
              {doctors.slice(0, 3).map((item) => (
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutDoctor;
