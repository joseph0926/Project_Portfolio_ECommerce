import React from "react";

import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductPause = (props) => {
  return (
    <div className="card-pause">
      {props.isShow && (
        <Link to={`products/${props.productId}`}>
          <FaSearch size={props.size}></FaSearch>
        </Link>
      )}
      {!props.isShow && (
        <Link to="cart">
          <FaCartPlus size={props.size}></FaCartPlus>
        </Link>
      )}
    </div>
  );
};

export default ProductPause;
