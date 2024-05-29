import React, { useState } from "react";
import styles from "../styles/home.module.css";
import PackagesData from "../data/PackagesData";
import GreenButton from "./Cards/GreenButton";
import PlaceCard from "./Cards/PlaceCard";
import PlaceCardData from "../data/PlaceCardData";

const IconCard = ({ src, title, activeIndex, index, setActiveIndex }) => {
  console.log(index, activeIndex);
  return (
    <div
      onClick={() => setActiveIndex(index)}
      className={`${styles.icon_card} ${
        activeIndex === index ? styles.icon_card_active : null
      }`}
    >
      <img src={src} />
      <div>{title}</div>
    </div>
  );
};

const Packages = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className={styles.packages}>
      {/* left side */}
      <div className={styles.packages_left_side}>
        {PackagesData?.map((item, index) => {
          return (
            <IconCard
              setActiveIndex={setActiveIndex}
              index={index}
              activeIndex={activeIndex}
              id={item.id}
              src={item.src}
              title={item.title}
            />
          );
        })}
      </div>
      {/* right side  */}
      <div className={styles.packages_right_side}>
        <div className={styles.packages_heading}>
          <div>Top Tour Packages</div>

          <GreenButton txt="View All" />
        </div>
        <div className={styles.place_cards}>
          {PlaceCardData?.map((item) => {
            return (
              <PlaceCard
                id={item.id}
                src={item.src}
                days={item.days}
                title={item.title}
                flt={item.flt}
                hotel={item.hotels}
                activity={item.activity}
                transfer={item.transfer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
