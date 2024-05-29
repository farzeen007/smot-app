import React from "react";
import GreenButton from "./Cards/GreenButton";
import styles from "../styles/home.module.css";
import BlogCard from "./Cards/BlogCard";
import { BlogData } from "../data/BlogData";

const Blogs = () => {
  return (
    <div className={styles.blogs_container}>
      <div className={styles.blog_heading}>
        <div className={styles.blog_heading_title}>Latest Blogs</div>
        <GreenButton txt="View All" />
      </div>
      <div className={styles.blogcard_container}>
        {BlogData?.map((item) => {
          return (
            <BlogCard
              key={item.id}
              src={item.src}
              title={item.title}
              txt={item.txt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
