import React from "react";
import ServiceCard from "./Cards/ServiceCard";
import styles from "../styles/home.module.css";
import ServiceData from "../data/ServiceData";

const Services = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.services_title}>We lead you to Success</div>
      <div className={styles.services}>
        {ServiceData?.map((item) => {
          return (
            <ServiceCard
              id={item.id}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
