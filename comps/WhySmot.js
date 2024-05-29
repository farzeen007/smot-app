import React from "react";
import styles from "../styles/home.module.css";
import GreenButton from "./Cards/GreenButton";

const WhySmot = () => {
  return (
    <div className={styles.why_smot}>
      {/* left side */}
      <div className={styles.left_side}>
        <h3 className={styles.left_side_heading}>Why Choose SmotPro</h3>
        <div className={styles.left_side_desc}>
          We’re a Kerala government undertaking focussing on upskilling to
          enhance employability through demand-based and industry-led training.
        </div>
        {/* <button className={styles.left_side_btn}>About SmotPro</button> */}
        <GreenButton txt="About SmotPro" style={{ marginTop: "15px" }} />
      </div>
      {/* right side */}
      <div className={styles.right_side}>
        {/* upper icons */}
        <div className={styles.upper_icons}>
          <div>
            <img src="/premium.png" />
          </div>
          <div>
            <img src="/simple.png" />
          </div>
          <div>
            <img src="/thumbsup.png" />
          </div>
        </div>
        {/* lower icons */}
        <div className={styles.lower_icons}>
          <div>
            <img src="/affordable.png" />
          </div>
          <div>
            <img src="/fair.png" />
          </div>
          <div>
            <img src="/trusted.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySmot;
