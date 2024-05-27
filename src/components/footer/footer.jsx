import React from "react";
import { Link } from "react-router-dom";
import { FooterLogo } from "../../constants";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <ul className="links p-0">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/">Как пользоваться</Link>
              </li>
              <li>
                <Link to="/">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="/">Условия использования</Link>
              </li>
              <li>
                <Link to="/">Контакты</Link>
              </li>
              <li>
                <Link to="/">
                  Еще <i className="bi bi-chevron-down"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="auth-links">
              <ul>
                <li>
                  <Link to="/">Войти</Link>
                </li>
                <li>
                  <Link to="/">Регистрация</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="d-flex align-items-center justify-content-between">
          <img src={FooterLogo} alt="" />
          <small>© 2010-2023 Все права защищены</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
