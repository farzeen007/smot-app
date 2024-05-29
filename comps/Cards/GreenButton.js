import React from "react";
import styles from "../../styles/home.module.css";

const GreenButton = ({ txt, style }) => {
  return (
    <button className={styles.green_btn} style={style}>
      {txt}
    </button>
  );
};

export default GreenButton;
