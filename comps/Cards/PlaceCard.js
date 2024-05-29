import React from "react";
import styles from "../../styles/home.module.css";

const PlaceCard = ({ src, days, title, flt, hotel, activity, transfer }) => {
  return (
    <>
      <div className={styles.place_card_container}>
        <div className={styles.place_card}>
          <img src={src} />
          <span className={styles.place_card_days}>{days}</span>
          <div className={styles.place_card_name}>{title}</div>
        </div>
          <div className={styles.place_card_icons_conatiner}>
            <div className={styles.place_card_icon}>
              <img src="./flight.png" />
              <div>{flt}</div>
            </div>
            <div className={styles.place_card_icon}>
              <img src="./hotel.png" />
              <div>{hotel}</div>
            </div>
            <div className={styles.place_card_icon}>
              <img src="./calender.png" />
              <div>{activity}</div>
            </div>
            <div className={styles.place_card_icon}>
              <img src="./car.png" />
              <div>{transfer}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
