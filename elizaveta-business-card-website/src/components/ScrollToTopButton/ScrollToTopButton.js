import React, { useState } from "react";
import classes from "./scrollToTopButton.module.scss";
import { FiChevronsUp } from "react-icons/fi";
const ScrollToTopButton = () => {
  const [isScrollToTopBtnVisible, setScrollToTopBtnVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollToTopBtnVisible(true);
    } else if (scrolled <= 300) {
      setScrollToTopBtnVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div className={classes.scrollTop}>
      <FiChevronsUp
        onClick={scrollToTop}
        style={{ display: isScrollToTopBtnVisible ? "inline" : "none" }}
      />
    </div>
  );
};
export default ScrollToTopButton;
