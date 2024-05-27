import React from "react";
import { Link } from "react-router-dom";
import Shape from "../../../public/Shape.png";
import { NavbarLogo } from "../../constants";
import { ButtonOutline } from "../../ui/ui";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="container ">
        <div className="logo">
          <img src={NavbarLogo} alt="" />
        </div>
        <div className="navigation">
          <div className="nav-items">
            <ul>
              <li>
                <Link to={"/"}>Главная</Link>
              </li>
              <li>
                <Link to={"/"}>Как пользоваться?</Link>
              </li>
              <li>
                <Link to={"/"} className="active">
                  Запись к врачу
                </Link>
              </li>
              <li>
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
