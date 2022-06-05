import React from "react";
import CardServiceItem from "./Card/Card";
import classes from "./services.module.scss";

const Services = () => {
  const services = [
    {
      name: "Класичний манікюр",
      imageSrc:
        "https://res.cloudinary.com/dgzzsonyf/image/upload/c_limit,h_438,w_1099/a_90/v1650623934/1414445918_shutterstock_13139338-min_nkgjtu.webp",
      description:
        "Це стандартна підготовча процедура, яка проводиться перед будь-яким видом декоративного манікюру, як в професійних манікюрних кабінетах, так і в домашніх умовах. Дана технологія манікюру передбачає попереднє розпарювання шкіри рук.",
    },
    {
      name: "Педикюр",
      imageSrc:
        "https://res.cloudinary.com/dgzzsonyf/image/upload/c_scale,h_900,q_100,w_663/v1650711888/pedicure_pigljs.png",
      description:
        "У першу чергу, це необхідна лікувально-профілактична процедура, а зовсім не розкіш. По-друге, педикюр покращує естетичний вигляд ніг, що не менш важливе для сучасної жінки. А якщо ноги здорові та доглянуті, то це видно одразу.",
    },
    {
      name: "Апаратний манікюр",
      imageSrc:
        "https://res.cloudinary.com/dgzzsonyf/image/upload/c_scale,h_555,q_100,w_417/v1650623933/apparatniy-manikur-623x555-a_wboc1f.jpg",
      description:
        "Проводиться за допомогою спеціального апарату, який представляє собою базу у вигляді ергономічної ручки, що працює від мережі.",
    },
    {
      name: "Нарощування",
      imageSrc:
        "https://res.cloudinary.com/dgzzsonyf/image/upload/v1650029898/black_close.jpg",
      description:
        "Справжній порятунок для дівчат, які не можуть відростити свою довгу форму.",
    },
  ];

  const servicesLayout = services.map((item, index) => {
    return (
      <CardServiceItem
        imageSrc={item.imageSrc}
        imageName={item.name}
        service={item.name}
        description={item.description}
        key={index}
      />
    );
  });

  return (
    <section>
      <h1 className={classes.content__title}>Послуги</h1>
      <div className={classes.services__wrapper}>{servicesLayout}</div>
    </section>
  );
};
export default Services;
