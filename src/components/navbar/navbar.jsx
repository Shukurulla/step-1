import React, { useState } from "react";
import { Link } from "react-router-dom";
import Shape from "../../../public/Shape.png";
import NavbarLogo from "../../../public/Logo.png";
import { ButtonOutline } from "../../ui/ui";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <header>
      <nav className="container ">
        <div className="logo">
          <img src={NavbarLogo} alt="" />
        </div>
        <div className={`navigation`}>
          <div className={`nav-items  ${active ? "active" : ""}`}>
            <ul>
              <i className="bi bi-x-lg" onClick={() => setActive(false)}></i>
              <li onClick={() => setActive(false)}>
                <Link to={"/"}>Главная</Link>
              </li>
              <li onClick={() => setActive(false)}>
                <Link to={"/"}>Как пользоваться?</Link>
              </li>
              <li onClick={() => setActive(false)}>
                <Link to={"/"} className="active">
                  Запись к врачу
                </Link>
              </li>
              <li onClick={() => setActive(false)}>
                <Link to={"/"}>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="side-options">
            <button className="btn">
              <img src={Shape} alt="shape" />
              Войти
            </button>
            <ButtonOutline>Регистрация</ButtonOutline>
            <i className="bi bi-list" onClick={() => setActive(true)}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
