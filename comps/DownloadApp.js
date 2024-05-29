import React from "react";
import styles from "../styles/home.module.css";

const DownloadApp = () => {
  return (
    <div className={styles.downloadapp_container}>
      <div>
        <img src="./app.png" />
      </div>
      <div className={styles.downloadapp_title_container}>
        <div className={styles.downloadapp_title}>Download our App</div>
        <p className={styles.downloadapp_txt}>
          It's time to discover what you've been missing.
          <br /> Download our app and see for yourself.
        </p>
        <div className={styles.downloadapp_feature}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "inline-block",
                marginRight: "10px",
                alignSelf: "center",
              }}
            >
              <img
                style={{ display: "block", width: "100%" }}
                src="./heart.png"
              />
            </div>
            <div className={styles.downloadapp_feature_text}>Easy to Use</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "inline-block",
                marginRight: "10px",
                alignSelf: "center",
              }}
            >
              <img
                style={{ display: "block", width: "100%" }}
                src="./call.png"
              />
            </div>
            <div className={styles.downloadapp_feature_text}>
              24 Hours Support
            </div>
          </div>

          <div className={styles.downloadapp_feature_item}>
            <div
              style={{
                display: "inline-block",
                marginRight: "10px",
                alignSelf: "center",
              }}
            >
              <img
                style={{ display: "block", width: "100%" }}
                src="./admin.png"
              />
            </div>
            <div className={styles.downloadapp_feature_text}>User Friendly</div>
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <img
            style={{ marginRight: "20px", cursor: "pointer" }}
            src="./googleplay.png"
          />
          <img style={{ cursor: "pointer" }} src="./appstore.png" />
        </div>
        <div className={styles.get_app}>
          <img
            style={{ marginRight: "10px", cursor: "pointer" }}
            src="./qr.png"
          />
          <div>
            <div>Get it now!</div>
            <div>From play store & app store</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
