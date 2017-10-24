import React from "react";
import { Link } from "react-router-dom";

const Header = ({ location: { pathname } }) => (
  <nav id="nav" style={{ display: pathname.search("admin") !== -1 && "none" }}>
    <ul className="navbar">
      <li className="navbar-itm">
        <a href="#one" className="navbar-link">
          Чем я занимаюсь
        </a>
      </li>
      <li className="navbar-itm">
        <a href="#two" className="navbar-link">
          Обо мне
        </a>
      </li>
      <li className="navbar-itm">
        <a href="#three" className="navbar-link">
          Работы
        </a>
      </li>
      <li className="navbar-itm">
        <a href="#four" className="navbar-link">
          Контакты
        </a>
      </li>
    </ul>
    <h1 className="logo">
      <Link to="/">sdsadsadsa</Link>
    </h1>
  </nav>
);

export default Header;
