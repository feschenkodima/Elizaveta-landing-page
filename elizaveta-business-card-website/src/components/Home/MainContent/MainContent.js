import React from "react";
import classes from "./mainContent.module.scss";
const MainContent = () => {
  return (
    <section className={classes.about_me}>
      <div className={classes.about_me__container}>
        <img
          src="https://res.cloudinary.com/dgzzsonyf/image/upload/c_scale,e_auto_contrast,h_1686/v1650037836/1650027925998051_imu9wh.jpg"
          alt="me"
        />
        <div className={classes.about_me__text__container}>
          <h1 className={classes.about_me__text__container_title}>
            Єлизавета Фещенко
          </h1>
          <p className={classes.about_me__text__container_text}>
            Охайний зовнішній вигляд, як відомо, це візитна картка кожної
            сучасної жінки.
          </p>
          <p className={classes.about_me__text__container_text}>
            Стан рук та, зокрема, нігтів, грає в зовнішньому вигляді важливу,
            якщо не сказати - ключову роль. Доглянуті руки, з красивим і
            акуратним манікюром - це відображення здорового стану тіла.
          </p>
          <p className={classes.about_me__text__container_text}>
            Ми живемо в часи сучасних технологій, де високі вимоги до гідного
            існування зобов'язують кожну жінку виглядати бездоганно, не залежно
            від того, де вона знаходиться: в офісі на нараді, на березі моря або
            на городі на дачі.
          </p>
          <img
            src="https://res.cloudinary.com/dgzzsonyf/image/upload/v1650806284/eeeae78d45ab4c6399df827306e45419_2_m27lpx.png"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
