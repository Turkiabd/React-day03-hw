import React from "react";

// passing on click
export const Btns = ({ onClick, ops }) => {
  return (
    <div>
      <button type="button" className="btn btn-secondary " onClick={onClick}>
        {ops}
      </button>
    </div>
  );
};

export default Btns;
