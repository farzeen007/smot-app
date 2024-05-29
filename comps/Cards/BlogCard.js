import React from "react";
import styles from "../../styles/home.module.css";

const BlogCard = ({ src, title, txt }) => {
  return (
    <div className={styles.blog_card}>
      <div className={styles.blogcard_img_container}>
        <img className={styles.blogcard_img} src={src} />
      </div>
      <div className={styles.blogcard_title}>{title}</div>
      <p className={styles.blogcard_txt}>{txt}</p>
    </div>
  );
};

export default BlogCard;
