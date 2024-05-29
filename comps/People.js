import React from "react";
import styles from "../styles/home.module.css";

const People = () => {
  return (
    <div className={styles.people}>
      <div className={styles.people_img_container}>
        <img src="./people2.png" />
        <img src="/people1.png" className={styles.people_img} />
      </div>
      <div className={styles.people_details}>
        <div className={styles.people_details_title}>
          What people say about us?
        </div>
        <img
          className={styles.people_details_quoteicon}
          src="./quotes.png"
        ></img>
        <p className={styles.people_details_desc}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className={styles.people_details_icons}>
          <div className={styles.icon_container1}>
            <div style={{ display: "inline-block" }}>
              <img
                src="./play.png"
                style={{ display: "block", width: "100%" }}
              />
            </div>
            <div className={styles.video_text}>Watch Video</div>
          </div>
          <div className={styles.icon_container2}>
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img
                style={{ display: "block", width: "100%" }}
                src="./person1.png"
              />
            </div>
            <div className={styles.person_details}>
              <span className={styles.person_details_title}>
                Abhishek Kumar
              </span>
              <span className={styles.person_details_txt}>Oxford Student</span>
            </div>
          </div>
          <div>
            <img src="./arrows.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
