import React from "react";
import { FaTrash } from "react-icons/fa";

const IconButton = ({ onClick, product }) => {
  return (
    <button onClick={() => onClick(product)} className="btn btn-danger">
      <FaTrash />
    </button>
  );
};

export default IconButton;
