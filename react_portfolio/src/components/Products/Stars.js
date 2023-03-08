import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import styles from "./Stars.module.css";

const Stars = (props) => {
  const { stars, reviews } = props;

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return <span key={index}>{stars > number ? <BsStarFill /> : stars > index ? <BsStarHalf /> : <BsStar />}</span>;
  });
  return (
    <div className={styles.container}>
      <div className={styles.stars}>{tempStars}</div>
      <p className={styles.reviews}>({reviews} 명 리뷰)</p>
    </div>
  );
};

export default Stars;
