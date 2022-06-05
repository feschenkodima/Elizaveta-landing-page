import React from "react";
import classes from "./card.module.scss";

const CardServiceItem = (props) => {
  return (
    <div className={classes.card_container}>
      <div className={classes.card_container__image}>
        <img src={props.imageSrc} alt={props.service} />
      </div>
      <div className={classes.card_container__text}>
        <h2 className={classes.card_container__text_title}>{props.service}</h2>
        <p className={classes.card_container__text_description}>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CardServiceItem;
