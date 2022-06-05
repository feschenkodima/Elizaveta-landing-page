import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import { getAllGallery } from "../../utils/utils";
import GalleryItem from "./GalleryItem/GalleryItem";
import classes from "./gallery.module.scss";
import PuffLoader from "react-spinners/PuffLoader";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getGallery = async () => {
    setLoading(true);
    const response = await getAllGallery();

    setGallery(response);

    setLoading(false);
  };

  useEffect(() => {
    getGallery();
  }, []);

  const galleryImages = gallery.map((item, index) => {
    return (
      <GalleryItem imageSrc={item.images[0]} name={item.name} key={index} />
    );
  });

  return (
    <>
      <Header />
      <section className={classes.gallery__wrapper}>
        <h1 className={classes.gallery__title}>Галерея</h1>
        {isLoading && (
          <div className={classes.gallery__spinner}>
            <PuffLoader loading={isLoading} color="pink" size="120" />
          </div>
        )}
        <div className={classes.gallery__container}>{galleryImages}</div>
      </section>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Gallery;
