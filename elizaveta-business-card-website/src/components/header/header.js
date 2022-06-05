import React from "react";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header_container}>
      <div className={classes.header_container__logo}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dgzzsonyf/image/upload/v1650806191/eeeae78d45ab4c6399df827306e45419_1_kcdijh.png"
            alt="logo"
          />
        </Link>
      </div>
      <nav className={classes.header_container__nav}>
        <ul className={classes.header_container__nav_container}>
          <li className={classes.header_container__nav_item}>
            <Link to="/">Головна</Link>
          </li>
          <li className={classes.header_container__nav_item}>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li className={classes.header_container__nav_item}>
            <Link to="/tesmonials">Відгуки</Link>
          </li>
          <li className={classes.header_container__nav_item}>
            <Link to="/contacts">Контакти</Link>
          </li>
          <li className={classes.header_container__nav_item_main}>
            <Link to="/prices">Ціни</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
