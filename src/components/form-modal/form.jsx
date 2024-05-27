import React, { useEffect, useState } from "react";
import { InputForText, PrimaryButton } from "../../ui/ui";
import Input from "react-phone-number-input/input";
import "./form.css";

const FormModal = ({ value, setState, postData }) => {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [serie, setSerie] = useState("");
  const [typeOfPain, setTypeOfPain] = useState("");

  const data = {
    doctorName: value.name,
    date: value.date,
    firstname: username,
    lastname,
    typeOfPain,
    phone,
    passportID: serie,
  };

  return (
    <div className="form-wrapper">
      <div className="bg" onClick={() => setState(false)}></div>
      <div className="form">
        <i className="bi bi-x-lg" onClick={() => setState(false)}></i>
        <h3>Запись к врачу</h3>
        <div className="info-box">
          <div className="doctor-info">
            <small className="keys">Врач:</small>
            <small className="text-value">{value.name}</small>
          </div>
          <div className="doctor-info">
            <small className="keys">Дата:</small>
            <small className="text-value">{value.date}</small>
          </div>
          <div className="primary-text text-center">
            <small className="cursor-pointer" onClick={() => setState(false)}>
              Изменить
            </small>
          </div>
        </div>
        <div>
          <InputForText
            htmlFor={"username"}
            setState={setUsername}
            label="Ваше фамилия "
          />
        </div>
        <div>
          <InputForText
            htmlFor={"lastname"}
            setState={setLastname}
            label="Ваше имя "
          />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <label htmlFor="phone">Номер телефона </label>
            <div className="input-phone d-flex">
              <div className="code">+998</div>
              <Input country="UZ" value={phone} onChange={setPhone} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <label htmlFor="passport">Серия и номер паспорта </label>
            <div className="serie">
              <input
                type="text"
                value={serie}
                onChange={(e) => setSerie(e.target.value.toUpperCase())}
              />
            </div>
          </div>
          <div>
            <label htmlFor="typeOfPain">Что вас беспокоит?</label>
            <textarea
              id="typeOfPain"
              value={typeOfPain}
              onChange={(e) => setTypeOfPain(e.target.value)}
            ></textarea>
          </div>
          <div className="capcha pt-3">
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://s3-alpha-sig.figma.com/img/b12d/01c0/8b6ec385188581508d4851fcad934f36?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXYQ1TyZb-6hTkfmDVgOdV4Vvbun0n9GabT~N8~i5RV1S1zthW3K~LsygI~pMXx0zQKxegQoDqYLa98iFSPTUpEJllx5EzqlriCkwK~5WXDhetBsK0ZVNDilXkORmPdoik9Dq4qip5lF3OzdMFECrtzpY1smk-4CXtnSyv2g701bi7dbgWfCvjE-kMXOJ1er3me7C-em~tUZzcFU3ERO7exfrq8lIY7gcVfyOnoyOsZcPoqAd4rW4D619KSTcEeaccm-QR1~SkSEHLCTe4ByDMf1yZUEMvoPLAhPcB~iqeVlnpL37s9cQj9EnlaBUVyDmZIFQWF22TCMsT8q0Yc-LQ__"
                alt=""
              />
              <button>
                <i class="bi bi-arrow-repeat"></i>
              </button>
            </div>
            <div>
              <label htmlFor="passport">Код проверки *</label>
              <div className="input-capcha">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="d-flex py-3 align-items-center justify-content-between">
            <div className="p-0 check m-0">
              <input type="checkbox" id="done" />{" "}
              <label htmlFor="done ">
                Я согласен(а) с правилами пользования
              </label>
            </div>
            <div className="text-danger">Очистить</div>
          </div>
          <PrimaryButton setState={postData} value={data}>
            Записаться
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
