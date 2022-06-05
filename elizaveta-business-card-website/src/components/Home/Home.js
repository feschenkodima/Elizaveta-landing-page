import React from "react";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import MainContent from "./MainContent/MainContent";
import MiniGallery from "./MainContent/MiniGallery/MiniGallery";
import Services from "./MainContent/Services/Services";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
const Home = () => {
  return (
    <>
      <Header />
      <MainContent />
      <MiniGallery />
      <Services />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Home;
