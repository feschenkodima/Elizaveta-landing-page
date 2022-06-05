import React from "react";
import { Link } from "react-router-dom";
import classes from "./miniGallery.module.scss";

const MiniGallery = () => {
  return (
    <section className={classes.miniGallery__wrapper}>
      <Link to="/gallery">
        <h1 className={classes.content__title}>Галерея</h1>
      </Link>

      <div className={classes.miniGallery__container}>
        <div className={classes.miniGallery__container_big_img}>
          <img
            src="https://res.cloudinary.com/dgzzsonyf/image/upload/v1650037465/1650027860749682_oox5bs.jpg"
            alt=""
          />
        </div>
        <div className={classes.miniGallery__container_small_imgs}>
          <div className={classes.miniGallery__container_small_imgs_top}>
            <img
              src="https://res.cloudinary.com/dgzzsonyf/image/upload/v1650029898/black_close.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dgzzsonyf/image/upload/v1650029843/white_moon_snake_2.jpg"
              alt=""
            />
          </div>
          <div className={classes.miniGallery__container_wide_img}>
            <img
              src="https://res.cloudinary.com/dgzzsonyf/image/upload/c_scale,h_3024/v1650108146/matte_bordo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniGallery;
