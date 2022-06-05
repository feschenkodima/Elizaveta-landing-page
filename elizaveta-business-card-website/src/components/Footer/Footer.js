import React from "react";
import classes from "./footer.module.scss";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer__wrapper}>
      <div className={classes.footer__logo}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dgzzsonyf/image/upload/v1650806191/eeeae78d45ab4c6399df827306e45419_1_kcdijh.png"
            alt="logo"
          />
        </Link>
      </div>

      <nav className={classes.footer__navbar_wrapper}>
        <ul className={classes.footer__navbar_buttons}>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li>
            <Link to="/tesmonials">Відгуки</Link>
          </li>
          <li>
            <Link to="/prices">Ціни</Link>
          </li>
        </ul>
        <ul className={classes.footer__navbar_social}>
          <li>
            <BsInstagram className={classes.footer__navbar_social__inst} />
          </li>
          <li>
            <BsTelegram className={classes.footer__navbar_social__tg} />
          </li>
          <li>
            <FaViber className={classes.footer__navbar_social__viber} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
