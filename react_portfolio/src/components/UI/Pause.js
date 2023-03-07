import React from "react";

import { FaSearch, FaCartPlus } from "react-icons/fa";

const ProductPause = (props) => {
  return (
    <div className="card-pause">
      {props.isShow && <FaSearch size={props.size}></FaSearch>}
      <FaCartPlus size={props.size}></FaCartPlus>
    </div>
  );
};

export default ProductPause;
