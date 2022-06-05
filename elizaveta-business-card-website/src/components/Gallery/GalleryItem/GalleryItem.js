/* eslint-disable eqeqeq */
import React from "react";
import classes from "./galleryItem.module.scss";

const GalleryItem = (props) => {
  const { imageSrc, name } = props;

  return (
    <div className={classes.gallery__item_container}>
      <h1 className={classes.gallery__item_title}>{name}</h1>
      <div className={classes.gallery__item_image}>
        <img src={imageSrc} alt={name} />
      </div>
    </div>
  );
};

export default GalleryItem;
