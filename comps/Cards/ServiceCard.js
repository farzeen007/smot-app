import React from "react";
import styles from "../../styles/home.module.css";

const ServiceCard = ({src,title,description}) => {
  return (
    <div className={styles.service}>
      <div>
        <img src={src} />
      </div>
      <div className={styles.service_title}>{title}</div>
      <p className={styles.service_description}>{description}</p>
      <div className={styles.service_readmore}>
        Read more <img src="./rightarrow.png" />
      </div>
    </div>
  );
};

export default ServiceCard;
