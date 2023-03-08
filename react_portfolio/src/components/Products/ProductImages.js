import React, { useState } from "react";

import styles from "./ProductImages.module.css";

const ProductImages = (props) => {
  const { images } = props;
  const [main, setMain] = useState(images[0]);

  return (
    <div>
      <img src={main.url} alt="" className={styles.main} />
      <div className={styles.gallery}>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=""
              key={index}
              className={`${image.url === main.url ? styles.active : null}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
